import type {DemoScript} from '../../script'
import type {FinderListRow, FinderScriptBaseState} from '../../apps/finder'

import {finderPreviewBreadcrumb, finderPreviewRows, finderPreviewSidebar} from './finder-preview'

const cloneRows = (rows: readonly FinderListRow[]): FinderListRow[] => {
  return rows.map((row) => ({...row}))
}

const withSelectedRow = (rows: readonly FinderListRow[], rowId: string): FinderListRow[] => {
  return cloneRows(rows).map((row) => ({
    ...row,
    selected: row.id === rowId,
    editing: false,
    draftName: undefined,
  }))
}

export const finderBaseState: FinderScriptBaseState = {
  title: 'demo-ui-finder-ref',
  breadcrumb: finderPreviewBreadcrumb,
  sidebarItems: finderPreviewSidebar,
  rows: finderPreviewRows,
}

export const finderSelectionScript: DemoScript = [
  {
    at: 0.55,
    type: 'set-state',
    patch: {
      rows: withSelectedRow(finderPreviewRows, 'projects'),
    },
  },
  {
    at: 1.2,
    type: 'set-state',
    patch: {
      rows: withSelectedRow(finderPreviewRows, 'readme'),
    },
  },
]

const projectFolderRows: FinderListRow[] = [
  {
    id: 'shot-list',
    name: 'shot-list.md',
    icon: 'doc-code',
    dateModified: 'Today at 12:42',
    size: '2 KB',
    kind: 'Markdown file',
  },
  {
    id: 'preview',
    name: 'preview.png',
    icon: 'image',
    dateModified: 'Today at 12:41',
    size: '248 KB',
    kind: 'PNG image',
    selected: true,
  },
  {
    id: 'recording',
    name: 'recording.mov',
    icon: 'movie',
    dateModified: 'Today at 12:39',
    size: '18 MB',
    kind: 'QuickTime movie',
  },
  {
    id: 'assets-nested',
    name: 'Assets',
    icon: 'folder',
    dateModified: 'Today at 12:38',
    kind: 'Folder',
  },
]

export const finderOpenScript: DemoScript = [
  {
    at: 0.6,
    type: 'set-state',
    patch: {
      breadcrumb: ['Macintosh HD', 'private', 'tmp', 'demo-ui-finder-ref', 'Projects'],
      title: 'Projects',
      rows: projectFolderRows,
    },
  },
]

const renameRows = cloneRows(finderPreviewRows).map((row) => {
  if (row.id !== 'notes') {
    return {
      ...row,
      selected: false,
    }
  }

  return {
    ...row,
    selected: true,
    editing: true,
    draftName: 'notes-v2.md',
  }
})

export const finderRenameScript: DemoScript = [
  {
    at: 0.55,
    type: 'set-state',
    patch: {
      rows: renameRows,
    },
  },
]
