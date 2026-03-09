import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const TweetScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardScale = spring({ frame, fps, from: 0.8, to: 1, durationInFrames: 20 });
  const cardOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const labelOpacity = interpolate(frame, [30, 45], [0, 1], { extrapolateRight: "clamp" });
  const labelY = spring({ frame: frame - 30, fps, from: 15, to: 0, durationInFrames: 20 });

  return (
    <AbsoluteFill className="bg-black flex flex-col items-center justify-center p-16">
      <div
        style={{
          opacity: labelOpacity,
          transform: `translateY(${labelY}px)`,
        }}
        className="text-gray-400 text-2xl mb-8"
      >
        I saw this tweet...
      </div>
      
      <div
        style={{
          opacity: cardOpacity,
          transform: `scale(${cardScale})`,
        }}
        className="bg-zinc-900 rounded-2xl p-8 max-w-xl border border-zinc-800"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
          <div>
            <div className="text-white font-semibold">@aidenybai</div>
            <div className="text-gray-500 text-sm">Aiden Bai</div>
          </div>
        </div>
        
        <div className="text-white text-xl mb-6">
          lil run → compile animation
        </div>
        
        {/* Simulated button animation */}
        <div className="flex gap-4 justify-center">
          <div className="px-6 py-3 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-lg text-black font-bold shadow-lg transform hover:scale-105 transition-transform"
               style={{
                 boxShadow: "0 4px 0 rgb(5, 150, 105), 0 6px 10px rgba(0,0,0,0.3)",
               }}>
            Run
          </div>
          <div className="text-gray-500 text-2xl">→</div>
          <div className="px-6 py-3 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg text-white font-bold shadow-lg"
               style={{
                 boxShadow: "0 4px 0 rgb(30, 64, 175), 0 6px 10px rgba(0,0,0,0.3)",
               }}>
            Compiling...
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
