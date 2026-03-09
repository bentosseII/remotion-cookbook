import {ConceptScene, cyan, green, yellow} from '../cookbook-templates'

const elements = [
  {type: 'box', text: 'Sign in once', position: {x: 190, y: 430}, color: cyan, delay: 10},
  {type: 'box', text: 'Session cookie jar\n(store login state)', position: {x: 770, y: 430}, color: yellow, delay: 24},
  {type: 'box', text: 'Stay logged in\nacross refreshes', position: {x: 1360, y: 430}, color: green, delay: 38},
  {type: 'arrow', from: {x: 490, y: 470}, to: {x: 770, y: 470}, color: cyan, delay: 50},
  {type: 'arrow', from: {x: 1070, y: 470}, to: {x: 1360, y: 470}, color: green, delay: 58},
]

export const V07bSessionCookieConcept = () => (
  <ConceptScene
    title='Session = Staying Logged In'
    elements={elements}
    outroLabel='Cookbook 07b'
    outroSublabel='Identity persists between requests'
  />
)
