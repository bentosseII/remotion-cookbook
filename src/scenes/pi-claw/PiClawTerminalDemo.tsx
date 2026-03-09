import React, {useMemo} from "react";
import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";

type Segment = {
  text: string;
  color?: string;
  weight?: number;
};

type TerminalLine = {
  segments: Segment[];
  section: "startup" | "activity";
};

const bg = "#0d1117";
const terminalBg = "#0b0f14";
const titleBg = "#161b22";
const border = "#30363d";
const muted = "#8b949e";
const white = "#e6edf3";
const green = "#3fb950";
const cyan = "#79c0ff";
const accent = "#d56a26";
const slackPurple = "#c084fc";
const discordBlue = "#58a6ff";
const cron = "#d29922";

const commandText = "$ pi-claw start";

const outputLines: TerminalLine[] = [
  {
    segments: [
      {text: "pi-claw v"},
      {text: "1.0.0", color: cyan},
    ],
    section: "startup",
  },
  {segments: [{text: ""}], section: "startup"},
  {
    segments: [
      {text: "✓ Loaded agents.md (", color: green},
      {text: "8", color: cyan},
      {text: " tools, ", color: green},
      {text: "3", color: cyan},
      {text: " cron jobs)", color: green},
    ],
    section: "startup",
  },
  {segments: [{text: "✓ Connected to Slack (workspace: bens-bites)", color: green}], section: "startup"},
  {segments: [{text: "✓ Connected to Discord (server: agents)", color: green}], section: "startup"},
  {
    segments: [
      {text: "✓ Sessions restored (", color: green},
      {text: "12", color: cyan},
      {text: " active)", color: green},
    ],
    section: "startup",
  },
  {
    segments: [
      {text: "✓ Cron scheduler started (", color: green},
      {text: "3", color: cyan},
      {text: " jobs)", color: green},
    ],
    section: "startup",
  },
  {segments: [{text: ""}], section: "startup"},
  {
    segments: [
      {text: "⚡ Ready — listening on ", color: accent, weight: 700},
      {text: "2", color: cyan, weight: 700},
      {text: " platforms", color: accent, weight: 700},
    ],
    section: "startup",
  },

  {segments: [{text: ""}], section: "activity"},
  {
    segments: [
      {text: "[11:42:03] ", color: muted},
      {text: "[Slack #general]", color: slackPurple},
      {text: " "},
      {text: "@ben", color: white, weight: 700},
      {text: ": summarize this thread", color: white},
    ],
    section: "activity",
  },
  {
    segments: [
      {text: "[11:42:04] ", color: muted},
      {text: "[pi-claw → Slack]", color: green},
      {text: " Reading thread... "},
      {text: "14", color: cyan},
      {text: " messages found."},
    ],
    section: "activity",
  },
  {
    segments: [
      {text: "[11:42:08] ", color: muted},
      {text: "[pi-claw → Slack]", color: green},
      {text: " Here's the summary: Team agreed on Q2 roadmap...", color: white},
    ],
    section: "activity",
  },

  {segments: [{text: ""}], section: "activity"},
  {
    segments: [
      {text: "[11:42:15] ", color: muted},
      {text: "[Discord #agents]", color: discordBlue},
      {text: " "},
      {text: "@ben", color: white, weight: 700},
      {text: ": spawn an agent to review PR #67", color: white},
    ],
    section: "activity",
  },
  {
    segments: [
      {text: "[11:42:16] ", color: muted},
      {text: "[pi-claw]", color: green},
      {text: " Spawning sub-agent in tmux session \"pr-review-67\"...", color: white},
    ],
    section: "activity",
  },
  {
    segments: [
      {text: "[11:42:17] ", color: muted},
      {text: "[pi-claw → Discord]", color: green},
      {text: " 🚀 Agent spawned. I'll notify you when it's done.", color: white},
    ],
    section: "activity",
  },

  {segments: [{text: ""}], section: "activity"},
  {
    segments: [
      {text: "[11:42:30] ", color: muted},
      {text: "[CRON]", color: cron},
      {text: " heartbeat fired → checking system status", color: white},
    ],
    section: "activity",
  },
  {
    segments: [
      {text: "[11:42:32] ", color: muted},
      {text: "[pi-claw → Slack #ops]", color: green},
      {text: " All systems green. "},
      {text: "3", color: cyan},
      {text: " agents running, "},
      {text: "0", color: cyan},
      {text: " errors."},
    ],
    section: "activity",
  },

  {segments: [{text: ""}], section: "activity"},
  {
    segments: [
      {text: "[11:42:45] ", color: muted},
      {text: "[pi-claw → Discord]", color: green},
      {text: " ✅ PR #67 review complete. "},
      {text: "2", color: cyan},
      {text: " suggestions, no blockers."},
    ],
    section: "activity",
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

  outputLines.forEach((line, i) => {
    if (line.section === "startup") {
      starts.push(45 + i * 8);
      return;
    }

    const activityIndex = i - 10;
    starts.push(120 + activityIndex * 14);
  });

  return starts;
};

export const PiClawTerminalDemo: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const windowOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const windowScale = spring({
    frame,
    fps,
    from: 0.985,
    to: 1,
    durationInFrames: 20,
    config: {damping: 200},
  });

  const typedChars = getTypedCharacters(frame, 4);
  const typed = commandText.slice(0, typedChars);
  const cursorVisible = Math.floor(frame / 15) % 2 === 0;
  const lineStarts = useMemo(() => buildLineStarts(), []);

  const terminalDim = interpolate(frame, [400, 450], [1, 0.68], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const outroOpacity = interpolate(frame, [412, 470], [0, 1], {
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
            <div style={{marginLeft: 12, color: muted, fontSize: 16}}>Terminal — pi-claw</div>
          </div>

          <div
            style={{
              padding: "24px 30px 30px",
              minHeight: 820,
              color: white,
              fontSize: 22,
              lineHeight: 1.42,
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
          right: 74,
          bottom: 56,
          opacity: outroOpacity,
          textAlign: "right",
        }}
      >
        <div style={{color: accent, fontSize: 46, fontWeight: 700, letterSpacing: 0.4}}>pi-claw</div>
        <div style={{color: muted, fontSize: 24, marginTop: 4}}>built on Vercel Chat SDK</div>
        <div style={{color: muted, fontSize: 19, marginTop: 6}}>bensbites.com/cookbook</div>
      </div>
    </AbsoluteFill>
  );
};
