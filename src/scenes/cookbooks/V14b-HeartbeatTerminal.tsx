import React from 'react'
import {TerminalScene} from '../cookbook-templates'

export const V14bHeartbeatTerminal: React.FC = () => {
  return (
    <TerminalScene
      title='ben-mini: ~/clawd'
      command={`$ openclaw heartbeat run --profile daily`}
      lines={[
        {"segments":[{"text":"Starting heartbeat profile: daily"}]},
        {"segments":[{"text":"• ","color":"#d29922","weight":500},{"text":"Gmail triage: 18 unread, 4 priority"}]},
        {"segments":[{"text":"• ","color":"#d29922","weight":500},{"text":"Calendar: 3 meetings today"}]},
        {"segments":[{"text":"• ","color":"#d29922","weight":500},{"text":"Services: 6/6 healthy"}]},
        {"segments":[{"text":"• ","color":"#d29922","weight":500},{"text":"Workflow runs overnight: 2 success, 0 failed"}]},
        {"segments":[{"text":""}]},
        {"segments":[{"text":"Drafted morning brief -> Telegram channel"}]},
        {"segments":[{"text":"Next heartbeat scheduled: 08:00"}]}
      ]}
      outroLabel='Heartbeat running'
      outroSublabel='Email + calendar checked'
    />
  )
}
