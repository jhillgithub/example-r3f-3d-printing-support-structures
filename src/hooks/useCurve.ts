import { useCallback } from "react";
import { CatmullRomCurve3, Vector3 } from "three";
export const useCurve = () => {
  const sampleCurve = useCallback((points: Vector3[], resolution = 5) => {
    if (points.length < 2) return [];
    const samples = Math.max(100, points.length * resolution);
    const curve = new CatmullRomCurve3(points);
    return curve.getPoints(samples);
  }, []);
  return { sampleCurve };
};
