import {ConceptScene, cyan, green, yellow} from '../cookbook-templates'

const elements = [
  {type: 'box', text: 'Commit 1\nfirst save', position: {x: 170, y: 450}, color: green, delay: 10},
  {type: 'box', text: 'Commit 2\nlayout tweak', position: {x: 620, y: 450}, color: green, delay: 20},
  {type: 'box', text: 'Commit 3\ndeploy ready', position: {x: 1070, y: 450}, color: green, delay: 30},
  {type: 'box', text: 'feature/new-layout', position: {x: 840, y: 260}, color: yellow, delay: 40},
  {type: 'arrow', from: {x: 470, y: 490}, to: {x: 620, y: 490}, color: cyan, delay: 46},
  {type: 'arrow', from: {x: 920, y: 490}, to: {x: 1070, y: 490}, color: cyan, delay: 52},
  {type: 'arrow', from: {x: 760, y: 450}, to: {x: 880, y: 320}, color: yellow, delay: 58},
]

export const V04aGitTimelineBranch = () => (
  <ConceptScene
    title='Commits = Save Points'
    elements={elements}
    outroLabel='Cookbook 04a'
    outroSublabel='Branch safely before big changes'
  />
)
