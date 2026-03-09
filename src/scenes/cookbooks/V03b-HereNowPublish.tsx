import {TerminalScene, cyan, green, muted} from '../cookbook-templates'

const lines = [
  {segments: [{text: 'Scanning project files…', color: muted}]},
  {segments: [{text: 'Uploading index.html, styles.css, script.js', color: cyan}]},
  {segments: [{text: '✓ Static bundle published', color: green}]},
  {segments: [{text: 'URL: https://daily-builder-feed.here.now', color: green, weight: 700}]},
  {segments: [{text: 'Tip: Share this URL (not localhost)', color: cyan}]},
]

export const V03bHereNowPublish = () => (
  <TerminalScene
    command='$ here-now publish ./'
    lines={lines}
    title='Terminal — Deploy'
    outroLabel='Cookbook 03b'
    outroSublabel='Generate a real public URL'
  />
)
