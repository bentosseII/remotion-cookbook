import React from "react";
import {AbsoluteFill, Sequence} from "remotion";
import {DevDashTerminalDemoV2} from "./scenes/devdash";

export const DevDashDemoV2: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence durationInFrames={450} premountFor={30}>
        <DevDashTerminalDemoV2 />
      </Sequence>
    </AbsoluteFill>
  );
};
