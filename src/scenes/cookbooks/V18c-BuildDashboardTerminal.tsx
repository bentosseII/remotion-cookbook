import React from 'react'
import {TerminalScene} from '../cookbook-templates'

export const V18cBuildDashboardTerminal: React.FC = () => {
  return (
    <TerminalScene
      title='mini@mac-mini: ~/repos/ops-dashboard'
      command={'$ codex exec "build ops dashboard cards for automations + sessions + feed health"'}
      lines={[
        {"segments":[{"text":"Creating components..."}]},
        {"segments":[{"text":"✓ ","color":"#3fb950","weight":500},{"text":"src/components/AutomationCard.tsx"}]},
        {"segments":[{"text":"✓ ","color":"#3fb950","weight":500},{"text":"src/components/SessionCard.tsx"}]},
        {"segments":[{"text":"✓ ","color":"#3fb950","weight":500},{"text":"src/components/FeedHealthCard.tsx"}]},
        {"segments":[{"text":"✓ ","color":"#3fb950","weight":500},{"text":"src/app/dashboard/page.tsx"}]},
        {"segments":[{"text":""}]},
        {"segments":[{"text":"Running checks..."}]},
        {"segments":[{"text":"✓ ","color":"#3fb950","weight":500},{"text":"pnpm typecheck"}]},
        {"segments":[{"text":"✓ ","color":"#3fb950","weight":500},{"text":"pnpm test --run dashboard"}]},
        {"segments":[{"text":"Next: hook up stale-source alerts"}]}
      ]}
      outroLabel='Dashboard scaffolded'
      outroSublabel='Cards wired to data'
    />
  )
}
