import {BrowserScene} from '../cookbook-templates'

export const V09cTriggerDashboard = () => (
  <BrowserScene
    url='cloud.trigger.dev/projects/content-engine/runs'
    title='Trigger.dev — Runs'
    outroLabel='Cookbook 09c'
    outroSublabel='Successful automation run'
  >
    <div style={{padding: 20, minHeight: 760, fontFamily: 'Inter, system-ui', background: '#0b1220', color: '#e2e8f0'}}>
      <h3 style={{marginTop: 0}}>Recent runs</h3>
      {[
        ['feeds-pipeline', 'Success', 'fetched 32 · accepted 11'],
        ['feeds-pipeline', 'Success', 'fetched 29 · accepted 9'],
        ['feeds-pipeline', 'Success', 'fetched 35 · accepted 12'],
      ].map(([task, status, msg]) => (
        <div key={task + msg} style={{display: 'flex', justifyContent: 'space-between', background: '#111827', border: '1px solid #334155', padding: 12, borderRadius: 10, marginBottom: 10}}>
          <span>{task}</span>
          <span style={{color: '#22c55e'}}>{status}</span>
          <span style={{color: '#94a3b8'}}>{msg}</span>
        </div>
      ))}
    </div>
  </BrowserScene>
)
