import {TerminalScene, cyan, green, yellow} from '../cookbook-templates'

const lines = [
  {segments: [{text: 'Initialized empty Git repository in ~/repos/demo-news/.git/', color: green}]},
  {segments: [{text: 'Untracked files: index.html, styles.css, script.js', color: yellow}]},
  {segments: [{text: 'Staging files…', color: cyan}]},
  {segments: [{text: '[main (root-commit) 7b2f9cc] first save', color: green}]},
  {segments: [{text: '3 files changed, 86 insertions(+)', color: green}]},
]

export const V04bGitInitCommit = () => (
  <TerminalScene
    command='$ git init && git add . && git commit -m "first save"'
    lines={lines}
    title='Terminal — Git Basics'
    outroLabel='Cookbook 04b'
    outroSublabel='Create your first checkpoint'
  />
)
