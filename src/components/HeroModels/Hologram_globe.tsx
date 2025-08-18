import type { FC, JSX } from "react";
import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Group, Color } from "three";

type HologramGlobeProps = JSX.IntrinsicElements["group"];

export const HologramGlobe: FC<HologramGlobeProps> = (props) => {
  const group = useRef<Group>(null);
  const { nodes, materials } = useGLTF(
    "/models/hologram_globe.glb"
  ) as any;
  // const { actions } = useAnimations(animations, group);

  // Style only the globe and its rays
  useEffect(() => {
    if (materials["Earth Surface.006"]) {
      materials["Earth Surface.006"].color = new Color("#00f5ff");
      materials["Earth Surface.006"].emissive = new Color("#00f5ff");
      materials["Earth Surface.006"].emissiveIntensity = 0.5;
      materials["Earth Surface.006"].metalness = 0.8;
      materials["Earth Surface.006"].roughness = 0.2;
    }

    if (materials.transparent) {
      materials.transparent.color = new Color("#00ffff");
      materials.transparent.transparent = true;
      materials.transparent.opacity = 0.3;
      materials.transparent.emissive = new Color("#00ffff");
      materials.transparent.emissiveIntensity = 0.8;
    }
  }, [materials]);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Lighting just for the globe */}
      <ambientLight intensity={1} />
      <pointLight position={[3, 3, 3]} intensity={1} color="#00ffff" />

      {/* Globe */}
      <mesh
        name="Earth_2"
        geometry={nodes.Earth_2.geometry}
        material={materials["Earth Surface.006"]}
        rotation={[0, 0.025, 0]}
      />
    </group>
  );
};

useGLTF.preload("/models/hologram_globe.glb");
