import type {DemoEvent, DemoScript, DemoSeconds, DemoTypingCadence} from '../../script'
import {sortDemoScript} from '../../script'
import {getBackspaceCountAtTime, getTypedTextAtTime} from '../../motion/typing'

import type {
  TerminalCursorState,
  TerminalLine,
  TerminalLineTone,
  TerminalPrompt,
  TerminalShellProps,
  TerminalViewportState,
} from './types'

export const TERMINAL_PROMPT_INPUT_TARGET = 'terminal-prompt-input'
export const TERMINAL_OUTPUT_TARGET = 'terminal-output'
export const TERMINAL_VIEWPORT_TARGET = 'terminal-viewport'

export type TerminalScriptBaseState = {
  title: string
  shellLabel?: string
  subtitle?: string
  prompt?: TerminalPrompt
  promptInput?: string
  lines?: readonly TerminalLine[]
  outputText?: string
  viewport?: TerminalViewportState
  cursor?: TerminalCursorState
}

export type TerminalScriptState = {
  title: string
  shellLabel?: string
  subtitle?: string
  prompt?: TerminalPrompt
  promptInput: string
  lines: TerminalLine[]
  outputText: string
  viewport?: TerminalViewportState
  cursor?: TerminalCursorState
}

const defaultCursorState: TerminalCursorState = {
  visible: true,
  text: '▌',
  placement: 'inline',
}

const mergeCursorState = (
  currentCursor: TerminalCursorState | undefined,
  nextCursor: TerminalCursorState | undefined,
): TerminalCursorState | undefined => {
  if (!currentCursor && !nextCursor) {
    return undefined
  }

  return {
    ...(currentCursor ?? {}),
    ...(nextCursor ?? {}),
  }
}

const toTerminalTextLine = (
  text: string,
  tone: TerminalLineTone = 'default',
): TerminalLine => {
  return {
    segments: [{text}],
    tone,
  }
}

const splitTextIntoTerminalLines = (text: string): TerminalLine[] => {
  if (text.length === 0) {
    return []
  }

  return text.split('\n').map((lineText) => toTerminalTextLine(lineText))
}

const applyTypeEvent = (
  currentText: string,
  eventText: string,
  elapsedInSeconds: DemoSeconds,
  cadence: DemoTypingCadence | undefined,
): string => {
  const typedText = getTypedTextAtTime(eventText, elapsedInSeconds, cadence ?? 'human')
  return currentText + typedText.text
}

const applyBackspaceEvent = (
  currentText: string,
  count: number,
  elapsedInSeconds: DemoSeconds,
  cadence: DemoTypingCadence | 'burst' | undefined,
): string => {
  const deletedCount = getBackspaceCountAtTime(count, elapsedInSeconds, cadence ?? 'human')
  if (deletedCount <= 0) {
    return currentText
  }

  return currentText.slice(0, Math.max(0, currentText.length - deletedCount))
}

const applyStreamTextEvent = (
  currentText: string,
  event: Extract<DemoEvent, {type: 'stream-text'}>,
  elapsedInSeconds: DemoSeconds,
): string => {
  const visibleChunks = event.chunks.filter((_, index) => {
    const offset = event.chunkOffsets?.[index] ?? index * 0.12
    return offset <= elapsedInSeconds
  })

  return currentText + visibleChunks.join('')
}

const easeOutCubic = (value: number): number => {
  const clamped = Math.min(Math.max(value, 0), 1)
  return 1 - Math.pow(1 - clamped, 3)
}

const applyScrollEvent = (
  currentViewport: TerminalViewportState | undefined,
  event: Extract<DemoEvent, {type: 'scroll'}>,
  elapsedInSeconds: DemoSeconds,
): TerminalViewportState | undefined => {
  const duration = Math.max(event.duration ?? 0.55, 0.001)
  const progress = easeOutCubic(elapsedInSeconds / duration)
  const lineDelta = Math.round((event.deltaY / 34) * progress)
  const firstVisibleLine = Math.max(0, (currentViewport?.firstVisibleLine ?? 0) + lineDelta)

  return {
    ...currentViewport,
    firstVisibleLine,
    showScrollBar: true,
  }
}

const applySetStateEvent = (
  state: TerminalScriptState,
  event: Extract<DemoEvent, {type: 'set-state'}>,
): TerminalScriptState => {
  const patch = event.patch as Partial<TerminalScriptBaseState>

  return {
    ...state,
    ...patch,
    promptInput: patch.promptInput ?? state.promptInput,
    lines: patch.lines ? [...patch.lines] : state.lines,
    outputText: patch.outputText ?? state.outputText,
    cursor: mergeCursorState(state.cursor, patch.cursor),
    viewport: patch.viewport ? {...state.viewport, ...patch.viewport} : state.viewport,
  }
}

export const getTerminalStateAtTime = (
  baseState: TerminalScriptBaseState,
  script: DemoScript,
  timeInSeconds: DemoSeconds,
): TerminalScriptState => {
  const state: TerminalScriptState = {
    title: baseState.title,
    shellLabel: baseState.shellLabel,
    subtitle: baseState.subtitle,
    prompt: baseState.prompt,
    promptInput: baseState.promptInput ?? '',
    lines: [...(baseState.lines ?? [])],
    outputText: baseState.outputText ?? '',
    viewport: baseState.viewport,
    cursor: mergeCursorState(defaultCursorState, baseState.cursor),
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
        if (event.target === TERMINAL_PROMPT_INPUT_TARGET) {
          state.promptInput = applyTypeEvent(
            state.promptInput,
            event.text,
            elapsedSinceEventStart,
            event.cadence,
          )
        }
        break
      case 'paste':
        if (event.target === TERMINAL_PROMPT_INPUT_TARGET) {
          state.promptInput += event.text
        }
        break
      case 'backspace':
        if (event.target === TERMINAL_PROMPT_INPUT_TARGET) {
          state.promptInput = applyBackspaceEvent(
            state.promptInput,
            event.count,
            elapsedSinceEventStart,
            event.cadence,
          )
        }
        break
      case 'stream-text':
        if (event.target === TERMINAL_OUTPUT_TARGET) {
          state.outputText = applyStreamTextEvent(state.outputText, event, elapsedSinceEventStart)
        }
        break
      case 'scroll':
        if (event.target === TERMINAL_VIEWPORT_TARGET) {
          state.viewport = applyScrollEvent(state.viewport, event, elapsedSinceEventStart)
        }
        break
      default:
        break
    }
  }

  return {
    ...state,
    lines: [...state.lines, ...splitTextIntoTerminalLines(state.outputText)],
  }
}

export const terminalStateToShellProps = (
  state: TerminalScriptState,
): Pick<
  TerminalShellProps,
  'title' | 'shellLabel' | 'subtitle' | 'prompt' | 'promptInput' | 'lines' | 'viewport' | 'cursor'
> => {
  return {
    title: state.title,
    shellLabel: state.shellLabel,
    subtitle: state.subtitle,
    prompt: state.prompt,
    promptInput: state.promptInput,
    lines: state.lines,
    viewport: state.viewport,
    cursor: state.cursor,
  }
}
