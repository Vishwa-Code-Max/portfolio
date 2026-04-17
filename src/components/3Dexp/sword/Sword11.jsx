import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  ...props
}) {
  const { nodes, materials } = useGLTF("/models/sword11-transformed.glb");

  return (
    <group
      {...props}
      position={position}
      rotation={rotation}
      scale={scale}
      dispose={null}
    >
      <mesh
        geometry={nodes.Sword_DefaultMaterial_0.geometry}
        material={materials.DefaultMaterial}
      />
    </group>
  );
}

useGLTF.preload("/models/sword11-transformed.glb");

// 09901251345
