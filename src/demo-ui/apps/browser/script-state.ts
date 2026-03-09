import type {DemoEvent, DemoScript, DemoSeconds, DemoTypingCadence} from '../../script'
import {sortDemoScript} from '../../script'
import {getTypedTextAtTime} from '../../motion/typing'

import type {BrowserShellProps, BrowserTab} from './types'

export const BROWSER_VIEWPORT_TARGET = 'browser-viewport'
export const getBrowserFieldTarget = (fieldId: string): string => `browser-field:${fieldId}`
export const getBrowserCheckboxTarget = (fieldId: string): string => `browser-checkbox:${fieldId}`
export const getBrowserButtonTarget = (buttonId: string): string => `browser-button:${buttonId}`

export type BrowserScriptBaseState = {
  url: string
  tabs: readonly BrowserTab[]
  pageTitle?: string
  fields?: Record<string, string>
  checkboxValues?: Record<string, boolean>
  focusedFieldId?: string
  hoveredTargetId?: string
  pressedTargetId?: string
  scrollY?: number
}

export type BrowserScriptState = {
  url: string
  tabs: BrowserTab[]
  pageTitle?: string
  fields: Record<string, string>
  checkboxValues: Record<string, boolean>
  focusedFieldId?: string
  hoveredTargetId?: string
  pressedTargetId?: string
  scrollY: number
}

const getFieldIdFromTarget = (target: string): string | null => {
  return target.startsWith('browser-field:') ? target.replace('browser-field:', '') : null
}

const getCheckboxIdFromTarget = (target: string): string | null => {
  return target.startsWith('browser-checkbox:') ? target.replace('browser-checkbox:', '') : null
}

const isButtonTarget = (target: string): boolean => {
  return target.startsWith('browser-button:')
}

const easeOutCubic = (value: number): number => {
  const clamped = Math.min(Math.max(value, 0), 1)
  return 1 - Math.pow(1 - clamped, 3)
}

const applyTypeEvent = (
  currentValue: string,
  eventText: string,
  elapsedInSeconds: DemoSeconds,
  cadence: DemoTypingCadence | undefined,
): string => {
  const typedText = getTypedTextAtTime(eventText, elapsedInSeconds, cadence ?? 'human')
  return currentValue + typedText.text
}

const applyStreamedScroll = (
  currentScrollY: number,
  event: Extract<DemoEvent, {type: 'scroll'}>,
  elapsedInSeconds: DemoSeconds,
): number => {
  const duration = Math.max(event.duration ?? 0.7, 0.001)
  const progress = easeOutCubic(elapsedInSeconds / duration)
  return Math.max(0, currentScrollY + event.deltaY * progress)
}

const applySetStateEvent = (
  state: BrowserScriptState,
  event: Extract<DemoEvent, {type: 'set-state'}>,
): BrowserScriptState => {
  const patch = event.patch as Partial<BrowserScriptBaseState>

  return {
    ...state,
    ...patch,
    tabs: patch.tabs ? [...patch.tabs] : state.tabs,
    fields: patch.fields ? {...state.fields, ...patch.fields} : state.fields,
    checkboxValues: patch.checkboxValues
      ? {...state.checkboxValues, ...patch.checkboxValues}
      : state.checkboxValues,
    scrollY: patch.scrollY ?? state.scrollY,
  }
}

export const getBrowserStateAtTime = (
  baseState: BrowserScriptBaseState,
  script: DemoScript,
  timeInSeconds: DemoSeconds,
): BrowserScriptState => {
  const state: BrowserScriptState = {
    url: baseState.url,
    tabs: [...baseState.tabs],
    pageTitle: baseState.pageTitle,
    fields: {...(baseState.fields ?? {})},
    checkboxValues: {...(baseState.checkboxValues ?? {})},
    focusedFieldId: baseState.focusedFieldId,
    hoveredTargetId: baseState.hoveredTargetId,
    pressedTargetId: baseState.pressedTargetId,
    scrollY: baseState.scrollY ?? 0,
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
      case 'hover':
        state.hoveredTargetId = event.target
        break
      case 'focus': {
        const fieldId = getFieldIdFromTarget(event.target)
        if (fieldId) {
          state.focusedFieldId = fieldId
        }
        break
      }
      case 'type': {
        const fieldId = getFieldIdFromTarget(event.target)
        if (fieldId) {
          state.fields[fieldId] = applyTypeEvent(
            state.fields[fieldId] ?? '',
            event.text,
            elapsedSinceEventStart,
            event.cadence,
          )
        }
        break
      }
      case 'paste': {
        const fieldId = getFieldIdFromTarget(event.target)
        if (fieldId) {
          state.fields[fieldId] = `${state.fields[fieldId] ?? ''}${event.text}`
        }
        break
      }
      case 'click': {
        const checkboxId = getCheckboxIdFromTarget(event.target)
        if (checkboxId) {
          state.checkboxValues[checkboxId] = !state.checkboxValues[checkboxId]
        }

        if (isButtonTarget(event.target) && elapsedSinceEventStart <= 0.12) {
          state.pressedTargetId = event.target
        } else if (state.pressedTargetId === event.target) {
          state.pressedTargetId = undefined
        }
        break
      }
      case 'scroll':
        if (event.target === BROWSER_VIEWPORT_TARGET) {
          state.scrollY = applyStreamedScroll(state.scrollY, event, elapsedSinceEventStart)
        }
        break
      default:
        break
    }
  }

  return state
}

export const browserStateToShellProps = (
  state: BrowserScriptState,
): Pick<BrowserShellProps, 'url' | 'tabs' | 'pageTitle'> => {
  return {
    url: state.url,
    tabs: state.tabs,
    pageTitle: state.pageTitle,
  }
}
