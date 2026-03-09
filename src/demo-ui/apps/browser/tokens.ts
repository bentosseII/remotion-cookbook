import type {CSSProperties} from 'react'

export type BrowserThemeName = 'chrome'

export type BrowserThemeTokens = {
	themeName: BrowserThemeName
	frameBackground: string
	windowBackground: string
	chromeBackground: string
	toolbarBackground: string
	chromeBorder: string
	pageBackground: string
	textPrimary: string
	textMuted: string
	iconColor: string
	omniboxBackground: string
	omniboxBorder: string
	tabActiveBackground: string
	tabInactiveBackground: string
	tabActiveText: string
	tabInactiveText: string
	accent: string
	shadow: string
	radius: number
	tabStripHeight: number
	toolbarHeight: number
	fontFamily: CSSProperties['fontFamily']
}

export const chromeBrowserTokens = {
	themeName: 'chrome',
	frameBackground: 'radial-gradient(circle at top, #dde5f4 0%, #cfd9eb 28%, #b9c7dd 100%)',
	windowBackground: '#dee4ed',
	chromeBackground: '#d6dfe9',
	toolbarBackground: '#e8ecf2',
	chromeBorder: 'rgba(0, 0, 0, 0.09)',
	pageBackground: '#ffffff',
	textPrimary: '#1f2937',
	textMuted: '#5f6b7a',
	iconColor: '#5f6b7a',
	omniboxBackground: '#eef1f5',
	omniboxBorder: 'rgba(0, 0, 0, 0.06)',
	tabActiveBackground: '#e8ecf2',
	tabInactiveBackground: 'transparent',
	tabActiveText: '#1f2937',
	tabInactiveText: '#6b7280',
	accent: '#4f84ff',
	shadow: '0 24px 60px rgba(0, 0, 0, 0.18)',
	radius: 10,
	tabStripHeight: 40,
	toolbarHeight: 42,
	fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
} satisfies BrowserThemeTokens

export const browserThemeTokens: Record<BrowserThemeName, BrowserThemeTokens> = {
	chrome: chromeBrowserTokens,
}

export const getBrowserTokens = (theme: BrowserThemeName = 'chrome'): BrowserThemeTokens => {
	return browserThemeTokens[theme]
}
