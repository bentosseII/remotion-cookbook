import React from 'react'
import {ConceptScene} from '../cookbook-templates'

export const V14aAgentPocketConcept: React.FC = () => {
  return (
    <ConceptScene
      title='Agent in your pocket'
      elements={[
        {"type":"box","text":"Phone","position":{"x":120,"y":420},"color":"#7aa2f7","delay":8},
        {"type":"box","text":"Telegram","position":{"x":470,"y":420},"color":"#79c0ff","delay":16},
        {"type":"box","text":"OpenClaw Gateway","position":{"x":820,"y":420},"color":"#3fb950","delay":24},
        {"type":"box","text":"Mac Mini","position":{"x":1210,"y":420},"color":"#d29922","delay":32},
        {"type":"box","text":"Agent Reply","position":{"x":1540,"y":420},"color":"#d56a26","delay":40},
        {"type":"arrow","from":{"x":390,"y":462},"to":{"x":470,"y":462},"delay":48,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":740,"y":462},"to":{"x":820,"y":462},"delay":52,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":1140,"y":462},"to":{"x":1210,"y":462},"delay":56,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":1510,"y":462},"to":{"x":1540,"y":462},"delay":60,"color":"#79c0ff"}
      ]}
      outroLabel='Message anywhere'
      outroSublabel='Always-on workflow'
    />
  )
}
