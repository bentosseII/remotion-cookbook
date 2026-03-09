import type {CSSProperties, FC} from 'react'

import {getSlackTokens, slackThemeTokens, type SlackThemeTokens} from './tokens'
import type {SlackShellProps} from './types'

const resolveSlackTokens = (theme: SlackShellProps['theme']): SlackThemeTokens => {
	if (!theme) return slackThemeTokens
	if (typeof theme === 'string') return getSlackTokens()
	return theme
}

/* ── SVG icon helpers ────────────────────────── */

const HomeIcon: FC = () => (
	<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
		<path
			d="M3 7.5L9 3l6 4.5V15a1 1 0 01-1 1H4a1 1 0 01-1-1V7.5z"
			stroke="currentColor"
			strokeWidth="1.4"
			strokeLinejoin="round"
		/>
		<path d="M7 16v-5h4v5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
	</svg>
)

const ChatIcon: FC = () => (
	<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
		<path
			d="M3 4a2 2 0 012-2h8a2 2 0 012 2v7a2 2 0 01-2 2H7l-3 2.5V13H5a2 2 0 01-2-2V4z"
			stroke="currentColor"
			strokeWidth="1.4"
			strokeLinejoin="round"
		/>
	</svg>
)

const BellIcon: FC = () => (
	<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
		<path
			d="M7 14a2 2 0 004 0M4.5 11c0-1.5-.5-3-.5-4.5a5 5 0 0110 0c0 1.5-.5 3-.5 4.5H4.5z"
			stroke="currentColor"
			strokeWidth="1.4"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

const MoreHorizIcon: FC = () => (
	<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
		<circle cx="4.5" cy="9" r="1.2" fill="currentColor" />
		<circle cx="9" cy="9" r="1.2" fill="currentColor" />
		<circle cx="13.5" cy="9" r="1.2" fill="currentColor" />
	</svg>
)

const SearchIcon: FC<{size?: number}> = ({size = 14}) => (
	<svg width={size} height={size} viewBox="0 0 16 16" fill="none">
		<circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
		<path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
	</svg>
)

const SendIcon: FC = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path
			d="M2 8l12-5L10 8l4 5L2 8z"
			fill="currentColor"
			stroke="currentColor"
			strokeWidth="0.5"
			strokeLinejoin="round"
		/>
	</svg>
)

const PaperclipIcon: FC = () => (
	<svg width="15" height="15" viewBox="0 0 16 16" fill="none">
		<path
			d="M13.5 7.5L8 13a3.5 3.5 0 01-5-5l5.5-5.5a2 2 0 013 3L6 11a.5.5 0 01-.7-.7l5-5"
			stroke="currentColor"
			strokeWidth="1.3"
			strokeLinecap="round"
		/>
	</svg>
)

const SmileIcon: FC = () => (
	<svg width="15" height="15" viewBox="0 0 16 16" fill="none">
		<circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
		<path d="M5.5 9.5a3 3 0 005 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
		<circle cx="6" cy="6.5" r="0.8" fill="currentColor" />
		<circle cx="10" cy="6.5" r="0.8" fill="currentColor" />
	</svg>
)

const ChevronDown: FC = () => (
	<svg width="10" height="10" viewBox="0 0 12 12" fill="none">
		<path
			d="M3 4.5l3 3 3-3"
			stroke="currentColor"
			strokeWidth="1.4"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

const ThreadReplyIcon: FC = () => (
	<svg width="12" height="12" viewBox="0 0 14 14" fill="none">
		<path
			d="M5 5L2 8l3 3"
			stroke="currentColor"
			strokeWidth="1.3"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M2 8h7a3 3 0 003-3V3"
			stroke="currentColor"
			strokeWidth="1.3"
			strokeLinecap="round"
		/>
	</svg>
)

const BookmarkIcon: FC = () => (
	<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
		<path
			d="M5 2h6a1 1 0 011 1v11l-4-2.5L4 14V3a1 1 0 011-1z"
			stroke="currentColor"
			strokeWidth="1.2"
			strokeLinejoin="round"
		/>
	</svg>
)

const FilterIcon: FC = () => (
	<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
		<path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
	</svg>
)

/* ── Formatting bar buttons (text-based for simplicity) ── */

const fmtBtn: CSSProperties = {
	width: 26,
	height: 26,
	borderRadius: 4,
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: 13,
}

/* ── Rail nav button ─────────────────────────── */

const railBtn: CSSProperties = {
	width: 36,
	height: 36,
	borderRadius: 8,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}

/* ── Shell ────────────────────────────────────── */

export const SlackShell: FC<SlackShellProps> = ({
	workspaceName,
	channelTitle,
	channelSubtitle,
	workspaceItems,
	channelSections,
	messages,
	composerText,
	threadTitle,
	threadMessages,
	typingIndicatorLabel,
	unreadLabel,
	theme,
	minHeight = 760,
	maxWidth = 1560,
}) => {
	const t = resolveSlackTokens(theme)
	const hasThreadPane = Boolean(threadTitle && threadMessages?.length)

	return (
		<div
			style={{
				width: '100%',
				maxWidth,
				overflow: 'hidden',
				borderRadius: t.radius,
				boxShadow: t.shadow,
				border: `1px solid ${t.border}`,
				background: t.windowBackground,
				display: 'grid',
				gridTemplateColumns: hasThreadPane
					? `${t.railWidth}px ${t.sidebarWidth}px 1fr 310px`
					: `${t.railWidth}px ${t.sidebarWidth}px 1fr`,
				minHeight,
				fontFamily: t.fontFamily,
			}}
		>
			{/* ── Workspace rail ──────────── */}
			<div
				style={{
					background: t.railBackground,
					borderRight: `1px solid ${t.border}`,
					padding: '12px 0',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 4,
				}}
			>
				{/* Workspace icons */}
				{workspaceItems.map((item) => (
					<div
						key={item.id}
						style={{
							width: 36,
							height: 36,
							borderRadius: 10,
							background: item.color,
							color: '#ffffff',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontSize: 13,
							fontWeight: 700,
							boxShadow: item.active ? '0 0 0 2px rgba(255,255,255,0.15)' : 'none',
						}}
					>
						{item.label}
					</div>
				))}

				{/* Divider */}
				<div
					style={{
						width: 24,
						height: 1,
						background: t.border,
						margin: '6px 0',
					}}
				/>

				{/* Nav buttons */}
				<div style={{...railBtn, color: t.textPrimary}}>
					<HomeIcon />
				</div>
				<div style={{...railBtn, color: t.textMuted}}>
					<ChatIcon />
				</div>
				<div style={{...railBtn, color: t.textMuted}}>
					<BellIcon />
				</div>
				<div style={{...railBtn, color: t.textMuted}}>
					<MoreHorizIcon />
				</div>
			</div>

			{/* ── Sidebar ────────────────── */}
			<div
				style={{
					background: t.sidebarBackground,
					borderRight: `1px solid ${t.border}`,
					padding: '14px 12px',
					color: t.textMuted,
					display: 'flex',
					flexDirection: 'column',
					gap: 0,
				}}
			>
				{/* Workspace name + chevron */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 6,
						marginBottom: 4,
					}}
				>
					<div style={{fontSize: 18, fontWeight: 700, color: t.textPrimary}}>
						{workspaceName}
					</div>
					<span style={{color: t.textSubtle, display: 'flex'}}>
						<ChevronDown />
					</span>
				</div>

				{/* Online count */}
				<div style={{fontSize: 12, color: t.textSubtle, marginBottom: 14}}>
					<span
						style={{
							display: 'inline-block',
							width: 7,
							height: 7,
							borderRadius: 999,
							background: t.onlineGreen,
							marginRight: 5,
							verticalAlign: 'middle',
						}}
					/>
					12 online
				</div>

				{/* Search bar */}
				<div
					style={{
						height: 30,
						borderRadius: 6,
						background: 'rgba(255,255,255,0.06)',
						border: `1px solid ${t.border}`,
						display: 'flex',
						alignItems: 'center',
						gap: 6,
						padding: '0 8px',
						marginBottom: 16,
						color: t.textSubtle,
						fontSize: 13,
					}}
				>
					<SearchIcon size={13} />
					<span>Search {workspaceName}</span>
				</div>

				{/* Channel sections */}
				<div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
					{channelSections.map((section) => (
						<div key={section.id}>
							<div
								style={{
									marginBottom: 6,
									fontSize: 11,
									letterSpacing: '0.06em',
									textTransform: 'uppercase',
									color: t.textSubtle,
									fontWeight: 700,
									padding: '0 8px',
								}}
							>
								{section.label}
							</div>
							<div style={{display: 'flex', flexDirection: 'column', gap: 1}}>
								{section.items.map((channel) => (
									<div
										key={channel.id}
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											height: 28,
											padding: '0 8px',
											borderRadius: 6,
											background: channel.active
												? 'rgba(255,255,255,0.10)'
												: 'transparent',
											color: channel.active ? t.textPrimary : t.textMuted,
											fontSize: 14,
											fontWeight: channel.active ? 600 : 400,
										}}
									>
										<span style={{display: 'flex', alignItems: 'center', gap: 4}}>
											{channel.kind === 'dm' ? (
												<span
													style={{
														display: 'inline-block',
														width: 8,
														height: 8,
														borderRadius: 999,
														background: t.onlineGreen,
														flexShrink: 0,
													}}
												/>
											) : (
												<span style={{fontSize: 13, color: t.textSubtle, width: 14}}>
													#
												</span>
											)}
											{channel.label}
										</span>
										{channel.unreadCount ? (
											<span
												style={{
													minWidth: 18,
													height: 18,
													padding: '0 5px',
													borderRadius: 999,
													background: 'rgba(62, 166, 255, 0.2)',
													color: '#d4ecff',
													display: 'inline-flex',
													alignItems: 'center',
													justifyContent: 'center',
													fontSize: 11,
													fontWeight: 700,
												}}
											>
												{channel.unreadCount}
											</span>
										) : null}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* ── Main content ────────────── */}
			<div style={{display: 'flex', flexDirection: 'column', background: t.contentBackground}}>
				{/* Header */}
				<div
					style={{
						height: t.headerHeight,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						padding: '0 16px',
						background: t.headerBackground,
						borderBottom: `1px solid ${t.border}`,
					}}
				>
					<div>
						<div style={{fontSize: 16, fontWeight: 700, color: t.textPrimary}}>
							# {channelTitle}
						</div>
						{channelSubtitle ? (
							<div style={{marginTop: 2, fontSize: 12, color: t.textSubtle}}>
								{channelSubtitle}
							</div>
						) : null}
					</div>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: 6,
							color: t.textMuted,
						}}
					>
						<span style={{display: 'flex'}}>
							<BookmarkIcon />
						</span>
						<span style={{display: 'flex'}}>
							<SearchIcon />
						</span>
						<span style={{display: 'flex'}}>
							<FilterIcon />
						</span>
					</div>
				</div>

				{/* Messages + composer */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						flex: 1,
					}}
				>
					{/* Message feed */}
					<div
						style={{
							padding: '14px 18px 8px',
							display: 'flex',
							flexDirection: 'column',
							gap: 10,
						}}
					>
						{unreadLabel ? (
							<div
								style={{
									alignSelf: 'center',
									height: 24,
									padding: '0 10px',
									borderRadius: 999,
									background: 'rgba(62, 166, 255, 0.14)',
									color: '#d4ecff',
									display: 'inline-flex',
									alignItems: 'center',
									fontSize: 11,
									fontWeight: 700,
								}}
							>
								{unreadLabel}
							</div>
						) : null}

						{messages.map((message) => (
							<div
								key={message.id}
								style={{
									display: 'grid',
									gridTemplateColumns: '36px 1fr',
									gap: 10,
								}}
							>
								{/* Avatar */}
								<div
									style={{
										width: 36,
										height: 36,
										borderRadius: 8,
										background: message.avatar,
										color: '#ffffff',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										fontSize: 13,
										fontWeight: 700,
									}}
								>
									{message.author.slice(0, 2).toUpperCase()}
								</div>

								<div>
									{/* Author + time */}
									<div style={{display: 'flex', alignItems: 'baseline', gap: 8}}>
										<span
											style={{
												color: t.textPrimary,
												fontSize: 14,
												fontWeight: 700,
											}}
										>
											{message.author}
										</span>
										<span style={{color: t.textSubtle, fontSize: 11}}>
											{message.timestamp}
										</span>
									</div>

									{/* Body */}
									<div
										style={{
											marginTop: 2,
											color: message.mention ? t.mention : t.textMuted,
											fontSize: 14,
											lineHeight: 1.5,
											whiteSpace: 'pre-wrap',
										}}
									>
										{message.text}
									</div>

									{/* Thread reply link */}
									{message.secondaryText ? (
										<div
											style={{
												marginTop: 6,
												display: 'flex',
												alignItems: 'center',
												gap: 4,
												color: t.linkText,
												fontSize: 12,
												fontWeight: 600,
											}}
										>
											<ThreadReplyIcon />
											<span>{message.secondaryText}</span>
										</div>
									) : null}

									{/* Reactions */}
									{message.reactions?.length ? (
										<div style={{display: 'flex', gap: 6, marginTop: 6}}>
											{message.reactions.map((reaction) => (
												<div
													key={`${message.id}-${reaction.emoji}`}
													style={{
														height: 26,
														padding: '0 8px',
														borderRadius: 999,
														background: 'rgba(255,255,255,0.05)',
														border: `1px solid ${t.border}`,
														display: 'inline-flex',
														alignItems: 'center',
														gap: 5,
														color: t.textPrimary,
														fontSize: 12,
													}}
												>
													<span>{reaction.emoji}</span>
													<span>{reaction.count}</span>
												</div>
											))}
										</div>
									) : null}
								</div>
							</div>
						))}
					</div>

					{/* Composer area */}
					<div style={{padding: '12px 16px 14px'}}>
						{typingIndicatorLabel ? (
							<div
								style={{
									marginBottom: 8,
									color: t.textSubtle,
									fontSize: 12,
									display: 'flex',
									alignItems: 'center',
									gap: 6,
								}}
							>
								<span
									style={{
										display: 'inline-flex',
										gap: 2,
									}}
								>
									{[0, 1, 2].map((i) => (
										<span
											key={i}
											style={{
												width: 4,
												height: 4,
												borderRadius: 999,
												background: t.textSubtle,
												opacity: 0.4 + i * 0.2,
											}}
										/>
									))}
								</span>
								{typingIndicatorLabel}
							</div>
						) : null}

						<div
							style={{
								borderRadius: 10,
								background: t.composerBackground,
								border: `1px solid ${t.composerBorder}`,
								overflow: 'hidden',
							}}
						>
							{/* Formatting toolbar */}
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: 2,
									padding: '6px 10px',
									borderBottom: `1px solid ${t.border}`,
								}}
							>
								<div style={{...fmtBtn, fontWeight: 700, color: t.textSubtle}}>B</div>
								<div
									style={{
										...fmtBtn,
										fontStyle: 'italic',
										color: t.textSubtle,
									}}
								>
									I
								</div>
								<div
									style={{
										...fmtBtn,
										textDecoration: 'line-through',
										color: t.textSubtle,
									}}
								>
									S
								</div>
								<div
									style={{
										...fmtBtn,
										fontSize: 11,
										fontFamily: 'monospace',
										color: t.textSubtle,
									}}
								>
									{'</>'}
								</div>
								<div style={{flex: 1}} />
								<div style={{...fmtBtn, color: t.textSubtle}}>
									<PaperclipIcon />
								</div>
								<div style={{...fmtBtn, color: t.textSubtle}}>
									<SmileIcon />
								</div>
							</div>

							{/* Text area */}
							<div
								style={{
									minHeight: 44,
									padding: '10px 12px',
									color: composerText ? t.textPrimary : t.textSubtle,
									fontSize: 14,
									lineHeight: 1.4,
								}}
							>
								{composerText || `Message #${channelTitle}`}
							</div>

							{/* Send row */}
							<div
								style={{
									display: 'flex',
									justifyContent: 'flex-end',
									padding: '4px 10px 8px',
								}}
							>
								<div
									style={{
										width: 30,
										height: 28,
										borderRadius: 6,
										background: composerText ? t.accent : 'rgba(255,255,255,0.06)',
										color: composerText ? '#ffffff' : t.textSubtle,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<SendIcon />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* ── Thread pane ─────────────── */}
			{hasThreadPane ? (
				<div
					style={{
						background: '#141118',
						borderLeft: `1px solid ${t.border}`,
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<div
						style={{
							height: t.headerHeight,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: '0 14px',
							borderBottom: `1px solid ${t.border}`,
							color: t.textPrimary,
							fontSize: 14,
							fontWeight: 700,
						}}
					>
						<span>{threadTitle}</span>
						<span style={{color: t.textSubtle, fontSize: 16, cursor: 'pointer'}}>×</span>
					</div>
					<div
						style={{
							padding: '14px',
							display: 'flex',
							flexDirection: 'column',
							gap: 14,
						}}
					>
						{threadMessages?.map((message) => (
							<div key={message.id}>
								<div style={{display: 'flex', alignItems: 'center', gap: 6}}>
									<span
										style={{
											color: t.textPrimary,
											fontSize: 13,
											fontWeight: 700,
										}}
									>
										{message.author}
									</span>
									<span style={{color: t.textSubtle, fontSize: 11}}>
										{message.timestamp}
									</span>
								</div>
								<div
									style={{
										marginTop: 3,
										color: t.textMuted,
										fontSize: 13,
										lineHeight: 1.5,
									}}
								>
									{message.text}
								</div>
							</div>
						))}
					</div>
				</div>
			) : null}
		</div>
	)
}
