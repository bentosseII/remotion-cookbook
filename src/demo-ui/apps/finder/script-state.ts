import type {DemoScript, DemoSeconds} from '../../script'
import {reduceDemoState} from '../../script'

import type {FinderShellProps, FinderSidebarItem, FinderListRow} from './types'

export type FinderScriptBaseState = {
  title: string
  breadcrumb: readonly string[]
  sidebarItems: readonly FinderSidebarItem[]
  rows: readonly FinderListRow[]
}

export type FinderScriptState = FinderScriptBaseState

export const getFinderStateAtTime = (
  baseState: FinderScriptBaseState,
  script: DemoScript,
  timeInSeconds: DemoSeconds,
): FinderScriptState => {
  return reduceDemoState(script, timeInSeconds, {
    ...baseState,
    breadcrumb: [...baseState.breadcrumb],
    sidebarItems: [...baseState.sidebarItems],
    rows: [...baseState.rows],
  }) as FinderScriptState
}

export const finderStateToShellProps = (
  state: FinderScriptState,
): Pick<FinderShellProps, 'title' | 'breadcrumb' | 'sidebarItems' | 'rows'> => {
  return {
    title: state.title,
    breadcrumb: state.breadcrumb,
    sidebarItems: state.sidebarItems,
    rows: state.rows,
  }
}
