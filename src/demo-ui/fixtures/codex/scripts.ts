import type {DemoScript} from '../../script'
import type {CodexScriptBaseState} from '../../apps/codex'
import {CODEX_PROMPT_TARGET, getCodexAssistantTarget} from '../../apps/codex'

import {
  codexPreviewAssistantBlocks,
  codexPreviewCodeLines,
  codexPreviewEditorTabs,
  codexPreviewFileTree,
  codexPreviewTerminalLines,
  codexPreviewToolRuns,
} from './codex-preview'

export const codexPromptBaseState: CodexScriptBaseState = {
  title: 'remotion-cookbook',
  prompt: 'Ask Codex to build the next shell.',
  promptInput: '',
  fileTree: codexPreviewFileTree,
  editorTabs: codexPreviewEditorTabs,
  codeLines: codexPreviewCodeLines,
  toolRuns: codexPreviewToolRuns,
  assistantBlocks: [
    {
      id: 'plan',
      title: 'Plan',
      body: '',
    },
  ],
  terminalLines: codexPreviewTerminalLines,
}

export const codexPromptScript: DemoScript = [
  {
    at: 0.45,
    type: 'type',
    target: CODEX_PROMPT_TARGET,
    text: 'Build Slack message timing and Codex diff states next.',
    cadence: 'editor-code',
  },
]

export const codexStreamingBaseState: CodexScriptBaseState = {
  title: 'remotion-cookbook',
  prompt: 'Build the next interaction layer.',
  promptInput: 'Build Codex stream and diff previews next.',
  fileTree: codexPreviewFileTree,
  editorTabs: codexPreviewEditorTabs,
  codeLines: codexPreviewCodeLines,
  toolRuns: [
    {id: 'plan', label: 'plan stream state', status: 'running'},
    {id: 'edit', label: 'edit codex script-state', status: 'idle'},
    {id: 'lint', label: 'npm run lint', status: 'idle'},
  ],
  assistantBlocks: [
    {
      id: 'plan',
      title: 'Streaming plan',
      body: '',
    },
  ],
  terminalLines: [
    {id: 'line-1', text: '$ codex exec "build codex stream state"', tone: 'muted'},
    {id: 'line-2', text: '• waiting for plan…', tone: 'default'},
  ],
}

export const codexStreamingScript: DemoScript = [
  {
    at: 0.7,
    type: 'stream-text',
    target: getCodexAssistantTarget('plan'),
    chunks: [
      '1. Build script-state for prompt and assistant blocks\n',
      '2. Stream plan text by chunk groups\n',
      '3. Patch tool runs through running → success\n',
      '4. Add diff/apply preview cards',
    ],
    chunkOffsets: [0, 0.45, 0.92, 1.42],
  },
  {
    at: 2.1,
    type: 'set-state',
    patch: {
      toolRuns: [
        {id: 'plan', label: 'plan stream state', status: 'success'},
        {id: 'edit', label: 'edit codex script-state', status: 'running'},
        {id: 'lint', label: 'npm run lint', status: 'idle'},
      ],
      terminalLines: [
        {id: 'line-1', text: '$ codex exec "build codex stream state"', tone: 'muted'},
        {id: 'line-2', text: '✓ plan captured', tone: 'success'},
        {id: 'line-3', text: '• applying edits to script-state.ts', tone: 'default'},
      ],
    },
  },
] 

export const codexDiffBaseState: CodexScriptBaseState = {
  title: 'remotion-cookbook',
  prompt: 'Apply the preview diff and confirm success.',
  promptInput: 'Apply the new shell baseline and confirm with lint.',
  fileTree: codexPreviewFileTree,
  editorTabs: codexPreviewEditorTabs,
  codeLines: codexPreviewCodeLines,
  toolRuns: [
    {id: 'plan', label: 'plan shell diff', status: 'success'},
    {id: 'edit', label: 'apply code changes', status: 'running'},
    {id: 'lint', label: 'npm run lint', status: 'idle'},
  ],
  assistantBlocks: codexPreviewAssistantBlocks,
  terminalLines: [
    {id: 'line-1', text: '$ git diff --stat', tone: 'muted'},
    {id: 'line-2', text: '• 5 files changed', tone: 'default'},
  ],
  diffTitle: 'Diff ready',
  diffFiles: ['src/demo-ui/apps/browser/BrowserShell.tsx', 'src/demo-ui/apps/browser/script-state.ts'],
  applyStatus: 'waiting to apply',
}

export const codexDiffScript: DemoScript = [
  {
    at: 0.7,
    type: 'set-state',
    patch: {
      applyStatus: 'applying changes…',
      toolRuns: [
        {id: 'plan', label: 'plan shell diff', status: 'success'},
        {id: 'edit', label: 'apply code changes', status: 'running'},
        {id: 'lint', label: 'npm run lint', status: 'idle'},
      ],
    },
  },
  {
    at: 1.55,
    type: 'set-state',
    patch: {
      applyStatus: 'applied cleanly',
      toolRuns: [
        {id: 'plan', label: 'plan shell diff', status: 'success'},
        {id: 'edit', label: 'apply code changes', status: 'success'},
        {id: 'lint', label: 'npm run lint', status: 'running'},
      ],
      terminalLines: [
        {id: 'line-1', text: '$ npm run lint', tone: 'muted'},
        {id: 'line-2', text: '✓ browser shell passes', tone: 'success'},
        {id: 'line-3', text: '✓ diff applied without conflicts', tone: 'success'},
      ],
    },
  },
]
