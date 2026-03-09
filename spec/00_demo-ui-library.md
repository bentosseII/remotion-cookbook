---
summary: Spec for a reusable Remotion demo UI library with realistic app shells and interaction behavior for terminal, browser, finder, Slack, and Codex-style demos.
read_when:
  - Planning demo video templates or app-faithful UI assets
  - Implementing reusable Remotion primitives for pointer, typing, scroll, or streaming text
  - Adding Terminal, Browser, Finder, Slack, or Codex compositions
status: active
owner: Ben Tossell
---

# Demo UI library spec

## 1. Outcome

Build a reusable component + template library inside `remotion-cookbook` so demo videos can show believable product UI instead of generic mockups.

Initial target assets:
- Terminal
- Browser
- Finder
- Slack
- Codex

Each asset must:
- look instantly recognizable at a paused frame
- animate like the real app during play
- be data-driven and script-driven, not scene-specific JSX
- support reuse across many videos

## 2. Why

Current templates are good for explaining concepts, not for app-realistic demos.

Current gaps:
- generic chrome
- typing too uniform
- output appears as fades, not process/state changes
- weak pointer/click/hover/focus behavior
- no real scroll inertia or streaming text model
- too much per-scene custom structure

## 3. Non-goals

Not building full app clones.
Not shipping interactive web apps.
Not matching every hidden edge case of the source apps.
Not using CSS animations or transitions for motion.

Goal is “video-faithful, instantly recognizable, believable in motion”.

## 4. Constraints

### Remotion constraints
- all motion frame-driven via `useCurrentFrame()`
- use `interpolate()` / `spring()` only
- compositions registered in `src/Root.tsx` via folders
- assets/fonts/icons in `public/` and referenced with `staticFile()`
- duration derived from scripted interaction timeline where possible

### Design constraints
- must avoid generic AI-looking UI
- each app gets its own token set: typography, color, radius, stroke, shadow, spacing
- use `frontend-design` skill when building chrome and motion tone
- app shells should be inspired by the product, not cloned 1:1
- omit chrome that does not help the story

### Locked baselines
- terminal baseline: Ghostty-inspired
- browser baseline: Chrome-inspired
- finder baseline: Finder-inspired list view
- slack baseline: Slack-inspired simplified dark desktop shell
- codex baseline: Codex-inspired simplified AI IDE shell
- baseline details live in `spec/references/00_baselines.md`

### Fidelity constraints
- interactions must reflect how the real app feels, not just what it looks like
- pointer path, click timing, text cadence, selection, scroll settle, focus rings, and loading states all matter

## 5. Deliverables

### 5.1 Library structure

```txt
src/demo-ui/
  core/
    windows/
    layout/
    chrome/
    text/
  motion/
    pointer/
    typing/
    scroll/
    streaming/
    selection/
  script/
    types.ts
    timeline.ts
    reducer.ts
    duration.ts
    targets.ts
  apps/
    terminal/
    browser/
    finder/
    slack/
    codex/
  fixtures/
    terminal/
    browser/
    finder/
    slack/
    codex/
  presets/
    terminal/
    browser/
    finder/
    slack/
    codex/
  index.ts
```

### 5.2 Preview compositions

Add dedicated library previews grouped with Remotion `<Folder>`:

```txt
Library-Primitives
Library-Terminal
Library-Browser
Library-Finder
Library-Slack
Library-Codex
Library-Interaction-tests
```

These are for tuning realism, not final videos.

### 5.3 Reference pack

Create lightweight reference notes per app under:

```txt
spec/references/
  terminal.md
  browser.md
  finder.md
  slack.md
  codex.md
```

Each reference note captures:
- chrome anatomy
- fonts + rough sizes
- key spacings / row heights / toolbar heights
- motion notes
- interaction notes
- screenshots / refs used

## 6. Core architecture

Everything runs through 3 layers:

### 6.1 Shell
Visual frame of the app.
Examples:
- Mac window chrome
- Browser tabs + address bar
- Finder sidebar + toolbar
- Slack channel rail + thread pane
- Codex editor/chat/terminal split

### 6.2 State
Serializable snapshot of what the app currently contains.
Examples:
- terminal lines, cwd, prompt, running state
- browser tabs, URL, loading progress, viewport scroll
- finder folders, selected row, column state
- slack channels, unread counts, messages, composer draft
- codex files, active tab, prompt, streamed response, diff status

### 6.3 Script
Timed list of events that mutate state or animate interaction primitives.

Examples:
- move pointer
- hover target
- click target
- focus target
- type text
- paste text
- backspace
- stream output
- scroll viewport
- select row
- open tab
- switch pane
- apply diff
- show toast

Script must be the main authoring layer for demos.

## 7. Script model

Use seconds at authoring level. Convert to frames at render time.

```ts
export type DemoEvent =
  | {at: number; type: 'move-pointer'; target: string; duration?: number; style?: 'human' | 'direct'}
  | {at: number; type: 'hover'; target: string}
  | {at: number; type: 'click'; target: string; button?: 'left' | 'right'; count?: 1 | 2}
  | {at: number; type: 'focus'; target: string}
  | {at: number; type: 'type'; target: string; text: string; cadence?: 'human' | 'fast' | 'code'}
  | {at: number; type: 'paste'; target: string; text: string}
  | {at: number; type: 'backspace'; target: string; count: number; cadence?: 'human' | 'burst'}
  | {at: number; type: 'scroll'; target: string; deltaY: number; duration?: number; inertia?: boolean}
  | {at: number; type: 'select-text'; target: string; start: number; end: number}
  | {at: number; type: 'stream-text'; target: string; chunks: string[]; chunkOffsets?: number[]}
  | {at: number; type: 'set-state'; patch: Record<string, unknown>}
  | {at: number; type: 'wait'; duration: number}
```

Rules:
- events never depend on CSS timers
- target ids map to hit regions or logical nodes
- duration of a scene = last event + settle buffer
- reducer computes render state at any frame

## 8. Motion primitives

## 8.1 Pointer
Must support:
- move with eased path, not straight robotic line every time
- small overshoot / settle for longer moves
- hover pause before click when natural
- click states: hover -> down -> up -> focus
- optional drag path later

Default pointer styles:
- precise
- casual
- trackpad-fast

## 8.2 Typing
Must support:
- bursty human cadence
- pauses at punctuation, symbols, camelCase boundaries, long words
- command-line typing different from chat typing
- paste as near-instant insert, not fake rapid typing
- optional mistakes + backspace correction

Cadence presets:
- terminal-human
- terminal-power-user
- editor-code
- chat-human
- paste

## 8.3 Streaming text
Must support:
- chunked word/token groups
- variable delays between chunks
- pauses around code fences, bullets, headings
- optional cursor / thinking / spinner state before stream starts

Use for:
- terminal output
- Codex/assistant replies
- logs
- toasts / progress messages

## 8.4 Scroll
Must support:
- burst + inertia + settle
- scroll container targeting, not page-only
- sticky headers unaffected when appropriate
- content clipping + easing at end
- wheel/trackpad feel presets

## 8.5 Selection and focus
Must support:
- input focus
- selected row/card/message
- text selection highlight
- active tab / pane focus
- hover-only states

## 9. App requirements

## 9.1 Terminal v2

Purpose: strongest foundation. Other apps reuse typing, streaming, scroll, selection.

Must include:
- shell preset: Ghostty-inspired as the default terminal shell
- window chrome + title
- prompt model: user, host, cwd, prompt symbol
- command typing cadence
- command submit delay
- process running state
- stdout/stderr streaming in chunks
- progress spinners / dots / status lines
- scrollback when output exceeds viewport
- prompt returns only after process completes
- optional copy/select highlight
- optional split pane later

State shape should cover:
- cwd
- prompt text
- line buffer
- running command
- cursor visibility
- theme preset
- viewport scroll offset

Acceptance examples:
- install command with logs
- AI CLI streaming answer
- git status / file listing
- long output causing scroll

## 9.2 Browser

Must include:
- Chrome-inspired mac browser chrome
- tabs
- back/forward/reload
- URL field with lock / loading state
- page viewport container
- pointer hover/click/focus
- form fill
- dropdown/select
- checkbox/radio
- page scroll with inertia
- optional devtools later

Page presets for demos:
- docs page
- dashboard app
- auth form
- marketing site

## 9.3 Finder

Must include:
- mac window chrome
- toolbar + breadcrumb/path bar
- sidebar
- list view first
- optional grid view later
- row selection
- double-click open
- disclosure triangles
- rename inline
- optional preview pane

## 9.4 Slack

Must include:
- workspace rail
- channel list
- message feed
- composer
- thread pane option
- unread badge states
- mention styling
- typing indicator
- reaction hover / add reaction state
- channel scroll behavior

Message behaviors:
- incoming message timing
- grouped avatars/timestamps
- composer typing different from message arrival
- auto-scroll only when feed pinned to bottom

## 9.5 Codex

Must include:
- file tree
- editor tab strip
- editor pane
- prompt/chat pane
- terminal/output pane
- assistant streaming response
- tool run rows / status badges
- diff/apply state
- loading / thinking / completed states

Core demo flows:
- ask task
- assistant streams plan
- tool/command runs
- file diff appears
- apply completes

## 10. Visual system

Each app gets a dedicated token file:

```txt
src/demo-ui/apps/<app>/tokens.ts
```

Tokens include:
- background layers
- border colors
- shadow system
- font families
- font sizes
- radii
- spacing scale
- icon sizing
- state colors: hover, active, selected, unread, success, error

Rule:
- recognizable first
- stylized second
- generic never

## 11. Assets

Store app-faithful assets in `public/demo-ui/`.

Expected assets:
- local fonts where licensing allows
- svg icons
- subtle textures/noise if needed
- sample avatars / thumbnails / favicons

Rules:
- use `staticFile()`
- no runtime remote fetches
- keep asset names stable and app-scoped

## 12. Reference capture workflow

Use real apps as input before building each asset.

Preferred workflow:
1. open real app or web equivalent
2. capture screenshots at representative states
3. note chrome sizes, spacing, typography, icon placement
4. write motion notes: hover delay, click feel, scroll speed, typing pattern, stream cadence
5. save findings into `spec/references/<app>.md`

Allowed tooling:
- `agent-browser` for browser-based products
- `agent-browser` headed workflows for safe live browser capture
- manual screenshots if needed
- avoid live capture of private terminal, chat, or code content unless the state is sanitized first

For every app capture at least:
- idle frame
- focused input frame
- scrolling frame
- active operation frame
- completed state frame

## 13. Phase plan

### Phase 0 — reference + foundations
- create spec + progress docs
- capture reference notes for 5 app targets
- define script event schema
- define shared motion presets
- define shared window/token primitives

Exit:
- spec approved
- references ready
- library file tree created

### Phase 1 — terminal v2
- build shell
- build prompt + typed command model
- build output streaming model
- build scrollback model
- add preview compositions

Exit:
- terminal scenes can be authored from data + script only
- old terminal template no longer needed for new work

### Phase 2 — browser + finder
- build browser kit
- build finder kit
- add shared selection/focus/scroll primitives
- add preview compositions

Exit:
- can author docs/dashboard/auth/browser flows
- can author file navigation flows

### Phase 3 — slack + codex
- build Slack shell + message engine
- build Codex shell + response stream + diff states
- add preview compositions

Exit:
- can author believable collaboration and AI coding demos

### Phase 4 — presets + polish
- add ready-made fixtures
- add ready-made scene presets
- trim file sizes / split oversized files
- document authoring workflow
- QA motion realism

Exit:
- new demo videos built mostly from fixtures + scripts

## 14. Acceptance criteria

Global:
- paused frame: app is recognizable within 1 second
- half-speed playback: motion still believable
- no CSS transitions / CSS animations anywhere
- each app can render at least 3 preview compositions from script data alone
- scene duration derived from scripted events
- files remain modular and under size limits

Terminal:
- command cadence feels human
- stdout streams in believable chunks
- long output scrolls naturally

Browser:
- pointer/focus/hover states feel real
- forms + scroll behave believably

Finder:
- selection/open/rename behavior feels native enough for video

Slack:
- channel/message/composer behavior reads as Slack immediately

Codex:
- editor/chat/terminal choreography reads as AI coding tool immediately

## 15. Test + QA plan

Required per phase:
- `npm run lint`
- preview compositions open in Remotion Studio
- render short sample clips for realism review

Manual QA checklist:
- pointer path not robotic
- clicks show state changes
- typing has pauses and cadence variation
- paste is distinct from typing
- scroll has inertia and settle
- stream text arrives in chunks, not fake letter-fade
- chrome proportions match reference notes

## 16. First implementation slice

Build in this order:
1. `src/demo-ui/script/*`
2. `src/demo-ui/motion/pointer/*`
3. `src/demo-ui/motion/typing/*`
4. `src/demo-ui/motion/streaming/*`
5. `src/demo-ui/apps/terminal/*`
6. `Library-Terminal` preview compositions

First real demo targets:
- install/log stream
- AI CLI answer stream
- long-running command with spinner + completion

## 17. Open questions

- do we want screenshot-diff QA later for preview frames?
- when should omitted chrome be reintroduced for story-specific presets?
