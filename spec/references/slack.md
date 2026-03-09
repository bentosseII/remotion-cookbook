---
summary: Reference notes for the Slack-style asset. Baseline is a simplified Slack-inspired desktop collaboration shell with realistic channel, message, composer, and unread behavior.
read_when:
  - Building Slack-like shells, channel lists, or message flows
  - Authoring team collaboration demos
status: locked
---

# Slack reference

## Baseline
- Slack-inspired
- desktop shell
- dark theme first
- recognizable, not 1:1 identical

## Source notes
- no live workspace capture used
- reason: avoid exposing private messages, channels, or org data
- reference mode: product anatomy + interaction memory + simplified video-safe layout

## Keep
- narrow workspace rail
- main sidebar with channel groups
- message feed center stage
- top channel header
- bottom composer
- optional thread pane on the right
- unread markers and mention states

## Omit by default
- huddles
- canvases
- AI sidecars
- activity panes
- enterprise/admin chrome
- dense top-nav controls beyond what the story needs

## Anatomy
- workspace rail: ~56-64 px
- sidebar: ~260-300 px
- header: ~50-56 px
- composer zone: ~72-96 px depending on draft size
- message text size: ~14-15 px
- avatar sizes modest; feed density medium, not oversized

## Color / tone
- deep plum / charcoal shell works best for instant recognition
- sidebar darker than message pane
- unread and mention accents should pop clearly
- composer surface slightly lifted from feed

## Motion truth
- new messages appear with low drama: small rise/fade or immediate insert
- feed stays pinned to bottom during live conversation unless user scrolls away
- typing indicator pulses subtly
- reaction hover is quick and light
- thread open should feel like a pane reveal, not a modal

## Interaction truth
- composer typing cadence is human, not terminal-like
- pasted links/files should insert differently than typed text
- grouped messages reduce repeated avatar/time noise
- unread divider and jump-to-latest behavior need to read instantly

## First demo states to support
- switch channel from sidebar
- type and send a message
- receive a reply / incoming message
- open a thread
- scroll older messages then return to latest

## Build notes
- prioritize shell hierarchy over exact brand details
- message fixture system should support grouped authors, mentions, reactions, and attachments
- dark theme should be the default preset for recognizability
