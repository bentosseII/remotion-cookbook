import React from 'react'
import {TerminalScene} from '../cookbook-templates'

export const V19cPipelineRunTerminal: React.FC = () => {
  return (
    <TerminalScene
      title='mini@mac-mini: ~/repos/content-engine'
      command={`$ pnpm workflow:run --profile newsletter`}
      lines={[
        {"segments":[{"text":"[source] ","color":"#d29922","weight":500},{"text":"fetched 142 items from 6 feeds"}]},
        {"segments":[{"text":"[normalize] ","color":"#d29922","weight":500},{"text":"valid: 139, rejected: 3"}]},
        {"segments":[{"text":"[dedupe] ","color":"#d29922","weight":500},{"text":"removed 44 duplicates"}]},
        {"segments":[{"text":"[classify] ","color":"#d29922","weight":500},{"text":"relevant: 27, maybe: 41, skip: 27"}]},
        {"segments":[{"text":"[output] ","color":"#d29922","weight":500},{"text":"wrote output/relevant.json"}]},
        {"segments":[{"text":"[output] ","color":"#d29922","weight":500},{"text":"wrote output/review.md"}]},
        {"segments":[{"text":"[notify] ","color":"#d29922","weight":500},{"text":"telegram digest sent"}]},
        {"segments":[{"text":""}]},
        {"segments":[{"text":"Run complete in 00:42.8 (runId: run_2026_03_05_1902)"}]}
      ]}
      outroLabel='Pipeline executed'
      outroSublabel='Items classified and published'
    />
  )
}
