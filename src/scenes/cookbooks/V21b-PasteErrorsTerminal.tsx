import React from 'react'
import {TerminalScene} from '../cookbook-templates'

export const V21bPasteErrorsTerminal: React.FC = () => {
  return (
    <TerminalScene
      title='mini@mac-mini: ~/repos/app'
      command={'$ codex exec "here are console errors, explain root cause and apply smallest fix"'}
      lines={[
        {"segments":[{"text":"Console error pasted:"}]},
        {"segments":[{"text":"TypeError: Cannot read properties of undefined (reading \"items\")"}]},
        {"segments":[{"text":"at src/app/page.tsx:84:22"}]},
        {"segments":[{"text":""}]},
        {"segments":[{"text":"Root cause: API response can be null before load completes."}]},
        {"segments":[{"text":"Fix: add safe fallback + loading guard."}]},
        {"segments":[{"text":""}]},
        {"segments":[{"text":"$ ","color":"#7aa2f7","weight":600},{"text":"pnpm test --run app-page"}]},
        {"segments":[{"text":"✓ ","color":"#3fb950","weight":500},{"text":"4 tests passed"}]},
        {"segments":[{"text":"$ ","color":"#7aa2f7","weight":600},{"text":"dogfood run --flows core"}]},
        {"segments":[{"text":"✓ ","color":"#3fb950","weight":500},{"text":"no blocking errors"}]}
      ]}
      outroLabel='Use errors as input'
      outroSublabel='Small fix + retest'
    />
  )
}
