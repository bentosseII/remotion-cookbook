import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const ResultScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  
  const cardOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" });
  const cardScale = spring({ frame: frame - 20, fps, from: 0.9, to: 1, durationInFrames: 25 });

  // Animate the button states
  const buttonFrame = Math.max(0, frame - 60);
  const isPressed = buttonFrame > 0 && buttonFrame < 15;
  const isLoading = buttonFrame >= 15 && buttonFrame < 45;
  const isComplete = buttonFrame >= 45;

  const buttonY = isPressed ? 3 : 0;
  const buttonShadow = isPressed ? 1 : 4;

  return (
    <AbsoluteFill className="bg-black flex flex-col items-center justify-center p-16">
      <div
        style={{ opacity: titleOpacity }}
        className="text-white text-4xl font-bold mb-8"
      >
        The Result
      </div>

      <div
        style={{
          opacity: cardOpacity,
          transform: `scale(${cardScale})`,
        }}
        className="bg-zinc-900 p-12 rounded-2xl border border-zinc-800 max-w-3xl"
      >
        <p className="text-white text-2xl leading-relaxed mb-8">
          Now I use the{" "}
          <span
            className="inline-block px-4 py-2 rounded-lg font-semibold text-lg transition-all cursor-pointer"
            style={{
              background: isComplete 
                ? "linear-gradient(to bottom, #22c55e, #16a34a)"
                : isLoading
                ? "linear-gradient(to bottom, #facc15, #ca8a04)"
                : "linear-gradient(to bottom, #71717a, #52525b)",
              color: isComplete ? "white" : isLoading ? "black" : "white",
              boxShadow: `0 ${buttonShadow}px 0 ${
                isComplete ? "rgb(21, 128, 61)" : isLoading ? "rgb(161, 98, 7)" : "rgb(63, 63, 70)"
              }, 0 ${buttonShadow + 2}px 8px rgba(0,0,0,0.3)`,
              transform: `translateY(${buttonY}px)`,
            }}
          >
            {isComplete ? "✓ bird CLI" : isLoading ? "Loading..." : "bird CLI"}
          </span>
          {" "}to fetch tweets.
        </p>

        <p className="text-gray-400 text-lg">
          Click any{" "}
          <span
            className="inline-block px-3 py-1 rounded text-sm font-medium"
            style={{
              background: "linear-gradient(to bottom, #71717a, #52525b)",
              boxShadow: "0 3px 0 rgb(63, 63, 70), 0 4px 6px rgba(0,0,0,0.3)",
            }}
          >
            nutshell
          </span>
          {" "}to learn more about a term.
        </p>
      </div>

      {frame > 90 && (
        <div
          style={{
            opacity: interpolate(frame, [90, 110], [0, 1], { extrapolateRight: "clamp" }),
          }}
          className="mt-12 text-gray-500 text-xl"
        >
          cookbook.bensbites.com
        </div>
      )}
    </AbsoluteFill>
  );
};
