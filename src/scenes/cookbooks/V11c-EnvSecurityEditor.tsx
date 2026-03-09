import {EditorScene, green, orange} from '../cookbook-templates'

const lines = [
  {text: 'NEXT_PUBLIC_SUPABASE_URL=https://xyzcompany.supabase.co', color: green},
  {text: 'NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...REDACTED', highlight: true},
  {text: 'SUPABASE_SERVICE_ROLE_KEY=sbp_...REDACTED', color: orange, highlight: true},
  {text: 'OPENAI_API_KEY=sk-proj-...REDACTED', color: orange, highlight: true},
  {text: 'TRIGGER_PROJECT_ID=proj_live_91xk2', color: green},
  {text: 'NODE_ENV=production', color: green},
  {text: ''},
  {text: '# Never commit real keys to git'},
]

export const V11cEnvSecurityEditor = () => (
  <EditorScene
    filename='.env.local'
    lines={lines}
    sidebar={[
      {name: 'guestbook-app', type: 'folder', indent: 0},
      {name: '.env.local', type: 'file', indent: 1, active: true},
      {name: 'ENVIRONMENT.md', type: 'file', indent: 1},
      {name: 'README.md', type: 'file', indent: 1},
    ]}
    outroLabel='Cookbook 11c'
    outroSublabel='Keep secrets in env files (redacted)'
  />
)
