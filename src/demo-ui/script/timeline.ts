import {type DemoEvent, type DemoScript, type DemoSeconds} from './types'

export const sortDemoScript = (script: DemoScript): DemoEvent[] => {
  return [...script].sort((left, right) => left.at - right.at)
}

export const getLastDemoEventTime = (script: DemoScript): DemoSeconds => {
  const sorted = sortDemoScript(script)
  if (sorted.length === 0) {
    return 0
  }

  return sorted[sorted.length - 1].at
}

export const getDemoEventsAtOrBeforeTime = (
  script: DemoScript,
  timeInSeconds: DemoSeconds,
): DemoEvent[] => {
  return sortDemoScript(script).filter((event) => event.at <= timeInSeconds)
}

export const getDemoEventsInRange = (
  script: DemoScript,
  startInSeconds: DemoSeconds,
  endInSeconds: DemoSeconds,
): DemoEvent[] => {
  return sortDemoScript(script).filter((event) => {
    return event.at >= startInSeconds && event.at <= endInSeconds
  })
}
