import type {DemoScript} from '../../script'
import type {SlackMessage, SlackScriptBaseState} from '../../apps/slack'
import {getSlackMessageTarget, SLACK_COMPOSER_TARGET} from '../../apps/slack'

import {
  slackPreviewChannelSections,
  slackPreviewComposerText,
  slackPreviewMessages,
  slackPreviewWorkspaceItems,
} from './slack-preview'

export const slackBaseState: SlackScriptBaseState = {
  workspaceName: 'Factory',
  channelTitle: 'ship-room',
  channelSubtitle: 'Product + demos + launches',
  workspaceItems: slackPreviewWorkspaceItems,
  channelSections: slackPreviewChannelSections,
  messages: slackPreviewMessages,
  composerText: '',
}

export const slackComposerScript: DemoScript = [
  {
    at: 0.45,
    type: 'type',
    target: SLACK_COMPOSER_TARGET,
    text: slackPreviewComposerText,
    cadence: 'chat-human',
  },
]

const incomingMessage: SlackMessage = {
  id: 'm4',
  author: 'Design Bot',
  avatar: '#915eff',
  timestamp: '2:18 PM',
  text: '',
}

export const slackIncomingBaseState: SlackScriptBaseState = {
  workspaceName: 'Factory',
  channelTitle: 'ship-room',
  channelSubtitle: 'Product + demos + launches',
  workspaceItems: slackPreviewWorkspaceItems,
  channelSections: slackPreviewChannelSections,
  messages: [...slackPreviewMessages, incomingMessage],
  typingIndicatorLabel: 'Design Bot is typing…',
  unreadLabel: '1 new message',
}

export const slackIncomingScript: DemoScript = [
  {
    at: 0.75,
    type: 'stream-text',
    target: getSlackMessageTarget('m4'),
    chunks: [
      'I can wire the Slack shell next. ',
      'Then add thread states, ',
      'typing indicators, ',
      'and unread dividers.',
    ],
    chunkOffsets: [0, 0.55, 1.08, 1.55],
  },
  {
    at: 2.35,
    type: 'set-state',
    patch: {
      typingIndicatorLabel: undefined,
      unreadLabel: undefined,
      messages: [
        ...slackPreviewMessages,
        {
          ...incomingMessage,
          text: 'I can wire the Slack shell next. Then add thread states, typing indicators, and unread dividers.',
          reactions: [{emoji: '👀', count: 1}],
        },
      ],
    },
  },
]

export const slackThreadBaseState: SlackScriptBaseState = {
  workspaceName: 'Factory',
  channelTitle: 'ship-room',
  channelSubtitle: 'Product + demos + launches',
  workspaceItems: slackPreviewWorkspaceItems,
  channelSections: slackPreviewChannelSections,
  messages: slackPreviewMessages,
  threadTitle: 'Thread · Studio Bot',
  threadMessages: [
    {
      id: 't1',
      author: 'Studio Bot',
      avatar: '#14a06f',
      timestamp: '2:14 PM',
      text: 'We can keep the shell simple first.',
    },
  ],
}

export const slackThreadScript: DemoScript = [
  {
    at: 0.65,
    type: 'set-state',
    patch: {
      threadMessages: [
        {
          id: 't1',
          author: 'Studio Bot',
          avatar: '#14a06f',
          timestamp: '2:14 PM',
          text: 'We can keep the shell simple first.',
        },
        {
          id: 't2',
          author: 'Ben',
          avatar: '#3f7cff',
          timestamp: '2:16 PM',
          text: 'Good. Then layer believable message timing and thread reveal on top.',
        },
      ],
    },
  },
]
