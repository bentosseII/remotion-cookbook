const interactionStills = [
  {
    title: 'Terminal typing cadence',
    label: 'Library-Terminal-Typing',
    notes: 'Captured during the typed command state so the shelf shows burst cadence rather than just the idle shell.',
    image: './assets/render-terminal-typing.png',
  },
  {
    title: 'Browser form state',
    label: 'Library-Browser-Form',
    notes: 'Focused input, typed values, and primary button state captured from the actual interaction composition.',
    image: './assets/render-browser-form.png',
  },
  {
    title: 'Finder rename state',
    label: 'Library-Finder-Rename',
    notes: 'Inline rename frame from the Finder interaction set, not a separate handmade mock.',
    image: './assets/render-finder-rename.png',
  },
  {
    title: 'Slack incoming message',
    label: 'Library-Slack-Incoming',
    notes: 'Unread + typing / incoming state captured directly from the Slack interaction comp.',
    image: './assets/render-slack-incoming.png',
  },
  {
    title: 'Codex diff state',
    label: 'Library-Codex-Diff',
    notes: 'Diff/apply card visible in a rendered still from the Codex interaction preview.',
    image: './assets/render-codex-diff.png',
  },
]

const motionClips = [
  {
    title: 'Terminal typing',
    label: 'Typing cadence',
    notes: 'Burst rhythm + settle.',
    video: './assets/clip-terminal-typing.mp4',
  },
  {
    title: 'Browser scroll',
    label: 'Viewport motion',
    notes: 'Docs scroll with sticky context.',
    video: './assets/clip-browser-scroll.mp4',
  },
  {
    title: 'Finder open',
    label: 'Folder transition',
    notes: 'List view target state.',
    video: './assets/clip-finder-open.mp4',
  },
  {
    title: 'Slack incoming',
    label: 'Message timing',
    notes: 'Typing → arrival pacing.',
    video: './assets/clip-slack-incoming.mp4',
  },
  {
    title: 'Codex streaming',
    label: 'Assistant stream',
    notes: 'Plan chunks + tool state.',
    video: './assets/clip-codex-streaming.mp4',
  },
]

const references = [
  {
    title: 'Chrome-inspired browser baseline',
    status: 'reference capture',
    notes: 'Keep tab strip, omnibox, nav row. Drop bookmarks bar, extensions, and profile clutter.',
    image: './assets/chrome-window-ref.png',
    tags: ['chrome baseline', 'safe capture'],
  },
  {
    title: 'Finder-inspired list baseline',
    status: 'reference capture',
    notes: 'Keep toolbar, sidebar, search, list headers, and dense rows. Drop preview pane and account clutter.',
    image: './assets/finder-window-ref.png',
    tags: ['finder baseline', 'safe capture'],
  },
  {
    title: 'Asset rules locked',
    status: 'design guardrail',
    notes: 'App-like, not cloned. Recognizable first. Simplified second. Omit anything that does not help the story beat.',
    image: './assets/chrome-window-ref.png',
    tags: ['inspired shell', 'scope cut'],
  },
]

const planned = [
  {
    title: 'Rendered interaction thumbnails',
    previewClass: 'slack',
    notes: 'Render stills from the interaction comps themselves so the shelf can show composer, incoming, thread, stream, and diff states.',
  },
  {
    title: 'Motion clip shelf',
    previewClass: 'codex',
    notes: 'Add short autoplay loops from selected interaction comps so the shelf shows timing quality, not just paused frames.',
  },
  {
    title: 'Authoring docs',
    previewClass: 'browser',
    notes: 'Document how to create new fixtures, scripts, and preview comps so future demo scenes stay data-driven.',
  },
]

const interactionStillsGrid = document.getElementById('interaction-stills-grid')
const motionClipsGrid = document.getElementById('motion-clips-grid')
const referenceGrid = document.getElementById('reference-grid')
const plannedGrid = document.getElementById('planned-grid')

interactionStillsGrid.innerHTML = interactionStills
  .map(
    (item) => `
      <article class="artifact-card">
        <div class="artifact-media-frame">
          <img src="${item.image}" alt="${item.title}" class="artifact-image" />
        </div>
        <div class="artifact-copy">
          <div class="reference-meta"><span>${item.label}</span></div>
          <h3>${item.title}</h3>
          <p>${item.notes}</p>
        </div>
      </article>
    `,
  )
  .join('')

motionClipsGrid.innerHTML = motionClips
  .map(
    (item) => `
      <article class="motion-card">
        <div class="motion-media-frame">
          <video class="motion-video" src="${item.video}" autoplay muted loop playsinline preload="metadata"></video>
        </div>
        <div class="artifact-copy">
          <div class="reference-meta"><span>${item.label}</span></div>
          <h3>${item.title}</h3>
          <p>${item.notes}</p>
        </div>
      </article>
    `,
  )
  .join('')

document.querySelectorAll('.motion-video').forEach((video) => {
  video.muted = true
  video.play().catch(() => {})
})

referenceGrid.innerHTML = references
  .map(
    (item) => `
      <article class="reference-card">
        <img src="${item.image}" alt="${item.title}" />
        <div class="reference-copy">
          <div class="reference-meta">
            <span>${item.status}</span>
            ${item.tags.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
          <h3>${item.title}</h3>
          <p>${item.notes}</p>
        </div>
      </article>
    `,
  )
  .join('')

plannedGrid.innerHTML = planned
  .map(
    (item) => `
      <article class="planned-card">
        <div class="planned-preview ${item.previewClass}"></div>
        <div class="planned-copy">
          <div class="reference-meta"><span>next up</span></div>
          <h3>${item.title}</h3>
          <p>${item.notes}</p>
        </div>
      </article>
    `,
  )
  .join('')
