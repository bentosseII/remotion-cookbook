import {ConceptScene, cyan, green, orange} from '../cookbook-templates'

const elements = [
  {type: 'box', text: 'Local repo\n(on your machine)', position: {x: 190, y: 440}, color: orange, delay: 10},
  {type: 'box', text: 'Push to GitHub', position: {x: 810, y: 440}, color: cyan, delay: 24},
  {type: 'box', text: 'Cloud backup\n+ collaboration', position: {x: 1400, y: 440}, color: green, delay: 38},
  {type: 'arrow', from: {x: 490, y: 480}, to: {x: 810, y: 480}, color: cyan, delay: 48},
  {type: 'arrow', from: {x: 1110, y: 480}, to: {x: 1400, y: 480}, color: green, delay: 56},
]

export const V04cLocalToGitHubCloud = () => (
  <ConceptScene
    title='Protect Your Work with Remote Backup'
    elements={elements}
    outroLabel='Cookbook 04c'
    outroSublabel='Local changes, cloud safety'
  />
)
