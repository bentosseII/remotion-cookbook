import React from 'react'
import {TerminalScene} from '../cookbook-templates'

export const V13bInstallToolsTerminal: React.FC = () => {
  return (
    <TerminalScene
      title='mini@mac-mini: ~/.agents/skills'
      command={`$ clawhub install agent-browser peekaboo gog`}
      lines={[
        {"segments":[{"text":"Resolving packages..."}]},
        {"segments":[{"text":"✓ ","color":"#3fb950","weight":500},{"text":"agent-browser@latest installed"}]},
        {"segments":[{"text":"✓ ","color":"#3fb950","weight":500},{"text":"peekaboo@latest installed"}]},
        {"segments":[{"text":"✓ ","color":"#3fb950","weight":500},{"text":"gog@latest installed"}]},
        {"segments":[{"text":""}]},
        {"segments":[{"text":"$ ","color":"#7aa2f7","weight":600},{"text":"which peekaboo"}]},
        {"segments":[{"text":"/usr/local/bin/peekaboo"}]},
        {"segments":[{"text":"$ ","color":"#7aa2f7","weight":600},{"text":"gog gmail list --limit 3"}]},
        {"segments":[{"text":"1. \"Team sync tomorrow\""}]},
        {"segments":[{"text":"2. \"Weekly product digest\""}]},
        {"segments":[{"text":"3. \"Invoice received\""}]}
      ]}
      outroLabel='Tooling unlocked'
      outroSublabel='Install + verify'
    />
  )
}
