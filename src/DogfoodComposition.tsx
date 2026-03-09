import React from "react";
import {AbsoluteFill, Sequence} from "remotion";
import {DogfoodTerminalDemo} from "./scenes/dogfood";

export const DogfoodDemo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence durationInFrames={400} premountFor={30}>
        <DogfoodTerminalDemo />
      </Sequence>
    </AbsoluteFill>
  );
};
