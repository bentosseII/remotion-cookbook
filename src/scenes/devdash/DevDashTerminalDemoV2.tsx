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
  section: "header" | "repo" | "ports" | "agents";
};

const bg = "#0d1117";
const terminalBg = "#0b0f14";
const titleBg = "#161b22";
const border = "#30363d";
const muted = "#8b949e";
const white = "#e6edf3";
const blue = "#7aa2f7";
const green = "#3fb950";
const orange = "#ff7b72";
const yellow = "#d29922";
const cyan = "#79c0ff";
const accent = "#d56a26";

const commandText = "$ devdash --dir ~/projects";

const outputLines: TerminalLine[] = [
  {segments: [{text: "devdash — ~/projects (8 repos)", color: blue, weight: 600}], section: "header"},
  {segments: [{text: ""}], section: "header"},

  {
    segments: [
      {text: " REPO                   BRANCH              STATUS       LAST COMMIT", color: muted},
    ],
    section: "repo",
  },
  {
    segments: [
      {text: " api-gateway            main                "},
      {text: "clean", color: green},
      {text: "        a]1f3e2 feat: add rate limiting middleware (2 hours ago)"},
    ],
    section: "repo",
  },
  {
    segments: [
      {text: " bookmark-sync          main                "},
      {text: "3 dirty", color: orange},
      {text: "      bc628d4 fix: dedup logic for seen bookmarks (5 hours ago)"},
    ],
    section: "repo",
  },
  {
    segments: [
      {text: " campfire               feat/threads        "},
      {text: "clean", color: green},
      {text: "        1c7574a feat: thread panel with reply chains (1 day ago) "},
      {text: "↑2↓0", color: yellow},
    ],
    section: "repo",
  },
  {
    segments: [
      {text: " content-engine         main                "},
      {text: "14 dirty", color: orange},
      {text: "     fe4b91b upgrade AI pulse clustering (6 hours ago) "},
      {text: "↑2↓0", color: yellow},
    ],
    section: "repo",
  },
  {
    segments: [
      {text: " devdash                main                "},
      {text: "clean", color: green},
      {text: "        9e4d1a0 feat: add port scanning + process list (just now)"},
    ],
    section: "repo",
  },
  {
    segments: [
      {text: " newsletter-site        main                "},
      {text: "1 dirty", color: orange},
      {text: "      5b06186 cookbook: bookmark sync pipeline (#65) (3 days ago)"},
    ],
    section: "repo",
  },
  {
    segments: [
      {text: " tissue                 feat/terminals      "},
      {text: "12 dirty", color: orange},
      {text: "     1419b8f feat: agent tools + remote SSH mode (5 days ago) "},
      {text: "↑0↓152", color: yellow},
    ],
    section: "repo",
  },
  {
    segments: [
      {text: " trading-bot            main                "},
      {text: "clean", color: green},
      {text: "        c7531c7 chore: bump position size (2 weeks ago)"},
    ],
    section: "repo",
  },
  {segments: [{text: ""}], section: "ports"},
  {segments: [{text: " LISTENING PORTS", color: white, weight: 600}], section: "ports"},
  {
    segments: [{text: " PORT     PROCESS          PID      REPO HINT", color: muted}],
    section: "ports",
  },
  {
    segments: [
      {text: " "},
      {text: "3000", color: cyan},
      {text: "     next-server      "},
      {text: "43653", color: muted},
      {text: "    newsletter-site"},
    ],
    section: "ports",
  },
  {
    segments: [
      {text: " "},
      {text: "3100", color: cyan},
      {text: "     node             "},
      {text: "17878", color: muted},
      {text: "    tissue"},
    ],
    section: "ports",
  },
  {
    segments: [
      {text: " "},
      {text: "5432", color: cyan},
      {text: "     postgres         "},
      {text: "1205", color: muted},
      {text: "     —"},
    ],
    section: "ports",
  },
  {
    segments: [
      {text: " "},
      {text: "8787", color: cyan},
      {text: "     wrangler         "},
      {text: "18479", color: muted},
      {text: "    api-gateway"},
    ],
    section: "ports",
  },
  {segments: [{text: ""}], section: "agents"},
  {segments: [{text: " AGENTS / DEV PROCESSES", color: white, weight: 600}], section: "agents"},
  {
    segments: [
      {text: " claude         (pid ", color: white},
      {text: "39329", color: muted},
      {text: ") running 02:15:30  claude", color: white},
    ],
    section: "agents",
  },
  {
    segments: [
      {text: " codex          (pid ", color: white},
      {text: "8516", color: muted},
      {text: ")  running 00:45:12  codex app-server", color: white},
    ],
    section: "agents",
  },
  {
    segments: [
      {text: " droid          (pid ", color: white},
      {text: "77203", color: muted},
      {text: ") running 01:30:00  droid -p hi", color: white},
    ],
    section: "agents",
  },
  {
    segments: [
      {text: " node           (pid ", color: white},
      {text: "17878", color: muted},
      {text: ") running 06:41:31  node --import tsx/esm server/index.ts", color: white},
    ],
    section: "agents",
  },
  {
    segments: [
      {text: " next           (pid ", color: white},
      {text: "43653", color: muted},
      {text: ") running 15:48:12  next dev --port 3000", color: white},
    ],
    section: "agents",
  },
];

const getTypedCharacters = (frame: number, startFrame: number) => {
  const elapsed = Math.max(0, frame - startFrame);
  let budget = elapsed;
  let chars = 0;

  for (let i = 0; i < commandText.length; i++) {
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

const buildLineStarts = () => {
  const starts: number[] = [];
  let cursor = 45;

  outputLines.forEach((line) => {
    starts.push(cursor);
    const gap = line.section === "repo" ? 2 : 3;
    cursor += gap;
  });

  return starts;
};

export const DevDashTerminalDemoV2: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const windowOpacity = interpolate(frame, [0, 12], [0, 1], {
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

  const commandStart = 10;
  const typedChars = getTypedCharacters(frame, commandStart);
  const typed = commandText.slice(0, typedChars);
  const cursorVisible = Math.floor(frame / 15) % 2 === 0;

  const lineStarts = useMemo(() => buildLineStarts(), []);

  const terminalDim = interpolate(frame, [350, 390], [1, 0.8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const outroOpacity = interpolate(frame, [356, 392], [0, 1], {
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
        fontFamily: '"Geist Mono", "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", monospace',
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
            <div style={{marginLeft: 12, color: muted, fontSize: 16}}>Terminal — devdash</div>
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
        <div style={{color: accent, fontSize: 38, fontWeight: 700, letterSpacing: 0.4}}>devdash</div>
        <div style={{color: muted, fontSize: 21, marginTop: 4}}>bensbites.com/cookbook</div>
      </div>
    </AbsoluteFill>
  );
};
