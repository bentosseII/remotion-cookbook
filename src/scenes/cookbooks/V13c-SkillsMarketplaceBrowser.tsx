import React from 'react'
import {BrowserScene} from '../cookbook-templates'

export const V13cSkillsMarketplaceBrowser: React.FC = () => {
  return (
    <BrowserScene
      title='Skills Marketplace'
      url='https://skills.sh/marketplace'
      outroLabel='Discover capabilities'
      outroSublabel='Install in one command'
    >
      <div style={{padding: 28, fontFamily: 'Inter, system-ui, sans-serif'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 18}}>
        <h2 style={{margin: 0, fontSize: 34, color: '#0f172a'}}>skills.sh marketplace</h2>
        <div style={{padding: '10px 14px', borderRadius: 10, background: '#e2e8f0', fontSize: 18}}>Search: browser</div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16}}>
        {['agent-browser', 'peekaboo', 'summarize', 'gog', 'workflow-canvas', 'healthcheck'].map((name) => (
          <div key={name} style={{background: 'white', border: '1px solid #e2e8f0', borderRadius: 14, padding: 18}}>
            <div style={{fontSize: 22, fontWeight: 700, color: '#0f172a'}}>{name}</div>
            <div style={{fontSize: 16, color: '#64748b', marginTop: 8}}>Install with clawhub in one command</div>
            <div style={{marginTop: 12, fontSize: 14, color: '#16a34a'}}>Updated recently</div>
          </div>
        ))}
      </div>
    </div>
    </BrowserScene>
  )
}
