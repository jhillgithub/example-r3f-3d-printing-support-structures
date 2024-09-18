import React from "react";
import { Experience } from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Canvas
        camera={{ position: [0, 1, 5], fov: 60 }}
        onCreated={({ camera }) => {
          camera.lookAt(0, 2, 0);
        }}
      >
        <color attach="background" args={["#0f0f0f"]} />
        <Experience />
        <OrbitControls target={[0, 2, 0]} />
      </Canvas>
    </div>
  );
};

export default App;
