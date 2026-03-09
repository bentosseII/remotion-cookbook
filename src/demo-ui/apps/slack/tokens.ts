import type {CSSProperties} from 'react'

export type SlackThemeName = 'slack'

export type SlackThemeTokens = {
	themeName: SlackThemeName
	frameBackground: string
	windowBackground: string
	railBackground: string
	sidebarBackground: string
	contentBackground: string
	headerBackground: string
	composerBackground: string
	composerBorder: string
	border: string
	textPrimary: string
	textMuted: string
	textSubtle: string
	accent: string
	mention: string
	unread: string
	linkText: string
	onlineGreen: string
	shadow: string
	radius: number
	railWidth: number
	sidebarWidth: number
	headerHeight: number
	fontFamily: CSSProperties['fontFamily']
}

export const slackThemeTokens = {
	themeName: 'slack',
	frameBackground: 'radial-gradient(circle at top, #23182b 0%, #1a1321 32%, #120f18 100%)',
	windowBackground: '#1a1321',
	railBackground: '#1a1025',
	sidebarBackground: '#2b1a38',
	contentBackground: '#1a1820',
	headerBackground: '#1f1d24',
	composerBackground: '#222028',
	composerBorder: 'rgba(255, 255, 255, 0.12)',
	border: 'rgba(255, 255, 255, 0.07)',
	textPrimary: '#f3eef7',
	textMuted: '#b6abbe',
	textSubtle: '#7e7490',
	accent: '#55c6ff',
	mention: '#ffd86b',
	unread: '#3ea6ff',
	linkText: '#47a0d4',
	onlineGreen: '#2bac6e',
	shadow: '0 26px 70px rgba(0, 0, 0, 0.34)',
	radius: 10,
	railWidth: 60,
	sidebarWidth: 270,
	headerHeight: 50,
	fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
} satisfies SlackThemeTokens

export const getSlackTokens = (): SlackThemeTokens => {
	return slackThemeTokens
}
