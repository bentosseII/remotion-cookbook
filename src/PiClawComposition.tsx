import React from "react";
import {AbsoluteFill, Sequence} from "remotion";
import {PiClawTerminalDemo} from "./scenes/pi-claw";

export const PiClawDemo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence durationInFrames={490} premountFor={30}>
        <PiClawTerminalDemo />
      </Sequence>
    </AbsoluteFill>
  );
};
