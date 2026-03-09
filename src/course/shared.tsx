// Shared components for "Build Your AI Agent" course videos
// Each module video: ~30s (900 frames @ 30fps)
// Structure: Title → Concept → Build → Takeaway

import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

// ─── Colors ───────────────────────────────────────────
export const COLORS = {
  bg: "#0a0a0a",
  surface: "#18181b",
  border: "#27272a",
  accent: "#3b82f6",
  accentGlow: "rgba(59, 130, 246, 0.15)",
  green: "#22c55e",
  amber: "#f59e0b",
  red: "#ef4444",
  text: "#fafafa",
  muted: "#a1a1aa",
  dim: "#52525b",
};

// ─── Fade + Slide In ──────────────────────────────────
export const FadeSlideIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}> = ({ children, delay = 0, direction = "up", distance = 30 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const f = Math.max(0, frame - delay);
  const opacity = interpolate(f, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });
  const move = spring({ frame: f, fps, from: distance, to: 0, durationInFrames: 20 });
  const axis = direction === "up" || direction === "down" ? "Y" : "X";
  const sign = direction === "down" || direction === "right" ? -1 : 1;
  return (
    <div style={{ opacity, transform: `translate${axis}(${sign * move}px)` }}>
      {children}
    </div>
  );
};

// ─── Title Card ───────────────────────────────────────
export const TitleCard: React.FC<{
  moduleNum: number;
  level: string;
  title: string;
  subtitle?: string;
}> = ({ moduleNum, level, title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });
  const badgeScale = spring({
    frame,
    fps,
    from: 0.8,
    to: 1,
    durationInFrames: 18,
  });
  const titleY = spring({
    frame: Math.max(0, frame - 8),
    fps,
    from: 40,
    to: 0,
    durationInFrames: 22,
  });
  const titleOpacity = interpolate(frame, [8, 22], [0, 1], {
    extrapolateRight: "clamp",
  });
  const subOpacity = interpolate(frame, [20, 35], [0, 1], {
    extrapolateRight: "clamp",
  });
  const lineWidth = interpolate(frame, [15, 40], [0, 120], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 50% 40%, ${COLORS.accentGlow}, ${COLORS.bg} 70%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          opacity: badgeOpacity,
          transform: `scale(${badgeScale})`,
          background: COLORS.accent,
          color: "#fff",
          padding: "8px 24px",
          borderRadius: 20,
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: 1.5,
          marginBottom: 24,
          textTransform: "uppercase",
        }}
      >
        {level} · Module {moduleNum}
      </div>
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          color: COLORS.text,
          fontSize: 72,
          fontWeight: 800,
          textAlign: "center",
          maxWidth: 1400,
          lineHeight: 1.1,
        }}
      >
        {title}
      </div>
      <div
        style={{
          width: lineWidth,
          height: 3,
          background: COLORS.accent,
          marginTop: 20,
          borderRadius: 2,
        }}
      />
      {subtitle && (
        <div
          style={{
            opacity: subOpacity,
            color: COLORS.muted,
            fontSize: 28,
            marginTop: 20,
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          {subtitle}
        </div>
      )}
    </AbsoluteFill>
  );
};

// ─── Concept Card (icon + text block) ─────────────────
export const ConceptCard: React.FC<{
  icon: string;
  title: string;
  body: string;
  index?: number;
}> = ({ icon, title, body, index = 0 }) => {
  const delay = index * 12;
  return (
    <FadeSlideIn delay={delay}>
      <div
        style={{
          display: "flex",
          gap: 20,
          alignItems: "flex-start",
          background: COLORS.surface,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 16,
          padding: "24px 32px",
          maxWidth: 760,
        }}
      >
        <div style={{ fontSize: 40, lineHeight: 1 }}>{icon}</div>
        <div>
          <div
            style={{
              color: COLORS.text,
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 6,
            }}
          >
            {title}
          </div>
          <div style={{ color: COLORS.muted, fontSize: 22, lineHeight: 1.4 }}>
            {body}
          </div>
        </div>
      </div>
    </FadeSlideIn>
  );
};

// ─── Five Primitives Diagram ──────────────────────────
export const PrimitivesDiagram: React.FC<{
  highlight?: number[];
}> = ({ highlight = [] }) => {
  const frame = useCurrentFrame();
  const primitives = [
    { icon: "🪪", label: "Identity", color: "#3b82f6" },
    { icon: "🧠", label: "Memory", color: "#8b5cf6" },
    { icon: "🔧", label: "Tools", color: "#22c55e" },
    { icon: "⏰", label: "Schedule", color: "#f59e0b" },
    { icon: "🛡️", label: "Boundaries", color: "#ef4444" },
  ];
  return (
    <div
      style={{
        display: "flex",
        gap: 24,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {primitives.map((p, i) => {
        const delay = i * 8;
        const f = Math.max(0, frame - delay);
        const opacity = interpolate(f, [0, 12], [0, 1], {
          extrapolateRight: "clamp",
        });
        const active = highlight.length === 0 || highlight.includes(i);
        return (
          <div
            key={p.label}
            style={{
              opacity,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              padding: "20px 28px",
              borderRadius: 16,
              background: active ? `${p.color}15` : COLORS.surface,
              border: `2px solid ${active ? p.color : COLORS.border}`,
              minWidth: 140,
            }}
          >
            <div style={{ fontSize: 36 }}>{p.icon}</div>
            <div
              style={{
                color: active ? p.color : COLORS.dim,
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              {p.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ─── Code Block ───────────────────────────────────────
export const CodeBlock: React.FC<{
  lines: string[];
  title?: string;
}> = ({ lines, title }) => {
  const frame = useCurrentFrame();
  return (
    <FadeSlideIn delay={5}>
      <div
        style={{
          background: "#1e1e2e",
          borderRadius: 16,
          border: `1px solid ${COLORS.border}`,
          overflow: "hidden",
          maxWidth: 900,
          width: "100%",
        }}
      >
        {title && (
          <div
            style={{
              padding: "10px 20px",
              borderBottom: `1px solid ${COLORS.border}`,
              color: COLORS.muted,
              fontSize: 16,
              fontFamily: "monospace",
            }}
          >
            {title}
          </div>
        )}
        <div style={{ padding: "20px 24px" }}>
          {lines.map((line, i) => {
            const lineDelay = 5 + i * 6;
            const opacity = interpolate(
              frame,
              [lineDelay, lineDelay + 8],
              [0, 1],
              { extrapolateRight: "clamp" }
            );
            return (
              <div
                key={i}
                style={{
                  opacity,
                  color: COLORS.text,
                  fontFamily: "monospace",
                  fontSize: 22,
                  lineHeight: 1.8,
                  whiteSpace: "pre",
                }}
              >
                {line}
              </div>
            );
          })}
        </div>
      </div>
    </FadeSlideIn>
  );
};

// ─── Flow Diagram ─────────────────────────────────────
export const FlowDiagram: React.FC<{
  steps: { icon: string; label: string }[];
  vertical?: boolean;
}> = ({ steps, vertical = false }) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: vertical ? "column" : "row",
        alignItems: "center",
        gap: 0,
        justifyContent: "center",
      }}
    >
      {steps.map((step, i) => {
        const delay = i * 14;
        const f = Math.max(0, frame - delay);
        const opacity = interpolate(f, [0, 12], [0, 1], {
          extrapolateRight: "clamp",
        });
        const arrowOpacity =
          i < steps.length - 1
            ? interpolate(f, [8, 16], [0, 1], {
                extrapolateRight: "clamp",
              })
            : 0;
        return (
          <React.Fragment key={i}>
            <div
              style={{
                opacity,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                background: COLORS.surface,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 14,
                padding: "18px 28px",
                minWidth: 120,
              }}
            >
              <div style={{ fontSize: 32 }}>{step.icon}</div>
              <div
                style={{
                  color: COLORS.text,
                  fontSize: 18,
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                {step.label}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div
                style={{
                  opacity: arrowOpacity,
                  color: COLORS.accent,
                  fontSize: 28,
                  padding: vertical ? "4px 0" : "0 8px",
                  transform: vertical ? "rotate(90deg)" : "none",
                }}
              >
                →
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

// ─── Stat Counter ─────────────────────────────────────
export const StatCounter: React.FC<{
  value: string;
  label: string;
  delay?: number;
}> = ({ value, label, delay = 0 }) => {
  return (
    <FadeSlideIn delay={delay}>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            color: COLORS.accent,
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1,
          }}
        >
          {value}
        </div>
        <div
          style={{
            color: COLORS.muted,
            fontSize: 20,
            marginTop: 8,
          }}
        >
          {label}
        </div>
      </div>
    </FadeSlideIn>
  );
};

// ─── Takeaway Card ────────────────────────────────────
export const TakeawayCard: React.FC<{
  text: string;
  subtext?: string;
}> = ({ text, subtext }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, from: 0.95, to: 1, durationInFrames: 20 });
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill
      style={{
        background: COLORS.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          color: COLORS.text,
          fontSize: 44,
          fontWeight: 700,
          textAlign: "center",
          maxWidth: 1100,
          lineHeight: 1.3,
        }}
      >
        {text}
      </div>
      {subtext && (
        <FadeSlideIn delay={20}>
          <div
            style={{
              color: COLORS.accent,
              fontSize: 24,
              marginTop: 24,
              textAlign: "center",
            }}
          >
            {subtext}
          </div>
        </FadeSlideIn>
      )}
    </AbsoluteFill>
  );
};

// ─── Section layout helpers ───────────────────────────
export const CenterLayout: React.FC<{
  children: React.ReactNode;
  gap?: number;
}> = ({ children, gap = 32 }) => (
  <AbsoluteFill
    style={{
      background: COLORS.bg,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap,
      padding: 60,
    }}
  >
    {children}
  </AbsoluteFill>
);

export const SplitLayout: React.FC<{
  left: React.ReactNode;
  right: React.ReactNode;
}> = ({ left, right }) => (
  <AbsoluteFill
    style={{
      background: COLORS.bg,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 60,
      padding: 80,
    }}
  >
    <div style={{ flex: 1 }}>{left}</div>
    <div style={{ flex: 1 }}>{right}</div>
  </AbsoluteFill>
);

export const SectionTitle: React.FC<{ text: string }> = ({ text }) => (
  <FadeSlideIn>
    <div
      style={{
        color: COLORS.text,
        fontSize: 40,
        fontWeight: 700,
        textAlign: "center",
        marginBottom: 8,
      }}
    >
      {text}
    </div>
  </FadeSlideIn>
);
