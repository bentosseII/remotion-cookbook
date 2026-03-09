import type {SlackThemeName, SlackThemeTokens} from './tokens'

export type SlackWorkspaceItem = {
  id: string
  label: string
  color: string
  active?: boolean
}

export type SlackChannel = {
  id: string
  label: string
  unreadCount?: number
  active?: boolean
  kind?: 'channel' | 'dm'
}

export type SlackChannelSection = {
  id: string
  label: string
  items: readonly SlackChannel[]
}

export type SlackReaction = {
  emoji: string
  count: number
}

export type SlackMessage = {
  id: string
  author: string
  avatar: string
  timestamp: string
  text: string
  secondaryText?: string
  mention?: boolean
  reactions?: readonly SlackReaction[]
}

export type SlackShellProps = {
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
  theme?: SlackThemeName | SlackThemeTokens
  minHeight?: number
  maxWidth?: number | string
}
