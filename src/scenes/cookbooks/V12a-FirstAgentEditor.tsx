import React from 'react'
import {EditorScene} from '../cookbook-templates'

export const V12aFirstAgentEditor: React.FC = () => {
  return (
    <EditorScene
      filename='agents.md'
      sidebar={[
        {name: 'agents.md', type: 'file', indent: 0, active: true},
        {name: 'PROMPT-LIBRARY.md', type: 'file', indent: 0, active: false},
        {name: 'spec', type: 'folder', indent: 0, active: false},
        {name: 'progress.md', type: 'file', indent: 1, active: false}
      ]}
      lines={[
        {text: "## Communication"},
        {text: "- I can't code. Speak in plain English."},
        {text: "- Start with a short plan before implementation."},
        {text: "- Keep summaries concise and actionable."},
        {text: ""},
        {text: "## Build Loop"},
        {text: "- Plan -> Build -> Test -> Debug -> Ship"},
        {text: "- Use agent-browser to verify key flows"},
        {text: "- If blocked, show 2 fix options with trade-offs"}
      ]}
      outroLabel='Your first agent'
      outroSublabel='Model + tools + instructions'
    />
  )
}
