import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const terminalLines = [
  { text: "$ droid", type: "command", delay: 0 },
  { text: "", type: "blank", delay: 5 },
  { text: "> Download that video from the tweet, extract frames,", type: "prompt", delay: 10 },
  { text: "  and recreate that 3D button animation", type: "prompt", delay: 10 },
  { text: "", type: "blank", delay: 20 },
  { text: "⠋ Fetching tweet @aidenybai/2012935264440914027...", type: "status", delay: 30 },
  { text: "✓ Found video attachment", type: "success", delay: 45 },
  { text: "⠋ Downloading video with ffmpeg...", type: "status", delay: 55 },
  { text: "✓ Extracted 24 frames", type: "success", delay: 70 },
  { text: "⠋ Analyzing animation states...", type: "status", delay: 80 },
  { text: "✓ Identified: idle → pressed → loading → complete", type: "success", delay: 95 },
  { text: "", type: "blank", delay: 105 },
  { text: "Creating src/components/Button3D.tsx...", type: "info", delay: 110 },
];

export const TerminalScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const windowOpacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });
  const windowScale = spring({ frame, fps, from: 0.95, to: 1, durationInFrames: 15 });

  return (
    <AbsoluteFill className="bg-black flex items-center justify-center p-12">
      <div
        style={{
          opacity: windowOpacity,
          transform: `scale(${windowScale})`,
        }}
        className="w-full max-w-4xl"
      >
        {/* Terminal window */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-700 shadow-2xl">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800 border-b border-zinc-700">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-zinc-400 text-sm">Terminal — droid</span>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm leading-relaxed min-h-[400px]">
            {terminalLines.map((line, i) => {
              const lineOpacity = interpolate(
                frame,
                [line.delay, line.delay + 8],
                [0, 1],
                { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
              );

              if (line.type === "blank") {
                return <div key={i} className="h-5" />;
              }

              const colorClass = {
                command: "text-white",
                prompt: "text-blue-400",
                status: "text-yellow-400",
                success: "text-green-400",
                info: "text-purple-400",
              }[line.type];

              return (
                <div
                  key={i}
                  style={{ opacity: lineOpacity }}
                  className={`${colorClass}`}
                >
                  {line.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
