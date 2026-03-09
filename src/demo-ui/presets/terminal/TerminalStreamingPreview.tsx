import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion'

import {framesToSeconds} from '../../script'
import {ghosttyTerminalTokens, TerminalShell, terminalStateToShellProps} from '../../apps/terminal'
import {terminalStreamingBaseState, terminalStreamingScript} from '../../fixtures/terminal'
import {getTerminalStateAtTime} from '../../apps/terminal'

export const TerminalStreamingPreview = () => {
  const frame = useCurrentFrame()
  const {fps} = useVideoConfig()
  const state = getTerminalStateAtTime(
    terminalStreamingBaseState,
    terminalStreamingScript,
    framesToSeconds(frame, fps),
  )

  return (
    <AbsoluteFill
      style={{
        background: ghosttyTerminalTokens.frameBackground,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48,
      }}
    >
      <TerminalShell {...terminalStateToShellProps(state)} />
    </AbsoluteFill>
  )
}
