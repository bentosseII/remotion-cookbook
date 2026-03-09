# AGENTS.md

## Build process
- plan first
- all feature work starts in `./spec`
- keep `./spec/progress.md` current
- use `frontend-design` skill for chrome, spacing, typography, motion tone
- use `agent-browser` for reference capture; use headed / Electron workflows when checking native-ish apps like Slack or Codex
- Remotion only: frame-driven motion with `useCurrentFrame()`, `interpolate()`, `spring()`; no CSS transitions / CSS animations
- add preview compositions for reusable library pieces before wiring full scenes
- keep files <500 LOC; split early
- run full gate before handoff: `npm run lint`

## Specs
- active spec: `./spec/00_demo-ui-library.md`
- status board: `./spec/progress.md`
- reference notes: `./spec/references/`
- demo ui source: `./src/demo-ui/`
- terminal shell baseline: `./src/demo-ui/apps/terminal/`
- browser shell baseline: `./src/demo-ui/apps/browser/`
- browser state previews: `./src/demo-ui/presets/browser/`
- finder shell baseline: `./src/demo-ui/apps/finder/`
- finder state previews: `./src/demo-ui/presets/finder/`
- slack shell baseline: `./src/demo-ui/apps/slack/`
- slack state previews: `./src/demo-ui/presets/slack/`
- codex shell baseline: `./src/demo-ui/apps/codex/`
- codex state previews: `./src/demo-ui/presets/codex/`
- remotion library comps: `./src/DemoUiLibraryCompositions.tsx`
- static showcase site: `./asset-library-site/`
- rendered showcase media: `./asset-library-site/assets/`

## Docs
- docs for agents, not marketing
- use frontmatter with `summary` and `read_when`
- keep examples close to code they explain
