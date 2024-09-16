import React from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export const Frog = (props) => {
  const { nodes, materials } = useGLTF("frog.glb");
  const frogMesh = nodes.mesh_char_104_1 as Mesh;
  return (
    <group {...props} dispose={null}>
      <mesh
        name="mesh_char_104_1"
        geometry={frogMesh.geometry}
        material={materials._010_Froggy}
        morphTargetDictionary={frogMesh.morphTargetDictionary}
        morphTargetInfluences={frogMesh.morphTargetInfluences}
        scale={100}
      />
    </group>
  );
};

useGLTF.preload("frog.glb");
