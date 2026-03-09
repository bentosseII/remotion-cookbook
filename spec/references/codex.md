---
summary: Reference notes for the Codex-style asset. Baseline is a simplified Codex-inspired AI coding workspace with editor, assistant stream, tool states, and terminal output.
read_when:
  - Building Codex-like AI IDE shells or assistant/tool flows
  - Authoring ask -> stream -> tool -> diff demos
status: locked
---

# Codex reference

## Baseline
- Codex-inspired
- desktop AI coding workspace
- dark theme first
- recognizable, not 1:1 identical

## Source notes
- no live app capture used
- reason: avoid exposing private code, prompts, or repo state
- reference mode: current AI IDE patterns + Codex-style task flow + simplified shell for video

## Locked shell shape
- left file tree
- center editor stack
- bottom terminal/output region
- right assistant/task pane

This is the baseline even if the real product evolves.
The library needs a stable, reusable story shape.

## Keep
- file tree or repo navigator
- editor tab strip
- code editor area
- task prompt / chat pane
- assistant streaming response
- tool run rows with status
- diff / apply feedback
- terminal or command output surface

## Omit by default
- account menus
- model pickers
- settings chrome
- secondary analytics/status bars
- rarely used utility panels

## Anatomy
- file tree: ~220-260 px
- assistant pane: ~340-400 px
- editor tab strip: ~38-44 px
- bottom terminal: ~200-260 px when open
- code/editor font: monospace
- UI font: clean system/sans
- shell should read as IDE first, chat app second

## Color / tone
- dark graphite / near-black workspace
- subtle panel separation, not loud borders everywhere
- active editor tab / focused pane should be obvious
- success/error/tool states need clear but restrained accents

## Motion truth
- prompt submit -> short think beat -> streamed plan / response
- tool rows update incrementally, not all at once
- file changes and diffs appear in sequence
- terminal output can stream while assistant pane continues updating
- pane focus shifts should be quick and readable

## Interaction truth
- assistant text streams by chunk/token groups, not constant single letters
- code editor caret movement differs from chat typing
- diff apply should visibly change file/editor state
- tool status should move through idle -> running -> success/fail clearly

## First demo states to support
- ask for a task
- assistant streams plan
- tool/command runs
- file diff appears
- apply completes
- tests/command output confirm success

## Build notes
- baseline is intentionally a stable inspired shell, not a product clone
- do not chase every real Codex control
- invest in believable assistant/tool choreography; that is the recognizability lever
