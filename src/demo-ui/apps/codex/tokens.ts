import type {CSSProperties} from 'react'

export type CodexThemeName = 'codex'

export type CodexThemeTokens = {
	themeName: CodexThemeName
	frameBackground: string
	windowBackground: string
	panelBackground: string
	panelMutedBackground: string
	editorBackground: string
	titleBarBackground: string
	activityBarBackground: string
	statusBarBackground: string
	border: string
	textPrimary: string
	textMuted: string
	textSubtle: string
	accent: string
	success: string
	warning: string
	error: string
	shadow: string
	radius: number
	activityBarWidth: number
	titleBarHeight: number
	statusBarHeight: number
	syntaxKeyword: string
	syntaxString: string
	syntaxComment: string
	syntaxTag: string
	syntaxNumber: string
	syntaxFunction: string
	fontFamily: CSSProperties['fontFamily']
	monoFamily: CSSProperties['fontFamily']
}

export const codexThemeTokens = {
	themeName: 'codex',
	frameBackground: '#000000',
	windowBackground: '#0A0A0F',
	panelBackground: '#0F0F16',
	panelMutedBackground: '#14141D',
	editorBackground: '#0A0A0F',
	titleBarBackground: '#0A0A0F',
	activityBarBackground: '#07070D',
	statusBarBackground: '#3B4BFF',
	border: '#1C1C28',
	textPrimary: '#EDEDF2',
	textMuted: '#72728A',
	textSubtle: '#35354A',
	accent: '#6472FF',
	success: '#22C55E',
	warning: '#F59E0B',
	error: '#FF4D55',
	shadow:
		'0 0 0 1px rgba(0,0,0,0.7), 0 24px 64px rgba(0,0,0,0.85)',
	radius: 12,
	activityBarWidth: 0,
	titleBarHeight: 40,
	statusBarHeight: 0,
	syntaxKeyword: '#B36AFE',
	syntaxString: '#FF8C5A',
	syntaxComment: '#444460',
	syntaxTag: '#22D3EE',
	syntaxNumber: '#86EFAC',
	syntaxFunction: '#93C5FD',
	fontFamily:
		'-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif',
	monoFamily:
		'"SF Mono", "JetBrains Mono", "Fira Code", Menlo, monospace',
} satisfies CodexThemeTokens

export const getCodexTokens = (): CodexThemeTokens => {
	return codexThemeTokens
}
