import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { AutumnWinterModel } from "./Autumnwinter";

const AutumnWinterExp = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  showControls = false,
}) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 1, 6], fov: 30 }}>
        {/* Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 3]} intensity={1} />

        {/* HDRI */}
        <Environment preset="city" />

        {/* Animated + Floating */}
        <Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
          <AutumnWinterModel
            position={position}
            rotation={rotation}
            scale={scale}
          />
        </Float>

        {/* Controls (optional) */}
        {showControls && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        )}
      </Canvas>
    </div>
  );
};

export default AutumnWinterExp;
