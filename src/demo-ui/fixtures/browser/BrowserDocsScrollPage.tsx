import React from 'react'

import type {BrowserScriptState} from '../../apps/browser'

const sections = [
  {
    title: 'Why this shell exists',
    copy:
      'Browser demos need recognizable chrome and believable viewport movement. This preview focuses on docs-style reading and scroll cadence.',
  },
  {
    title: 'Keep the hierarchy obvious',
    copy:
      'Sidebar nav, content rail, code cards, and heading rhythm should still be clear even while the viewport is moving.',
  },
  {
    title: 'Scroll like a trackpad',
    copy:
      'Quick burst, gentle settle. No robotic jumps. No floaty detached movement. The reading line should remain easy to track.',
  },
  {
    title: 'Use sticky context',
    copy:
      'Docs pages often keep the left nav visible while the main column moves. This makes motion legible and helps the page stay recognizable.',
  },
  {
    title: 'Story over exhaustiveness',
    copy:
      'Keep the components that help the beat land. Drop the chrome that is irrelevant for the scene.',
  },
]

export const BrowserDocsScrollPage: React.FC<{state: BrowserScriptState}> = ({state}) => {
  return (
    <div
      style={{
        minHeight: 720,
        background: '#f7f8fb',
        padding: 24,
      }}
    >
      <div
        style={{
          height: 670,
          borderRadius: 26,
          background: '#ffffff',
          border: '1px solid rgba(148, 163, 184, 0.18)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '260px 1fr',
        }}
      >
        <div
          style={{
            borderRight: '1px solid rgba(148, 163, 184, 0.14)',
            background: '#fbfbfd',
            padding: 22,
          }}
        >
          <div style={{fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6d53e5'}}>Docs nav</div>
          <div style={{marginTop: 16, display: 'grid', gap: 8}}>
            {sections.map((section, index) => (
              <div
                key={section.title}
                style={{
                  padding: '10px 12px',
                  borderRadius: 12,
                  background: index === 2 ? 'rgba(79, 132, 255, 0.12)' : 'transparent',
                  color: index === 2 ? '#1a2c56' : '#5d6a7d',
                  fontSize: 14,
                  fontWeight: index === 2 ? 600 : 500,
                }}
              >
                {section.title}
              </div>
            ))}
          </div>
        </div>

        <div style={{position: 'relative', overflow: 'hidden', background: '#ffffff'}}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              transform: `translateY(-${state.scrollY}px)`,
              padding: 28,
            }}
          >
            <div style={{maxWidth: 820, margin: '0 auto'}}>
              <div style={{fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#6d53e5'}}>docs scroll</div>
              <div style={{marginTop: 14, fontSize: 56, lineHeight: 0.98, letterSpacing: '-0.05em', color: '#0f1728', fontWeight: 700}}>
                Browser viewport movement
              </div>
              <div style={{marginTop: 18, fontSize: 20, lineHeight: 1.6, color: '#4c5668', maxWidth: 720}}>
                This page preview is built to test scroll inertia, sticky navigation context, and reading rhythm inside a Chrome-inspired shell.
              </div>

              {sections.map((section, index) => (
                <section key={section.title} style={{marginTop: index === 0 ? 36 : 46}}>
                  <div style={{fontSize: 34, lineHeight: 1.05, color: '#121926', fontWeight: 700}}>{section.title}</div>
                  <div style={{marginTop: 14, fontSize: 18, lineHeight: 1.7, color: '#4c5668'}}>{section.copy}</div>
                  <div
                    style={{
                      marginTop: 18,
                      borderRadius: 20,
                      background: '#f4f7fb',
                      border: '1px solid rgba(148, 163, 184, 0.18)',
                      padding: 18,
                      color: '#253248',
                      fontSize: 15,
                      lineHeight: 1.6,
                    }}
                  >
                    Frame-driven note {index + 1}: keep the chrome still, move the content column, and let the reading rail remain legible while scrolling.
                  </div>
                </section>
              ))}
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              top: 16,
              right: 10,
              bottom: 16,
              width: 8,
              borderRadius: 999,
              background: 'rgba(148, 163, 184, 0.14)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: `${18 + Math.min(state.scrollY / 5, 58)}%`,
                left: 1,
                right: 1,
                height: '18%',
                borderRadius: 999,
                background: 'rgba(79, 132, 255, 0.36)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
