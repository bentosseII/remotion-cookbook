import type {CSSProperties, FC} from 'react'

import {chromeBrowserTokens, getBrowserTokens, type BrowserThemeTokens} from './tokens'
import type {BrowserShellProps} from './types'

const resolveBrowserTokens = (theme: BrowserShellProps['theme']): BrowserThemeTokens => {
	if (!theme) return chromeBrowserTokens
	if (typeof theme === 'string') return getBrowserTokens(theme)
	return theme
}

/* ── SVG icon components ─────────────────────── */

const NavBack: FC = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path
			d="M10 3L5 8l5 5"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

const NavForward: FC = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path
			d="M6 3l5 5-5 5"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

const NavRefresh: FC = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path
			d="M13.5 8A5.5 5.5 0 113 5.5"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
		/>
		<path
			d="M3 2v3.5h3.5"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

const LockIcon: FC = () => (
	<svg width="13" height="13" viewBox="0 0 16 16" fill="none">
		<rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
		<path
			d="M5 7V5a3 3 0 016 0v2"
			stroke="currentColor"
			strokeWidth="1.3"
			strokeLinecap="round"
		/>
	</svg>
)

const StarIcon: FC = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path
			d="M8 2l1.8 3.6 4 .6-2.9 2.8.7 4L8 11.1 4.4 13l.7-4L2.2 6.2l4-.6L8 2z"
			stroke="currentColor"
			strokeWidth="1.2"
			strokeLinejoin="round"
		/>
	</svg>
)

const MenuDotsIcon: FC = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
		<circle cx="8" cy="3.5" r="1.2" fill="currentColor" />
		<circle cx="8" cy="8" r="1.2" fill="currentColor" />
		<circle cx="8" cy="12.5" r="1.2" fill="currentColor" />
	</svg>
)

const GlobeIcon: FC<{size?: number}> = ({size = 14}) => (
	<svg width={size} height={size} viewBox="0 0 16 16" fill="none">
		<circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.1" />
		<path d="M2.5 6h11M2.5 10h11" stroke="currentColor" strokeWidth="0.9" />
		<ellipse cx="8" cy="8" rx="3" ry="6" stroke="currentColor" strokeWidth="1" />
	</svg>
)

const TabCloseIcon: FC = () => (
	<svg width="10" height="10" viewBox="0 0 12 12" fill="none">
		<path
			d="M3 3l6 6M9 3l-6 6"
			stroke="currentColor"
			strokeWidth="1.3"
			strokeLinecap="round"
		/>
	</svg>
)

const PlusIcon: FC = () => (
	<svg width="13" height="13" viewBox="0 0 14 14" fill="none">
		<path d="M7 3v8M3 7h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
	</svg>
)

/* ── Shared button style ─────────────────────── */

const iconBtn: CSSProperties = {
	width: 28,
	height: 28,
	borderRadius: 999,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}

/* ── Shell component ─────────────────────────── */

export const BrowserShell: FC<BrowserShellProps> = ({
	url,
	tabs,
	theme,
	pageTitle,
	children,
	minHeight = 760,
	maxWidth = 1520,
}) => {
	const t = resolveBrowserTokens(theme)

	return (
		<div
			style={{
				width: '100%',
				maxWidth,
				overflow: 'hidden',
				borderRadius: t.radius,
				boxShadow: t.shadow,
				border: `1px solid ${t.chromeBorder}`,
				background: t.windowBackground,
				fontFamily: t.fontFamily,
			}}
		>
			{/* ── Tab strip ────────────────── */}
			<div
				style={{
					display: 'flex',
					alignItems: 'end',
					height: t.tabStripHeight,
					padding: '0 10px 0 78px',
					background: t.chromeBackground,
					position: 'relative',
				}}
			>
				{/* Traffic lights */}
				<div
					style={{
						position: 'absolute',
						left: 14,
						top: 14,
						display: 'flex',
						gap: 8,
					}}
				>
					<div style={{width: 12, height: 12, borderRadius: 999, background: '#ff5f57'}} />
					<div style={{width: 12, height: 12, borderRadius: 999, background: '#febc2e'}} />
					<div style={{width: 12, height: 12, borderRadius: 999, background: '#28c840'}} />
				</div>

				{/* Tabs */}
				<div
					style={{
						display: 'flex',
						alignItems: 'end',
						gap: 1,
						flex: 1,
						overflow: 'hidden',
					}}
				>
					{tabs.map((tab) => {
						const isActive = tab.active === true
						return (
							<div
								key={tab.id}
								style={{
									minWidth: 140,
									maxWidth: 260,
									height: isActive ? 34 : 30,
									padding: '0 10px',
									display: 'flex',
									alignItems: 'center',
									gap: 7,
									borderTopLeftRadius: 8,
									borderTopRightRadius: 8,
									background: isActive ? t.tabActiveBackground : t.tabInactiveBackground,
									color: isActive ? t.tabActiveText : t.tabInactiveText,
									borderTop: isActive ? `1px solid ${t.chromeBorder}` : 'none',
									borderLeft: isActive ? `1px solid ${t.chromeBorder}` : 'none',
									borderRight: isActive ? `1px solid ${t.chromeBorder}` : 'none',
									marginBottom: isActive ? -1 : 3,
									position: 'relative',
									zIndex: isActive ? 2 : 1,
								}}
							>
								<span
									style={{
										color: isActive ? t.iconColor : t.tabInactiveText,
										flexShrink: 0,
										display: 'flex',
										opacity: isActive ? 1 : 0.7,
									}}
								>
									<GlobeIcon size={13} />
								</span>
								<span
									style={{
										flex: 1,
										overflow: 'hidden',
										whiteSpace: 'nowrap',
										textOverflow: 'ellipsis',
										fontSize: 12,
									}}
								>
									{tab.title}
								</span>
								{isActive ? (
									<span
										style={{
											flexShrink: 0,
											width: 18,
											height: 18,
											borderRadius: 999,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											color: t.iconColor,
										}}
									>
										<TabCloseIcon />
									</span>
								) : null}
							</div>
						)
					})}

					{/* New tab + */}
					<div
						style={{
							...iconBtn,
							width: 24,
							height: 24,
							marginBottom: 3,
							marginLeft: 4,
							color: t.iconColor,
						}}
					>
						<PlusIcon />
					</div>
				</div>

				{/* Right edge spacer */}
				<div style={{width: 28}} />

				{/* Bottom separator — active tab sits above this */}
				<div
					style={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						right: 0,
						height: 1,
						background: t.chromeBorder,
						zIndex: 1,
					}}
				/>
			</div>

			{/* ── Toolbar / Omnibox ────────── */}
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: 6,
					height: t.toolbarHeight,
					padding: '0 10px',
					background: t.toolbarBackground,
					borderBottom: `1px solid ${t.chromeBorder}`,
				}}
			>
				{/* Nav buttons */}
				<div style={{display: 'flex', alignItems: 'center', gap: 0, color: t.iconColor}}>
					<div style={iconBtn}>
						<NavBack />
					</div>
					<div style={iconBtn}>
						<NavForward />
					</div>
					<div style={iconBtn}>
						<NavRefresh />
					</div>
				</div>

				{/* Omnibox */}
				<div
					style={{
						flex: 1,
						height: 32,
						borderRadius: 999,
						background: t.omniboxBackground,
						border: `1px solid ${t.omniboxBorder}`,
						display: 'flex',
						alignItems: 'center',
						gap: 8,
						padding: '0 14px',
						overflow: 'hidden',
					}}
				>
					<span style={{color: t.iconColor, flexShrink: 0, display: 'flex'}}>
						<LockIcon />
					</span>
					<span
						style={{
							color: t.textPrimary,
							fontSize: 13,
							overflow: 'hidden',
							whiteSpace: 'nowrap',
							textOverflow: 'ellipsis',
						}}
					>
						{url}
					</span>
				</div>

				{/* Right icons */}
				<div style={{display: 'flex', alignItems: 'center', gap: 0, color: t.iconColor}}>
					<div style={iconBtn}>
						<StarIcon />
					</div>
					<div style={iconBtn}>
						<MenuDotsIcon />
					</div>
				</div>
			</div>

			{/* ── Page viewport ─────────────── */}
			<div style={{minHeight, background: t.pageBackground}}>
				{pageTitle ? (
					<div
						style={{
							height: 42,
							display: 'flex',
							alignItems: 'center',
							padding: '0 20px',
							borderBottom: `1px solid ${t.chromeBorder}`,
							color: t.textMuted,
							fontSize: 13,
						}}
					>
						{pageTitle}
					</div>
				) : null}
				{children}
			</div>
		</div>
	)
}
