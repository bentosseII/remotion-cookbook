import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion'

import {framesToSeconds} from '../../script'
import {
  browserStateToShellProps,
  BrowserShell,
  chromeBrowserTokens,
  getBrowserStateAtTime,
} from '../../apps/browser'
import {BrowserDocsScrollPage, browserDocsBaseState, browserDocsScrollScript} from '../../fixtures/browser'

export const BrowserDocsScrollPreview = () => {
  const frame = useCurrentFrame()
  const {fps} = useVideoConfig()
  const state = getBrowserStateAtTime(browserDocsBaseState, browserDocsScrollScript, framesToSeconds(frame, fps))

  return (
    <AbsoluteFill
      style={{
        background: chromeBrowserTokens.frameBackground,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48,
      }}
    >
      <BrowserShell {...browserStateToShellProps(state)} maxWidth={1660}>
        <BrowserDocsScrollPage state={state} />
      </BrowserShell>
    </AbsoluteFill>
  )
}
