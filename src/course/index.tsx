// Course video registrations for "Build Your AI Agent"
// Each module is a 30s video at 1920x1080

import React from "react";
import { Composition } from "remotion";
import {
  Module01, Module02, Module03, Module04, Module05, Module06,
  Module07, Module08, Module09, Module10, Module11, Module12,
  Module13, Module14, Module15, Module16, Module17,
} from "./modules";

const FPS = 30;
const DURATION = 30 * FPS; // 30 seconds per module

const modules = [
  { id: "Module01-WhatYoureBuilding", component: Module01 },
  { id: "Module02-Identity", component: Module02 },
  { id: "Module03-Memory", component: Module03 },
  { id: "Module04-Email", component: Module04 },
  { id: "Module05-MeetingPrep", component: Module05 },
  { id: "Module06-ThinkingPartner", component: Module06 },
  { id: "Module07-Architecture", component: Module07 },
  { id: "Module08-Setup", component: Module08 },
  { id: "Module09-Tools", component: Module09 },
  { id: "Module10-Schedules", component: Module10 },
  { id: "Module11-OvernightWork", component: Module11 },
  { id: "Module12-MultiChannel", component: Module12 },
  { id: "Module13-TrustAutonomy", component: Module13 },
  { id: "Module14-KnowledgeSystem", component: Module14 },
  { id: "Module15-DedicatedHardware", component: Module15 },
  { id: "Module16-Security", component: Module16 },
  { id: "Module17-MakingItYours", component: Module17 },
];

export const CourseCompositions: React.FC = () => (
  <>
    {modules.map(({ id, component }) => (
      <Composition
        key={id}
        id={id}
        component={component}
        durationInFrames={DURATION}
        fps={FPS}
        width={1920}
        height={1080}
      />
    ))}
  </>
);
