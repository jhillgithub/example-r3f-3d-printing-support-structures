import React from "react";
import { useStructureContext } from "../context/StructureContext";

export const Points = () => {
  const { points } = useStructureContext();
  return (
    <>
      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      ))}
    </>
  );
};
