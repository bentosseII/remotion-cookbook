import type {DemoBackspaceCadence, DemoSeconds, DemoTypingCadence} from '../../script'

type TypingCadenceProfile = {
  baseDelay: DemoSeconds
  varianceStep: DemoSeconds
  pattern: readonly number[]
  spacePause: DemoSeconds
  punctuationPause: DemoSeconds
  symbolPause: DemoSeconds
  newlinePause: DemoSeconds
  camelPause: DemoSeconds
  wordBoundaryPause: DemoSeconds
  backspaceBaseDelay: DemoSeconds
  backspaceVarianceStep: DemoSeconds
  backspacePattern: readonly number[]
}

const cadenceProfiles: Record<DemoTypingCadence | DemoBackspaceCadence, TypingCadenceProfile> = {
  human: {
    baseDelay: 0.058,
    varianceStep: 0.014,
    pattern: [0, 1, 0, 2, 1, 0, 1],
    spacePause: 0.018,
    punctuationPause: 0.06,
    symbolPause: 0.026,
    newlinePause: 0.12,
    camelPause: 0.022,
    wordBoundaryPause: 0.016,
    backspaceBaseDelay: 0.048,
    backspaceVarianceStep: 0.01,
    backspacePattern: [0, 1, 0, 1],
  },
  fast: {
    baseDelay: 0.04,
    varianceStep: 0.01,
    pattern: [0, 1, 0, 0, 1],
    spacePause: 0.012,
    punctuationPause: 0.032,
    symbolPause: 0.018,
    newlinePause: 0.08,
    camelPause: 0.012,
    wordBoundaryPause: 0.01,
    backspaceBaseDelay: 0.032,
    backspaceVarianceStep: 0.006,
    backspacePattern: [0, 1, 0],
  },
  code: {
    baseDelay: 0.05,
    varianceStep: 0.012,
    pattern: [0, 1, 0, 2, 0, 1],
    spacePause: 0.012,
    punctuationPause: 0.036,
    symbolPause: 0.034,
    newlinePause: 0.1,
    camelPause: 0.026,
    wordBoundaryPause: 0.012,
    backspaceBaseDelay: 0.038,
    backspaceVarianceStep: 0.008,
    backspacePattern: [0, 1, 0, 1],
  },
  'terminal-human': {
    baseDelay: 0.052,
    varianceStep: 0.013,
    pattern: [0, 1, 0, 2, 1, 0],
    spacePause: 0.014,
    punctuationPause: 0.04,
    symbolPause: 0.042,
    newlinePause: 0.09,
    camelPause: 0.018,
    wordBoundaryPause: 0.01,
    backspaceBaseDelay: 0.034,
    backspaceVarianceStep: 0.008,
    backspacePattern: [0, 1, 0],
  },
  'terminal-power-user': {
    baseDelay: 0.034,
    varianceStep: 0.008,
    pattern: [0, 1, 0, 1, 0],
    spacePause: 0.008,
    punctuationPause: 0.024,
    symbolPause: 0.024,
    newlinePause: 0.06,
    camelPause: 0.008,
    wordBoundaryPause: 0.004,
    backspaceBaseDelay: 0.026,
    backspaceVarianceStep: 0.006,
    backspacePattern: [0, 1, 0],
  },
  'editor-code': {
    baseDelay: 0.046,
    varianceStep: 0.011,
    pattern: [0, 1, 0, 2, 0, 1],
    spacePause: 0.012,
    punctuationPause: 0.03,
    symbolPause: 0.03,
    newlinePause: 0.09,
    camelPause: 0.02,
    wordBoundaryPause: 0.008,
    backspaceBaseDelay: 0.034,
    backspaceVarianceStep: 0.007,
    backspacePattern: [0, 1, 0, 1],
  },
  'chat-human': {
    baseDelay: 0.062,
    varianceStep: 0.015,
    pattern: [0, 1, 0, 2, 1, 0, 1],
    spacePause: 0.022,
    punctuationPause: 0.07,
    symbolPause: 0.02,
    newlinePause: 0.14,
    camelPause: 0.014,
    wordBoundaryPause: 0.02,
    backspaceBaseDelay: 0.052,
    backspaceVarianceStep: 0.01,
    backspacePattern: [0, 1, 0, 1],
  },
  paste: {
    baseDelay: 0.008,
    varianceStep: 0,
    pattern: [0],
    spacePause: 0,
    punctuationPause: 0,
    symbolPause: 0,
    newlinePause: 0.01,
    camelPause: 0,
    wordBoundaryPause: 0,
    backspaceBaseDelay: 0.014,
    backspaceVarianceStep: 0,
    backspacePattern: [0],
  },
  burst: {
    baseDelay: 0.026,
    varianceStep: 0.006,
    pattern: [0, 1, 0],
    spacePause: 0.008,
    punctuationPause: 0.02,
    symbolPause: 0.02,
    newlinePause: 0.04,
    camelPause: 0.008,
    wordBoundaryPause: 0.004,
    backspaceBaseDelay: 0.018,
    backspaceVarianceStep: 0.004,
    backspacePattern: [0, 1, 0],
  },
}

const getPatternValue = (pattern: readonly number[], index: number): number => {
  return pattern[index % pattern.length] ?? 0
}

const isPunctuation = (char: string): boolean => {
  return /[.,;:!?]/.test(char)
}

const isSymbol = (char: string): boolean => {
  return /[()[\]{}=<>/\\'"`|_*&^-]/.test(char)
}

const isWhitespace = (char: string): boolean => {
  return /\s/.test(char)
}

const isLineBreak = (char: string): boolean => {
  return char === '\n'
}

const isCamelBoundary = (previousChar: string, char: string): boolean => {
  return /[a-z]/.test(previousChar) && /[A-Z]/.test(char)
}

const isWordBoundary = (char: string, nextChar: string): boolean => {
  if (!char || !nextChar) {
    return false
  }

  return /[a-z]/.test(char) && /[A-Z0-9]/.test(nextChar)
}

export const getTypingCharacterDelayInSeconds = (
  text: string,
  index: number,
  cadence: DemoTypingCadence = 'human',
): DemoSeconds => {
  const profile = cadenceProfiles[cadence]
  const char = text[index] ?? ''
  const previousChar = text[index - 1] ?? ''
  const nextChar = text[index + 1] ?? ''

  let delay = profile.baseDelay + profile.varianceStep * getPatternValue(profile.pattern, index)

  if (isWhitespace(char)) {
    delay += profile.spacePause
  }

  if (isPunctuation(char)) {
    delay += profile.punctuationPause
  }

  if (isSymbol(char)) {
    delay += profile.symbolPause
  }

  if (isLineBreak(char)) {
    delay += profile.newlinePause
  }

  if (isCamelBoundary(previousChar, char)) {
    delay += profile.camelPause
  }

  if (isWordBoundary(char, nextChar)) {
    delay += profile.wordBoundaryPause
  }

  return Math.max(0.004, delay)
}

export const getTypingDurationsInSeconds = (
  text: string,
  cadence: DemoTypingCadence = 'human',
): DemoSeconds[] => {
  return [...text].map((_, index) => getTypingCharacterDelayInSeconds(text, index, cadence))
}

export const getTypingCumulativeTimesInSeconds = (
  text: string,
  cadence: DemoTypingCadence = 'human',
): DemoSeconds[] => {
  const durations = getTypingDurationsInSeconds(text, cadence)
  let elapsed = 0

  return durations.map((duration) => {
    elapsed += duration
    return elapsed
  })
}

export const getTypingDurationInSeconds = (
  text: string,
  cadence: DemoTypingCadence = 'human',
): DemoSeconds => {
  const cumulativeTimes = getTypingCumulativeTimesInSeconds(text, cadence)
  return cumulativeTimes[cumulativeTimes.length - 1] ?? 0
}

export const getTypedTextAtTime = (
  text: string,
  elapsedInSeconds: DemoSeconds,
  cadence: DemoTypingCadence = 'human',
): {text: string; charCount: number; complete: boolean} => {
  if (elapsedInSeconds <= 0) {
    return {text: '', charCount: 0, complete: false}
  }

  const cumulativeTimes = getTypingCumulativeTimesInSeconds(text, cadence)
  const charCount = cumulativeTimes.filter((time) => time <= elapsedInSeconds).length

  return {
    text: text.slice(0, charCount),
    charCount,
    complete: charCount >= text.length,
  }
}

const getBackspaceDelayInSeconds = (
  index: number,
  cadence: DemoTypingCadence | DemoBackspaceCadence = 'human',
): DemoSeconds => {
  const profile = cadenceProfiles[cadence]
  return Math.max(
    0.004,
    profile.backspaceBaseDelay +
      profile.backspaceVarianceStep * getPatternValue(profile.backspacePattern, index),
  )
}

export const getBackspaceCountAtTime = (
  totalCount: number,
  elapsedInSeconds: DemoSeconds,
  cadence: DemoTypingCadence | DemoBackspaceCadence = 'human',
): number => {
  if (elapsedInSeconds <= 0 || totalCount <= 0) {
    return 0
  }

  let consumed = 0
  let elapsed = 0

  for (let index = 0; index < totalCount; index++) {
    elapsed += getBackspaceDelayInSeconds(index, cadence)
    if (elapsed <= elapsedInSeconds) {
      consumed += 1
    }
  }

  return consumed
}

export const getBackspaceDurationInSeconds = (
  totalCount: number,
  cadence: DemoTypingCadence | DemoBackspaceCadence = 'human',
): DemoSeconds => {
  let elapsed = 0

  for (let index = 0; index < totalCount; index++) {
    elapsed += getBackspaceDelayInSeconds(index, cadence)
  }

  return elapsed
}
