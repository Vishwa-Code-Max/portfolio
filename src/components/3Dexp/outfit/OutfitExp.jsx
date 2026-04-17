import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Center } from "@react-three/drei";
import { ArmorModel } from "./Outfit";

const OutfitExp = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  showControls = false,
}) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 1, 5], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Environment preset="city" />

        <Center>
          <ArmorModel position={position} rotation={rotation} scale={scale} />
        </Center>

        {showControls && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={2}
          />
        )}
      </Canvas>
    </div>
  );
};

export default OutfitExp;
