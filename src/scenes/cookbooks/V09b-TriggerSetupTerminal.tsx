import {TerminalScene, cyan, green, yellow, muted} from '../cookbook-templates'

const lines = [
  {segments: [{text: 'Installing Trigger.dev SDK…', color: cyan}]},
  {segments: [{text: 'Creating task: feeds-pipeline.ts', color: cyan}]},
  {segments: [{text: 'Schedule set: every 4 hours', color: yellow}]},
  {segments: [{text: 'Connected project: bb-content-engine', color: green}]},
  {segments: [{text: 'Run complete: fetched=32 accepted=11', color: green}]},
  {segments: [{text: 'Dashboard: https://cloud.trigger.dev', color: muted}]},
]

export const V09bTriggerSetupTerminal = () => (
  <TerminalScene
    command='$ npx trigger.dev@latest dev'
    lines={lines}
    title='Terminal — Trigger.dev'
    outroLabel='Cookbook 09b'
    outroSublabel='Set up scheduled task pipeline'
  />
)
