import {AbsoluteFill} from 'remotion'

import {BrowserShell, chromeBrowserTokens} from '../../apps/browser'
import {ChromePreviewPage, chromePreviewTabs} from '../../fixtures/browser'

export const BrowserShellPreview = () => {
  return (
    <AbsoluteFill
      style={{
        background: chromeBrowserTokens.frameBackground,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48,
      }}
    >
      <BrowserShell
        url='file:///tmp/chrome-clean-ref.html'
        tabs={chromePreviewTabs}
        maxWidth={1660}
      >
        <ChromePreviewPage />
      </BrowserShell>
    </AbsoluteFill>
  )
}
