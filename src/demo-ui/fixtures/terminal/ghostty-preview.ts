import type {
  TerminalLine,
  TerminalPrompt,
  TerminalViewportState,
} from '../../apps/terminal'

export const ghosttyPreviewPrompt: TerminalPrompt = {
  user: 'ben',
  host: 'demo-ui',
  cwd: '~/repos/remotion-cookbook',
  symbol: '%',
}

export const ghosttyPreviewPromptInput = 'codex exec "build terminal v2 shell"'

export const ghosttyPreviewLines: readonly TerminalLine[] = [
  {
    id: 'status',
    tone: 'muted',
    segments: [{text: 'planning shell tokens, viewport, and prompt layout...'}],
  },
  {
    id: 'created-1',
    tone: 'success',
    segments: [{text: '✓ '}, {text: 'src/demo-ui/apps/terminal/tokens.ts', color: '#e7edf7'}],
  },
  {
    id: 'created-2',
    tone: 'success',
    segments: [{text: '✓ '}, {text: 'src/demo-ui/apps/terminal/TerminalShell.tsx', color: '#e7edf7'}],
  },
  {
    id: 'created-3',
    tone: 'success',
    segments: [{text: '✓ '}, {text: 'src/demo-ui/apps/terminal/TerminalLineView.tsx', color: '#e7edf7'}],
  },
  {
    id: 'blank',
    segments: [],
  },
  {
    id: 'next',
    tone: 'accent',
    segments: [{text: 'next: typing cadence + stream model + scrollback'}],
  },
]

export const ghosttyPreviewViewport: TerminalViewportState = {
  firstVisibleLine: 0,
  visibleLineCount: 10,
  totalLineCount: 14,
  showScrollBar: true,
}
