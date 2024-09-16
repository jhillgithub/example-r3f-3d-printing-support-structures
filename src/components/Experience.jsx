import { OrbitControls } from "@react-three/drei";
import { Frog } from "./Frog";
import Lights from "./Lights";
import Points from "./Points";

const Experience = () => {
  return (
    <>
      <Lights />
      <Frog />
      <Points />
    </>
  );
};

export default Experience;
