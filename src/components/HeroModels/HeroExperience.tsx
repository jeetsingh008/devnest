import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { HologramGlobe } from "./Hologram_globe";

const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={3}
        minDistance={3}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <HologramGlobe />
    </Canvas>
  );
};

export default HeroExperience;
