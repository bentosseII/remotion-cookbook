import {ConceptScene, cyan, green, orange, yellow} from '../cookbook-templates'

const elements = [
  {type: 'box', text: 'Laptop closes', position: {x: 190, y: 330}, color: orange, delay: 10},
  {type: 'box', text: 'localhost process\nstops', position: {x: 190, y: 560}, color: yellow, delay: 20},
  {type: 'box', text: 'Always-on server', position: {x: 1230, y: 330}, color: cyan, delay: 32},
  {type: 'box', text: 'Workflow keeps running', position: {x: 1230, y: 560}, color: green, delay: 44},
  {type: 'arrow', from: {x: 340, y: 390}, to: {x: 340, y: 560}, color: yellow, delay: 52},
  {type: 'arrow', from: {x: 1380, y: 390}, to: {x: 1380, y: 560}, color: green, delay: 60},
]

export const V10aLaptopVsServerConcept = () => (
  <ConceptScene
    title='Always-On vs Local-Only'
    elements={elements}
    outroLabel='Cookbook 10a'
    outroSublabel='Why laptops are not servers'
  />
)
