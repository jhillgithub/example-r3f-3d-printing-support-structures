import React, { useMemo } from "react";
import { Line } from "@react-three/drei";
import { Vector3 } from "three";
import { useStructureContext } from "../context/StructureContext";
import { useCurve } from "../hooks/useCurve";

export const SupportStructure = () => {
  const { points } = useStructureContext();
  const { sampleCurve } = useCurve();

  const supports = useMemo(() => {
    const samplePoints = sampleCurve(points, 20);
    return samplePoints.map((point: Vector3) => {
      const projection = new Vector3(point.x, 0, point.z);
      return [point, projection];
    });
  }, [points]);

  return (
    <>
      {supports.map((line, index) => (
        <Line
          key={index}
          points={line}
          color="hotpink"
          transparent
          opacity={0.6}
          lineWidth={8}
        />
      ))}
    </>
  );
};
