import React from 'react'
import {BrowserScene} from '../cookbook-templates'

export const V18aOpsDashboardBrowser: React.FC = () => {
  return (
    <BrowserScene
      title='Ops Dashboard'
      url='http://localhost:3000/dashboard'
      outroLabel='Mission control'
      outroSublabel='See what needs attention'
    >
      <div style={{padding: 28, fontFamily: 'Inter, system-ui, sans-serif'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14}}>
        <h2 style={{margin: 0, fontSize: 32, color: '#0f172a'}}>Operations Dashboard</h2>
        <div style={{fontSize: 15, color: '#64748b'}}>Last refresh: 19:02</div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12}}>
        {[
          ['Automations', '7 running', '#16a34a'],
          ['Agent sessions', '2 active', '#0ea5e9'],
          ['Feed health', '1 stale source', '#f59e0b'],
          ['Attention needed', '2 items', '#ef4444'],
        ].map(([label, value, color]) => (
          <div key={label} style={{background: 'white', border: '1px solid #cbd5e1', borderRadius: 12, padding: 14}}>
            <div style={{fontSize: 14, color: '#64748b'}}>{label}</div>
            <div style={{fontSize: 24, fontWeight: 700, color}}>{value}</div>
          </div>
        ))}
      </div>
      <div style={{marginTop: 14, background: 'white', border: '1px solid #cbd5e1', borderRadius: 12, padding: 14}}>
        <div style={{fontWeight: 700, marginBottom: 8}}>Pipeline stages</div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8}}>
          {['Sources ✓','Ingest ✓','Classify ✓','Output ✓'].map((s) => <div key={s} style={{padding: 10, background: '#f8fafc', borderRadius: 8}}>{s}</div>)}
        </div>
      </div>
    </div>
    </BrowserScene>
  )
}
