import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion'

import {framesToSeconds} from '../../script'
import {
  finderStateToShellProps,
  FinderShell,
  finderThemeTokens,
  getFinderStateAtTime,
} from '../../apps/finder'
import {finderBaseState, finderRenameScript, FinderPreviewFooter} from '../../fixtures/finder'

export const FinderRenamePreview = () => {
  const frame = useCurrentFrame()
  const {fps} = useVideoConfig()
  const state = getFinderStateAtTime(finderBaseState, finderRenameScript, framesToSeconds(frame, fps))

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
        <FinderPreviewFooter note='inline rename state' />
      </FinderShell>
    </AbsoluteFill>
  )
}
