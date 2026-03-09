import {TerminalScene, cyan, green, yellow, muted} from '../cookbook-templates'

const lines = [
  {segments: [{text: 'Opening skills.sh…', color: muted}]},
  {segments: [{text: 'Found skill: frontend-design', color: cyan}]},
  {segments: [{text: 'Installing to ~/.agents/skills/frontend-design', color: green}]},
  {segments: [{text: '✓ SKILL.md created', color: green}]},
  {segments: [{text: 'Frontmatter detected: name, description, triggers', color: yellow}]},
  {segments: [{text: 'Skill ready. You can now prompt: “make it look like Linear”', color: cyan}]},
]

export const V02aSkillInstall = () => (
  <TerminalScene
    command='$ clawhub install frontend-design --from https://skills.sh'
    lines={lines}
    title='Terminal — Skill Install'
    outroLabel='Cookbook 02a'
    outroSublabel='Install front-end design skill'
  />
)
