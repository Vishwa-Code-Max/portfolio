import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { HelmetModel } from "./Helmet";

const HelmetExp = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  showControls = false,
}) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [10, 0, 1], fov: 15 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Environment preset="city" />

        <HelmetModel position={position} rotation={rotation} scale={scale} />

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

export default HelmetExp;
