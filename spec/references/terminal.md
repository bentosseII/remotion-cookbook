---
summary: Reference notes for the terminal asset. Baseline is a Ghostty-inspired mac terminal shell with realistic command, streaming, and scroll behavior.
read_when:
  - Building terminal tokens, shell chrome, or motion
  - Authoring CLI demo presets
status: locked
---

# Terminal reference

## Baseline
- Ghostty-inspired
- mac window chrome
- dark theme first
- single window first; no tabs by default
- recognizable, not 1:1 identical

## Source notes
- live capture intentionally skipped
- reason: avoid exposing local shell history or secrets
- reference mode: product anatomy + Ghostty visual language + safe simplification for video

## Keep
- slim mac traffic-light chrome
- minimal top bar
- dark content area with generous padding
- crisp monospace rendering
- bright block or bar cursor
- subtle contrast between title bar and terminal body

## Omit by default
- tabs
- split panes
- config-specific badges
- deep settings chrome
- command palette
- terminal inspector UI

## Anatomy
- title bar height: ~40-44 px at 1x desktop scale
- outer radius: ~16-20 px
- body padding: ~24-30 px
- content width: wide, edge-to-edge feeling; minimal side furniture
- font direction: clean monospace stack, not playful
- line height: ~1.4 to 1.5
- terminal font size in 1080p comp: ~20-24 px

## Color / tone
- body: near-black, slightly blue or graphite
- title bar: a touch lighter than body
- border: low-contrast, soft
- selection: cool translucent accent
- success/error/warn colors should read like terminal output, not dashboard chips

## Motion truth
- commands type in bursts, not evenly
- short pause before Enter
- after Enter: 1 beat of latency before output starts
- output appears in chunks, not line fades
- long output pushes viewport and causes scrollback
- spinner / progress rows update in place
- prompt returns only when process completes
- paste must look different from typing

## Interaction truth
- cursor blinks while waiting, not while paste inserts instantly
- selection highlight should feel rectangular and text-bound
- copy/select interactions optional but should obey line grid
- stderr can be slightly delayed vs stdout if useful for realism

## First demo states to support
- install command with streamed logs
- AI CLI answer streaming back
- long command with spinner then success summary
- git / ls style quick command with immediate prompt return

## Build notes
- prompt model should include user, host, cwd, prompt symbol
- use fixed line grid; scroll by rows, not free pixel drift
- keep chrome minimal so terminal content stays hero
