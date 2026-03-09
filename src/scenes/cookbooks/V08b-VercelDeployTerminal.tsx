import {TerminalScene, cyan, green, muted} from '../cookbook-templates'

const lines = [
  {segments: [{text: 'Vercel CLI 33.2.0', color: muted}]},
  {segments: [{text: 'Linking project: guestbook-app', color: cyan}]},
  {segments: [{text: 'Uploading build output…', color: cyan}]},
  {segments: [{text: '✓ Production deployed', color: green}]},
  {segments: [{text: 'URL: https://guestbook-app.vercel.app', color: green, weight: 700}]},
]

export const V08bVercelDeployTerminal = () => (
  <TerminalScene
    command='$ vercel deploy --prod'
    lines={lines}
    title='Terminal — Deploy Full App'
    outroLabel='Cookbook 08b'
    outroSublabel='Ship to production'
  />
)
