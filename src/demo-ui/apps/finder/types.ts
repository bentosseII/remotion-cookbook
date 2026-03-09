import type {ReactNode} from 'react'

import type {FinderThemeName, FinderThemeTokens} from './tokens'

export type FinderSidebarItem = {
  id: string
  label: string
  icon?: string
  active?: boolean
  section?: string
}

export type FinderColumnKey = 'name' | 'dateModified' | 'size' | 'kind'

export type FinderListRow = {
  id: string
  name: string
  icon?: string
  dateModified?: string
  size?: string
  kind?: string
  selected?: boolean
  open?: boolean
  editing?: boolean
  draftName?: string
}

export type FinderShellProps = {
  title: string
  breadcrumb: readonly string[]
  sidebarItems: readonly FinderSidebarItem[]
  rows: readonly FinderListRow[]
  theme?: FinderThemeName | FinderThemeTokens
  children?: ReactNode
  minHeight?: number
  maxWidth?: number | string
}
