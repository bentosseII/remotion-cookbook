import {ConceptScene, cyan, green, orange} from '../cookbook-templates'

const elements = [
  {type: 'box', text: 'Frontend\n(Next.js UI)', position: {x: 170, y: 430}, color: orange, delay: 10},
  {type: 'box', text: 'API layer\nrequests + auth', position: {x: 770, y: 430}, color: cyan, delay: 24},
  {type: 'box', text: 'Backend DB\n(Supabase)', position: {x: 1360, y: 430}, color: green, delay: 38},
  {type: 'arrow', from: {x: 470, y: 470}, to: {x: 770, y: 470}, color: cyan, delay: 48},
  {type: 'arrow', from: {x: 1070, y: 470}, to: {x: 1360, y: 470}, color: green, delay: 56},
]

export const V06cFrontendApiBackend = () => (
  <ConceptScene
    title='How Data Flows Through Your App'
    elements={elements}
    outroLabel='Cookbook 06c'
    outroSublabel='Frontend ←API→ Backend'
  />
)
