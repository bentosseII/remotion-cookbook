import React from 'react'
import {TerminalScene} from '../cookbook-templates'

export const V12cPiAgentTerminal: React.FC = () => {
  return (
    <TerminalScene
      title='mini@mac-mini: ~/repos/demo'
      command={'$ pi "load agents.md and summarise this repo in plain english"'}
      lines={[
        {"segments":[{"text":"$ ","color":"#7aa2f7","weight":600},{"text":"reading ./agents.md"}]},
        {"segments":[{"text":"✓ ","color":"#3fb950","weight":500},{"text":"communication mode: plain-english"}]},
        {"segments":[{"text":"✓ ","color":"#3fb950","weight":500},{"text":"build loop detected: plan > build > test > debug"}]},
        {"segments":[{"text":"$ ","color":"#7aa2f7","weight":600},{"text":"scanning project files..."}]},
        {"segments":[{"text":"  "},{"text":"- spec/01-dashboard.md"}]},
        {"segments":[{"text":"  "},{"text":"- src/app/page.tsx"}]},
        {"segments":[{"text":"  "},{"text":"- spec/progress.md"}]},
        {"segments":[{"text":""}]},
        {"segments":[{"text":"Summary: This repo builds a workflow dashboard."}]},
        {"segments":[{"text":"Next step: I can draft a step-by-step implementation plan."}]}
      ]}
      outroLabel='Pi agent running'
      outroSublabel='Context loaded'
    />
  )
}
