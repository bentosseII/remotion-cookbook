import React from 'react'
import {TerminalScene} from '../cookbook-templates'

export const V20bSimplerTermsTerminal: React.FC = () => {
  return (
    <TerminalScene
      title='mini@mac-mini: ~/repos/app'
      command={'$ pi "explain this architecture in simpler terms"'}
      lines={[
        {"segments":[{"text":"Original: \"Implement normalized ingestion with staged transforms.\""}]},
        {"segments":[{"text":""}]},
        {"segments":[{"text":"Simpler:"}]},
        {"segments":[{"text":"- Pull data from sources"}]},
        {"segments":[{"text":"- Clean it into one consistent format"}]},
        {"segments":[{"text":"- Label what is useful"}]},
        {"segments":[{"text":"- Save results into easy-to-read files"}]},
        {"segments":[{"text":""}]},
        {"segments":[{"text":"Next action: test one stage at a time."}]}
      ]}
      outroLabel='Ask for clarity'
      outroSublabel='Agent rephrases'
    />
  )
}
