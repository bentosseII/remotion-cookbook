import {EditorScene, cyan, green, yellow} from '../cookbook-templates'

const lines = [
  {text: '---', color: yellow},
  {text: 'name: frontend-design', color: cyan},
  {text: 'description: Create distinctive, production-grade UIs', color: cyan},
  {text: 'triggers: ["build page", "redesign", "make it look like"]', color: cyan},
  {text: '---', color: yellow},
  {text: ''},
  {text: '# Design Principles', highlight: true},
  {text: '- Strong visual hierarchy'},
  {text: '- Clean spacing system'},
  {text: '- Avoid generic AI gradients'},
  {text: '- Keep mobile readability first', color: green},
]

export const V02cSkillFileEditor = () => (
  <EditorScene
    filename='SKILL.md'
    lines={lines}
    sidebar={[
      {name: '.agents', type: 'folder', indent: 0},
      {name: 'skills', type: 'folder', indent: 1},
      {name: 'frontend-design', type: 'folder', indent: 2},
      {name: 'SKILL.md', type: 'file', indent: 3, active: true},
    ]}
    outroLabel='Cookbook 02c'
    outroSublabel='Skills are markdown instruction packs'
  />
)
