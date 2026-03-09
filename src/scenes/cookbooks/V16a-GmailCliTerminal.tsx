import React from 'react'
import {TerminalScene} from '../cookbook-templates'

export const V16aGmailCliTerminal: React.FC = () => {
  return (
    <TerminalScene
      title='mini@mac-mini: ~/repos/mail-ui'
      command={`$ gog gmail list --limit 20 --format json > data/inbox.json`}
      lines={[
        {"segments":[{"text":"Authenticated account: ben@bensbites.co"}]},
        {"segments":[{"text":"Fetched 20 messages from inbox"}]},
        {"segments":[{"text":"Saved -> data/inbox.json (42KB)"}]},
        {"segments":[{"text":""}]},
        {"segments":[{"text":"$ ","color":"#7aa2f7","weight":600},{"text":"jq \".messages[0] | {from, subject, labels}\" data/inbox.json"}]},
        {"segments":[{"text":"{"}]},
        {"segments":[{"text":"  "},{"text":"\"from\": \"Alice <alice@acme.com>\","}]},
        {"segments":[{"text":"  "},{"text":"\"subject\": \"Partnership follow-up\","}]},
        {"segments":[{"text":"  "},{"text":"\"labels\": [\"INBOX\", \"IMPORTANT\"]"}]},
        {"segments":[{"text":"}"}]}
      ]}
      outroLabel='Inbox pulled via CLI'
      outroSublabel='Structured data ready'
    />
  )
}
