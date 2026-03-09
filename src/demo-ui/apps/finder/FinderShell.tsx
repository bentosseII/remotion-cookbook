import type {CSSProperties, FC} from 'react'

import {finderThemeTokens, getFinderTokens, type FinderThemeTokens} from './tokens'
import type {FinderColumnKey, FinderShellProps, FinderSidebarItem} from './types'

const resolveFinderTokens = (theme: FinderShellProps['theme']): FinderThemeTokens => {
	if (!theme) return finderThemeTokens
	if (typeof theme === 'string') return getFinderTokens()
	return theme
}

/* ── SVG icons ───────────────────────────────── */

const NavBack: FC = () => (
	<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
		<path d="M7.5 2L3.5 6l4 4" stroke="currentColor" strokeWidth="1.5"
			strokeLinecap="round" strokeLinejoin="round" />
	</svg>
)

const NavForward: FC = () => (
	<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
		<path d="M4.5 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
			strokeLinecap="round" strokeLinejoin="round" />
	</svg>
)

const ViewIcon: FC = () => (
	<svg width="13" height="13" viewBox="0 0 14 14" fill="none">
		<rect x="1" y="1" width="5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.1" />
		<rect x="8" y="1" width="5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.1" />
		<rect x="1" y="8" width="5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.1" />
		<rect x="8" y="8" width="5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.1" />
	</svg>
)

const ViewList: FC = () => (
	<svg width="13" height="13" viewBox="0 0 14 14" fill="none">
		<path d="M1.5 3h11M1.5 7h11M1.5 11h11" stroke="currentColor" strokeWidth="1.2"
			strokeLinecap="round" />
	</svg>
)

const ViewCol: FC = () => (
	<svg width="13" height="13" viewBox="0 0 14 14" fill="none">
		<rect x="1" y="1" width="3.3" height="12" rx="0.8" stroke="currentColor" strokeWidth="1" />
		<rect x="5.35" y="1" width="3.3" height="12" rx="0.8" stroke="currentColor" strokeWidth="1" />
		<rect x="9.7" y="1" width="3.3" height="12" rx="0.8" stroke="currentColor" strokeWidth="1" />
	</svg>
)

const ViewGal: FC = () => (
	<svg width="13" height="13" viewBox="0 0 14 14" fill="none">
		<rect x="1" y="2" width="12" height="7.5" rx="1.2" stroke="currentColor" strokeWidth="1.1" />
		<rect x="3.5" y="11.5" width="1.8" height="1" rx="0.5" fill="currentColor" opacity="0.5" />
		<rect x="6.1" y="11.5" width="1.8" height="1" rx="0.5" fill="currentColor" opacity="0.5" />
		<rect x="8.7" y="11.5" width="1.8" height="1" rx="0.5" fill="currentColor" opacity="0.5" />
	</svg>
)

const Dots3: FC = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
		<circle cx="4" cy="8" r="1" fill="currentColor" />
		<circle cx="8" cy="8" r="1" fill="currentColor" />
		<circle cx="12" cy="8" r="1" fill="currentColor" />
	</svg>
)

const ShareUp: FC = () => (
	<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
		<rect x="3" y="6" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
		<path d="M8 1.5v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
		<path d="M5.5 4L8 1.5 10.5 4" stroke="currentColor" strokeWidth="1.2"
			strokeLinecap="round" strokeLinejoin="round" />
	</svg>
)

const TagPen: FC = () => (
	<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
		<path d="M2 8.6V3a1 1 0 011-1h5.6a1 1 0 01.7.3l4.4 4.4a1 1 0 010 1.4l-4.6 4.6a1 1 0 01-1.4 0L2.3 9.3a1 1 0 01-.3-.7z"
			stroke="currentColor" strokeWidth="1.1" />
		<circle cx="5.5" cy="5.5" r="1" fill="currentColor" />
	</svg>
)

const SearchMag: FC<{s?: number}> = ({s = 11}) => (
	<svg width={s} height={s} viewBox="0 0 14 14" fill="none">
		<circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.4" />
		<path d="M9 9l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
	</svg>
)

const ChevDisclose: FC<{open?: boolean}> = ({open}) => (
	<svg width="8" height="8" viewBox="0 0 10 10" fill="none"
		style={{transform: open ? 'rotate(90deg)' : 'none'}}>
		<path d="M3.5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5"
			strokeLinecap="round" strokeLinejoin="round" />
	</svg>
)

const SortChev: FC = () => (
	<svg width="7" height="7" viewBox="0 0 10 10" fill="none">
		<path d="M3 6.5l2-3 2 3" stroke="currentColor" strokeWidth="1.2"
			strokeLinecap="round" strokeLinejoin="round" />
	</svg>
)

const PathFolder: FC = () => (
	<svg width="10" height="10" viewBox="0 0 12 12" fill="none">
		<path d="M1 3a1 1 0 011-1h2.5l1 1H10a1 1 0 011 1v5a1 1 0 01-1 1H2a1 1 0 01-1-1V3z"
			fill="#64b5f6" opacity="0.7" />
	</svg>
)

/* ── Sidebar icon map ────────────────────────── */

const sidebarIcons: Record<string, FC> = {
	clock: () => (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
			<circle cx="8" cy="8" r="5.5" stroke="#007aff" strokeWidth="1.2" />
			<path d="M8 5v3.5l2.2 1.3" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" />
		</svg>
	),
	link: () => (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
			<path d="M6.5 9.5a3 3 0 004.2 0l1.5-1.5a3 3 0 00-4.2-4.2L7 4.8"
				stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" />
			<path d="M9.5 6.5a3 3 0 00-4.2 0L3.8 8a3 3 0 004.2 4.2l1-1"
				stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" />
		</svg>
	),
	grid: () => (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
			<rect x="2.5" y="2.5" width="4.5" height="4.5" rx="1" fill="#007aff" opacity="0.8" />
			<rect x="9" y="2.5" width="4.5" height="4.5" rx="1" fill="#007aff" opacity="0.8" />
			<rect x="2.5" y="9" width="4.5" height="4.5" rx="1" fill="#007aff" opacity="0.8" />
			<rect x="9" y="9" width="4.5" height="4.5" rx="1" fill="#007aff" opacity="0.8" />
		</svg>
	),
	'arrow-down': () => (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
			<circle cx="8" cy="8" r="5.5" stroke="#007aff" strokeWidth="1.2" />
			<path d="M8 5v5.5M5.8 8.5L8 10.7 10.2 8.5" stroke="#007aff"
				strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	),
	display: () => (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
			<rect x="2.5" y="3.5" width="11" height="7" rx="1" stroke="#007aff" strokeWidth="1.2" />
			<path d="M6.5 12.5h3M8 10.5v2" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" />
		</svg>
	),
	'folder-fill': () => (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
			<path d="M2 5a1.5 1.5 0 011.5-1.5h3L8 5h4.5A1.5 1.5 0 0114 6.5v5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 11.5V5z"
				fill="#007aff" opacity="0.7" />
		</svg>
	),
	hdd: () => (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
			<rect x="2.5" y="4.5" width="11" height="7" rx="1.5" stroke="#86868b" strokeWidth="1.2" />
			<path d="M2.5 8.5h11" stroke="#86868b" strokeWidth="1" />
			<circle cx="11.5" cy="10" r="0.6" fill="#86868b" />
		</svg>
	),
	circle: () => (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
			<circle cx="8" cy="8" r="4.5" fill="#34c759" />
		</svg>
	),
}

const SbIcon: FC<{name?: string}> = ({name}) => {
	if (!name) return null
	const C = sidebarIcons[name]
	if (C) return <C />
	return <span style={{fontSize: 11, width: 16}}>{name}</span>
}

/* ── Row file icons ──────────────────────────── */

const RowIcon: FC<{name?: string; accent: string}> = ({name, accent}) => {
	const ds = '#b0b0b5'
	switch (name) {
		case 'folder':
			return (
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
					<path d="M1.5 4.5A1.5 1.5 0 013 3h3L7.5 4.5H13A1.5 1.5 0 0114.5 6v6A1.5 1.5 0 0113 13.5H3A1.5 1.5 0 011.5 12V4.5z"
						fill={accent} opacity="0.65" />
				</svg>
			)
		case 'doc-code':
			return (
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
					<path d="M4.5 1.5h5L13 5v8.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 013 13.5V3A1.5 1.5 0 014.5 1.5z"
						fill="#fff" stroke={ds} strokeWidth="0.8" />
					<path d="M9.5 1.5V5H13" stroke={ds} strokeWidth="0.8" />
					<path d="M6.2 9.2l-1.2 1.3 1.2 1.3M9.8 9.2l1.2 1.3-1.2 1.3"
						stroke={ds} strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			)
		case 'movie':
			return (
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
					<rect x="2.5" y="3.5" width="11" height="9" rx="1.5" fill="#fff" stroke={ds} strokeWidth="0.8" />
					<path d="M6.8 6.5v3l2.7-1.5-2.7-1.5z" fill={ds} />
				</svg>
			)
		case 'image':
			return (
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
					<rect x="2.5" y="3.5" width="11" height="9" rx="1.5" fill="#fff" stroke={ds} strokeWidth="0.8" />
					<circle cx="6" cy="7" r="1" stroke={ds} strokeWidth="0.7" />
					<path d="M3 11.5l3-2.5 2 1.5 1.5-1 3.5 2" stroke={ds} strokeWidth="0.7" />
				</svg>
			)
		case 'doc-text':
			return (
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
					<path d="M4.5 1.5h5L13 5v8.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 013 13.5V3A1.5 1.5 0 014.5 1.5z"
						fill="#fff" stroke={ds} strokeWidth="0.8" />
					<path d="M9.5 1.5V5H13" stroke={ds} strokeWidth="0.8" />
					<path d="M6 8.5h4M6 10.5h2.5" stroke={ds} strokeWidth="0.7" strokeLinecap="round" />
				</svg>
			)
		default:
			return (
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
					<path d="M4.5 1.5h5L13 5v8.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 013 13.5V3A1.5 1.5 0 014.5 1.5z"
						fill="#fff" stroke={ds} strokeWidth="0.8" />
					<path d="M9.5 1.5V5H13" stroke={ds} strokeWidth="0.8" />
				</svg>
			)
	}
}

/* ── Styles ───────────────────────────────────── */

const navBtn: CSSProperties = {
	width: 24,
	height: 24,
	borderRadius: 4,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}

const viewBtn: CSSProperties = {
	width: 24,
	height: 22,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: 4,
}

const tBtn: CSSProperties = {
	width: 26,
	height: 26,
	borderRadius: 6,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}

const cols: readonly {key: FinderColumnKey; label: string; w: string; sort?: boolean}[] = [
	{key: 'name', label: 'Name', w: '1.6fr', sort: true},
	{key: 'dateModified', label: 'Date Modified', w: '0.9fr'},
	{key: 'size', label: 'Size', w: '0.45fr'},
	{key: 'kind', label: 'Kind', w: '0.6fr'},
]

const gCols = cols.map((c) => c.w).join(' ')

const groupSidebar = (items: readonly FinderSidebarItem[]) => {
	const m = new Map<string, FinderSidebarItem[]>()
	for (const it of items) {
		const s = it.section ?? ''
		const l = m.get(s) ?? []
		l.push(it)
		m.set(s, l)
	}
	return [...m.entries()]
}

/* ── Shell ────────────────────────────────────── */

export const FinderShell: FC<FinderShellProps> = ({
	title,
	breadcrumb,
	sidebarItems,
	rows,
	theme,
	children,
	minHeight = 680,
	maxWidth = 1440,
}) => {
	const t = resolveFinderTokens(theme)
	const secs = groupSidebar(sidebarItems)

	return (
		<div
			style={{
				width: '100%',
				maxWidth,
				overflow: 'hidden',
				borderRadius: t.radius,
				boxShadow: t.shadow,
				background: t.windowBackground,
				fontFamily: t.fontFamily,
				fontSize: 13,
				color: t.textPrimary,
				WebkitFontSmoothing: 'antialiased',
			}}
		>
			{/* ── Toolbar ───────────── */}
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					height: t.toolbarHeight,
					padding: '0 12px',
					background: t.toolbarBackground,
					borderBottom: `0.5px solid ${t.border}`,
				}}
			>
				{/* Traffic lights */}
				<div style={{display: 'flex', gap: 8, flexShrink: 0}}>
					<div style={{width: 12, height: 12, borderRadius: 99, background: '#ff5f57'}} />
					<div style={{width: 12, height: 12, borderRadius: 99, background: '#febc2e'}} />
					<div style={{width: 12, height: 12, borderRadius: 99, background: '#28c840'}} />
				</div>

				{/* Nav arrows */}
				<div style={{display: 'flex', gap: 6, marginLeft: 14, color: '#86868b', flexShrink: 0}}>
					<div style={navBtn}><NavBack /></div>
					<div style={navBtn}><NavForward /></div>
				</div>

				{/* Centered title */}
				<div
					style={{
						flex: 1,
						textAlign: 'center',
						fontWeight: 600,
						fontSize: 13,
						letterSpacing: '-0.01em',
						overflow: 'hidden',
						whiteSpace: 'nowrap',
						textOverflow: 'ellipsis',
					}}
				>
					{title}
				</div>

				{/* View segmented control */}
				<div
					style={{
						display: 'flex',
						gap: 1,
						padding: '2px 2px',
						borderRadius: 6,
						background: 'rgba(0,0,0,0.06)',
						color: '#86868b',
						flexShrink: 0,
					}}
				>
					<div style={viewBtn}><ViewIcon /></div>
					<div
						style={{
							...viewBtn,
							color: '#1d1d1f',
							background: '#fff',
							boxShadow: '0 0.5px 2px rgba(0,0,0,0.12), 0 0 0 0.5px rgba(0,0,0,0.04)',
						}}
					>
						<ViewList />
					</div>
					<div style={viewBtn}><ViewCol /></div>
					<div style={viewBtn}><ViewGal /></div>
				</div>

				<div style={{...tBtn, color: '#86868b', flexShrink: 0, marginLeft: 4}}>
					<Dots3 />
				</div>

				<div style={{display: 'flex', gap: 2, color: '#86868b', flexShrink: 0}}>
					<div style={tBtn}><ShareUp /></div>
					<div style={tBtn}><TagPen /></div>
				</div>

				{/* Search */}
				<div
					style={{
						width: 150,
						height: 24,
						borderRadius: 5,
						background: t.searchBackground,
						display: 'flex',
						alignItems: 'center',
						gap: 4,
						padding: '0 7px',
						color: t.textSubtle,
						fontSize: 12,
						flexShrink: 0,
						marginLeft: 6,
					}}
				>
					<SearchMag />
					<span>Search</span>
				</div>
			</div>

			{/* ── Body ──────────────── */}
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: `${t.sidebarWidth}px 1fr`,
					minHeight,
				}}
			>
				{/* Sidebar */}
				<div
					style={{
						borderRight: `0.5px solid ${t.border}`,
						background: t.sidebarBackground,
						padding: '6px 8px',
						overflow: 'hidden',
					}}
				>
					{secs.map(([sec, items]) => (
						<div key={sec} style={{marginBottom: 10}}>
							{sec ? (
								<div
									style={{
										padding: '6px 8px 3px',
										color: t.textSubtle,
										fontSize: 11,
										fontWeight: 600,
									}}
								>
									{sec}
								</div>
							) : null}
							{items.map((it) => (
								<div
									key={it.id}
									style={{
										display: 'flex',
										alignItems: 'center',
										gap: 6,
										height: 24,
										padding: '0 6px',
										borderRadius: 5,
										background: it.active ? t.rowSelected : 'transparent',
										color: it.active ? t.textPrimary : t.textMuted,
										fontWeight: it.active ? 500 : 400,
										fontSize: 13,
									}}
								>
									<span style={{display: 'flex', flexShrink: 0}}>
										<SbIcon name={it.icon} />
									</span>
									<span
										style={{
											overflow: 'hidden',
											whiteSpace: 'nowrap',
											textOverflow: 'ellipsis',
										}}
									>
										{it.label}
									</span>
								</div>
							))}
						</div>
					))}
				</div>

				{/* Content */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						background: t.contentBackground,
					}}
				>
					{/* Column headers */}
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: gCols,
							alignItems: 'center',
							gap: 8,
							height: 22,
							padding: '0 16px',
							borderBottom: `0.5px solid ${t.border}`,
							color: t.textSubtle,
							fontSize: 11,
							fontWeight: 500,
						}}
					>
						{cols.map((c) => (
							<div key={c.key} style={{display: 'flex', alignItems: 'center', gap: 2}}>
								{c.label}
								{c.sort ? (
									<span style={{display: 'flex', opacity: 0.5}}><SortChev /></span>
								) : null}
							</div>
						))}
					</div>

					{/* Rows */}
					<div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
						{rows.map((row, i) => {
							const isDir = row.icon === 'folder'
							return (
								<div
									key={row.id}
									style={{
										display: 'grid',
										gridTemplateColumns: gCols,
										alignItems: 'center',
										gap: 8,
										height: t.rowHeight,
										padding: '0 16px',
										background: row.selected
											? t.rowSelected
											: i % 2 === 1
												? t.rowStripe
												: 'transparent',
										fontSize: 13,
									}}
								>
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
											gap: 3,
											minWidth: 0,
										}}
									>
										{isDir ? (
											<span style={{display: 'flex', color: t.textSubtle, width: 10, flexShrink: 0}}>
												<ChevDisclose open={row.open} />
											</span>
										) : (
											<span style={{width: 10, flexShrink: 0}} />
										)}
										<span style={{display: 'flex', flexShrink: 0}}>
											<RowIcon name={row.icon} accent={t.accent} />
										</span>
										{row.editing ? (
											<span
												style={{
													display: 'inline-flex',
													alignItems: 'center',
													height: 18,
													padding: '0 4px',
													borderRadius: 3,
													border: `2px solid ${t.accent}`,
													background: '#fff',
													boxShadow: '0 0 0 3px rgba(0,122,255,0.08)',
													fontSize: 13,
												}}
											>
												{row.draftName ?? row.name}
											</span>
										) : (
											<span
												style={{
													overflow: 'hidden',
													whiteSpace: 'nowrap',
													textOverflow: 'ellipsis',
												}}
											>
												{row.name}
											</span>
										)}
									</div>
									<div style={{color: t.textMuted, fontSize: 12}}>{row.dateModified ?? ''}</div>
									<div style={{color: t.textMuted, fontSize: 12}}>{row.size ?? '—'}</div>
									<div style={{color: t.textMuted, fontSize: 12}}>{row.kind ?? ''}</div>
								</div>
							)
						})}

						{/* Fill empty stripes */}
						{Array.from({length: Math.max(0, 22 - rows.length)}).map((_, i) => {
							const idx = rows.length + i
							return (
								<div
									key={`e-${idx}`}
									style={{
										height: t.rowHeight,
										background: idx % 2 === 1 ? t.rowStripe : 'transparent',
									}}
								/>
							)
						})}
					</div>

					{/* Path bar */}
					<div
						style={{
							height: 22,
							display: 'flex',
							alignItems: 'center',
							gap: 3,
							padding: '0 10px',
							borderTop: `0.5px solid ${t.border}`,
							background: t.pathBarBackground,
							color: t.textMuted,
							fontSize: 11,
						}}
					>
						{breadcrumb.map((seg, i) => (
							<span key={`${seg}-${i}`} style={{display: 'flex', alignItems: 'center', gap: 3}}>
								{i > 0 ? <span style={{color: t.textSubtle, fontSize: 9}}>›</span> : null}
								<PathFolder />
								<span>{seg}</span>
							</span>
						))}
					</div>

					{children}
				</div>
			</div>
		</div>
	)
}
