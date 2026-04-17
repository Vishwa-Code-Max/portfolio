import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Center } from "@react-three/drei";
import { CompassModel } from "./Compass";

const CompassExp = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  showControls = false,
}) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        {/* Environment */}
        <Environment preset="city" />

        {/* Auto center */}
        <Center>
          <CompassModel position={position} rotation={rotation} scale={scale} />
        </Center>

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

export default CompassExp;
