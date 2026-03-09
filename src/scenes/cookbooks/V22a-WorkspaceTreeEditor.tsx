import React from 'react'
import {EditorScene} from '../cookbook-templates'

export const V22aWorkspaceTreeEditor: React.FC = () => {
  return (
    <EditorScene
      filename='WORKSPACE.md'
      sidebar={[
        {name: '~', type: 'folder', indent: 0, active: false},
        {name: 'repos', type: 'folder', indent: 1, active: false},
        {name: 'content-engine', type: 'folder', indent: 2, active: false},
        {name: 'remotion-cookbook', type: 'folder', indent: 2, active: false},
        {name: '.agents', type: 'folder', indent: 1, active: false},
        {name: 'skills', type: 'folder', indent: 2, active: false},
        {name: '.secrets', type: 'file', indent: 1, active: true}
      ]}
      lines={[
        {text: "# Workspace Setup"},
        {text: ""},
        {text: "- ~/repos/            # all projects"},
        {text: "- ~/.agents/skills/   # shared skills"},
        {text: "- ~/.secrets          # global secrets"},
        {text: "- .env                # project secrets only"},
        {text: ""},
        {text: "Rules:"},
        {text: "- never commit secret files"},
        {text: "- use project agents.md for local overrides"},
        {text: "- keep spec/progress.md updated"}
      ]}
      outroLabel='Clean workspace'
      outroSublabel='Predictable paths'
    />
  )
}
