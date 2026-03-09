---
summary: Reference notes for the browser asset. Baseline is a Chrome-inspired mac browser shell with simplified chrome and realistic pointer, focus, form, and scroll behavior.
read_when:
  - Building browser tokens, chrome, or interaction states
  - Authoring docs, dashboard, auth, or marketing page demos
status: locked
---

# Browser reference

## Baseline
- Chrome-inspired
- mac desktop window
- light chrome around arbitrary page content
- recognizable, not 1:1 identical

## Source notes
- safe live capture taken with a dedicated temporary Chrome instance and a local neutral page
- screenshot: `spec/references/captures/chrome-window-clean-ref.png`
- mirrored into showcase asset: `asset-library-site/assets/chrome-window-ref.png`
- capture used for rough proportions only

## Keep
- mac traffic lights at top-left
- tab strip with one active tab and optional inactive tab(s)
- new-tab affordance
- nav row with back / forward / reload
- omnibox as main chrome element
- clean page viewport below chrome

## Omit by default
- bookmarks bar
- extensions tray
- profile avatar
- side panel buttons
- sync banners
- automation infobars
- tab groups unless the story needs them

## Anatomy
- top chrome breaks into 2 bands:
  1. tab strip
  2. toolbar / omnibox row
- tab strip height: ~38-42 px
- toolbar height: ~38-42 px
- active tab shape: soft top corners, pill-like body
- omnibox height: ~30-34 px, wide radius
- icon buttons: ~28-32 px hit area, not oversized
- UI text size: ~12-14 px
- content viewport begins immediately under toolbar

## Color / tone
- light gray title/tab background
- slightly brighter toolbar than tab strip
- active tab reads brighter than surrounding chrome
- omnibox border subtle, not heavy
- page area should feel independent from chrome

## Motion truth
- pointer slows slightly before click targets
- tab switch: content snap + tiny settle, not floaty animation
- omnibox focus: clear insertion state, selected URL text if appropriate
- page load can show brief progress/readiness beat before content stabilizes
- scroll should feel trackpad-like with inertia and settle

## Interaction truth
- click states: hover -> press -> release -> focused result
- typing into omnibox is distinct from page form typing
- page forms must show focus rings/caret/cursor states
- dropdowns and checkboxes should feel native enough for video
- page scroll targets the viewport, not chrome

## First demo states to support
- docs page with sidebar and content scroll
- dashboard with cards and filters
- auth form fill + submit
- simple marketing page scroll

## Build notes
- browser shell should be generic enough to wrap many pages
- page content should be its own component slot
- keep tab strip and toolbar reusable apart from page presets
