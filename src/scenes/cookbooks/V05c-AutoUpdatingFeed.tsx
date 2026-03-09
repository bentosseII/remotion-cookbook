import {BrowserScene} from '../cookbook-templates'

export const V05cAutoUpdatingFeed = () => (
  <BrowserScene
    url='ai-news-radar.vercel.app'
    title='AI News Radar — Auto Refresh'
    outroLabel='Cookbook 05c'
    outroSublabel='New stories appear automatically'
  >
    <div style={{padding: 24, minHeight: 760, fontFamily: 'Inter, system-ui', background: '#f8fafc'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2 style={{margin: 0, color: '#0f172a'}}>Latest AI Signals</h2>
        <div style={{fontSize: 14, color: '#64748b'}}>Last updated: 19:03</div>
      </div>
      <div style={{marginTop: 16, display: 'grid', gap: 10}}>
        {['Agent benchmark drops', 'Open-source multimodal release', 'Copilot competitor launches'].map((s) => (
          <div key={s} style={{background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', padding: 14}}>{s}</div>
        ))}
        <div style={{background: '#ecfeff', borderRadius: 10, border: '1px solid #06b6d4', padding: 14}}>
          <strong>New:</strong> AI browser startup raises $30M
        </div>
      </div>
    </div>
  </BrowserScene>
)
