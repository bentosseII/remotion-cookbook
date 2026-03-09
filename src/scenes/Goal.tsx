import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const GoalScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  
  const nutshellOpacity = interpolate(frame, [25, 45], [0, 1], { extrapolateRight: "clamp" });
  const nutshellScale = spring({ frame: frame - 25, fps, from: 0.9, to: 1, durationInFrames: 20 });

  const arrowOpacity = interpolate(frame, [50, 60], [0, 1], { extrapolateRight: "clamp" });
  
  const newNutshellOpacity = interpolate(frame, [65, 85], [0, 1], { extrapolateRight: "clamp" });
  const newNutshellScale = spring({ frame: frame - 65, fps, from: 0.9, to: 1, durationInFrames: 20 });

  return (
    <AbsoluteFill className="bg-black flex flex-col items-center justify-center p-16">
      <div
        style={{ opacity: textOpacity }}
        className="text-gray-400 text-2xl mb-12"
      >
        I wanted to replace my nutshells with this 3D button
      </div>
      
      <div className="flex items-center gap-12">
        {/* Before - dotted underline */}
        <div
          style={{
            opacity: nutshellOpacity,
            transform: `scale(${nutshellScale})`,
          }}
          className="flex flex-col items-center"
        >
          <div className="text-gray-500 text-sm mb-3">BEFORE</div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <span className="text-white text-xl">
              Using the <span className="border-b-2 border-dotted border-gray-500 cursor-pointer">bird CLI</span> to fetch tweets
            </span>
          </div>
        </div>

        {/* Arrow */}
        <div
          style={{ opacity: arrowOpacity }}
          className="text-gray-500 text-4xl"
        >
          →
        </div>

        {/* After - 3D button */}
        <div
          style={{
            opacity: newNutshellOpacity,
            transform: `scale(${newNutshellScale})`,
          }}
          className="flex flex-col items-center"
        >
          <div className="text-gray-500 text-sm mb-3">AFTER</div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <span className="text-white text-xl">
              Using the{" "}
              <span 
                className="inline-block px-3 py-1 bg-gradient-to-b from-zinc-600 to-zinc-700 rounded text-sm font-medium cursor-pointer"
                style={{
                  boxShadow: "0 3px 0 rgb(63, 63, 70), 0 4px 6px rgba(0,0,0,0.3)",
                }}
              >
                bird CLI
              </span>
              {" "}to fetch tweets
            </span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
