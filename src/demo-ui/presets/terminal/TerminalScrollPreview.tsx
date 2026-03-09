import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion'

import {framesToSeconds} from '../../script'
import {ghosttyTerminalTokens, TerminalShell, terminalStateToShellProps} from '../../apps/terminal'
import {terminalScrollBaseState, terminalScrollScript} from '../../fixtures/terminal'
import {getTerminalStateAtTime} from '../../apps/terminal'

export const TerminalScrollPreview = () => {
  const frame = useCurrentFrame()
  const {fps} = useVideoConfig()
  const state = getTerminalStateAtTime(
    terminalScrollBaseState,
    terminalScrollScript,
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
