---
summary: Locked visual baselines and scope cuts for the demo UI library.
read_when:
  - Starting any demo-ui app shell
  - Deciding what to include or omit from app chrome
status: locked
---

# Locked baselines

## Rule

Assets should feel like the app, not clone the app.

Target:
- instantly recognizable
- believable in motion
- simplified enough to reuse
- no unnecessary chrome

Do not chase 1:1 parity.

## Locked app baselines

### Terminal
- baseline: Ghostty-inspired mac terminal
- reason: clean chrome, modern look, strong fit for dev demos
- omit by default: tabs, config-specific ornament, status widgets, split panes

### Browser
- baseline: Chrome-inspired mac browser
- reason: recognizable immediately, neutral for many demos
- omit by default: bookmarks bar, extensions tray, profile controls, tab groups, side panels, sync banners

### Finder
- baseline: Finder-inspired mac file browser, list view first
- reason: fastest path to believable file navigation demos
- omit by default: preview pane, tags area, complex column view, iCloud/account-specific clutter

### Slack
- baseline: Slack-inspired desktop shell, simplified dark theme
- reason: recognizable collaboration layout without reproducing exact workspace chrome
- omit by default: huddles, canvases, AI helpers, activity panes, enterprise/admin chrome

### Codex
- baseline: Codex-inspired AI IDE shell, simplified
- reason: supports demo flows for ask -> stream -> tool run -> diff -> apply
- omit by default: account controls, model picker, secondary settings chrome, dense status bars

## Reuse rule

Only add omitted UI if the story needs it.
If it does not support the video beat, leave it out.

## Fidelity rule

Keep:
- proportions
- hierarchy
- motion feel
- interaction states

Do not copy:
- exact branding details
- every button
- every menu
- every hidden feature
