import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion'

import {framesToSeconds} from '../../script'
import {getSlackStateAtTime, slackStateToShellProps, SlackShell, slackThemeTokens} from '../../apps/slack'
import {slackBaseState, slackComposerScript} from '../../fixtures/slack'

export const SlackComposerPreview = () => {
  const frame = useCurrentFrame()
  const {fps} = useVideoConfig()
  const state = getSlackStateAtTime(slackBaseState, slackComposerScript, framesToSeconds(frame, fps))

  return (
    <AbsoluteFill
      style={{
        background: slackThemeTokens.frameBackground,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48,
      }}
    >
      <SlackShell {...slackStateToShellProps(state)} maxWidth={1620} />
    </AbsoluteFill>
  )
}
