import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion'

import {framesToSeconds} from '../../script'
import {
  browserStateToShellProps,
  BrowserShell,
  chromeBrowserTokens,
  getBrowserStateAtTime,
} from '../../apps/browser'
import {BrowserAuthInteractionPage, browserFormBaseState, browserFormScript} from '../../fixtures/browser'

export const BrowserFormInteractionPreview = () => {
  const frame = useCurrentFrame()
  const {fps} = useVideoConfig()
  const state = getBrowserStateAtTime(browserFormBaseState, browserFormScript, framesToSeconds(frame, fps))

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
        <BrowserAuthInteractionPage state={state} />
      </BrowserShell>
    </AbsoluteFill>
  )
}
