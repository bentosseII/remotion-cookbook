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

interface EditorLine {
  text: string;
  highlight?: boolean;
  color?: string;
}

interface SidebarItem {
  name: string;
  type: 'file' | 'folder' | string;
  indent: number;
  active?: boolean;
}

interface EditorSceneProps {
  filename: string;
  lines: EditorLine[];
  sidebar?: SidebarItem[];
  outroLabel: string;
  outroSublabel: string;
}

const getTypedCharacters = (frame: number, startFrame: number, text: string) => {
  const elapsed = Math.max(0, frame - startFrame);
  let budget = elapsed;
  let chars = 0;

  for (let i = 0; i < text.length; i++) {
    const delay = i < 3 ? 1 : [1, 1, 1, 2][i % 4];
    if (budget >= delay) {
      chars += 1;
      budget -= delay;
    } else {
      break;
    }
  }

  return chars;
};

export const EditorScene: React.FC<EditorSceneProps> = ({
  filename,
  lines,
  sidebar,
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

  const dimStart = Math.max(0, durationInFrames - 42);
  const dimEnd = Math.max(dimStart + 1, durationInFrames - 8);
  const editorDim = interpolate(frame, [dimStart, dimEnd], [1, 0.78], {
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
          filter: `brightness(${editorDim})`,
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
            <div style={{marginLeft: 12, color: muted, fontSize: 16}}>Editor</div>
          </div>

          <div
            style={{
              height: 48,
              display: 'flex',
              alignItems: 'flex-end',
              backgroundColor: terminalBg,
              borderBottom: `1px solid ${border}`,
              padding: '0 14px',
            }}
          >
            <div
              style={{
                height: 38,
                minWidth: 260,
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                backgroundColor: '#11161d',
                border: `1px solid ${border}`,
                borderBottom: 'none',
                color: white,
                fontSize: 16,
              }}
            >
              {filename}
            </div>
          </div>

          <div style={{display: 'flex', minHeight: 760}}>
            <div
              style={{
                width: 320,
                borderRight: `1px solid ${border}`,
                backgroundColor: '#0f141a',
                padding: '14px 10px',
              }}
            >
              {(sidebar ?? []).map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  style={{
                    height: 34,
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 10 + item.indent * 18,
                    color: item.active ? white : muted,
                    backgroundColor: item.active ? 'rgba(122, 162, 247, 0.12)' : 'transparent',
                    borderLeft: item.active ? `2px solid ${accent}` : '2px solid transparent',
                    fontSize: 15,
                  }}
                >
                  <span style={{marginRight: 8}}>{item.type === 'folder' ? '▸' : '•'}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                flex: 1,
                backgroundColor: terminalBg,
                padding: '18px 0',
              }}
            >
              {lines.map((line, index) => {
                const lineStart = 26 + index * 3;
                const lineOpacity = interpolate(frame, [lineStart, lineStart + 6], [0, 1], {
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                });
                const typedChars = getTypedCharacters(frame, lineStart, line.text);
                const lineText = line.text.slice(0, typedChars);

                return (
                  <div
                    key={index}
                    style={{
                      height: 34,
                      display: 'flex',
                      alignItems: 'center',
                      opacity: lineOpacity,
                      backgroundColor: line.highlight ? 'rgba(213, 106, 38, 0.14)' : 'transparent',
                    }}
                  >
                    <div
                      style={{
                        width: 74,
                        textAlign: 'right',
                        paddingRight: 18,
                        color: muted,
                        fontSize: 16,
                        userSelect: 'none',
                      }}
                    >
                      {index + 1}
                    </div>

                    <div
                      style={{
                        color: line.color ?? white,
                        fontSize: 21,
                        whiteSpace: 'pre',
                      }}
                    >
                      {lineText}
                    </div>
                  </div>
                );
              })}
            </div>
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
