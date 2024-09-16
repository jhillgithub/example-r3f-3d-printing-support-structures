import React from "react";
import { MeshProps } from "@react-three/fiber";
import { DoubleSide } from "three";

const Ground = (props: MeshProps) => {
  return (
    <mesh
      rotation-x={-Math.PI / 2}
      position={[0, 0, 0]}
      receiveShadow
      {...props}
    >
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
};

export default Ground;
