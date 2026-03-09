import type {CSSProperties, ReactNode} from 'react'

import type {TerminalThemeName, TerminalThemeTokens} from './tokens'

export type TerminalLineTone = 'default' | 'muted' | 'accent' | 'success' | 'warning' | 'error'

export type TerminalSegment = {
  text: string
  color?: string
  weight?: CSSProperties['fontWeight']
  opacity?: number
}

export type TerminalLine = {
  id?: string
  segments: readonly TerminalSegment[]
  tone?: TerminalLineTone
  background?: string
  paddingLeft?: number
}

export type TerminalPrompt = {
  user: string
  host: string
  cwd: string
  symbol?: string
}

export type TerminalViewportState = {
  firstVisibleLine?: number
  visibleLineCount?: number
  totalLineCount?: number
  showScrollBar?: boolean
}

export type TerminalCursorPlacement = 'inline' | 'block'

export type TerminalCursorState = {
  visible?: boolean
  text?: string
  color?: string
  placement?: TerminalCursorPlacement
}

export type TerminalShellProps = {
  title: string
  prompt?: TerminalPrompt
  promptInput?: string
  lines: readonly TerminalLine[]
  theme?: TerminalThemeName | TerminalThemeTokens
  shellLabel?: string
  subtitle?: string
  viewport?: TerminalViewportState
  minHeight?: number
  maxWidth?: number | string
  bodyFontSize?: number
  cursor?: TerminalCursorState
  footer?: ReactNode
}
