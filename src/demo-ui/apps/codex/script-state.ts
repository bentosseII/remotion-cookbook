import type {DemoEvent, DemoScript, DemoSeconds, DemoTypingCadence} from '../../script'
import {sortDemoScript} from '../../script'
import {getTypedTextAtTime} from '../../motion/typing'

import type {
  CodexAssistantBlock,
  CodexEditorTab,
  CodexFileTreeItem,
  CodexShellProps,
  CodexTerminalLine,
  CodexToolRun,
} from './types'

export const CODEX_PROMPT_TARGET = 'codex-prompt'
export const getCodexAssistantTarget = (blockId: string): string => `codex-assistant:${blockId}`

export type CodexScriptBaseState = {
  title: string
  prompt: string
  promptInput?: string
  fileTree: readonly CodexFileTreeItem[]
  editorTabs: readonly CodexEditorTab[]
  codeLines: readonly string[]
  toolRuns: readonly CodexToolRun[]
  assistantBlocks: readonly CodexAssistantBlock[]
  terminalLines: readonly CodexTerminalLine[]
  diffTitle?: string
  diffFiles?: readonly string[]
  applyStatus?: string
}

export type CodexScriptState = {
  title: string
  prompt: string
  promptInput: string
  fileTree: CodexFileTreeItem[]
  editorTabs: CodexEditorTab[]
  codeLines: string[]
  toolRuns: CodexToolRun[]
  assistantBlocks: CodexAssistantBlock[]
  terminalLines: CodexTerminalLine[]
  diffTitle?: string
  diffFiles: string[]
  applyStatus?: string
}

const cloneToolRuns = (toolRuns: readonly CodexToolRun[]): CodexToolRun[] => {
  return toolRuns.map((toolRun) => ({...toolRun}))
}

const cloneAssistantBlocks = (blocks: readonly CodexAssistantBlock[]): CodexAssistantBlock[] => {
  return blocks.map((block) => ({...block}))
}

const cloneTerminalLines = (lines: readonly CodexTerminalLine[]): CodexTerminalLine[] => {
  return lines.map((line) => ({...line}))
}

const applyTypedPrompt = (
  currentPrompt: string,
  nextText: string,
  elapsedInSeconds: DemoSeconds,
  cadence: DemoTypingCadence | undefined,
): string => {
  const typed = getTypedTextAtTime(nextText, elapsedInSeconds, cadence ?? 'editor-code')
  return currentPrompt + typed.text
}

const streamAssistantBlock = (
  blocks: CodexAssistantBlock[],
  event: Extract<DemoEvent, {type: 'stream-text'}>,
  elapsedInSeconds: DemoSeconds,
): CodexAssistantBlock[] => {
  const blockId = event.target.replace('codex-assistant:', '')
  const visibleChunks = event.chunks.filter((_, index) => {
    const offset = event.chunkOffsets?.[index] ?? index * 0.12
    return offset <= elapsedInSeconds
  })
  const nextBody = visibleChunks.join('')

  return blocks.map((block) => {
    if (block.id !== blockId) {
      return block
    }

    return {
      ...block,
      body: nextBody,
    }
  })
}

const applySetStateEvent = (
  state: CodexScriptState,
  event: Extract<DemoEvent, {type: 'set-state'}>,
): CodexScriptState => {
  const patch = event.patch as Partial<CodexScriptBaseState>

  return {
    ...state,
    ...patch,
    promptInput: patch.promptInput ?? state.promptInput,
    fileTree: patch.fileTree ? [...patch.fileTree] : state.fileTree,
    editorTabs: patch.editorTabs ? [...patch.editorTabs] : state.editorTabs,
    codeLines: patch.codeLines ? [...patch.codeLines] : state.codeLines,
    toolRuns: patch.toolRuns ? cloneToolRuns(patch.toolRuns) : state.toolRuns,
    assistantBlocks: patch.assistantBlocks ? cloneAssistantBlocks(patch.assistantBlocks) : state.assistantBlocks,
    terminalLines: patch.terminalLines ? cloneTerminalLines(patch.terminalLines) : state.terminalLines,
    diffFiles: patch.diffFiles ? [...patch.diffFiles] : state.diffFiles,
  }
}

export const getCodexStateAtTime = (
  baseState: CodexScriptBaseState,
  script: DemoScript,
  timeInSeconds: DemoSeconds,
): CodexScriptState => {
  const state: CodexScriptState = {
    title: baseState.title,
    prompt: baseState.prompt,
    promptInput: baseState.promptInput ?? '',
    fileTree: [...baseState.fileTree],
    editorTabs: [...baseState.editorTabs],
    codeLines: [...baseState.codeLines],
    toolRuns: cloneToolRuns(baseState.toolRuns),
    assistantBlocks: cloneAssistantBlocks(baseState.assistantBlocks),
    terminalLines: cloneTerminalLines(baseState.terminalLines),
    diffTitle: baseState.diffTitle,
    diffFiles: [...(baseState.diffFiles ?? [])],
    applyStatus: baseState.applyStatus,
  }

  for (const event of sortDemoScript(script)) {
    if (event.at > timeInSeconds) {
      break
    }

    const elapsedSinceEventStart = timeInSeconds - event.at

    switch (event.type) {
      case 'set-state':
        Object.assign(state, applySetStateEvent(state, event))
        break
      case 'type':
        if (event.target === CODEX_PROMPT_TARGET) {
          state.promptInput = applyTypedPrompt(
            state.promptInput,
            event.text,
            elapsedSinceEventStart,
            event.cadence,
          )
        }
        break
      case 'paste':
        if (event.target === CODEX_PROMPT_TARGET) {
          state.promptInput += event.text
        }
        break
      case 'stream-text':
        if (event.target.startsWith('codex-assistant:')) {
          state.assistantBlocks = streamAssistantBlock(
            state.assistantBlocks,
            event,
            elapsedSinceEventStart,
          )
        }
        break
      default:
        break
    }
  }

  return state
}

export const codexStateToShellProps = (
  state: CodexScriptState,
): Pick<
  CodexShellProps,
  | 'title'
  | 'prompt'
  | 'promptInput'
  | 'fileTree'
  | 'editorTabs'
  | 'codeLines'
  | 'toolRuns'
  | 'assistantBlocks'
  | 'terminalLines'
  | 'diffTitle'
  | 'diffFiles'
  | 'applyStatus'
> => {
  return {
    title: state.title,
    prompt: state.prompt,
    promptInput: state.promptInput,
    fileTree: state.fileTree,
    editorTabs: state.editorTabs,
    codeLines: state.codeLines,
    toolRuns: state.toolRuns,
    assistantBlocks: state.assistantBlocks,
    terminalLines: state.terminalLines,
    diffTitle: state.diffTitle,
    diffFiles: state.diffFiles,
    applyStatus: state.applyStatus,
  }
}
