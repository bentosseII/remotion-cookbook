import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const titleY = spring({ frame, fps, from: 30, to: 0, durationInFrames: 30 });

  const subtitleOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" });
  const subtitleY = spring({ frame: frame - 20, fps, from: 20, to: 0, durationInFrames: 25 });

  return (
    <AbsoluteFill className="bg-black flex flex-col items-center justify-center">
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
        className="text-white text-6xl font-bold text-center mb-6"
      >
        Reverse Engineering
      </div>
      <div
        style={{
          opacity: subtitleOpacity,
          transform: `translateY(${subtitleY}px)`,
        }}
        className="text-gray-400 text-3xl text-center"
      >
        How I rebuilt a button from a tweet
      </div>
    </AbsoluteFill>
  );
};
