import React from 'react';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {accent, bg, border, fontFamily, muted, white} from './colors';

interface Point {
  x: number;
  y: number;
}

type ConceptElementType = 'box' | 'arrow' | 'label';

interface ConceptElement {
  type: ConceptElementType | string;
  text?: string;
  from?: Point;
  to?: Point;
  position?: Point;
  color?: string;
  delay: number;
}

interface ConceptSceneProps {
  elements: ConceptElement[];
  title: string;
  outroLabel: string;
  outroSublabel: string;
}

export const ConceptScene: React.FC<ConceptSceneProps> = ({
  elements,
  title,
  outroLabel,
  outroSublabel,
}) => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();

  const dimStart = Math.max(0, durationInFrames - 42);
  const dimEnd = Math.max(dimStart + 1, durationInFrames - 8);
  const sceneDim = interpolate(frame, [dimStart, dimEnd], [1, 0.8], {
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
        fontFamily,
        filter: `brightness(${sceneDim})`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 52,
          left: 0,
          right: 0,
          textAlign: 'center',
          color: white,
          fontSize: 42,
          fontWeight: 650,
          letterSpacing: 0.3,
        }}
      >
        {title}
      </div>

      <svg
        width={1920}
        height={1080}
        style={{position: 'absolute', inset: 0}}
        viewBox="0 0 1920 1080"
      >
        {elements
          .filter((element) => element.type === 'arrow' && element.from && element.to)
          .map((element, index) => {
            if (!element.from || !element.to) {
              return null;
            }

            const progress = interpolate(frame, [element.delay, element.delay + 10], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.out(Easing.cubic),
            });

            const opacity = interpolate(frame, [element.delay, element.delay + 6], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });

            const currentX = element.from.x + (element.to.x - element.from.x) * progress;
            const currentY = element.from.y + (element.to.y - element.from.y) * progress;
            const stroke = element.color ?? '#79c0ff';

            return (
              <g key={`arrow-${index}`} style={{opacity}}>
                <line
                  x1={element.from.x}
                  y1={element.from.y}
                  x2={currentX}
                  y2={currentY}
                  stroke={stroke}
                  strokeWidth={4}
                  strokeLinecap="round"
                />
                <circle cx={currentX} cy={currentY} r={3} fill={stroke} />
              </g>
            );
          })}
      </svg>

      {elements.map((element, index) => {
        if (element.type === 'arrow') {
          return null;
        }

        const opacity = interpolate(frame, [element.delay, element.delay + 8], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });

        const inScale = spring({
          frame: frame - element.delay,
          fps,
          from: 0.95,
          to: 1,
          durationInFrames: 18,
          config: {damping: 200},
        });

        const posX = element.position?.x ?? 0;
        const posY = element.position?.y ?? 0;

        if (element.type === 'box') {
          return (
            <div
              key={`box-${index}`}
              style={{
                position: 'absolute',
                left: posX,
                top: posY,
                width: 300,
                minHeight: 84,
                borderRadius: 14,
                border: `1px solid ${element.color ?? border}`,
                backgroundColor: 'rgba(22, 27, 34, 0.75)',
                color: white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: 24,
                padding: '14px 18px',
                opacity,
                transform: `scale(${inScale})`,
              }}
            >
              {element.text}
            </div>
          );
        }

        return (
          <div
            key={`label-${index}`}
            style={{
              position: 'absolute',
              left: posX,
              top: posY,
              color: element.color ?? muted,
              fontSize: 24,
              opacity,
              transform: `scale(${inScale})`,
            }}
          >
            {element.text}
          </div>
        );
      })}

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
