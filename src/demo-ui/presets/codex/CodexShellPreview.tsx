import {AbsoluteFill} from 'remotion'

import {CodexShell, codexThemeTokens} from '../../apps/codex'
import {
  codexPreviewAssistantBlocks,
  codexPreviewCodeLines,
  codexPreviewEditorTabs,
  codexPreviewFileTree,
  codexPreviewTerminalLines,
  codexPreviewToolRuns,
} from '../../fixtures/codex'

export const CodexShellPreview = () => {
  return (
    <AbsoluteFill
      style={{
        background: codexThemeTokens.frameBackground,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48,
      }}
    >
      <CodexShell
        title='remotion-cookbook'
        prompt='Build a browser shell that feels like Chrome without cloning Chrome 1:1.'
        fileTree={codexPreviewFileTree}
        editorTabs={codexPreviewEditorTabs}
        codeLines={codexPreviewCodeLines}
        toolRuns={codexPreviewToolRuns}
        assistantBlocks={codexPreviewAssistantBlocks}
        terminalLines={codexPreviewTerminalLines}
        branchName='main'
        statusBarText='Ln 3, Col 1'
      />
    </AbsoluteFill>
  )
}
