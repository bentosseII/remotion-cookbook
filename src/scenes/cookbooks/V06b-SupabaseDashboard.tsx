import {BrowserScene} from '../cookbook-templates'

export const V06bSupabaseDashboard = () => (
  <BrowserScene
    url='app.supabase.com/project/demo'
    title='Supabase — Table Editor'
    outroLabel='Cookbook 06b'
    outroSublabel='Create table + insert first rows'
  >
    <div style={{padding: 20, minHeight: 760, background: '#f8fafc', fontFamily: 'Inter, system-ui'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 14}}>
        <h3 style={{margin: 0}}>Table: saved_links</h3>
        <button style={{background: '#059669', color: '#fff', border: 0, borderRadius: 8, padding: '8px 12px'}}>Insert Row</button>
      </div>
      <table style={{width: '100%', borderCollapse: 'collapse', background: '#fff', border: '1px solid #e2e8f0'}}>
        <thead>
          <tr style={{background: '#f1f5f9'}}>
            {['id', 'title', 'url', 'category', 'created_at'].map((h) => (
              <th key={h} style={{textAlign: 'left', padding: 10, borderBottom: '1px solid #e2e8f0'}}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {['AI News Radar', 'Trigger.dev Guide', 'Supabase Docs'].map((r, i) => (
            <tr key={r}>
              <td style={{padding: 10, borderBottom: '1px solid #f1f5f9'}}>...{i + 1}</td>
              <td style={{padding: 10, borderBottom: '1px solid #f1f5f9'}}>{r}</td>
              <td style={{padding: 10, borderBottom: '1px solid #f1f5f9'}}>https://…</td>
              <td style={{padding: 10, borderBottom: '1px solid #f1f5f9'}}>AI</td>
              <td style={{padding: 10, borderBottom: '1px solid #f1f5f9'}}>2026-03-05</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </BrowserScene>
)
