import React from "react";
import { Frog } from "./Frog";
import { Ground } from "./Ground";
import { Lights } from "./Lights";
import { Points } from "./Points";
import { SupportStructure } from "./SupportStructure";

export const Experience = () => {
  return (
    <>
      <Lights />
      <Frog />
      <Points />
      <Ground />
      <SupportStructure />
    </>
  );
};
