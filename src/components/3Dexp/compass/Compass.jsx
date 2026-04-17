import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CompassModel({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  ...props
}) {
  const group = useRef();

  const { nodes, materials } = useGLTF(
    "/models/compass-transformed.glb"
  );

  return (
    <group
      ref={group}
      position={position}
      rotation={rotation}
      scale={scale}
      {...props}
      dispose={null}
    >
      {/* RESET GROUP */}
      <group rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <group name="Sketchfab_Scene">
          <group name="Compass001">
            <mesh
              geometry={nodes.Cylinder130__0.geometry}
              material={materials["Cylinder.128__0"]}
            />
            <mesh
              geometry={nodes.Cylinder129__0.geometry}
              material={materials["Cylinder.128__0"]}
            />
            <mesh
              geometry={nodes.Cylinder131__0.geometry}
              material={materials["Cylinder.128__0"]}
            />
          </group>

          <mesh
            geometry={nodes.Cube013_Crystal_0.geometry}
            material={materials.Crystal}
          />
          <mesh
            geometry={nodes.Cylinder128__0.geometry}
            material={materials["Cylinder.128__0"]}
          />
          <mesh
            geometry={nodes.Cylinder127_Material_0.geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes.Circle006_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/compass-transformed.glb");