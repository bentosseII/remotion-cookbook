---
summary: Reference notes for the finder asset. Baseline is a Finder-inspired mac file browser with a list-first workflow and believable selection/open/rename behavior.
read_when:
  - Building finder tokens, list view, sidebar, or selection motion
  - Authoring file navigation demos
status: locked
---

# Finder reference

## Baseline
- Finder-inspired
- mac desktop window
- list view first
- light theme first
- recognizable, not 1:1 identical

## Source notes
- safe live capture created from a temporary folder with fake files
- screenshot: `spec/references/captures/finder-window-ref.png`
- mirrored into showcase asset: `asset-library-site/assets/finder-window-ref.png`
- capture used for spacing and toolbar hierarchy

## Keep
- mac traffic lights
- toolbar with back / forward and view controls
- search field top-right
- left sidebar
- main file list with headers
- row selection and disclosure affordances
- path / breadcrumb support

## Omit by default
- preview pane
- tags region
- complex sync/account badges
- multi-column view
- inspector panels

## Anatomy
- title/toolbar band: ~46-52 px
- sidebar width: ~180-220 px
- search field height: ~28-32 px
- list header height: ~24-28 px
- list row height: ~22-28 px
- list view is dense but airy; rows do not feel table-heavy
- subtle rounded window corners; overall light, quiet chrome

## Color / tone
- warm or neutral light gray chrome
- sidebar slightly darker or more textured than main pane
- selection state soft blue/gray, not saturated
- separators very subtle

## Motion truth
- row select is immediate, not animated heavily
- double-click open has a short pause before content changes
- disclosure triangles rotate quickly with no bounce
- scroll is precise and lighter than web page scroll
- inline rename swaps row label into editable text field cleanly

## Interaction truth
- selected row stays visible during scroll unless view changes
- keyboard-style selection state should be easy to show later
- sidebar active item must be clear even when file list changes
- breadcrumb/path state must stay coherent with opened folders

## First demo states to support
- browse a project folder tree
- select files in list view
- open a folder by double click
- rename a file inline
- scroll through a larger directory

## Build notes
- start with list view only
- model list rows as reusable data objects with icon, name, type, modified, size
- sidebar sections can be simplified into stable groups for demos
