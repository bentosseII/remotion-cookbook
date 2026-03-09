import type {CSSProperties} from 'react'

export type FinderThemeName = 'finder'

export type FinderThemeTokens = {
	themeName: FinderThemeName
	frameBackground: string
	windowBackground: string
	chromeBackground: string
	toolbarBackground: string
	sidebarBackground: string
	contentBackground: string
	border: string
	rowStripe: string
	textPrimary: string
	textMuted: string
	textSubtle: string
	accent: string
	sidebarAccent: string
	rowHover: string
	rowSelected: string
	pathBarBackground: string
	shadow: string
	radius: number
	toolbarHeight: number
	sidebarWidth: number
	rowHeight: number
	searchBackground: string
	searchBorder: string
	fontFamily: CSSProperties['fontFamily']
}

export const finderThemeTokens = {
	themeName: 'finder',
	frameBackground: '#c8c8c8',
	windowBackground: '#ececec',
	chromeBackground: '#ececec',
	toolbarBackground: '#f6f6f6',
	sidebarBackground: '#f2f1f0',
	contentBackground: '#ffffff',
	border: 'rgba(0, 0, 0, 0.12)',
	rowStripe: 'rgba(0, 0, 0, 0.018)',
	textPrimary: '#1d1d1f',
	textMuted: '#6e6e73',
	textSubtle: '#8e8e93',
	accent: '#007aff',
	sidebarAccent: '#007aff',
	rowHover: 'rgba(0, 0, 0, 0.04)',
	rowSelected: 'rgba(0, 122, 255, 0.12)',
	pathBarBackground: '#f6f6f6',
	shadow:
		'0 0 0 0.5px rgba(0,0,0,0.06), 0 3px 8px rgba(0,0,0,0.08), 0 18px 50px rgba(0,0,0,0.10)',
	radius: 10,
	toolbarHeight: 52,
	sidebarWidth: 170,
	rowHeight: 24,
	searchBackground: '#e8e8ed',
	searchBorder: 'rgba(0, 0, 0, 0.00)',
	fontFamily:
		'-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
} satisfies FinderThemeTokens

export const getFinderTokens = (): FinderThemeTokens => {
	return finderThemeTokens
}
