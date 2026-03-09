import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const steps = [
  { icon: "🐦", text: "Fetch tweet & video", delay: 0 },
  { icon: "🎬", text: "Download video with ffmpeg", delay: 15 },
  { icon: "🔍", text: "Analyze the animation frames", delay: 30 },
  { icon: "⚛️", text: "Generate React component", delay: 45 },
  { icon: "✨", text: "Three states: click → transition → done", delay: 60 },
];

export const ProcessScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill className="bg-black flex flex-col items-center justify-center p-16">
      <div
        style={{ opacity: titleOpacity }}
        className="text-white text-4xl font-bold mb-12"
      >
        What the agent did
      </div>

      <div className="flex flex-col gap-4 max-w-2xl">
        {steps.map((step, i) => {
          const stepOpacity = interpolate(
            frame,
            [step.delay + 10, step.delay + 25],
            [0, 1],
            { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
          );
          const stepX = spring({
            frame: Math.max(0, frame - step.delay - 10),
            fps,
            from: -30,
            to: 0,
            durationInFrames: 20,
          });

          return (
            <div
              key={i}
              style={{
                opacity: stepOpacity,
                transform: `translateX(${stepX}px)`,
              }}
              className="flex items-center gap-4 bg-zinc-900/50 px-6 py-4 rounded-xl border border-zinc-800"
            >
              <span className="text-3xl">{step.icon}</span>
              <span className="text-white text-xl">{step.text}</span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
