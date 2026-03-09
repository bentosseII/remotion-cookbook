import {AbsoluteFill} from 'remotion'

import {SlackShell, slackThemeTokens} from '../../apps/slack'
import {
  slackPreviewChannelSections,
  slackPreviewComposerText,
  slackPreviewMessages,
  slackPreviewWorkspaceItems,
} from '../../fixtures/slack'

export const SlackShellPreview = () => {
  return (
    <AbsoluteFill
      style={{
        background: slackThemeTokens.frameBackground,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48,
      }}
    >
      <SlackShell
        workspaceName='Factory'
        channelTitle='ship-room'
        channelSubtitle='Product + demos + launches'
        workspaceItems={slackPreviewWorkspaceItems}
        channelSections={slackPreviewChannelSections}
        messages={slackPreviewMessages}
        composerText={slackPreviewComposerText}
        maxWidth={1620}
      />
    </AbsoluteFill>
  )
}
