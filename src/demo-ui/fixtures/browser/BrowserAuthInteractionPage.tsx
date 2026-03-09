import React from 'react'

import {
  getBrowserButtonTarget,
  getBrowserCheckboxTarget,
  type BrowserScriptState,
} from '../../apps/browser'

const getFieldStyle = (focused: boolean) => {
  return {
    border: focused ? '1px solid rgba(79, 132, 255, 0.8)' : '1px solid rgba(148, 163, 184, 0.22)',
    boxShadow: focused ? '0 0 0 4px rgba(79, 132, 255, 0.12)' : 'none',
  }
}

export const BrowserAuthInteractionPage: React.FC<{state: BrowserScriptState}> = ({state}) => {
  const submitTarget = getBrowserButtonTarget('submit')
  const rememberTarget = getBrowserCheckboxTarget('remember')
  const submitHovered = state.hoveredTargetId === submitTarget
  const submitPressed = state.pressedTargetId === submitTarget
  const rememberChecked = Boolean(state.checkboxValues.remember)

  return (
    <div
      style={{
        minHeight: 720,
        background: '#f4f7fb',
        padding: '48px 32px',
      }}
    >
      <div
        style={{
          maxWidth: 980,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: 28,
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              color: '#6d53e5',
              fontSize: 12,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            auth flow
          </div>
          <div
            style={{
              fontSize: 58,
              lineHeight: 0.96,
              letterSpacing: '-0.05em',
              color: '#0f1728',
              fontWeight: 700,
            }}
          >
            Browser interaction states
          </div>
          <div
            style={{
              marginTop: 20,
              maxWidth: 560,
              color: '#4c5668',
              fontSize: 21,
              lineHeight: 1.55,
            }}
          >
            Focused fields, typed values, checkbox toggles, and primary-button hover states.
            Designed for believable sign-in or setup flows.
          </div>
        </div>

        <div
          style={{
            borderRadius: 30,
            background: '#ffffff',
            border: '1px solid rgba(148, 163, 184, 0.22)',
            boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)',
            padding: 28,
          }}
        >
          <div style={{fontSize: 28, fontWeight: 700, color: '#101827'}}>Sign in</div>
          <div style={{marginTop: 8, color: '#5f6c82', fontSize: 16}}>Continue into the demo workspace.</div>

          <div style={{marginTop: 22, display: 'grid', gap: 16}}>
            <label style={{display: 'grid', gap: 8}}>
              <span style={{fontSize: 13, fontWeight: 600, color: '#475467'}}>Email</span>
              <div
                style={{
                  height: 52,
                  borderRadius: 16,
                  background: '#fcfdff',
                  padding: '0 16px',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 16,
                  color: '#111827',
                  ...getFieldStyle(state.focusedFieldId === 'email'),
                }}
              >
                {state.fields.email || 'hello@bentossell.com'}
              </div>
            </label>

            <label style={{display: 'grid', gap: 8}}>
              <span style={{fontSize: 13, fontWeight: 600, color: '#475467'}}>Password</span>
              <div
                style={{
                  height: 52,
                  borderRadius: 16,
                  background: '#fcfdff',
                  padding: '0 16px',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 16,
                  color: '#111827',
                  ...getFieldStyle(state.focusedFieldId === 'password'),
                }}
              >
                {state.fields.password || '••••••••••••'}
              </div>
            </label>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 2}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, color: '#516074', fontSize: 14}}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 6,
                    background: rememberChecked ? '#4f84ff' : '#ffffff',
                    border: rememberChecked ? '1px solid #4f84ff' : '1px solid rgba(148, 163, 184, 0.5)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                  }}
                >
                  {state.hoveredTargetId === rememberTarget || rememberChecked ? '✓' : ''}
                </div>
                Remember me
              </div>
              <div style={{color: '#4f84ff', fontSize: 14, fontWeight: 600}}>Forgot password?</div>
            </div>

            <button
              type='button'
              style={{
                height: 54,
                borderRadius: 18,
                border: 'none',
                marginTop: 6,
                background: submitPressed
                  ? '#376de6'
                  : submitHovered
                    ? '#467bf0'
                    : '#4f84ff',
                color: '#ffffff',
                fontSize: 16,
                fontWeight: 700,
                boxShadow: submitHovered ? '0 14px 28px rgba(79, 132, 255, 0.22)' : 'none',
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          margin: '30px auto 0',
          maxWidth: 980,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: 14,
        }}
      >
        {[
          ['focus', state.focusedFieldId ?? 'email'],
          ['hover', state.hoveredTargetId?.replace('browser-', '') ?? 'submit'],
          ['input', `${state.fields.email ? 'typed' : 'seeded'} values`],
        ].map(([label, value]) => (
          <div
            key={label}
            style={{
              borderRadius: 18,
              border: '1px solid rgba(148, 163, 184, 0.18)',
              background: 'rgba(255,255,255,0.72)',
              padding: 16,
            }}
          >
            <div style={{fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6d53e5'}}>
              {label}
            </div>
            <div style={{marginTop: 10, fontSize: 18, color: '#172033', fontWeight: 600}}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
