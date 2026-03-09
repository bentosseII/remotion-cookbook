import React from 'react'
import {ConceptScene} from '../cookbook-templates'

export const V20cPromptFlowConcept: React.FC = () => {
  return (
    <ConceptScene
      title='How to talk to agents'
      elements={[
        {"type":"box","text":"Give clear info","position":{"x":210,"y":390},"color":"#7aa2f7","delay":8},
        {"type":"box","text":"Get out of the way","position":{"x":780,"y":390},"color":"#3fb950","delay":20},
        {"type":"box","text":"Review output","position":{"x":1350,"y":390},"color":"#d29922","delay":32},
        {"type":"arrow","from":{"x":510,"y":432},"to":{"x":780,"y":432},"delay":42,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":1080,"y":432},"to":{"x":1350,"y":432},"delay":50,"color":"#79c0ff"}
      ]}
      outroLabel='Give context, then step back'
      outroSublabel='Review before shipping'
    />
  )
}
