import {ConceptScene, cyan, green, orange} from '../cookbook-templates'

const elements = [
  {type: 'box', text: 'Localhost\n(your computer only)', position: {x: 180, y: 430}, color: orange, delay: 12},
  {type: 'box', text: 'Deploy step\n(here.now publish)', position: {x: 780, y: 430}, color: cyan, delay: 24},
  {type: 'box', text: 'Public URL\n(anyone can visit)', position: {x: 1380, y: 430}, color: green, delay: 36},
  {type: 'arrow', from: {x: 480, y: 470}, to: {x: 780, y: 470}, color: cyan, delay: 48},
  {type: 'arrow', from: {x: 1080, y: 470}, to: {x: 1380, y: 470}, color: green, delay: 56},
]

export const V03aLocalhostVsDeployed = () => (
  <ConceptScene
    title='Localhost vs Live URL'
    elements={elements}
    outroLabel='Cookbook 03a'
    outroSublabel='From private draft to public launch'
  />
)
