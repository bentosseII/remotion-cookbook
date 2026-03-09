import React from 'react'

import type {BrowserTab} from '../../apps/browser'

export const chromePreviewTabs: readonly BrowserTab[] = [
  {id: 'tab-1', title: 'Demo UI Chrome Clean Ref', active: true},
  {id: 'tab-2', title: 'Asset library progress'},
]

export const ChromePreviewPage: React.FC = () => {
  return (
    <div
      style={{
        padding: 32,
        background: '#f5f7fb',
        minHeight: 720,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
        }}
      >
        <div
          style={{
            fontSize: 12,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#6d53e5',
            marginBottom: 18,
          }}
        >
          browser baseline
        </div>
        <div
          style={{
            fontSize: 58,
            lineHeight: 0.98,
            letterSpacing: '-0.05em',
            color: '#0f1728',
            fontWeight: 700,
          }}
        >
          Chrome-inspired shell reference
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 22,
            lineHeight: 1.5,
            color: '#4c5668',
            maxWidth: 980,
          }}
        >
          Safe local page. Used only to capture clean chrome proportions, tab strip hierarchy,
          and omnibox spacing.
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 20,
            marginTop: 44,
          }}
        >
          {[
            ['keep', 'tab strip, omnibox, nav row'],
            ['omit', 'bookmarks, extensions, profile clutter'],
            ['goal', 'recognizable, reusable, not 1:1'],
          ].map(([label, copy]) => (
            <div
              key={label}
              style={{
                borderRadius: 24,
                background: '#ffffff',
                border: '1px solid rgba(148, 163, 184, 0.22)',
                boxShadow: '0 12px 30px rgba(15, 23, 42, 0.06)',
                padding: 24,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#6d53e5',
                  marginBottom: 12,
                }}
              >
                {label}
              </div>
              <div
                style={{
                  color: '#111827',
                  fontSize: 18,
                  lineHeight: 1.35,
                }}
              >
                {copy}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
