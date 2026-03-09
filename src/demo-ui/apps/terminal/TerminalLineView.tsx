import type {FC} from 'react'

import type {TerminalThemeTokens} from './tokens'
import type {TerminalLine} from './types'

const getToneColor = (line: TerminalLine, tokens: TerminalThemeTokens): string => {
  switch (line.tone) {
    case 'muted':
      return tokens.textMuted
    case 'accent':
      return tokens.textAccent
    case 'success':
      return tokens.textSuccess
    case 'warning':
      return tokens.textWarning
    case 'error':
      return tokens.textError
    default:
      return tokens.textPrimary
  }
}

export type TerminalLineViewProps = {
  line: TerminalLine
  tokens: TerminalThemeTokens
}

export const TerminalLineView: FC<TerminalLineViewProps> = ({line, tokens}) => {
  const toneColor = getToneColor(line, tokens)
  const hasVisibleText = line.segments.some((segment) => segment.text.length > 0)

  return (
    <div
      style={{
        minHeight: `${tokens.lineHeight}em`,
        paddingLeft: line.paddingLeft ?? 0,
        background: line.background,
        color: toneColor,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      }}
    >
      {hasVisibleText ? (
        line.segments.map((segment, index) => (
          <span
            key={`${segment.text}-${index}`}
            style={{
              color: segment.color ?? toneColor,
              fontWeight: segment.weight ?? 400,
              opacity: segment.opacity ?? 1,
            }}
          >
            {segment.text}
          </span>
        ))
      ) : (
        <span style={{opacity: 0}}>.</span>
      )}
    </div>
  )
}
