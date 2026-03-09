import React from 'react'
import {EditorScene} from '../cookbook-templates'

export const V17aTodoMarkdownEditor: React.FC = () => {
  return (
    <EditorScene
      filename='todo.md'
      sidebar={[
        {name: 'todo.md', type: 'file', indent: 0, active: true},
        {name: 'README.md', type: 'file', indent: 0, active: false},
        {name: 'src', type: 'folder', indent: 0, active: false},
        {name: 'TodoBoard.tsx', type: 'file', indent: 1, active: false}
      ]}
      lines={[
        {text: "# Tasks"},
        {text: ""},
        {text: "## Today"},
        {text: "- [ ] Record cookbook demo clip"},
        {text: "- [ ] Reply to sponsorship emails"},
        {text: ""},
        {text: "## This Week"},
        {text: "- [ ] Publish build-loop recap"},
        {text: "- [ ] Ship dashboard v1"},
        {text: ""},
        {text: "## Done"},
        {text: "- [x] Set up todo app skeleton"}
      ]}
      outroLabel='File-first tasks'
      outroSublabel='Simple and portable'
    />
  )
}
