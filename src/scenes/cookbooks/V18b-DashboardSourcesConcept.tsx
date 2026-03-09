import React from 'react'
import {ConceptScene} from '../cookbook-templates'

export const V18bDashboardSourcesConcept: React.FC = () => {
  return (
    <ConceptScene
      title='Many sources, one dashboard'
      elements={[
        {"type":"box","text":"Automations","position":{"x":120,"y":300},"color":"#7aa2f7","delay":8},
        {"type":"box","text":"Agent Sessions","position":{"x":120,"y":500},"color":"#79c0ff","delay":16},
        {"type":"box","text":"Feed Health","position":{"x":120,"y":700},"color":"#3fb950","delay":24},
        {"type":"box","text":"Normalized Data","position":{"x":760,"y":500},"color":"#d29922","delay":32},
        {"type":"box","text":"Dashboard UI","position":{"x":1380,"y":500},"color":"#d56a26","delay":40},
        {"type":"arrow","from":{"x":420,"y":342},"to":{"x":760,"y":532},"delay":48,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":420,"y":542},"to":{"x":760,"y":542},"delay":52,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":420,"y":742},"to":{"x":760,"y":552},"delay":56,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":1060,"y":542},"to":{"x":1380,"y":542},"delay":62,"color":"#79c0ff"}
      ]}
      outroLabel='Normalize then render'
      outroSublabel='Single decision view'
    />
  )
}
