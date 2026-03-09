import "./index.css";
import { Composition } from "remotion";
import { ReverseEngineeringVideo } from "./Composition";
import { DevDashDemo } from "./DevDashComposition";
import { DevDashDemoV2 } from "./DevDashCompositionV2";
import { DogfoodDemo } from "./DogfoodComposition";
import { CourseCompositions } from "./course";
import { PiClawDemo } from "./PiClawComposition";
import { CookbookCompositions } from "./CookbookCompositions";
import { DemoUiLibraryCompositions } from "./DemoUiLibraryCompositions";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ReverseEngineering"
        component={ReverseEngineeringVideo}
        durationInFrames={700}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DevDashDemo"
        component={DevDashDemo}
        durationInFrames={600}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DevDashDemoV2"
        component={DevDashDemoV2}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DogfoodDemo"
        component={DogfoodDemo}
        durationInFrames={400}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="PiClawDemo"
        component={PiClawDemo}
        durationInFrames={490}
        fps={30}
        width={1920}
        height={1080}
      />
      <CourseCompositions />
      <CookbookCompositions />
      <DemoUiLibraryCompositions />
    </>
  );
};
