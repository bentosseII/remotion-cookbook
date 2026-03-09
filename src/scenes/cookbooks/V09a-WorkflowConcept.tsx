import {ConceptScene, cyan, green, orange, yellow} from '../cookbook-templates'

export const V09aWorkflowConcept = () => (
  <ConceptScene
    title='Automation Workflow'
    elements={[
      {type: 'box', text: 'Check feeds', position: {x: 120, y: 430}, color: cyan, delay: 8},
      {type: 'box', text: 'Pull links', position: {x: 470, y: 430}, color: green, delay: 18},
      {type: 'box', text: 'De-dupe', position: {x: 820, y: 430}, color: yellow, delay: 28},
      {type: 'box', text: 'Classify', position: {x: 1170, y: 430}, color: orange, delay: 38},
      {type: 'box', text: 'Add or discard', position: {x: 1520, y: 430}, color: cyan, delay: 48},
      {type: 'arrow', from: {x: 420, y: 470}, to: {x: 470, y: 470}, color: green, delay: 56},
      {type: 'arrow', from: {x: 770, y: 470}, to: {x: 820, y: 470}, color: yellow, delay: 60},
      {type: 'arrow', from: {x: 1120, y: 470}, to: {x: 1170, y: 470}, color: orange, delay: 64},
      {type: 'arrow', from: {x: 1470, y: 470}, to: {x: 1520, y: 470}, color: cyan, delay: 68},
    ]}
    outroLabel='Cookbook 09a'
    outroSublabel='The Zapier replacement pattern'
  />
)
