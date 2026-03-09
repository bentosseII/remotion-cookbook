import {getLastDemoEventTime} from './timeline'
import {type DemoScript, type DemoSeconds} from './types'

const DEFAULT_SETTLE_SECONDS = 0.6

export type DemoDurationOptions = {
  settleSeconds?: DemoSeconds
  minSeconds?: DemoSeconds
}

export const getDemoScriptDurationInSeconds = (
  script: DemoScript,
  options: DemoDurationOptions = {},
): DemoSeconds => {
  const lastEventTime = getLastDemoEventTime(script)
  const settleSeconds = Math.max(0, options.settleSeconds ?? DEFAULT_SETTLE_SECONDS)
  const minSeconds = Math.max(0, options.minSeconds ?? 0)

  return Math.max(minSeconds, lastEventTime + settleSeconds)
}

export const secondsToFrames = (seconds: DemoSeconds, fps: number): number => {
  if (fps <= 0) {
    throw new Error('fps must be greater than 0')
  }

  return Math.max(1, Math.ceil(Math.max(0, seconds) * fps))
}

export const framesToSeconds = (frame: number, fps: number): DemoSeconds => {
  if (fps <= 0) {
    throw new Error('fps must be greater than 0')
  }

  return Math.max(0, frame) / fps
}

export const getDemoScriptDurationInFrames = (
  script: DemoScript,
  fps: number,
  options: DemoDurationOptions = {},
): number => {
  return secondsToFrames(getDemoScriptDurationInSeconds(script, options), fps)
}
