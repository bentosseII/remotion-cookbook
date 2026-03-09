import {TerminalScene, cyan, green, muted} from '../cookbook-templates'

const lines = [
  {segments: [{text: 'Authenticating with SSH key…', color: muted}]},
  {segments: [{text: 'Connected to vm-nyc-12.exe.dev', color: green}]},
  {segments: [{text: 'whoami -> builder', color: cyan}]},
  {segments: [{text: 'tmux session: feeds-worker (running)', color: green}]},
  {segments: [{text: 'Last run: 2026-03-05 18:00 UTC ✓', color: green}]},
]

export const V10bSshTerminal = () => (
  <TerminalScene
    command='$ ssh user@vm-nyc-12.exe.dev'
    lines={lines}
    title='Terminal — Remote Access'
    outroLabel='Cookbook 10b'
    outroSublabel='Connect to always-on machine'
  />
)
