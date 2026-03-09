import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion'

import {framesToSeconds} from '../../script'
import {getSlackStateAtTime, slackStateToShellProps, SlackShell, slackThemeTokens} from '../../apps/slack'
import {slackIncomingBaseState, slackIncomingScript} from '../../fixtures/slack'

export const SlackIncomingPreview = () => {
  const frame = useCurrentFrame()
  const {fps} = useVideoConfig()
  const state = getSlackStateAtTime(slackIncomingBaseState, slackIncomingScript, framesToSeconds(frame, fps))

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
