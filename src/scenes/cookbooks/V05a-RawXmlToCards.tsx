import {BrowserScene} from '../cookbook-templates'

export const V05aRawXmlToCards = () => (
  <BrowserScene
    url='localhost:3000'
    title='AI News Radar — Feed Parsing'
    outroLabel='Cookbook 05a'
    outroSublabel='Raw RSS/XML → clean card UI'
  >
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 760}}>
      <div style={{padding: 20, background: '#0f172a', color: '#cbd5e1', fontFamily: 'ui-monospace, SFMono-Regular'}}>
        <div style={{fontWeight: 700, marginBottom: 8}}>Raw XML</div>
        <pre style={{fontSize: 13, lineHeight: 1.5, whiteSpace: 'pre-wrap'}}>{`<item>
  <title>OpenAI ships new model</title>
  <link>https://news.ycombinator.com/item?id=...</link>
  <pubDate>Thu, 05 Mar 2026</pubDate>
</item>`}</pre>
      </div>
      <div style={{padding: 24, background: '#f8fafc'}}>
        <div style={{fontWeight: 700, marginBottom: 12, color: '#0f172a'}}>Rendered stories</div>
        {['OpenAI ships new model', 'Techmeme: AI browser wars', 'New eval benchmark release'].map((s) => (
          <div key={s} style={{marginBottom: 10, background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 14}}>{s}</div>
        ))}
      </div>
    </div>
  </BrowserScene>
)
