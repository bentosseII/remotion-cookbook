import {BrowserScene} from '../cookbook-templates'

export const V07aAuthFormToLoggedIn = () => (
  <BrowserScene
    url='localhost:3000/auth'
    title='Saved Links Vault — Authentication'
    outroLabel='Cookbook 07a'
    outroSublabel='Sign up flow to logged-in state'
  >
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 760, fontFamily: 'Inter, system-ui'}}>
      <div style={{padding: 28, background: '#f8fafc'}}>
        <h3 style={{marginTop: 0}}>Sign up</h3>
        <label>Email</label>
        <div style={{margin: '6px 0 12px', padding: 10, borderRadius: 8, border: '1px solid #cbd5e1', background: '#fff'}}>you@example.com</div>
        <label>Password</label>
        <div style={{margin: '6px 0 16px', padding: 10, borderRadius: 8, border: '1px solid #cbd5e1', background: '#fff'}}>••••••••••</div>
        <button style={{background: '#0f172a', color: '#fff', border: 0, borderRadius: 8, padding: '10px 14px'}}>Create account</button>
      </div>
      <div style={{padding: 28, background: '#0f172a', color: '#e2e8f0'}}>
        <h3 style={{marginTop: 0}}>Logged in</h3>
        <p>Welcome back, ben@demo.com</p>
        <div style={{border: '1px solid #334155', borderRadius: 10, padding: 14}}>Dashboard unlocked ✓</div>
      </div>
    </div>
  </BrowserScene>
)
