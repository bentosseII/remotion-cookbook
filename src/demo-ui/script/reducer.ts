import {getDemoEventsAtOrBeforeTime} from './timeline'
import {type DemoEvent, type DemoScript, type DemoSeconds, type DemoSetStateEvent} from './types'

export const isDemoSetStateEvent = (event: DemoEvent): event is DemoSetStateEvent => {
  return event.type === 'set-state'
}

export const reduceDemoStatePatch = (
  script: DemoScript,
  timeInSeconds: DemoSeconds,
): Record<string, unknown> => {
  return getDemoEventsAtOrBeforeTime(script, timeInSeconds)
    .filter(isDemoSetStateEvent)
    .reduce<Record<string, unknown>>((state, event) => {
      return {
        ...state,
        ...event.patch,
      }
    }, {})
}

export const reduceDemoState = <TState extends Record<string, unknown>>(
  script: DemoScript,
  timeInSeconds: DemoSeconds,
  initialState: TState,
): TState => {
  return {
    ...initialState,
    ...reduceDemoStatePatch(script, timeInSeconds),
  }
}
