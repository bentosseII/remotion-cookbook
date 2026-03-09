import {TerminalScene, cyan, green, muted} from '../cookbook-templates'

const lines = [
  {segments: [{text: '✓ Project opened: ~/repos/demo-news', color: green}]},
  {segments: [{text: 'Scanning folder…', color: muted}]},
  {segments: [{text: '• index.html (new)'}, {text: '  • styles.css (new)', color: cyan}]},
  {segments: [{text: 'Prompt: Build a simple site with a main news feed'}]},
  {segments: [{text: 'Generating first draft UI…', color: muted}]},
  {segments: [{text: 'Local preview ready at http://localhost:4173', color: green}]},
]

export const V01aFirstSiteTerminal = () => (
  <TerminalScene
    command='$ cd ~/repos/demo-news && codex'
    lines={lines}
    title='Terminal — First Site'
    outroLabel='Cookbook 01a'
    outroSublabel='Open project + run first prompt'
  />
)
