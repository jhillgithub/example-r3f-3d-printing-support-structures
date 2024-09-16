import { Box, OrbitControls } from "@react-three/drei";
import Lights from "./Lights";

const Experience = () => {
  return (
    <>
      <Box>
        <meshStandardMaterial color="teal" />
      </Box>
      <Lights />
      <OrbitControls />
    </>
  );
};

export default Experience;
