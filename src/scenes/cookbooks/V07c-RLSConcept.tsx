import {ConceptScene, cyan, green, orange} from '../cookbook-templates'

const elements = [
  {type: 'box', text: 'User A rows\n(id = user_a)', position: {x: 240, y: 360}, color: cyan, delay: 10},
  {type: 'box', text: 'RLS policy\nuser_id = auth.uid()', position: {x: 780, y: 430}, color: orange, delay: 24},
  {type: 'box', text: 'User B rows\n(id = user_b)', position: {x: 1320, y: 520}, color: green, delay: 38},
  {type: 'arrow', from: {x: 540, y: 400}, to: {x: 780, y: 460}, color: cyan, delay: 48},
  {type: 'arrow', from: {x: 1080, y: 470}, to: {x: 1320, y: 560}, color: green, delay: 56},
]

export const V07cRLSConcept = () => (
  <ConceptScene
    title='Row Level Security (RLS)'
    elements={elements}
    outroLabel='Cookbook 07c'
    outroSublabel='Each user sees only their own rows'
  />
)
