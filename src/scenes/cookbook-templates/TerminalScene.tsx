import React, {useMemo} from 'react';
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

interface Segment {
  text: string;
  color?: string;
  weight?: number;
}

interface TerminalLine {
  segments: Segment[];
}

interface TerminalSceneProps {
  command: string;
  lines: TerminalLine[];
  title: string;
  outroLabel: string;
  outroSublabel: string;
}

const getTypedCharacters = (frame: number, startFrame: number, command: string) => {
  const elapsed = Math.max(0, frame - startFrame);
  let budget = elapsed;
  let chars = 0;

  for (let i = 0; i < command.length; i++) {
    const delay = i < 2 ? 2 : [1, 1, 2, 1, 2, 1][i % 6];
    if (budget >= delay) {
      chars += 1;
      budget -= delay;
    } else {
      break;
    }
  }

  return chars;
};

const getTypingDuration = (command: string) => {
  let frames = 0;

  for (let i = 0; i < command.length; i++) {
    frames += i < 2 ? 2 : [1, 1, 2, 1, 2, 1][i % 6];
  }

  return frames;
};

const buildLineStarts = (linesCount: number, firstLineFrame: number) => {
  const starts: number[] = [];
  let cursor = firstLineFrame;

  for (let i = 0; i < linesCount; i++) {
    starts.push(cursor);
    cursor += i % 2 === 0 ? 2 : 3;
  }

  return starts;
};

export const TerminalScene: React.FC<TerminalSceneProps> = ({
  command,
  lines,
  title,
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
    from: 0.985,
    to: 1,
    durationInFrames: 18,
    config: {damping: 200},
  });

  const commandStart = 10;
  const typingDuration = getTypingDuration(command);
  const firstLineFrame = commandStart + typingDuration + 8;
  const lineStarts = useMemo(() => buildLineStarts(lines.length, firstLineFrame), [lines.length, firstLineFrame]);

  const typedChars = getTypedCharacters(frame, commandStart, command);
  const typed = command.slice(0, typedChars);
  const cursorVisible = Math.floor(frame / 15) % 2 === 0;

  const dimStart = Math.max(0, durationInFrames - 42);
  const dimEnd = Math.max(dimStart + 1, durationInFrames - 8);
  const terminalDim = interpolate(frame, [dimStart, dimEnd], [1, 0.78], {
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
          filter: `brightness(${terminalDim})`,
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
            <div style={{marginLeft: 12, color: muted, fontSize: 16}}>{title}</div>
          </div>

          <div
            style={{
              padding: '26px 30px 30px',
              minHeight: 820,
              color: white,
              fontSize: 23,
              lineHeight: 1.45,
              whiteSpace: 'pre',
            }}
          >
            <div style={{color: white, marginBottom: 8}}>
              {typed}
              <span style={{opacity: cursorVisible ? 1 : 0, color: muted}}>▌</span>
            </div>

            {lines.map((line, i) => {
              const lineOpacity = interpolate(frame, [lineStarts[i], lineStarts[i] + 6], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              });

              return (
                <div key={i} style={{opacity: lineOpacity}}>
                  {line.segments.map((segment, idx) => (
                    <span
                      key={idx}
                      style={{
                        color: segment.color ?? white,
                        fontWeight: segment.weight ?? 400,
                      }}
                    >
                      {segment.text}
                    </span>
                  ))}
                </div>
              );
            })}
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
