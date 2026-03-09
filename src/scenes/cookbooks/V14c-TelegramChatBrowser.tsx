import React from 'react'
import {BrowserScene} from '../cookbook-templates'

export const V14cTelegramChatBrowser: React.FC = () => {
  return (
    <BrowserScene
      title='Telegram Web'
      url='https://web.telegram.org/k/#@clawd'
      outroLabel='Agent responds in chat'
      outroSublabel='Like texting a teammate'
    >
      <div style={{padding: 28, fontFamily: 'Inter, system-ui, sans-serif'}}>
      <div style={{maxWidth: 980, margin: '0 auto', background: '#e5e7eb', borderRadius: 16, padding: 20}}>
        <div style={{fontSize: 20, color: '#334155', marginBottom: 16}}>Chat with @clawd</div>
        <div style={{display: 'grid', gap: 12}}>
          <div style={{justifySelf: 'end', background: '#dcfce7', borderRadius: 12, padding: '10px 14px', maxWidth: 680}}>Morning update?</div>
          <div style={{justifySelf: 'start', background: 'white', borderRadius: 12, padding: '10px 14px', maxWidth: 760}}>✅ Heartbeat complete. 4 priority emails, 3 meetings, all services healthy.</div>
          <div style={{justifySelf: 'end', background: '#dcfce7', borderRadius: 12, padding: '10px 14px', maxWidth: 680}}>Draft me a short plan for today.</div>
          <div style={{justifySelf: 'start', background: 'white', borderRadius: 12, padding: '10px 14px', maxWidth: 760}}>1) Ship dashboard alert panel
2) Review sponsor replies
3) Run evening workflow dry-run</div>
        </div>
      </div>
    </div>
    </BrowserScene>
  )
}
