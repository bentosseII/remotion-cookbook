import type {CSSProperties} from 'react'

export type TerminalThemeName = 'ghostty'

export type TerminalThemeTokens = {
  themeName: TerminalThemeName
  frameBackground: string
  windowBackground: string
  titleBarBackground: string
  titleBarBorder: string
  bodyBackground: string
  bodyEdge: string
  textPrimary: string
  textMuted: string
  textAccent: string
  textSuccess: string
  textWarning: string
  textError: string
  cursor: string
  selectionBackground: string
  trafficRed: string
  trafficYellow: string
  trafficGreen: string
  shadow: string
  radius: number
  titleBarHeight: number
  bodyPaddingX: number
  bodyPaddingY: number
  bodyFontSize: number
  lineHeight: number
  promptGap: number
  scrollBarWidth: number
  scrollThumbColor: string
  fontFamily: CSSProperties['fontFamily']
}

export const ghosttyTerminalTokens = {
  themeName: 'ghostty',
  frameBackground: 'radial-gradient(circle at top, #161d29 0%, #0b0f14 58%, #07090d 100%)',
  windowBackground: '#0b0f14',
  titleBarBackground: 'rgba(18, 23, 31, 0.98)',
  titleBarBorder: 'rgba(140, 160, 186, 0.16)',
  bodyBackground: 'linear-gradient(180deg, #0c1118 0%, #090d13 100%)',
  bodyEdge: 'rgba(143, 167, 194, 0.08)',
  textPrimary: '#e7edf7',
  textMuted: '#90a0b7',
  textAccent: '#f5a56a',
  textSuccess: '#74d99f',
  textWarning: '#f3c969',
  textError: '#ff8f88',
  cursor: '#f7e6d4',
  selectionBackground: 'rgba(96, 141, 214, 0.3)',
  trafficRed: '#ff5f56',
  trafficYellow: '#ffbd2e',
  trafficGreen: '#27c93f',
  shadow: '0 30px 80px rgba(0, 0, 0, 0.46)',
  radius: 22,
  titleBarHeight: 44,
  bodyPaddingX: 28,
  bodyPaddingY: 26,
  bodyFontSize: 22,
  lineHeight: 1.45,
  promptGap: 10,
  scrollBarWidth: 10,
  scrollThumbColor: 'rgba(159, 177, 198, 0.24)',
  fontFamily:
    '"Geist Mono", "Berkeley Mono", "SF Mono", Menlo, Monaco, Consolas, monospace',
} satisfies TerminalThemeTokens

export const terminalThemeTokens: Record<TerminalThemeName, TerminalThemeTokens> = {
  ghostty: ghosttyTerminalTokens,
}

export const getTerminalTokens = (theme: TerminalThemeName = 'ghostty'): TerminalThemeTokens => {
  return terminalThemeTokens[theme]
}
