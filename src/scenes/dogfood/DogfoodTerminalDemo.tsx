import React, {useMemo} from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type Segment = {
  text: string;
  color?: string;
  weight?: number;
};

type TerminalLine = {
  segments: Segment[];
  section: "header" | "visiting" | "summary" | "issues" | "success";
};

const bg = "#0d1117";
const terminalBg = "#0b0f14";
const titleBg = "#161b22";
const border = "#30363d";
const muted = "#8b949e";
const white = "#e6edf3";
const blue = "#7aa2f7";
const green = "#3fb950";
const orange = "#d29922";
const cyan = "#79c0ff";
const accent = "#d56a26";

const commandText = "$ dogfood https://catalog.bensbites.com --max-pages 8 --rpg";

const outputLines: TerminalLine[] = [
  {
    segments: [
      {text: "dogfood", color: blue, weight: 600},
      {text: " — crawling "},
      {text: "https://catalog.bensbites.com", color: muted},
    ],
    section: "header",
  },
  {segments: [{text: ""}], section: "header"},

  {
    segments: [
      {text: " Visiting "},
      {text: "(1/8)", color: cyan},
      {text: " depth="},
      {text: "0", color: cyan},
      {text: "  "},
      {text: "https://catalog.bensbites.com/", color: muted},
    ],
    section: "visiting",
  },
  {
    segments: [
      {text: " Visiting "},
      {text: "(2/8)", color: cyan},
      {text: " depth="},
      {text: "1", color: cyan},
      {text: "  "},
      {text: "https://catalog.bensbites.com/about", color: muted},
    ],
    section: "visiting",
  },
  {
    segments: [
      {text: " Visiting "},
      {text: "(3/8)", color: cyan},
      {text: " depth="},
      {text: "1", color: cyan},
      {text: "  "},
      {text: "https://catalog.bensbites.com/tools", color: muted},
    ],
    section: "visiting",
  },
  {
    segments: [
      {text: " Visiting "},
      {text: "(4/8)", color: cyan},
      {text: " depth="},
      {text: "1", color: cyan},
      {text: "  "},
      {text: "https://catalog.bensbites.com/workshops", color: muted},
    ],
    section: "visiting",
  },
  {
    segments: [
      {text: " Visiting "},
      {text: "(5/8)", color: cyan},
      {text: " depth="},
      {text: "1", color: cyan},
      {text: "  "},
      {text: "https://catalog.bensbites.com/archive", color: muted},
    ],
    section: "visiting",
  },
  {
    segments: [
      {text: " Visiting "},
      {text: "(6/8)", color: cyan},
      {text: " depth="},
      {text: "1", color: cyan},
      {text: "  "},
      {text: "https://catalog.bensbites.com/perks", color: muted},
    ],
    section: "visiting",
  },
  {
    segments: [
      {text: " Visiting "},
      {text: "(7/8)", color: cyan},
      {text: " depth="},
      {text: "1", color: cyan},
      {text: "  "},
      {text: "https://catalog.bensbites.com/member/log-in", color: muted},
    ],
    section: "visiting",
  },
  {
    segments: [
      {text: " Visiting "},
      {text: "(8/8)", color: cyan},
      {text: " depth="},
      {text: "2", color: cyan},
      {text: "  "},
      {text: "https://catalog.bensbites.com/newsletter", color: muted},
    ],
    section: "visiting",
  },

  {segments: [{text: ""}], section: "summary"},
  {segments: [{text: " SUMMARY", weight: 700}], section: "summary"},
  {
    segments: [
      {text: " Pages visited:     "},
      {text: "8", color: cyan},
    ],
    section: "summary",
  },
  {
    segments: [
      {text: " Critical errors:   "},
      {text: "0", color: green},
    ],
    section: "summary",
  },
  {
    segments: [
      {text: " Warnings:          "},
      {text: "3", color: orange},
    ],
    section: "summary",
  },
  {
    segments: [
      {text: " Forms filled:      "},
      {text: "2", color: cyan},
    ],
    section: "summary",
  },
  {
    segments: [
      {text: " Screenshots:       "},
      {text: "12", color: cyan},
    ],
    section: "summary",
  },

  {segments: [{text: ""}], section: "issues"},
  {segments: [{text: " Issues:", weight: 600}], section: "issues"},
  {
    segments: [
      {text: " ⚠ /member/log-in — console-error: Failed to load resource (404)", color: orange},
    ],
    section: "issues",
  },
  {
    segments: [{text: " ⚠ /tools — 2 images missing alt text", color: orange}],
    section: "issues",
  },
  {
    segments: [{text: " ⚠ /perks — slow load (3.2s)", color: orange}],
    section: "issues",
  },

  {segments: [{text: ""}], section: "success"},
  {segments: [{text: " ✓ Report written to ./report.md", color: green}], section: "success"},
  {segments: [{text: " ✓ RPG map written to ./report-rpg.html", color: green}], section: "success"},
];

const getTypedCharacters = (frame: number, startFrame: number) => {
  const endFrame = 45;
  if (frame <= startFrame) return 0;
  const progress = (frame - startFrame) / (endFrame - startFrame);
  return Math.min(commandText.length, Math.floor(progress * commandText.length));
};

const buildLineStarts = () => {
  const starts: number[] = [];
  let cursor = 45;

  outputLines.forEach(() => {
    starts.push(cursor);
    cursor += 10;
  });

  return starts;
};

export const DogfoodTerminalDemo: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const windowOpacity = interpolate(frame, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
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

  const commandStart = 8;
  const typedChars = getTypedCharacters(frame, commandStart);
  const typed = commandText.slice(0, typedChars);
  const cursorVisible = Math.floor(frame / 15) % 2 === 0;

  const lineStarts = useMemo(() => buildLineStarts(), []);

  const terminalDim = interpolate(frame, [300, 360], [1, 0.72], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const outroOpacity = interpolate(frame, [310, 380], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: bg,
        justifyContent: "center",
        alignItems: "center",
        padding: 48,
        fontFamily:
          '"Geist Mono", "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", monospace',
      }}
    >
      <div
        style={{
          width: "100%",
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
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
          }}
        >
          <div
            style={{
              height: 46,
              backgroundColor: titleBg,
              borderBottom: `1px solid ${border}`,
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
              gap: 8,
            }}
          >
            <div style={{width: 12, height: 12, borderRadius: 999, background: "#ff5f56"}} />
            <div style={{width: 12, height: 12, borderRadius: 999, background: "#ffbd2e"}} />
            <div style={{width: 12, height: 12, borderRadius: 999, background: "#27c93f"}} />
            <div style={{marginLeft: 12, color: muted, fontSize: 16}}>Terminal — dogfood</div>
          </div>

          <div
            style={{
              padding: "26px 30px 30px",
              minHeight: 820,
              color: white,
              fontSize: 23,
              lineHeight: 1.45,
              whiteSpace: "pre",
            }}
          >
            <div style={{color: white, marginBottom: 6}}>
              {typed}
              <span style={{opacity: cursorVisible ? 1 : 0, color: muted}}>▌</span>
            </div>

            {outputLines.map((line, i) => {
              const lineOpacity = interpolate(frame, [lineStarts[i], lineStarts[i] + 6], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
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
          position: "absolute",
          right: 70,
          bottom: 52,
          opacity: outroOpacity,
          textAlign: "right",
        }}
      >
        <div style={{color: accent, fontSize: 38, fontWeight: 700, letterSpacing: 0.4}}>dogfood</div>
        <div style={{color: muted, fontSize: 21, marginTop: 4}}>bensbites.com/cookbook</div>
      </div>
    </AbsoluteFill>
  );
};
