import type {FC} from 'react'

import {codexThemeTokens, getCodexTokens, type CodexThemeTokens} from './tokens'
import type {CodexShellProps, CodexToolRun, CodexTerminalLine} from './types'

const resolveCodexTokens = (theme: CodexShellProps['theme']): CodexThemeTokens => {
	if (!theme) return codexThemeTokens
	if (typeof theme === 'string') return getCodexTokens()
	return theme
}

/* ── SVG icons ───────────────────────────────── */

const SearchIcon: FC<{color: string}> = ({color}) => (
	<svg width="13" height="13" viewBox="0 0 16 16" fill="none">
		<circle cx="7" cy="7" r="4.5" stroke={color} strokeWidth="1.3" />
		<path d="M10.5 10.5l3 3" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
	</svg>
)

const ChevRight: FC<{open?: boolean; color: string}> = ({open, color}) => (
	<svg width="8" height="8" viewBox="0 0 8 8" fill="none"
		style={{transform: open ? 'rotate(90deg)' : 'none'}}>
		<path d="M2.5 1.5l3 2.5-3 2.5" stroke={color} strokeWidth="1.2"
			strokeLinecap="round" strokeLinejoin="round" />
	</svg>
)

const FileDoc: FC<{color: string}> = ({color}) => (
	<svg width="13" height="13" viewBox="0 0 16 16" fill="none">
		<path d="M4.5 1.5h5L13 5v8.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 013 13.5V3A1.5 1.5 0 014.5 1.5z"
			stroke={color} strokeWidth="1" opacity="0.6" />
		<path d="M9.5 1.5V5H13" stroke={color} strokeWidth="1" opacity="0.6" />
	</svg>
)

const Folder: FC<{color: string; open?: boolean}> = ({color, open}) => (
	<svg width="13" height="13" viewBox="0 0 16 16" fill="none">
		<path
			d={open
				? "M1.5 5A1.5 1.5 0 013 3.5h3l1.5 1.5H13A1.5 1.5 0 0114.5 6.5v5.5a1.5 1.5 0 01-1.5 1.5H3A1.5 1.5 0 011.5 12V5z"
				: "M1.5 4.5A1.5 1.5 0 013 3h3l1.5 1.5H13A1.5 1.5 0 0114.5 6v6a1.5 1.5 0 01-1.5 1.5H3A1.5 1.5 0 011.5 12V4.5z"}
			fill={color} opacity="0.55" />
	</svg>
)

const Spinner: FC<{color: string}> = ({color}) => (
	<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
		<circle cx="6" cy="6" r="4.5" stroke={color} strokeWidth="1.5"
			strokeDasharray="8 20" strokeLinecap="round" />
	</svg>
)

const Check: FC<{color: string}> = ({color}) => (
	<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
		<path d="M2.5 6.5L5 9l4.5-5" stroke={color}
			strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
)

const Warn: FC<{color: string}> = ({color}) => (
	<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
		<path d="M6 2L1 10.5h10L6 2z" stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
		<path d="M6 6v2" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
	</svg>
)

/* ── Codex logo mark ─────────────────────────── */

const CodexMark: FC<{size?: number}> = ({size = 18}) => (
	<svg width={size} height={size} viewBox="0 0 20 20" fill="none">
		<rect width="20" height="20" rx="5" fill="url(#codex-grad)" />
		<path d="M6 7.5L3.5 10 6 12.5M14 7.5L16.5 10 14 12.5M11 6.5l-2 7"
			stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		<defs>
			<linearGradient id="codex-grad" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
				<stop stopColor="#6472FF" />
				<stop offset="1" stopColor="#9B72FF" />
			</linearGradient>
		</defs>
	</svg>
)

/* ── Syntax coloring ─────────────────────────── */

type SynTok = {text: string; color: string}

const KW = new Set([
	'const', 'let', 'var', 'function', 'return', 'export', 'import',
	'from', 'if', 'else', 'for', 'while', 'switch', 'case', 'break',
	'default', 'new', 'class', 'extends', 'async', 'await', 'typeof',
	'interface', 'type', 'readonly', 'true', 'false', 'null', 'undefined',
])

const tokenize = (line: string, t: CodexThemeTokens): SynTok[] => {
	if (!line.trim()) return [{text: line, color: t.textPrimary}]
	const trimmed = line.trimStart()
	if (trimmed.startsWith('//') || trimmed.startsWith('#'))
		return [{text: line, color: t.syntaxComment}]

	const toks: SynTok[] = []
	const parts = line.split(/(\s+|[{}()[\]<>/;:,=.]+|'[^']*'|"[^"]*"|`[^`]*`)/)
	for (const p of parts) {
		if (!p) continue
		if (
			(p.startsWith("'") && p.endsWith("'")) ||
			(p.startsWith('"') && p.endsWith('"')) ||
			(p.startsWith('`') && p.endsWith('`'))
		) {
			toks.push({text: p, color: t.syntaxString})
		} else if (KW.has(p)) {
			toks.push({text: p, color: t.syntaxKeyword})
		} else if (/^\d+$/.test(p)) {
			toks.push({text: p, color: t.syntaxNumber})
		} else if (p.startsWith('<') || p.startsWith('/>')) {
			toks.push({text: p, color: t.syntaxTag})
		} else {
			toks.push({text: p, color: t.textPrimary})
		}
	}
	return toks
}

/* ── Tool status ─────────────────────────────── */

const StatusBadge: FC<{s: CodexToolRun['status']; t: CodexThemeTokens}> = ({s, t}) => {
	switch (s) {
		case 'success':
			return <Check color={t.success} />
		case 'warning':
			return <Warn color={t.warning} />
		case 'running':
			return <Spinner color={t.accent} />
		default:
			return (
				<span style={{width: 6, height: 6, borderRadius: 99,
					background: t.textSubtle, display: 'inline-block'}} />
			)
	}
}

const termColor = (line: CodexTerminalLine, t: CodexThemeTokens) => {
	switch (line.tone) {
		case 'success': return t.success
		case 'warning': return t.warning
		case 'muted': return t.textSubtle
		default: return t.textMuted
	}
}

/* ── Shell ────────────────────────────────────── */

export const CodexShell: FC<CodexShellProps> = ({
	title,
	prompt,
	promptInput,
	fileTree,
	editorTabs,
	codeLines,
	toolRuns,
	assistantBlocks,
	terminalLines,
	diffTitle,
	diffFiles,
	applyStatus,
	statusBarText,
	branchName,
	theme,
	minHeight = 760,
	maxWidth = 1560,
}) => {
	const t = resolveCodexTokens(theme)

	return (
		<div
			style={{
				width: '100%',
				maxWidth,
				minHeight,
				overflow: 'hidden',
				borderRadius: t.radius,
				boxShadow: t.shadow,
				background: t.windowBackground,
				display: 'flex',
				flexDirection: 'column',
				fontFamily: t.fontFamily,
				WebkitFontSmoothing: 'antialiased',
			}}
		>
			{/* ── Title bar ─────────── */}
			<div
				style={{
					height: t.titleBarHeight,
					display: 'flex',
					alignItems: 'center',
					padding: '0 16px',
					background: t.titleBarBackground,
					borderBottom: `1px solid ${t.border}`,
					flexShrink: 0,
					gap: 8,
				}}
			>
				{/* Traffic lights */}
				<div style={{display: 'flex', gap: 6, alignItems: 'center'}}>
					<div style={{width: 12, height: 12, borderRadius: 99, background: '#FF5F57'}} />
					<div style={{width: 12, height: 12, borderRadius: 99, background: '#FEBC2E'}} />
					<div style={{width: 12, height: 12, borderRadius: 99, background: '#28C840'}} />
				</div>

				{/* Spacer */}
				<div style={{flex: 1}} />

				{/* Centered title with icon */}
				<div
					style={{
						position: 'absolute',
						left: '50%',
						transform: 'translateX(-50%)',
						display: 'flex',
						alignItems: 'center',
						gap: 7,
					}}
				>
					<CodexMark size={16} />
					<span style={{color: t.textMuted, fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em'}}>
						{title || 'Codex'}
					</span>
				</div>

				{/* Search */}
				<div style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: 5,
							background: 'rgba(255,255,255,0.04)',
							border: `1px solid ${t.border}`,
							borderRadius: 6,
							padding: '4px 8px',
							cursor: 'text',
						}}
					>
						<SearchIcon color={t.textSubtle} />
						<span style={{color: t.textSubtle, fontSize: 12}}>Search</span>
					</div>
				</div>
			</div>

			{/* ── Main body ─────────── */}
			<div style={{display: 'grid', gridTemplateColumns: '220px 1fr 340px', flex: 1, minHeight: 0}}>

				{/* ── File tree ─────────── */}
				<div
					style={{
						borderRight: `1px solid ${t.border}`,
						background: t.panelBackground,
						padding: '10px 0',
						overflow: 'hidden',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					{/* Branch / project header */}
					{branchName && (
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: 6,
								padding: '0 14px 10px',
								marginBottom: 2,
								borderBottom: `1px solid ${t.border}`,
							}}
						>
							<svg width="10" height="10" viewBox="0 0 12 12" fill="none">
								<circle cx="3.5" cy="2.5" r="1.5" stroke={t.textSubtle} strokeWidth="1" />
								<circle cx="3.5" cy="9.5" r="1.5" stroke={t.textSubtle} strokeWidth="1" />
								<circle cx="8.5" cy="4.5" r="1.5" stroke={t.textSubtle} strokeWidth="1" />
								<path d="M3.5 4v4M3.5 4C3.5 4 7 4 7 4a1.5 1.5 0 011.5 1.5v0" stroke={t.textSubtle} strokeWidth="1" />
							</svg>
							<span style={{color: t.textSubtle, fontSize: 11, fontFamily: t.monoFamily}}>
								{branchName}
							</span>
						</div>
					)}

					<div
						style={{
							padding: '4px 14px 6px',
							fontSize: 10,
							textTransform: 'uppercase',
							letterSpacing: '0.1em',
							color: t.textSubtle,
							fontWeight: 600,
						}}
					>
						Explorer
					</div>

					{fileTree.map((item) => (
						<div
							key={item.id}
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: 4,
								height: 24,
								paddingLeft: 10 + (item.indent ?? 0) * 14,
								paddingRight: 8,
								background: item.active
									? `rgba(100, 114, 255, 0.12)`
									: 'transparent',
								borderLeft: item.active
									? `2px solid ${t.accent}`
									: '2px solid transparent',
								color: item.active ? t.textPrimary : t.textMuted,
								fontSize: 13,
								cursor: 'default',
							}}
						>
							{item.kind === 'folder' ? (
								<>
									<span style={{display: 'flex', color: t.textSubtle}}>
										<ChevRight open color={t.textSubtle} />
									</span>
									<Folder color="#C09553" open />
								</>
							) : (
								<>
									<span style={{width: 8}} />
									<FileDoc color={item.active ? t.accent : t.textSubtle} />
								</>
							)}
							<span style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
								{item.label}
							</span>
						</div>
					))}
				</div>

				{/* ── Editor + terminal ─── */}
				<div style={{display: 'flex', flexDirection: 'column', background: t.editorBackground}}>

					{/* Tab strip */}
					{editorTabs.length > 0 && (
						<div
							style={{
								display: 'flex',
								alignItems: 'stretch',
								height: 36,
								background: t.panelBackground,
								borderBottom: `1px solid ${t.border}`,
								flexShrink: 0,
							}}
						>
							{editorTabs.map((tab) => (
								<div
									key={tab.id}
									style={{
										minWidth: 110,
										maxWidth: 190,
										height: 36,
										padding: '0 14px',
										display: 'flex',
										alignItems: 'center',
										gap: 6,
										background: tab.active ? t.editorBackground : 'transparent',
										borderBottom: tab.active ? `2px solid ${t.accent}` : '2px solid transparent',
										borderRight: `1px solid ${t.border}`,
										color: tab.active ? t.textPrimary : t.textMuted,
										fontSize: 12,
										cursor: 'default',
									}}
								>
									<span style={{flex: 1, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
										{tab.label}
									</span>
									{tab.modified && (
										<span style={{width: 7, height: 7, borderRadius: 99,
											background: t.accent, flexShrink: 0, opacity: 0.8}} />
									)}
								</div>
							))}
						</div>
					)}

					{/* Code area */}
					<div style={{flex: 1, padding: '10px 0', overflow: 'hidden'}}>
						{codeLines.map((line, i) => {
							const stoks = tokenize(line, t)
							return (
								<div
									key={`${line}-${i}`}
									style={{
										display: 'flex',
										alignItems: 'center',
										height: 21,
										fontFamily: t.monoFamily,
										fontSize: 12.5,
										lineHeight: 1,
									}}
								>
									<div
										style={{
											width: 48,
											textAlign: 'right',
											paddingRight: 20,
											color: t.textSubtle,
											fontSize: 11.5,
											flexShrink: 0,
											userSelect: 'none',
										}}
									>
										{i + 1}
									</div>
									<div>
										{stoks.map((tok, ti) => (
											<span key={ti} style={{color: tok.color}}>{tok.text}</span>
										))}
									</div>
								</div>
							)
						})}
					</div>

					{/* Terminal panel */}
					{terminalLines.length > 0 && (
						<div
							style={{
								borderTop: `1px solid ${t.border}`,
								background: t.panelBackground,
								minHeight: 100,
								fontFamily: t.monoFamily,
								flexShrink: 0,
							}}
						>
							{/* Terminal tabs */}
							<div
								style={{
									display: 'flex',
									alignItems: 'stretch',
									height: 32,
									borderBottom: `1px solid ${t.border}`,
									padding: '0 4px',
								}}
							>
								{['Terminal', 'Output', 'Problems'].map((lbl, i) => (
									<div
										key={lbl}
										style={{
											padding: '0 10px',
											height: 32,
											display: 'flex',
											alignItems: 'center',
											fontSize: 11,
											fontFamily: t.fontFamily,
											fontWeight: 500,
											letterSpacing: '0.03em',
											borderBottom: i === 0 ? `2px solid ${t.accent}` : '2px solid transparent',
											color: i === 0 ? t.textPrimary : t.textMuted,
											marginBottom: -1,
										}}
									>
										{lbl}
									</div>
								))}
							</div>
							<div style={{padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 2}}>
								{terminalLines.map((line) => (
									<div
										key={line.id}
										style={{
											color: termColor(line, t),
											fontSize: 12.5,
											lineHeight: 1.55,
										}}
									>
										{line.text}
									</div>
								))}
							</div>
						</div>
					)}
				</div>

				{/* ── AI / Task panel ──── */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						borderLeft: `1px solid ${t.border}`,
						background: t.panelBackground,
					}}
				>
					{/* Panel header */}
					<div
						style={{
							height: 36,
							display: 'flex',
							alignItems: 'center',
							padding: '0 14px',
							borderBottom: `1px solid ${t.border}`,
							gap: 7,
							flexShrink: 0,
						}}
					>
						<CodexMark size={14} />
						<span
							style={{
								fontSize: 12,
								fontWeight: 600,
								color: t.textMuted,
								letterSpacing: '0.02em',
							}}
						>
							Codex
						</span>
						<span style={{flex: 1}} />
						{statusBarText && (
							<span
								style={{
									fontSize: 10,
									color: t.textSubtle,
									fontFamily: t.monoFamily,
									background: 'rgba(255,255,255,0.04)',
									borderRadius: 4,
									padding: '2px 6px',
								}}
							>
								{statusBarText}
							</span>
						)}
						<span
							style={{
								width: 22, height: 22,
								borderRadius: 6,
								background: 'rgba(255,255,255,0.05)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: t.textMuted,
								fontSize: 14,
								cursor: 'default',
							}}
						>
							+
						</span>
					</div>

					{/* Scrollable content */}
					<div
						style={{
							flex: 1,
							padding: '12px 12px',
							display: 'flex',
							flexDirection: 'column',
							gap: 8,
							overflow: 'hidden',
						}}
					>
						{/* Task prompt */}
						<div
							style={{
								borderRadius: 8,
								background: `rgba(100, 114, 255, 0.08)`,
								border: `1px solid rgba(100, 114, 255, 0.2)`,
								padding: '10px 12px',
							}}
						>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: 5,
									marginBottom: 6,
								}}
							>
								<span
									style={{
										fontSize: 9,
										fontWeight: 700,
										textTransform: 'uppercase',
										letterSpacing: '0.1em',
										color: t.accent,
										opacity: 0.8,
									}}
								>
									Task
								</span>
							</div>
							<div style={{color: t.textPrimary, fontSize: 13, lineHeight: 1.5}}>
								{promptInput || prompt}
							</div>
						</div>

						{/* Tool runs */}
						{toolRuns.length > 0 && (
							<div
								style={{
									borderRadius: 8,
									background: 'rgba(255,255,255,0.025)',
									border: `1px solid ${t.border}`,
									padding: '8px 10px',
								}}
							>
								<div
									style={{
										fontSize: 9,
										letterSpacing: '0.1em',
										textTransform: 'uppercase',
										color: t.textSubtle,
										fontWeight: 700,
										marginBottom: 7,
									}}
								>
									Tool calls
								</div>
								<div style={{display: 'flex', flexDirection: 'column', gap: 3}}>
									{toolRuns.map((run) => (
										<div
											key={run.id}
											style={{
												height: 26,
												borderRadius: 5,
												background: 'rgba(255,255,255,0.03)',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'space-between',
												padding: '0 8px',
												color: t.textMuted,
												fontSize: 12,
												fontFamily: t.monoFamily,
												gap: 6,
											}}
										>
											<span style={{overflow: 'hidden', whiteSpace: 'nowrap',
												textOverflow: 'ellipsis', flex: 1}}>{run.label}</span>
											<span style={{display: 'flex', alignItems: 'center', flexShrink: 0}}>
												<StatusBadge s={run.status} t={t} />
											</span>
										</div>
									))}
								</div>
							</div>
						)}

						{/* Assistant blocks */}
						{assistantBlocks.map((block) => (
							<div
								key={block.id}
								style={{
									borderRadius: 8,
									background: 'rgba(255,255,255,0.025)',
									border: `1px solid ${t.border}`,
									padding: '10px 12px',
								}}
							>
								<div style={{
									color: t.textPrimary,
									fontSize: 12,
									fontWeight: 600,
									marginBottom: 5,
									display: 'flex',
									alignItems: 'center',
									gap: 5,
								}}>
									<CodexMark size={12} />
									{block.title}
								</div>
								<div
									style={{
										color: t.textMuted,
										fontSize: 12,
										lineHeight: 1.6,
										whiteSpace: 'pre-wrap',
									}}
								>
									{block.body}
								</div>
							</div>
						))}

						{/* Diff / changes */}
						{(diffTitle || (diffFiles?.length ?? 0) > 0 || applyStatus) && (
							<div
								style={{
									borderRadius: 8,
									background: 'rgba(255,255,255,0.025)',
									border: `1px solid ${t.border}`,
									padding: '10px 12px',
								}}
							>
								<div style={{
									color: t.textPrimary,
									fontSize: 12,
									fontWeight: 600,
									marginBottom: 7,
								}}>
									{diffTitle || 'Changes'}
								</div>
								{diffFiles?.length ? (
									<div style={{display: 'flex', flexDirection: 'column', gap: 3}}>
										{diffFiles.map((f) => (
											<div
												key={f}
												style={{
													height: 24,
													padding: '0 8px',
													borderRadius: 5,
													background: `rgba(34, 197, 94, 0.07)`,
													border: `1px solid rgba(34, 197, 94, 0.12)`,
													display: 'flex',
													alignItems: 'center',
													gap: 7,
													color: t.textMuted,
													fontSize: 12,
													fontFamily: t.monoFamily,
												}}
											>
												<span style={{color: t.success, fontWeight: 700, fontSize: 11, lineHeight: 1}}>M</span>
												<span style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>{f}</span>
											</div>
										))}
									</div>
								) : null}
								{applyStatus && (
									<div style={{marginTop: 7, color: t.accent, fontSize: 11, fontWeight: 600}}>
										{applyStatus}
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
