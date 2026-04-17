import React from "react";
import { useGLTF } from "@react-three/drei";

export function ArmorModel({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  ...props
}) {
  const { nodes, materials } = useGLTF("/models/armor1-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.material_0}
      />
    </group>
  );
}

useGLTF.preload("/models/armor1-transformed.glb");
