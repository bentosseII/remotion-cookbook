import React from 'react'
import {BrowserScene} from '../cookbook-templates'

export const V16bCustomEmailBrowser: React.FC = () => {
  return (
    <BrowserScene
      title='Bites Mail'
      url='http://localhost:3000/inbox'
      outroLabel='Your custom email UI'
      outroSublabel='Built on Gmail data'
    >
      <div style={{padding: 28, fontFamily: 'Inter, system-ui, sans-serif'}}>
      <div style={{display: 'grid', gridTemplateColumns: '420px 1fr', gap: 0, height: 760, borderRadius: 14, overflow: 'hidden', border: '1px solid #cbd5e1'}}>
        <div style={{background: '#f1f5f9', borderRight: '1px solid #cbd5e1', padding: 16}}>
          <div style={{fontSize: 24, fontWeight: 700, marginBottom: 14}}>Inbox</div>
          {['Partnership follow-up', 'Newsletter ad slot', 'Team sync tomorrow', 'Invoice received'].map((s, i) => (
            <div key={s} style={{padding: 12, marginBottom: 8, borderRadius: 10, background: i === 0 ? 'white' : 'transparent', border: '1px solid #dbeafe'}}>{s}</div>
          ))}
        </div>
        <div style={{background: 'white', padding: 24}}>
          <div style={{fontSize: 28, fontWeight: 700}}>Partnership follow-up</div>
          <div style={{marginTop: 8, color: '#64748b'}}>From: Alice &lt;alice@acme.com&gt;</div>
          <p style={{marginTop: 18, fontSize: 20, color: '#334155', lineHeight: 1.5}}>Loved the workshop. We’d like to sponsor two placements in next week’s newsletter. Can you share pricing + slots?</p>
          <div style={{marginTop: 24, display: 'flex', gap: 10}}>
            <button style={{background: '#0ea5e9', color: 'white', border: 'none', borderRadius: 10, padding: '10px 14px'}}>Suggest reply</button>
            <button style={{background: '#10b981', color: 'white', border: 'none', borderRadius: 10, padding: '10px 14px'}}>Save draft</button>
          </div>
        </div>
      </div>
    </div>
    </BrowserScene>
  )
}
