import {ConceptScene, cyan, green, orange} from '../cookbook-templates'

const elements = [
  {type: 'box', text: 'Next.js\nFrontend', position: {x: 170, y: 430}, color: orange, delay: 10},
  {type: 'box', text: 'Supabase\nAuth + DB', position: {x: 760, y: 430}, color: cyan, delay: 24},
  {type: 'box', text: 'Vercel\nHosting', position: {x: 1360, y: 430}, color: green, delay: 38},
  {type: 'arrow', from: {x: 470, y: 470}, to: {x: 760, y: 470}, color: cyan, delay: 48},
  {type: 'arrow', from: {x: 1060, y: 470}, to: {x: 1360, y: 470}, color: green, delay: 56},
]

export const V08cStackConcept = () => (
  <ConceptScene
    title='Your First Full App Stack'
    elements={elements}
    outroLabel='Cookbook 08c'
    outroSublabel='Next.js + Supabase + Vercel'
  />
)
