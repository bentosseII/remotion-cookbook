import React from 'react'
import {Composition, Folder} from 'remotion'

import {
  BrowserDocsScrollPreview,
  BrowserFormInteractionPreview,
  BrowserShellPreview,
} from './demo-ui/presets/browser'
import {
  CodexDiffPreview,
  CodexPromptPreview,
  CodexShellPreview,
  CodexStreamingPreview,
} from './demo-ui/presets/codex'
import {
  FinderOpenPreview,
  FinderRenamePreview,
  FinderSelectionPreview,
  FinderShellPreview,
} from './demo-ui/presets/finder'
import {
  SlackComposerPreview,
  SlackIncomingPreview,
  SlackShellPreview,
  SlackThreadPreview,
} from './demo-ui/presets/slack'
import {
  TerminalScrollPreview,
  TerminalShellPreview,
  TerminalStreamingPreview,
  TerminalTypingPreview,
} from './demo-ui/presets/terminal'

const FPS = 30
const WIDTH = 1920
const HEIGHT = 1080

export const DemoUiLibraryCompositions: React.FC = () => {
  return (
    <>
      <Folder name='Library-Terminal'>
        <Composition
          id='Library-Terminal-Shell'
          component={TerminalShellPreview}
          durationInFrames={90}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id='Library-Terminal-Typing'
          component={TerminalTypingPreview}
          durationInFrames={150}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id='Library-Terminal-Streaming'
          component={TerminalStreamingPreview}
          durationInFrames={180}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id='Library-Terminal-Scroll'
          component={TerminalScrollPreview}
          durationInFrames={150}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
      </Folder>
      <Folder name='Library-Browser'>
        <Composition
          id='Library-Browser-Shell'
          component={BrowserShellPreview}
          durationInFrames={90}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id='Library-Browser-Form'
          component={BrowserFormInteractionPreview}
          durationInFrames={180}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id='Library-Browser-Scroll'
          component={BrowserDocsScrollPreview}
          durationInFrames={150}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
      </Folder>
      <Folder name='Library-Finder'>
        <Composition
          id='Library-Finder-Shell'
          component={FinderShellPreview}
          durationInFrames={90}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id='Library-Finder-Selection'
          component={FinderSelectionPreview}
          durationInFrames={120}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id='Library-Finder-Open'
          component={FinderOpenPreview}
          durationInFrames={120}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id='Library-Finder-Rename'
          component={FinderRenamePreview}
          durationInFrames={120}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
      </Folder>
      <Folder name='Library-Slack'>
        <Composition
          id='Library-Slack-Shell'
          component={SlackShellPreview}
          durationInFrames={90}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id='Library-Slack-Composer'
          component={SlackComposerPreview}
          durationInFrames={180}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id='Library-Slack-Incoming'
          component={SlackIncomingPreview}
          durationInFrames={180}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id='Library-Slack-Thread'
          component={SlackThreadPreview}
          durationInFrames={150}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
      </Folder>
      <Folder name='Library-Codex'>
        <Composition
          id='Library-Codex-Shell'
          component={CodexShellPreview}
          durationInFrames={90}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id='Library-Codex-Prompt'
          component={CodexPromptPreview}
          durationInFrames={180}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id='Library-Codex-Streaming'
          component={CodexStreamingPreview}
          durationInFrames={180}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id='Library-Codex-Diff'
          component={CodexDiffPreview}
          durationInFrames={150}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
      </Folder>
    </>
  )
}
