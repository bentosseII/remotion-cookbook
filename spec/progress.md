---
summary: Progress tracker for the demo UI library spec and implementation phases.
read_when:
  - Starting or resuming demo UI library work
  - Checking next phase, blockers, or completion state
status: active
---

# Demo UI library progress

## Status
- spec: active
- implementation: in progress
- current phase: Phase 4 — presets + polish

## Phase checklist

### Phase 0 — reference + foundations
- [x] create repo `AGENTS.md`
- [x] create concrete spec
- [x] create reference notes for terminal
- [x] create reference notes for browser
- [x] create reference notes for finder
- [x] create reference notes for slack
- [x] create reference notes for codex
- [x] define script event types in code
- [x] scaffold `src/demo-ui/`
- [x] add Remotion library preview folders

### Phase 1 — terminal v2
- [x] build terminal tokens
- [x] build terminal shell
- [x] build typing cadence presets
- [x] build stdout/stderr streaming model
- [x] build scrollback model
- [x] add terminal preview compositions

### Phase 2 — browser + finder
- [x] build browser shell
- [x] build browser interaction states
- [x] build finder shell
- [x] build selection/open/rename states
- [x] add browser/finder previews

### Phase 3 — slack + codex
- [x] build slack shell
- [x] build message/composer/thread states
- [x] build codex shell
- [x] build AI stream/tool/diff states
- [x] add slack/codex previews

### Phase 4 — presets + polish
- [x] add fixtures
- [x] add presets
- [x] realism QA: Browser — SVG icons, tighter radius, proper tab shape, lock icon, Chrome proportions
- [x] realism QA: Slack — rail nav, search bar, formatting toolbar, send button, presence dots, thread links
- [x] realism QA: Codex — title bar, activity bar, EXPLORER panel, syntax coloring, terminal tabs, status bar, AI panel redesign
- [x] realism QA: Finder — SVG icons (sidebar + row file types + toolbar), disclosure triangles, view mode selector, search mag, share icon, tighter radius/proportions
- [x] final lint + render checks (0 errors, all 4 finder interaction presets verified)
- [ ] document authoring workflow

## Notes
- terminal first; foundation for typing, streaming, scroll
- locked baselines: Ghostty terminal, Chrome browser
- other app shells stay inspired/simplified, not 1:1 clones
- `src/demo-ui/script/*` scaffolded first to keep scenes data-driven
- terminal shell scaffold lives in `src/demo-ui/apps/terminal/*`
- terminal previews now registered under Remotion `Library-Terminal`
- browser shell preview now registered under Remotion `Library-Browser`
- browser interaction previews now cover form/focus and docs scroll states
- finder shell preview now registered under Remotion `Library-Finder`
- finder interaction previews now cover selection, open, and rename states
- slack shell preview now registered under Remotion `Library-Slack`
- slack interaction previews now cover composer, incoming message, and thread states
- codex shell preview now registered under Remotion `Library-Codex`
- codex interaction previews now cover prompt, streaming plan, and diff/apply states
- rendered shell + interaction media now live in `asset-library-site/assets/`
- static showcase lives in `asset-library-site/`
- use `agent-browser` reference capture for safe browser checks
- use `frontend-design` skill for high-fidelity chrome work
- Browser shell tightened: SVG icons replace unicode, radius 24→10, active tab connects to toolbar
- Slack shell tightened: rail adds Home/DMs/Activity/More nav, search bar, rich composer with formatting+send
- Codex shell rehauled: activity bar, title bar, EXPLORER panel, syntax-colored code, terminal tab strip, blue status bar, redesigned AI assistant panel
- Slack tokens: added composerBorder, linkText, onlineGreen
- Codex tokens: added activityBarBackground/Width, titleBarBackground/Height, statusBarBackground/Height, syntax* colors, error
- Codex types: added optional statusBarText, branchName, EditorTab.modified
- Finder shell tightened: radius 26→10, toolbarHeight 52→46, sidebarWidth 220→200
- Finder icons: 8 named sidebar SVG icons (clock, link, grid, arrow-down, display, folder-fill, hdd, circle)
- Finder row icons: 6 named file type SVGs (folder, doc-code, movie, image, doc-text, generic doc) + disclosure chevrons
- Finder toolbar: SVG nav arrows, view mode selector (grid/list/column) with active state, share icon, search field with magnifying glass
- Finder tokens: added sidebarAccent
- Finder v3 rewrite: title centered in toolbar (not breadcrumb), path bar at bottom with folder icons, alternating row stripes, no sidebar title, system-blue selection, 22px dense rows, sort arrow on Name column, 4 view mode buttons with active pill, ··· more + share + tag toolbar icons, section headers normal case
