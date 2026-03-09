import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion'

import {framesToSeconds} from '../../script'
import {codexStateToShellProps, CodexShell, codexThemeTokens, getCodexStateAtTime} from '../../apps/codex'
import {codexDiffBaseState, codexDiffScript} from '../../fixtures/codex'

export const CodexDiffPreview = () => {
  const frame = useCurrentFrame()
  const {fps} = useVideoConfig()
  const state = getCodexStateAtTime(codexDiffBaseState, codexDiffScript, framesToSeconds(frame, fps))

  return (
    <AbsoluteFill
      style={{
        background: codexThemeTokens.frameBackground,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48,
      }}
    >
      <CodexShell {...codexStateToShellProps(state)} />
    </AbsoluteFill>
  )
}
