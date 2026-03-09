import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion'

import {framesToSeconds} from '../../script'
import {
  finderStateToShellProps,
  FinderShell,
  finderThemeTokens,
  getFinderStateAtTime,
} from '../../apps/finder'
import {finderBaseState, finderOpenScript, FinderPreviewFooter} from '../../fixtures/finder'

export const FinderOpenPreview = () => {
  const frame = useCurrentFrame()
  const {fps} = useVideoConfig()
  const state = getFinderStateAtTime(finderBaseState, finderOpenScript, framesToSeconds(frame, fps))

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
        <FinderPreviewFooter note='folder open transition target' />
      </FinderShell>
    </AbsoluteFill>
  )
}
