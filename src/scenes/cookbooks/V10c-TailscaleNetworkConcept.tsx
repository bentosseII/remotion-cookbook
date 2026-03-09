import {ConceptScene, cyan, green, orange} from '../cookbook-templates'

const elements = [
  {type: 'box', text: 'MacBook', position: {x: 180, y: 430}, color: orange, delay: 10},
  {type: 'box', text: 'Mac Mini', position: {x: 790, y: 250}, color: cyan, delay: 24},
  {type: 'box', text: 'exe.dev VM', position: {x: 790, y: 610}, color: cyan, delay: 36},
  {type: 'box', text: 'Tailscale mesh\n(private network)', position: {x: 1320, y: 430}, color: green, delay: 48},
  {type: 'arrow', from: {x: 480, y: 470}, to: {x: 790, y: 300}, color: cyan, delay: 56},
  {type: 'arrow', from: {x: 480, y: 470}, to: {x: 790, y: 660}, color: cyan, delay: 62},
  {type: 'arrow', from: {x: 1090, y: 430}, to: {x: 1320, y: 470}, color: green, delay: 68},
]

export const V10cTailscaleNetworkConcept = () => (
  <ConceptScene
    title='Private Network for Your Agent Stack'
    elements={elements}
    outroLabel='Cookbook 10c'
    outroSublabel='MacBook + Mac Mini + VM over Tailscale'
  />
)
