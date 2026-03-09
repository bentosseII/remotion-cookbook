import React from 'react'
import {TerminalScene} from '../cookbook-templates'

export const V15bDogfoodDebugTerminal: React.FC = () => {
  return (
    <TerminalScene
      title='mini@mac-mini: ~/repos/app'
      command={`$ dogfood run --url http://localhost:3000 --flows core`}
      lines={[
        {"segments":[{"text":"Running flows: signup, create-item, filter, save"}]},
        {"segments":[{"text":"✗ ","color":"#ff7b72","weight":500},{"text":"create-item failed: button disabled unexpectedly"}]},
        {"segments":[{"text":"✗ ","color":"#ff7b72","weight":500},{"text":"filter failed: stale list after refresh"}]},
        {"segments":[{"text":""}]},
        {"segments":[{"text":"$ ","color":"#7aa2f7","weight":600},{"text":"codex exec \"fix failing create-item + filter refresh bugs\""}]},
        {"segments":[{"text":"Applied fix in src/components/TodoBoard.tsx"}]},
        {"segments":[{"text":""}]},
        {"segments":[{"text":"$ ","color":"#7aa2f7","weight":600},{"text":"dogfood run --flows core"}]},
        {"segments":[{"text":"✓ ","color":"#3fb950","weight":500},{"text":"signup passed"}]},
        {"segments":[{"text":"✓ ","color":"#3fb950","weight":500},{"text":"create-item passed"}]},
        {"segments":[{"text":"✓ ","color":"#3fb950","weight":500},{"text":"filter passed"}]},
        {"segments":[{"text":"✓ ","color":"#3fb950","weight":500},{"text":"save passed"}]}
      ]}
      outroLabel='Debug until green'
      outroSublabel='Automated QA loop'
    />
  )
}
