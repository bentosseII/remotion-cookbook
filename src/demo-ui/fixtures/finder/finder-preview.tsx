import React from 'react'

import type {FinderListRow, FinderSidebarItem} from '../../apps/finder'

export const finderPreviewBreadcrumb = ['Macintosh HD', 'private', 'tmp', 'demo-ui-finder-ref']

export const finderPreviewSidebar: readonly FinderSidebarItem[] = [
	{id: 'recents', label: 'Recents', icon: 'clock', section: 'Quick Access'},
	{id: 'shared', label: 'Shared', icon: 'link', section: 'Quick Access'},
	{id: 'applications', label: 'Applications', icon: 'grid', section: 'Favorites'},
	{id: 'downloads', label: 'Downloads', icon: 'arrow-down', section: 'Favorites'},
	{id: 'desktop', label: 'Desktop', icon: 'display', section: 'Favorites'},
	{id: 'documents', label: 'Documents', icon: 'folder-fill', section: 'Favorites'},
	{id: 'macintosh-hd', label: 'Macintosh HD', icon: 'hdd', section: 'Locations'},
	{id: 'factory', label: 'Factory', icon: 'circle', section: 'Locations', active: true},
]

export const finderPreviewRows: readonly FinderListRow[] = [
	{id: 'assets', name: 'Assets', icon: 'folder', dateModified: 'Today at 12:39', kind: 'Folder'},
	{id: 'demo', name: 'demo.mov', icon: 'movie', dateModified: 'Today at 12:39', size: 'Zero bytes', kind: 'QuickTime movie'},
	{id: 'exports', name: 'Exports', icon: 'folder', dateModified: 'Today at 12:39', kind: 'Folder'},
	{id: 'notes', name: 'notes.md', icon: 'doc-code', dateModified: 'Today at 12:39', size: 'Zero bytes', kind: 'Markdown file', selected: true},
	{id: 'projects', name: 'Projects', icon: 'folder', dateModified: 'Today at 12:39', kind: 'Folder'},
	{id: 'readme', name: 'README.md', icon: 'doc-code', dateModified: 'Today at 12:39', size: 'Zero bytes', kind: 'Markdown file'},
	{id: 'script', name: 'script.txt', icon: 'doc-text', dateModified: 'Today at 12:39', size: 'Zero bytes', kind: 'Plain Text'},
]

export const FinderPreviewFooter: React.FC<{note?: string}> = ({note = 'list view baseline'}) => {
	return (
		<div
			style={{
				height: 32,
				display: 'flex',
				alignItems: 'center',
				gap: 10,
				padding: '0 16px',
				borderTop: '1px solid rgba(0, 0, 0, 0.06)',
				color: '#8b857d',
				fontSize: 12,
			}}
		>
			<span>7 items, 4 files, 3 folders</span>
			<span>·</span>
			<span>{note}</span>
		</div>
	)
}
