import React from 'react'
import {EditorScene} from '../cookbook-templates'

export const V15cSpecProgressEditor: React.FC = () => {
  return (
    <EditorScene
      filename='spec/progress.md'
      sidebar={[
        {name: 'spec', type: 'folder', indent: 0, active: false},
        {name: '01-core-feed.md', type: 'file', indent: 1, active: false},
        {name: '02-ui-upgrade.md', type: 'file', indent: 1, active: false},
        {name: '03-test-and-ship.md', type: 'file', indent: 1, active: false},
        {name: 'progress.md', type: 'file', indent: 1, active: true}
      ]}
      lines={[
        {text: "# Build Progress"},
        {text: ""},
        {text: "- [x] 01-core-feed.md"},
        {text: "- [x] 02-ui-upgrade.md"},
        {text: "- [ ] 03-test-and-ship.md"},
        {text: ""},
        {text: "## Latest Update"},
        {text: "- dogfood failures fixed in TodoBoard.tsx"},
        {text: "- reran QA: all core checks passing"},
        {text: "- next: deploy preview + smoke test on mobile"}
      ]}
      outroLabel='Track the work'
      outroSublabel='Specs + progress stay aligned'
    />
  )
}
