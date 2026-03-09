import React from 'react'
import {BrowserScene} from '../cookbook-templates'

export const V17bTodoAppBrowser: React.FC = () => {
  return (
    <BrowserScene
      title='Todo Board'
      url='http://localhost:3000/todo'
      outroLabel='Interactive view'
      outroSublabel='Writes back to todo.md'
    >
      <div style={{padding: 28, fontFamily: 'Inter, system-ui, sans-serif'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14}}>
          {[
            {title: 'Today', items: ['☐ Record demo', '☐ Reply to sponsors']},
            {title: 'This Week', items: ['☐ Ship dashboard', '☐ Plan newsletter']},
            {title: 'Backlog', items: ['☐ Build inbox shortcuts', '☐ Add review mode']},
            {title: 'Done', items: ['☑ Setup todo.md sync', '☑ Add checkbox toggle']},
          ].map(({title, items}) => (
            <div key={title} style={{background: 'white', border: '1px solid #cbd5e1', borderRadius: 12, padding: 14}}>
              <div style={{fontWeight: 700, fontSize: 20, marginBottom: 10}}>{title}</div>
              {items.map((item) => <div key={item} style={{fontSize: 16, color: '#334155', marginBottom: 8}}>{item}</div>)}
            </div>
          ))}
        </div>
        <div style={{marginTop: 16, fontSize: 16, color: '#64748b'}}>Autosaved to todo.md • Last write 14:32:11</div>
      </div>
    </BrowserScene>
  )
}
