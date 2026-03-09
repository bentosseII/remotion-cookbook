import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion'

import {framesToSeconds} from '../../script'
import {
  finderStateToShellProps,
  FinderShell,
  finderThemeTokens,
  getFinderStateAtTime,
} from '../../apps/finder'
import {finderBaseState, finderSelectionScript, FinderPreviewFooter} from '../../fixtures/finder'

export const FinderSelectionPreview = () => {
  const frame = useCurrentFrame()
  const {fps} = useVideoConfig()
  const state = getFinderStateAtTime(finderBaseState, finderSelectionScript, framesToSeconds(frame, fps))

  return (
    <AbsoluteFill
      style={{
        background: finderThemeTokens.frameBackground,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48,
      }}
    >
      <FinderShell {...finderStateToShellProps(state)} maxWidth={1620}>
        <FinderPreviewFooter note='row selection states' />
      </FinderShell>
    </AbsoluteFill>
  )
}
