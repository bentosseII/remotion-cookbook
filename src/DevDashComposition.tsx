import React from "react";
import {AbsoluteFill, Sequence} from "remotion";
import {DevDashTerminalDemoV2} from "./scenes/devdash";

// Legacy composition id kept for compatibility.
export const DevDashDemo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence durationInFrames={450} premountFor={30}>
        <DevDashTerminalDemoV2 />
      </Sequence>
    </AbsoluteFill>
  );
};
