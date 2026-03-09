import {ConceptScene, cyan, green, orange, yellow} from '../cookbook-templates'

export const V11aDeploymentDecisionTree = () => (
  <ConceptScene
    title='Choose the Right Production Host'
    elements={[
      {type: 'box', text: 'What are you deploying?', position: {x: 760, y: 220}, color: cyan, delay: 10},
      {type: 'box', text: 'Static site → Vercel', position: {x: 300, y: 500}, color: green, delay: 24},
      {type: 'box', text: 'Backend API → Railway', position: {x: 760, y: 500}, color: orange, delay: 34},
      {type: 'box', text: 'Workers/edge → Cloudflare', position: {x: 1220, y: 500}, color: yellow, delay: 44},
      {type: 'arrow', from: {x: 910, y: 300}, to: {x: 430, y: 500}, color: green, delay: 66},
      {type: 'arrow', from: {x: 910, y: 300}, to: {x: 890, y: 500}, color: orange, delay: 70},
      {type: 'arrow', from: {x: 910, y: 300}, to: {x: 1350, y: 500}, color: yellow, delay: 74},
    ]}
    outroLabel='Cookbook 11a'
    outroSublabel='Static vs Backend vs Workers'
  />
)
