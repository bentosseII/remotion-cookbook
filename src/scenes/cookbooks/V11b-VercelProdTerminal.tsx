import {TerminalScene, cyan, green, yellow} from '../cookbook-templates'

const lines = [
  {segments: [{text: 'Building production bundle…', color: cyan}]},
  {segments: [{text: '✓ Build complete (2.4s)', color: green}]},
  {segments: [{text: 'Deploying to edge network…', color: cyan}]},
  {segments: [{text: 'Production URL: https://cookbook-demo.vercel.app', color: green, weight: 700}]},
  {segments: [{text: 'Custom domain mapped: app.bensbites.co', color: yellow}]},
  {segments: [{text: 'SSL certificate active ✓', color: green}]},
]

export const V11bVercelProdTerminal = () => (
  <TerminalScene
    command='$ vercel --prod'
    lines={lines}
    title='Terminal — Production Deploy'
    outroLabel='Cookbook 11b'
    outroSublabel='Deploy and map custom domain'
  />
)
