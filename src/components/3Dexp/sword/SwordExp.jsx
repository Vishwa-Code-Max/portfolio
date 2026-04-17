import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { Model } from "./Sword11";

const SwordExp = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  showControls = false,
}) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [10, 0, 1], fov: 15 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Environment */}
        <Environment preset="city" />
        <Model position={position} rotation={rotation} scale={scale} />

        {/* Controls */}
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

export default SwordExp;
