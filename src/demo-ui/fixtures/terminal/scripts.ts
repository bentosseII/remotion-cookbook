import type {DemoScript} from '../../script'
import type {TerminalLine, TerminalScriptBaseState} from '../../apps/terminal'
import {
  TERMINAL_OUTPUT_TARGET,
  TERMINAL_PROMPT_INPUT_TARGET,
  TERMINAL_VIEWPORT_TARGET,
} from '../../apps/terminal'

export const terminalTypingBaseState: TerminalScriptBaseState = {
  title: 'remotion-cookbook',
  shellLabel: 'zsh',
  prompt: {
    user: 'ben',
    host: 'demo-ui',
    cwd: '~/repos/remotion-cookbook',
    symbol: '%',
  },
  cursor: {
    visible: true,
    placement: 'inline',
  },
}

export const terminalTypingScript: DemoScript = [
  {
    at: 0.45,
    type: 'type',
    target: TERMINAL_PROMPT_INPUT_TARGET,
    text: 'codex exec "build terminal typing cadence"',
    cadence: 'terminal-human',
  },
]

export const terminalStreamingBaseState: TerminalScriptBaseState = {
  title: 'remotion-cookbook',
  shellLabel: 'zsh',
  prompt: {
    user: 'ben',
    host: 'demo-ui',
    cwd: '~/repos/remotion-cookbook',
    symbol: '%',
  },
  promptInput: 'codex exec "stream terminal output like a real app"',
  lines: [
    {
      segments: [{text: 'running command…'}],
      tone: 'muted',
    },
  ],
  cursor: {
    visible: false,
    placement: 'inline',
  },
}

export const terminalStreamingScript: DemoScript = [
  {
    at: 0.5,
    type: 'stream-text',
    target: TERMINAL_OUTPUT_TARGET,
    chunks: [
      'planning tokens…\n',
      'writing prompt renderer…\n',
      'writing stream model…\n',
      '✓ src/demo-ui/motion/typing/cadence.ts\n',
      '✓ src/demo-ui/apps/terminal/script-state.ts\n',
      '\nnext: preview typing + stream + scroll states',
    ],
    chunkOffsets: [0, 0.28, 0.62, 1.05, 1.45, 2.0],
  },
  {
    at: 2.7,
    type: 'set-state',
    patch: {
      cursor: {
        visible: true,
        placement: 'block',
      },
    },
  },
]

const createLogLine = (index: number): TerminalLine => {
  return {
    id: `log-${index}`,
    tone: index % 5 === 0 ? 'success' : 'default',
    segments: [
      {text: index % 5 === 0 ? '✓ ' : '· '},
      {text: `log line ${String(index + 1).padStart(2, '0')} — viewport realism check`, color: '#e7edf7'},
    ],
  }
}

export const terminalScrollBaseState: TerminalScriptBaseState = {
  title: 'remotion-cookbook',
  shellLabel: 'zsh',
  prompt: {
    user: 'ben',
    host: 'demo-ui',
    cwd: '~/repos/remotion-cookbook',
    symbol: '%',
  },
  promptInput: 'pnpm lint && pnpm remotion render Library-Terminal-Scroll',
  lines: Array.from({length: 22}, (_, index) => createLogLine(index)),
  viewport: {
    firstVisibleLine: 0,
    visibleLineCount: 12,
    totalLineCount: 24,
    showScrollBar: true,
  },
  cursor: {
    visible: false,
    placement: 'block',
  },
}

export const terminalScrollScript: DemoScript = [
  {
    at: 0.55,
    type: 'scroll',
    target: TERMINAL_VIEWPORT_TARGET,
    deltaY: 220,
    duration: 0.8,
    inertia: true,
  },
  {
    at: 1.7,
    type: 'scroll',
    target: TERMINAL_VIEWPORT_TARGET,
    deltaY: 170,
    duration: 0.7,
    inertia: true,
  },
]
