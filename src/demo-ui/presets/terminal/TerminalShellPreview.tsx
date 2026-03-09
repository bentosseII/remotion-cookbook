import {AbsoluteFill} from 'remotion'

import {TerminalShell, ghosttyTerminalTokens} from '../../apps/terminal'
import {
  ghosttyPreviewLines,
  ghosttyPreviewPrompt,
  ghosttyPreviewPromptInput,
  ghosttyPreviewViewport,
} from '../../fixtures/terminal'

export const TerminalShellPreview = () => {
  return (
    <AbsoluteFill
      style={{
        background: ghosttyTerminalTokens.frameBackground,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48,
      }}
    >
      <TerminalShell
        title='remotion-cookbook'
        shellLabel='zsh'
        prompt={ghosttyPreviewPrompt}
        promptInput={ghosttyPreviewPromptInput}
        lines={ghosttyPreviewLines}
        viewport={ghosttyPreviewViewport}
        cursor={{visible: true}}
      />
    </AbsoluteFill>
  )
}
