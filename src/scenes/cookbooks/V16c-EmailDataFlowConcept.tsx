import React from 'react'
import {ConceptScene} from '../cookbook-templates'

export const V16cEmailDataFlowConcept: React.FC = () => {
  return (
    <ConceptScene
      title='Data flow for custom email'
      elements={[
        {"type":"box","text":"Gmail CLI","position":{"x":250,"y":390},"color":"#7aa2f7","delay":8},
        {"type":"box","text":"inbox.json","position":{"x":780,"y":390},"color":"#3fb950","delay":20},
        {"type":"box","text":"Custom UI","position":{"x":1310,"y":390},"color":"#d29922","delay":32},
        {"type":"arrow","from":{"x":550,"y":432},"to":{"x":780,"y":432},"color":"#79c0ff","delay":42},
        {"type":"arrow","from":{"x":1080,"y":432},"to":{"x":1310,"y":432},"color":"#79c0ff","delay":50}
      ]}
      outroLabel='Own the interface'
      outroSublabel='Same data, better workflow'
    />
  )
}
