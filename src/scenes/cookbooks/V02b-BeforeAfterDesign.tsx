import {BrowserScene} from '../cookbook-templates'

export const V02bBeforeAfterDesign = () => (
  <BrowserScene
    url='localhost:4173'
    title='AI News Feed — Before / After'
    outroLabel='Cookbook 02b'
    outroSublabel='Ugly first pass → polished system'
  >
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 760}}>
      <div style={{padding: 24, background: '#f3f4f6', borderRight: '1px solid #d1d5db'}}>
        <div style={{fontSize: 20, fontWeight: 700, marginBottom: 14}}>Before</div>
        <div style={{display: 'grid', gap: 10}}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{background: '#fff', border: '1px solid #e5e7eb', borderRadius: 4, padding: 12}}>
              <div style={{fontWeight: 600}}>News item {i}</div>
              <div style={{fontSize: 13, color: '#9ca3af'}}>Random spacing, weak hierarchy</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{padding: 24, background: '#0b0f14', color: '#e5e7eb'}}>
        <div style={{fontSize: 20, fontWeight: 700, marginBottom: 14}}>After (Linear-inspired)</div>
        <div style={{display: 'grid', gap: 12}}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{background: '#111827', border: '1px solid #374151', borderRadius: 10, padding: 14}}>
              <div style={{fontWeight: 600}}>AI Systems Weekly #{i}</div>
              <div style={{fontSize: 13, color: '#9ca3af'}}>Tight spacing • clear rhythm • consistent type</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </BrowserScene>
)
