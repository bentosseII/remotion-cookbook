import React from 'react'
import {ConceptScene} from '../cookbook-templates'

export const V15aBuildLoopConcept: React.FC = () => {
  return (
    <ConceptScene
      title='The Build Loop'
      elements={[
        {"type":"box","text":"Plan","position":{"x":820,"y":180},"color":"#7aa2f7","delay":8},
        {"type":"box","text":"Build","position":{"x":1250,"y":360},"color":"#3fb950","delay":16},
        {"type":"box","text":"Test (dogfood)","position":{"x":1080,"y":670},"color":"#d29922","delay":24},
        {"type":"box","text":"Debug","position":{"x":560,"y":670},"color":"#d56a26","delay":32},
        {"type":"box","text":"Ship","position":{"x":390,"y":360},"color":"#79c0ff","delay":40},
        {"type":"arrow","from":{"x":970,"y":264},"to":{"x":1250,"y":402},"delay":48,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":1310,"y":444},"to":{"x":1190,"y":670},"delay":52,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":1020,"y":712},"to":{"x":860,"y":712},"delay":56,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":560,"y":700},"to":{"x":460,"y":444},"delay":60,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":520,"y":360},"to":{"x":820,"y":224},"delay":64,"color":"#79c0ff"}
      ]}
      outroLabel='Repeat every project'
      outroSublabel='Plan -> Build -> Test -> Debug -> Ship'
    />
  )
}
