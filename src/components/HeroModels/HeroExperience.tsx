import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { HologramGlobe } from "./Hologram_globe";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  //   const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={30}
        minDistance={3}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <HologramGlobe />
    </Canvas>
  );
};

export default HeroExperience;
