import React from 'react'
import {BrowserScene} from '../cookbook-templates'

export const V21aInspectConsoleBrowser: React.FC = () => {
  return (
    <BrowserScene
      title='App Debug Session'
      url='http://localhost:3000/app'
      outroLabel='Inspect the console'
      outroSublabel='Find the real error'
    >
      <div style={{padding: 28, fontFamily: 'Inter, system-ui, sans-serif'}}>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 420px', gap: 14}}>
        <div style={{background: 'white', border: '1px solid #cbd5e1', borderRadius: 12, padding: 18, minHeight: 720}}>
          <h3 style={{marginTop: 0}}>App Preview</h3>
          <div style={{height: 280, border: '1px dashed #94a3b8', borderRadius: 10, display: 'grid', placeItems: 'center', color: '#64748b'}}>Broken feed widget</div>
        </div>
        <div style={{background: '#0f172a', color: '#e2e8f0', borderRadius: 12, padding: 14, fontFamily: 'ui-monospace, SFMono-Regular'}}>
          <div style={{fontSize: 18, marginBottom: 8}}>Console</div>
          <div style={{color: '#f87171'}}>TypeError: Cannot read properties of undefined (reading 'items')</div>
          <div style={{color: '#f87171', marginTop: 8}}>Failed to fetch /api/feed: 500</div>
          <div style={{color: '#fbbf24', marginTop: 8}}>Warning: stale cache detected</div>
        </div>
      </div>
    </div>
    </BrowserScene>
  )
}
