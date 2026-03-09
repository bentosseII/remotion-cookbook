import {BrowserScene} from '../cookbook-templates'

export const V01bFirstSiteBrowser = () => (
  <BrowserScene
    url='localhost:4173'
    title='AI News Feed — Draft'
    outroLabel='Cookbook 01b'
    outroSublabel='First version in the browser'
  >
    <div style={{padding: 32, fontFamily: 'Inter, system-ui', backgroundColor: '#f4f5f7', minHeight: 760}}>
      <h1 style={{fontSize: 46, margin: 0, color: '#111827'}}>Main News Feed</h1>
      <p style={{color: '#6b7280', marginTop: 8, marginBottom: 24}}>Rough first pass from the agent</p>
      <div style={{display: 'grid', gap: 14}}>
        {['AI model update lands', 'Startup raises pre-seed', 'Open-source tool goes viral'].map((item, i) => (
          <div key={item} style={{background: '#fff', border: '1px solid #e5e7eb', padding: 18, borderRadius: 6}}>
            <div style={{fontWeight: 600, color: '#1f2937'}}>{item}</div>
            <div style={{marginTop: 6, color: '#9ca3af', fontSize: 14}}>Story #{i + 1} · unread</div>
          </div>
        ))}
      </div>
    </div>
  </BrowserScene>
)
