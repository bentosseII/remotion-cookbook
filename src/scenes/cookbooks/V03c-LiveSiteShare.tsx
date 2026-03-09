import {BrowserScene} from '../cookbook-templates'

export const V03cLiveSiteShare = () => (
  <BrowserScene
    url='daily-builder-feed.here.now'
    title="Ben's Daily Builder Feed"
    outroLabel='Cookbook 03c'
    outroSublabel='Live on the internet'
  >
    <div style={{padding: 28, minHeight: 760, fontFamily: 'Inter, system-ui'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1 style={{margin: 0, fontSize: 40, color: '#0f172a'}}>Ben's Daily Builder Feed</h1>
        <button style={{background: '#0f172a', color: '#fff', border: 0, borderRadius: 10, padding: '10px 16px'}}>Copy Share Link</button>
      </div>
      <p style={{color: '#64748b'}}>Now publicly accessible from any browser</p>
      <div style={{marginTop: 20, display: 'grid', gap: 12}}>
        {['AI coding tools this week', 'New startup ops playbooks', 'Top automations to steal'].map((x) => (
          <div key={x} style={{border: '1px solid #cbd5e1', borderRadius: 12, padding: 16, background: '#fff'}}>{x}</div>
        ))}
      </div>
    </div>
  </BrowserScene>
)
