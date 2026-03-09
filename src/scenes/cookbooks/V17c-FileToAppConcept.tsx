import React from 'react'
import {ConceptScene} from '../cookbook-templates'

export const V17cFileToAppConcept: React.FC = () => {
  return (
    <ConceptScene
      title='File = data, app = view'
      elements={[
        {"type":"box","text":"todo.md","position":{"x":260,"y":390},"color":"#7aa2f7","delay":8},
        {"type":"box","text":"Parser / State","position":{"x":810,"y":390},"color":"#3fb950","delay":20},
        {"type":"box","text":"Todo App UI","position":{"x":1360,"y":390},"color":"#d29922","delay":32},
        {"type":"arrow","from":{"x":560,"y":432},"to":{"x":810,"y":432},"delay":42,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":1110,"y":432},"to":{"x":1360,"y":432},"delay":50,"color":"#79c0ff"}
      ]}
      outroLabel='One source of truth'
      outroSublabel='UI sits on top'
    />
  )
}
