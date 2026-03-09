import React from 'react'
import {ConceptScene} from '../cookbook-templates'

export const V19aPipelineConcept: React.FC = () => {
  return (
    <ConceptScene
      title='Workflow pipeline'
      elements={[
        {"type":"box","text":"Sources","position":{"x":120,"y":390},"color":"#7aa2f7","delay":8},
        {"type":"box","text":"Ingest","position":{"x":560,"y":390},"color":"#79c0ff","delay":18},
        {"type":"box","text":"Classify","position":{"x":1000,"y":390},"color":"#3fb950","delay":28},
        {"type":"box","text":"Output","position":{"x":1440,"y":390},"color":"#d29922","delay":38},
        {"type":"arrow","from":{"x":420,"y":432},"to":{"x":560,"y":432},"delay":48,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":860,"y":432},"to":{"x":1000,"y":432},"delay":52,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":1300,"y":432},"to":{"x":1440,"y":432},"delay":56,"color":"#79c0ff"}
      ]}
      outroLabel='Sources -> Ingest -> Classify -> Output'
      outroSublabel='End-to-end automation'
    />
  )
}
