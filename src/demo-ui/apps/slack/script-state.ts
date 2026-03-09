import type {DemoEvent, DemoScript, DemoSeconds, DemoTypingCadence} from '../../script'
import {sortDemoScript} from '../../script'
import {getTypedTextAtTime} from '../../motion/typing'

import type {SlackChannelSection, SlackMessage, SlackShellProps, SlackWorkspaceItem} from './types'

export const SLACK_COMPOSER_TARGET = 'slack-composer'
export const getSlackMessageTarget = (messageId: string): string => `slack-message:${messageId}`

export type SlackScriptBaseState = {
  workspaceName: string
  channelTitle: string
  channelSubtitle?: string
  workspaceItems: readonly SlackWorkspaceItem[]
  channelSections: readonly SlackChannelSection[]
  messages: readonly SlackMessage[]
  composerText?: string
  threadTitle?: string
  threadMessages?: readonly SlackMessage[]
  typingIndicatorLabel?: string
  unreadLabel?: string
}

export type SlackScriptState = {
  workspaceName: string
  channelTitle: string
  channelSubtitle?: string
  workspaceItems: SlackWorkspaceItem[]
  channelSections: SlackChannelSection[]
  messages: SlackMessage[]
  composerText: string
  threadTitle?: string
  threadMessages: SlackMessage[]
  typingIndicatorLabel?: string
  unreadLabel?: string
}

const cloneMessages = (messages: readonly SlackMessage[]): SlackMessage[] => {
  return messages.map((message) => ({
    ...message,
    reactions: message.reactions ? [...message.reactions] : undefined,
  }))
}

const getTypingText = (
  currentText: string,
  nextText: string,
  elapsedInSeconds: DemoSeconds,
  cadence: DemoTypingCadence | undefined,
): string => {
  const typed = getTypedTextAtTime(nextText, elapsedInSeconds, cadence ?? 'chat-human')
  return currentText + typed.text
}

const patchMessageText = (
  messages: SlackMessage[],
  messageId: string,
  nextText: string,
): SlackMessage[] => {
  return messages.map((message) => {
    if (message.id !== messageId) {
      return message
    }

    return {
      ...message,
      text: nextText,
    }
  })
}

const streamMessageText = (
  messages: SlackMessage[],
  event: Extract<DemoEvent, {type: 'stream-text'}>,
  elapsedInSeconds: DemoSeconds,
): SlackMessage[] => {
  const messageId = event.target.replace('slack-message:', '')
  const chunks = event.chunks.filter((_, index) => {
    const offset = event.chunkOffsets?.[index] ?? index * 0.12
    return offset <= elapsedInSeconds
  })
  const nextText = chunks.join('')

  return patchMessageText(messages, messageId, nextText)
}

const applySetStateEvent = (
  state: SlackScriptState,
  event: Extract<DemoEvent, {type: 'set-state'}>,
): SlackScriptState => {
  const patch = event.patch as Partial<SlackScriptBaseState>

  return {
    ...state,
    ...patch,
    workspaceItems: patch.workspaceItems ? [...patch.workspaceItems] : state.workspaceItems,
    channelSections: patch.channelSections ? [...patch.channelSections] : state.channelSections,
    messages: patch.messages ? cloneMessages(patch.messages) : state.messages,
    composerText: patch.composerText ?? state.composerText,
    threadMessages: patch.threadMessages ? cloneMessages(patch.threadMessages) : state.threadMessages,
  }
}

export const getSlackStateAtTime = (
  baseState: SlackScriptBaseState,
  script: DemoScript,
  timeInSeconds: DemoSeconds,
): SlackScriptState => {
  const state: SlackScriptState = {
    workspaceName: baseState.workspaceName,
    channelTitle: baseState.channelTitle,
    channelSubtitle: baseState.channelSubtitle,
    workspaceItems: [...baseState.workspaceItems],
    channelSections: [...baseState.channelSections],
    messages: cloneMessages(baseState.messages),
    composerText: baseState.composerText ?? '',
    threadTitle: baseState.threadTitle,
    threadMessages: cloneMessages(baseState.threadMessages ?? []),
    typingIndicatorLabel: baseState.typingIndicatorLabel,
    unreadLabel: baseState.unreadLabel,
  }

  for (const event of sortDemoScript(script)) {
    if (event.at > timeInSeconds) {
      break
    }

    const elapsedSinceEventStart = timeInSeconds - event.at

    switch (event.type) {
      case 'set-state':
        Object.assign(state, applySetStateEvent(state, event))
        break
      case 'type':
        if (event.target === SLACK_COMPOSER_TARGET) {
          state.composerText = getTypingText(
            state.composerText,
            event.text,
            elapsedSinceEventStart,
            event.cadence,
          )
        }
        break
      case 'paste':
        if (event.target === SLACK_COMPOSER_TARGET) {
          state.composerText += event.text
        }
        break
      case 'stream-text':
        if (event.target.startsWith('slack-message:')) {
          state.messages = streamMessageText(state.messages, event, elapsedSinceEventStart)
          if (state.threadMessages.length) {
            state.threadMessages = streamMessageText(
              state.threadMessages,
              event,
              elapsedSinceEventStart,
            )
          }
        }
        break
      default:
        break
    }
  }

  return state
}

export const slackStateToShellProps = (
  state: SlackScriptState,
): Pick<
  SlackShellProps,
  | 'workspaceName'
  | 'channelTitle'
  | 'channelSubtitle'
  | 'workspaceItems'
  | 'channelSections'
  | 'messages'
  | 'composerText'
  | 'threadTitle'
  | 'threadMessages'
  | 'typingIndicatorLabel'
  | 'unreadLabel'
> => {
  return {
    workspaceName: state.workspaceName,
    channelTitle: state.channelTitle,
    channelSubtitle: state.channelSubtitle,
    workspaceItems: state.workspaceItems,
    channelSections: state.channelSections,
    messages: state.messages,
    composerText: state.composerText,
    threadTitle: state.threadTitle,
    threadMessages: state.threadMessages,
    typingIndicatorLabel: state.typingIndicatorLabel,
    unreadLabel: state.unreadLabel,
  }
}
