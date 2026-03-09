import {BrowserScene} from '../cookbook-templates'

export const V08aGuestbookBrowser = () => (
  <BrowserScene
    url='localhost:3000'
    title='Guestbook App'
    outroLabel='Cookbook 08a'
    outroSublabel='Post a message, see it appear live'
  >
    <div style={{padding: 24, minHeight: 760, fontFamily: 'Inter, system-ui', background: '#f8fafc'}}>
      <h2 style={{marginTop: 0}}>Guestbook</h2>
      <div style={{display: 'flex', gap: 10, marginBottom: 14}}>
        <input value='Loved this walkthrough 🔥' readOnly style={{flex: 1, padding: 10, borderRadius: 8, border: '1px solid #cbd5e1'}} />
        <button style={{padding: '10px 14px', borderRadius: 8, border: 0, background: '#0f172a', color: '#fff'}}>Post</button>
      </div>
      <div style={{display: 'grid', gap: 10}}>
        <div style={{background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 12}}>Ben: Shipping this tonight.</div>
        <div style={{background: '#ecfeff', border: '1px solid #06b6d4', borderRadius: 10, padding: 12}}>
          You: Loved this walkthrough 🔥 <span style={{color: '#0e7490'}}>just now</span>
        </div>
      </div>
    </div>
  </BrowserScene>
)
