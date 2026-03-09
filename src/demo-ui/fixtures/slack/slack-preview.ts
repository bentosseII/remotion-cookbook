import type {SlackChannelSection, SlackMessage, SlackWorkspaceItem} from '../../apps/slack'

export const slackPreviewWorkspaceItems: readonly SlackWorkspaceItem[] = [
  {id: 'factory', label: 'FA', color: '#6c3eff', active: true},
  {id: 'demo', label: 'DM', color: '#2f99ff'},
  {id: 'ops', label: 'OP', color: '#0f9d72'},
]

export const slackPreviewChannelSections: readonly SlackChannelSection[] = [
  {
    id: 'channels',
    label: 'Channels',
    items: [
      {id: 'shiproom', label: 'ship-room', active: true},
      {id: 'demo-ui', label: 'demo-ui', unreadCount: 3},
      {id: 'launches', label: 'launches'},
      {id: 'qa-notes', label: 'qa-notes'},
    ],
  },
  {
    id: 'dms',
    label: 'Direct messages',
    items: [
      {id: 'ben', label: 'Ben', kind: 'dm'},
      {id: 'design-bot', label: 'Design Bot', kind: 'dm', unreadCount: 1},
      {id: 'video-lab', label: 'Video Lab', kind: 'dm'},
    ],
  },
]

export const slackPreviewMessages: readonly SlackMessage[] = [
  {
    id: 'm1',
    author: 'Ben',
    avatar: '#3f7cff',
    timestamp: '2:12 PM',
    text: 'Need demo assets that look like real apps. Terminal, browser, finder, slack, codex.',
    reactions: [
      {emoji: '🔥', count: 2},
      {emoji: '✅', count: 1},
    ],
  },
  {
    id: 'm2',
    author: 'Studio Bot',
    avatar: '#14a06f',
    timestamp: '2:14 PM',
    text: 'Terminal baseline is in. Browser + Finder shells are live. Next we can tighten Slack message behaviors and Codex tool states.',
    secondaryText: 'thread started · 4 replies',
  },
  {
    id: 'm3',
    author: 'Video Lab',
    avatar: '#ff9b37',
    timestamp: '2:16 PM',
    text: '@ben the rule is working: app-like, not 1:1 cloned. Chrome and Ghostty feel right already.',
    mention: true,
  },
]

export const slackPreviewComposerText = 'Ship the Slack baseline next. Keep it dark, simple, and instantly recognizable.'
