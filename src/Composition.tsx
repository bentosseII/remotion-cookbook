import { AbsoluteFill, Sequence } from "remotion";
import { IntroScene } from "./scenes/Intro";
import { TweetScene } from "./scenes/Tweet";
import { GoalScene } from "./scenes/Goal";
import { ProcessScene } from "./scenes/Process";
import { TerminalScene } from "./scenes/Terminal";
import { ResultScene } from "./scenes/Result";

export const ReverseEngineeringVideo: React.FC = () => {
  return (
    <AbsoluteFill className="bg-black">
      {/* Scene 1: Intro - 3 seconds */}
      <Sequence durationInFrames={90}>
        <IntroScene />
      </Sequence>

      {/* Scene 2: Tweet - 3 seconds */}
      <Sequence from={90} durationInFrames={90}>
        <TweetScene />
      </Sequence>

      {/* Scene 3: Goal/Before-After - 4 seconds */}
      <Sequence from={180} durationInFrames={120}>
        <GoalScene />
      </Sequence>

      {/* Scene 4: Process Steps - 4 seconds */}
      <Sequence from={300} durationInFrames={120}>
        <ProcessScene />
      </Sequence>

      {/* Scene 5: Terminal - 5 seconds */}
      <Sequence from={420} durationInFrames={150}>
        <TerminalScene />
      </Sequence>

      {/* Scene 6: Result - 4 seconds */}
      <Sequence from={570} durationInFrames={130}>
        <ResultScene />
      </Sequence>
    </AbsoluteFill>
  );
};

// Keep the old export for backwards compatibility
export const MyComposition = ReverseEngineeringVideo;
