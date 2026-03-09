import React from 'react'
import {ConceptScene} from '../cookbook-templates'

export const V13aToolsConceptDiagram: React.FC = () => {
  return (
    <ConceptScene
      title='Skills vs CLIs vs MCPs'
      elements={[
        {"type":"box","text":"Skills\n(task playbooks)","position":{"x":250,"y":350},"color":"#7aa2f7","delay":8},
        {"type":"box","text":"CLIs\n(run commands)","position":{"x":810,"y":350},"color":"#3fb950","delay":18},
        {"type":"box","text":"MCPs\n(connect services)","position":{"x":1370,"y":350},"color":"#d29922","delay":28},
        {"type":"arrow","from":{"x":550,"y":400},"to":{"x":810,"y":400},"color":"#79c0ff","delay":38},
        {"type":"arrow","from":{"x":1110,"y":400},"to":{"x":1370,"y":400},"color":"#79c0ff","delay":46}
      ]}
      outroLabel='Choose the right tool'
      outroSublabel='Strategy / execution / integrations'
    />
  )
}
