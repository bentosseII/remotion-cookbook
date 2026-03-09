import React from 'react';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {
  accent,
  bg,
  border,
  fontFamily,
  muted,
  terminalBg,
  titleBg,
  trafficGreen,
  trafficRed,
  trafficYellow,
  white,
  windowRadius,
  windowShadow,
} from './colors';

interface BrowserSceneProps {
  url: string;
  title: string;
  children: React.ReactNode;
  outroLabel: string;
  outroSublabel: string;
}

export const BrowserScene: React.FC<BrowserSceneProps> = ({
  url,
  title,
  children,
  outroLabel,
  outroSublabel,
}) => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();

  const windowOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  const windowScale = spring({
    frame,
    fps,
    from: 0.987,
    to: 1,
    durationInFrames: 20,
    config: {damping: 200},
  });

  const contentOpacity = interpolate(frame, [18, 34], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.quad),
  });

  const dimStart = Math.max(0, durationInFrames - 42);
  const dimEnd = Math.max(dimStart + 1, durationInFrames - 8);
  const browserDim = interpolate(frame, [dimStart, dimEnd], [1, 0.78], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const outroOpacity = interpolate(frame, [dimStart + 4, dimEnd], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.quad),
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: bg,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48,
        fontFamily,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1680,
          opacity: windowOpacity,
          transform: `scale(${windowScale})`,
          filter: `brightness(${browserDim})`,
        }}
      >
        <div
          style={{
            backgroundColor: terminalBg,
            border: `1px solid ${border}`,
            borderRadius: windowRadius,
            overflow: 'hidden',
            boxShadow: windowShadow,
          }}
        >
          <div
            style={{
              height: 46,
              backgroundColor: titleBg,
              borderBottom: `1px solid ${border}`,
              display: 'flex',
              alignItems: 'center',
              padding: '0 16px',
              gap: 8,
            }}
          >
            <div style={{width: 12, height: 12, borderRadius: 999, background: trafficRed}} />
            <div style={{width: 12, height: 12, borderRadius: 999, background: trafficYellow}} />
            <div style={{width: 12, height: 12, borderRadius: 999, background: trafficGreen}} />

            <div
              style={{
                marginLeft: 14,
                height: 30,
                minWidth: 340,
                maxWidth: 500,
                padding: '0 14px',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: terminalBg,
                border: `1px solid ${border}`,
                borderBottom: 'none',
                color: white,
                fontSize: 14,
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {title}
            </div>
          </div>

          <div
            style={{
              height: 54,
              backgroundColor: terminalBg,
              borderBottom: `1px solid ${border}`,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '0 16px',
            }}
          >
            <div style={{display: 'flex', gap: 8, color: muted, fontSize: 16}}>
              <span>◀</span>
              <span>▶</span>
              <span>↻</span>
            </div>

            <div
              style={{
                flex: 1,
                height: 34,
                borderRadius: 10,
                border: `1px solid ${border}`,
                backgroundColor: '#0f141a',
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
                gap: 10,
              }}
            >
              <span style={{color: muted, fontSize: 13}}>🔒</span>
              <span
                style={{
                  color: muted,
                  fontSize: 14,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {url}
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#f8fafc',
              minHeight: 760,
              opacity: contentOpacity,
            }}
          >
            {children}
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          right: 70,
          bottom: 52,
          opacity: outroOpacity,
          textAlign: 'right',
        }}
      >
        <div style={{color: accent, fontSize: 38, fontWeight: 700, letterSpacing: 0.4}}>{outroLabel}</div>
        <div style={{color: muted, fontSize: 21, marginTop: 4}}>{outroSublabel}</div>
      </div>
    </AbsoluteFill>
  );
};
