import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion'

import {framesToSeconds} from '../../script'
import {getSlackStateAtTime, slackStateToShellProps, SlackShell, slackThemeTokens} from '../../apps/slack'
import {slackThreadBaseState, slackThreadScript} from '../../fixtures/slack'

export const SlackThreadPreview = () => {
  const frame = useCurrentFrame()
  const {fps} = useVideoConfig()
  const state = getSlackStateAtTime(slackThreadBaseState, slackThreadScript, framesToSeconds(frame, fps))

  return (
    <AbsoluteFill
      style={{
        background: slackThemeTokens.frameBackground,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48,
      }}
    >
      <SlackShell {...slackStateToShellProps(state)} maxWidth={1680} />
    </AbsoluteFill>
  )
}
