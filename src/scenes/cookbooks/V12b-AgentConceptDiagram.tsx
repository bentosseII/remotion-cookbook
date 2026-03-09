import React from 'react'
import {ConceptScene} from '../cookbook-templates'

export const V12bAgentConceptDiagram: React.FC = () => {
  return (
    <ConceptScene
      title='Agent = Model + Tools + Instructions'
      elements={[
        {"type":"box","text":"Model","position":{"x":280,"y":360},"color":"#7aa2f7","delay":10},
        {"type":"box","text":"Tools","position":{"x":810,"y":360},"color":"#3fb950","delay":20},
        {"type":"box","text":"Instructions","position":{"x":1340,"y":360},"color":"#d29922","delay":30},
        {"type":"arrow","from":{"x":580,"y":402},"to":{"x":810,"y":402},"color":"#79c0ff","delay":40},
        {"type":"arrow","from":{"x":1110,"y":402},"to":{"x":1340,"y":402},"color":"#79c0ff","delay":48},
        {"type":"label","text":"Aligned inputs = useful output","position":{"x":700,"y":540},"color":"#8b949e","delay":58}
      ]}
      outroLabel='Control the behaviour'
      outroSublabel='Tune each layer'
    />
  )
}
