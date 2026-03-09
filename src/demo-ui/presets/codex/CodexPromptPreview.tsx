import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion'

import {framesToSeconds} from '../../script'
import {codexStateToShellProps, CodexShell, codexThemeTokens, getCodexStateAtTime} from '../../apps/codex'
import {codexPromptBaseState, codexPromptScript} from '../../fixtures/codex'

export const CodexPromptPreview = () => {
  const frame = useCurrentFrame()
  const {fps} = useVideoConfig()
  const state = getCodexStateAtTime(codexPromptBaseState, codexPromptScript, framesToSeconds(frame, fps))

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
