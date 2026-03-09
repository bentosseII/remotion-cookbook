import {AbsoluteFill} from 'remotion'

import {FinderShell, finderThemeTokens} from '../../apps/finder'
import {
  FinderPreviewFooter,
  finderPreviewBreadcrumb,
  finderPreviewRows,
  finderPreviewSidebar,
} from '../../fixtures/finder'

export const FinderShellPreview = () => {
  return (
    <AbsoluteFill
      style={{
        background: finderThemeTokens.frameBackground,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48,
      }}
    >
      <FinderShell
        title='demo-ui-finder-ref'
        breadcrumb={finderPreviewBreadcrumb}
        sidebarItems={finderPreviewSidebar}
        rows={finderPreviewRows}
        maxWidth={1620}
      >
        <FinderPreviewFooter />
      </FinderShell>
    </AbsoluteFill>
  )
}
