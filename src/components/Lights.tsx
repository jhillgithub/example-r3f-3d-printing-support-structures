import React from "react";
import { Environment } from "@react-three/drei";

export const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <Environment files={"/hdrs/neon_photostudio_1k.hdr"} />
    </>
  );
};
