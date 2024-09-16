import React from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { useStructureContext } from "../context/StructureContext";
import { GroupProps, ThreeEvent } from "@react-three/fiber";

export const Frog = (props: GroupProps) => {
  const { setPoints } = useStructureContext();
  const { nodes, materials } = useGLTF("frog.glb");
  const frogMesh = nodes.mesh_char_104_1 as Mesh;
  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    const point = event.point.clone();
    setPoints((prevPoints) => [...prevPoints, point]);
  };
  return (
    <group {...props} dispose={null}>
      <mesh
        name="mesh_char_104_1"
        geometry={frogMesh.geometry}
        material={materials._010_Froggy}
        morphTargetDictionary={frogMesh.morphTargetDictionary}
        morphTargetInfluences={frogMesh.morphTargetInfluences}
        scale={100}
        onPointerDown={handlePointerDown}
      />
    </group>
  );
};

useGLTF.preload("frog.glb");
