import type {FC} from 'react'

import {
  getTerminalTokens,
  ghosttyTerminalTokens,
  type TerminalThemeTokens,
} from './tokens'
import {TerminalLineView} from './TerminalLineView'
import type {
  TerminalLine,
  TerminalPrompt,
  TerminalShellProps,
  TerminalViewportState,
} from './types'

const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max)
}

const resolveTerminalTokens = (
  theme: TerminalShellProps['theme'],
): TerminalThemeTokens => {
  if (!theme) {
    return ghosttyTerminalTokens
  }

  if (typeof theme === 'string') {
    return getTerminalTokens(theme)
  }

  return theme
}

export const buildTerminalPromptLine = (
  prompt: TerminalPrompt,
  promptInput?: string,
  cursor?: TerminalShellProps['cursor'],
): TerminalLine => {
  const symbol = prompt.symbol ?? '%'
  const showInlineCursor = cursor?.visible && cursor.placement !== 'block'

  return {
    id: 'prompt',
    segments: [
      {text: prompt.user, weight: 600},
      {text: '@', opacity: 0.7},
      {text: prompt.host, color: '#9cc8ff', weight: 500},
      {text: ' '},
      {text: prompt.cwd, weight: 500},
      {text: ' '},
      {text: symbol, weight: 700},
      {text: ' '},
      ...(promptInput ? [{text: promptInput, color: '#e7edf7'}] : []),
      ...(showInlineCursor
        ? [{text: cursor?.text ?? '▌', color: cursor?.color ?? '#f7e6d4', weight: 600}]
        : []),
    ],
    tone: 'accent',
  }
}

const getVisibleLines = (
  lines: readonly TerminalLine[],
  viewport: TerminalViewportState | undefined,
): TerminalLine[] => {
  const fallbackVisibleLineCount = lines.length
  const totalLineCount = Math.max(viewport?.totalLineCount ?? lines.length, lines.length)
  const visibleLineCount = clamp(
    viewport?.visibleLineCount ?? fallbackVisibleLineCount,
    1,
    Math.max(1, totalLineCount),
  )
  const maxFirstVisibleLine = Math.max(0, totalLineCount - visibleLineCount)
  const firstVisibleLine = clamp(viewport?.firstVisibleLine ?? 0, 0, maxFirstVisibleLine)

  return lines.slice(firstVisibleLine, firstVisibleLine + visibleLineCount)
}

const getScrollMetrics = (
  lines: readonly TerminalLine[],
  viewport: TerminalViewportState | undefined,
) => {
  const totalLineCount = Math.max(viewport?.totalLineCount ?? lines.length, lines.length)
  const visibleLineCount = clamp(
    viewport?.visibleLineCount ?? lines.length,
    1,
    Math.max(1, totalLineCount),
  )
  const maxFirstVisibleLine = Math.max(0, totalLineCount - visibleLineCount)
  const firstVisibleLine = clamp(viewport?.firstVisibleLine ?? 0, 0, maxFirstVisibleLine)
  const showScrollBar = Boolean(viewport?.showScrollBar) && totalLineCount > visibleLineCount
  const thumbHeightRatio = Math.max(0.14, visibleLineCount / totalLineCount)
  const progress = maxFirstVisibleLine === 0 ? 0 : firstVisibleLine / maxFirstVisibleLine
  const thumbTopRatio = progress * (1 - thumbHeightRatio)

  return {
    showScrollBar,
    thumbHeightRatio,
    thumbTopRatio,
  }
}

export const TerminalShell: FC<TerminalShellProps> = ({
  title,
  prompt,
  promptInput,
  lines,
  theme,
  shellLabel = 'zsh',
  subtitle,
  viewport,
  minHeight = 760,
  maxWidth = 1500,
  bodyFontSize,
  cursor,
  footer,
}) => {
  const tokens = resolveTerminalTokens(theme)
  const promptLine = prompt ? buildTerminalPromptLine(prompt, promptInput, cursor) : null
  const allLines = promptLine ? [promptLine, ...lines] : [...lines]
  const visibleLines = getVisibleLines(allLines, viewport)
  const scrollMetrics = getScrollMetrics(allLines, viewport)
  const cursorText = cursor?.text ?? '▌'
  const showBlockCursor = cursor?.visible && cursor.placement === 'block'

  return (
    <div
      style={{
        width: '100%',
        maxWidth,
        borderRadius: tokens.radius,
        overflow: 'hidden',
        border: `1px solid ${tokens.bodyEdge}`,
        background: tokens.windowBackground,
        boxShadow: tokens.shadow,
      }}
    >
      <div
        style={{
          height: tokens.titleBarHeight,
          display: 'grid',
          gridTemplateColumns: '140px 1fr 140px',
          alignItems: 'center',
          padding: '0 16px',
          background: tokens.titleBarBackground,
          borderBottom: `1px solid ${tokens.titleBarBorder}`,
          color: tokens.textMuted,
          fontFamily: '"SF Pro Display", "Inter", sans-serif',
          fontSize: 13,
          letterSpacing: 0.2,
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <div
            style={{width: 12, height: 12, borderRadius: 999, background: tokens.trafficRed}}
          />
          <div
            style={{width: 12, height: 12, borderRadius: 999, background: tokens.trafficYellow}}
          />
          <div
            style={{width: 12, height: 12, borderRadius: 999, background: tokens.trafficGreen}}
          />
        </div>

        <div
          style={{
            justifySelf: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            minWidth: 0,
          }}
        >
          <span
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              color: '#cbd6e4',
            }}
          >
            {title}
          </span>
          {subtitle ? (
            <span style={{color: tokens.textMuted, opacity: 0.8}}>{subtitle}</span>
          ) : null}
        </div>

        <div style={{justifySelf: 'end'}}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 54,
              height: 24,
              padding: '0 10px',
              borderRadius: 999,
              background: 'rgba(128, 148, 171, 0.12)',
              border: `1px solid ${tokens.titleBarBorder}`,
              color: '#c2d0df',
            }}
          >
            {shellLabel}
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          minHeight,
          padding: `${tokens.bodyPaddingY}px ${tokens.bodyPaddingX}px`,
          paddingRight: tokens.bodyPaddingX + (scrollMetrics.showScrollBar ? 18 : 0),
          background: tokens.bodyBackground,
          fontFamily: tokens.fontFamily,
          fontSize: bodyFontSize ?? tokens.bodyFontSize,
          lineHeight: tokens.lineHeight,
          color: tokens.textPrimary,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)',
          }}
        />

        <div style={{display: 'flex', flexDirection: 'column', gap: tokens.promptGap}}>
          {visibleLines.map((line, index) => (
            <TerminalLineView key={line.id ?? index} line={line} tokens={tokens} />
          ))}

          {showBlockCursor ? (
            <div
              style={{
                color: cursor.color ?? tokens.cursor,
                whiteSpace: 'pre',
              }}
            >
              {cursorText}
            </div>
          ) : null}
        </div>

        {scrollMetrics.showScrollBar ? (
          <div
            style={{
              position: 'absolute',
              top: tokens.bodyPaddingY,
              right: 8,
              bottom: tokens.bodyPaddingY,
              width: tokens.scrollBarWidth,
              borderRadius: 999,
              background: 'rgba(127, 145, 167, 0.08)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 1,
                right: 1,
                top: `${scrollMetrics.thumbTopRatio * 100}%`,
                height: `${scrollMetrics.thumbHeightRatio * 100}%`,
                borderRadius: 999,
                background: tokens.scrollThumbColor,
              }}
            />
          </div>
        ) : null}
      </div>

      {footer ? (
        <div
          style={{
            minHeight: 40,
            padding: '10px 18px',
            borderTop: `1px solid ${tokens.titleBarBorder}`,
            background: 'rgba(14, 18, 25, 0.96)',
            color: tokens.textMuted,
            fontFamily: '"SF Pro Display", "Inter", sans-serif',
            fontSize: 13,
          }}
        >
          {footer}
        </div>
      ) : null}
    </div>
  )
}
