import {TerminalScene, cyan, green, muted, yellow} from '../cookbook-templates'

const lines = [
  {segments: [{text: 'Fetching source: Hacker News RSS', color: cyan}]},
  {segments: [{text: 'Fetching source: Techmeme feed', color: cyan}]},
  {segments: [{text: '32 links fetched', color: green}]},
  {segments: [{text: '6 duplicates removed', color: yellow}]},
  {segments: [{text: 'Classified 26 links (AI-related: 11)', color: green}]},
  {segments: [{text: 'Next scheduled run: in 10 minutes', color: muted}]},
]

export const V05bFeedPullTerminal = () => (
  <TerminalScene
    command='$ pnpm run feeds:pull --sources hn,techmeme'
    lines={lines}
    title='Terminal — Live Data Pull'
    outroLabel='Cookbook 05b'
    outroSublabel='Fetch, de-dupe, classify'
  />
)
