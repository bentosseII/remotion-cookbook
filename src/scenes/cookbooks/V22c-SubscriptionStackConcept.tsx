import React from 'react'
import {ConceptScene} from '../cookbook-templates'

export const V22cSubscriptionStackConcept: React.FC = () => {
  return (
    <ConceptScene
      title='Starter subscription stack (~$50-60/mo)'
      elements={[
        {"type":"box","text":"GitHub\n$10-20","position":{"x":260,"y":390},"color":"#7aa2f7","delay":8},
        {"type":"box","text":"exe.dev VM\n~$20","position":{"x":810,"y":390},"color":"#3fb950","delay":20},
        {"type":"box","text":"AI provider\n~$20","position":{"x":1360,"y":390},"color":"#d29922","delay":32},
        {"type":"arrow","from":{"x":560,"y":432},"to":{"x":810,"y":432},"delay":42,"color":"#79c0ff"},
        {"type":"arrow","from":{"x":1110,"y":432},"to":{"x":1360,"y":432},"delay":50,"color":"#79c0ff"},
        {"type":"label","text":"Total: roughly $50-60/month","position":{"x":740,"y":560},"color":"#8b949e","delay":58}
      ]}
      outroLabel='Enough to build seriously'
      outroSublabel='Keep costs intentional'
    />
  )
}
