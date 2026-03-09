import React from 'react'
import {ConceptScene} from '../cookbook-templates'

export const V22bAgentsHierarchyConcept: React.FC = () => {
  return (
    <ConceptScene
      title='Instruction hierarchy'
      elements={[
        {"type":"box","text":"~/.agents/AGENTS.md\n(global rules)","position":{"x":730,"y":240},"color":"#7aa2f7","delay":8},
        {"type":"box","text":"repo-a/agents.md","position":{"x":390,"y":600},"color":"#3fb950","delay":20},
        {"type":"box","text":"repo-b/agents.md","position":{"x":1070,"y":600},"color":"#d29922","delay":28},
        {"type":"arrow","from":{"x":830,"y":420},"to":{"x":540,"y":600},"delay":38,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":980,"y":420},"to":{"x":1220,"y":600},"delay":46,"color":"#79c0ff"}
      ]}
      outroLabel='Global defaults + project overrides'
      outroSublabel='Consistent behaviour'
    />
  )
}
