import React from 'react'
import {ConceptScene} from '../cookbook-templates'

export const V21cDebugLoopConcept: React.FC = () => {
  return (
    <ConceptScene
      title='Debug loop'
      elements={[
        {"type":"box","text":"Try","position":{"x":840,"y":180},"color":"#7aa2f7","delay":8},
        {"type":"box","text":"Break","position":{"x":1240,"y":430},"color":"#d56a26","delay":16},
        {"type":"box","text":"Fix","position":{"x":840,"y":680},"color":"#3fb950","delay":24},
        {"type":"box","text":"Try Again","position":{"x":440,"y":430},"color":"#d29922","delay":32},
        {"type":"arrow","from":{"x":990,"y":264},"to":{"x":1240,"y":472},"delay":40,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":1240,"y":514},"to":{"x":990,"y":722},"delay":46,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":840,"y":722},"to":{"x":590,"y":472},"delay":52,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":590,"y":430},"to":{"x":840,"y":224},"delay":58,"color":"#79c0ff"}
      ]}
      outroLabel='Try -> Break -> Fix -> Try again'
      outroSublabel='Repeat until green'
    />
  )
}
