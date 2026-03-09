import type {ReactNode} from 'react'

import type {BrowserThemeName, BrowserThemeTokens} from './tokens'

export type BrowserTab = {
  id: string
  title: string
  active?: boolean
}

export type BrowserShellProps = {
  url: string
  tabs: readonly BrowserTab[]
  theme?: BrowserThemeName | BrowserThemeTokens
  pageTitle?: string
  children?: ReactNode
  minHeight?: number
  maxWidth?: number | string
}
