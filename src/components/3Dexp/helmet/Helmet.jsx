import React from "react";
import { useGLTF } from "@react-three/drei";

export function HelmetModel({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  ...props
}) {
  const { nodes, materials } = useGLTF("/models/helmet-transformed.glb");

  return (
    <group
      {...props}
      position={position}
      rotation={rotation}
      scale={scale}
      dispose={null}
    >
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Material.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/helmet-transformed.glb");