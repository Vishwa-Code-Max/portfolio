import React, { useRef, useEffect, useMemo } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export function AutumnWinterModel(props) {
  const group = useRef();

  const { scene, animations } = useGLTF("/models/autumnwinter-transformed.glb");

  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const { nodes, materials } = useGraph(clone);

  const { actions } = useAnimations(animations, group);

  // ✅ AUTOPLAY ALL ANIMATIONS
  useEffect(() => {
    if (!actions) return;

    const actionKeys = Object.keys(actions);

    actionKeys.forEach((key) => {
      actions[key]?.reset().fadeIn(0.5).play();
    });

    return () => {
      actionKeys.forEach((key) => {
        actions[key]?.fadeOut(0.5);
      });
    };
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />

        {/* Autumn */}
        <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.Autumn_exportaki_body_mat} skeleton={nodes.Object_7.skeleton} scale={0.01} />
        <skinnedMesh geometry={nodes.Object_9.geometry} material={materials.Autumn_exportaki_horn_alpha_mat} skeleton={nodes.Object_9.skeleton} scale={0.01} />
        <skinnedMesh geometry={nodes.Object_10.geometry} material={materials.Autumn_exportaki_horn_mat} skeleton={nodes.Object_10.skeleton} scale={0.01} />
        <skinnedMesh geometry={nodes.Object_12.geometry} material={materials.Autumn_exportaki_eye_mat} skeleton={nodes.Object_12.skeleton} scale={0.01} />
        <skinnedMesh geometry={nodes.Object_14.geometry} material={materials.Autumn_exportaki_eye_mat} skeleton={nodes.Object_14.skeleton} scale={0.01} />
        <skinnedMesh geometry={nodes.Object_16.geometry} material={materials.Autumn_exportaki_body_mat} skeleton={nodes.Object_16.skeleton} scale={0.01} />

        {/* Winter */}
        <skinnedMesh geometry={nodes.Object_18.geometry} material={materials.Winter_exporthuyu_body_mat} skeleton={nodes.Object_18.skeleton} scale={0.01} />
        <skinnedMesh geometry={nodes.Object_20.geometry} material={materials.Winter_exporthuyu_body_mat} skeleton={nodes.Object_20.skeleton} scale={0.01} />
        <skinnedMesh geometry={nodes.Object_22.geometry} material={materials.Winter_exporthuyu_horn_mat} skeleton={nodes.Object_22.skeleton} scale={0.01} />
        <skinnedMesh geometry={nodes.Object_23.geometry} material={materials.Winter_exporthuyu_horn_alpha_mat} skeleton={nodes.Object_23.skeleton} scale={0.01} />
        <skinnedMesh geometry={nodes.Object_25.geometry} material={materials.Winter_exporthuyu_eye_mat} skeleton={nodes.Object_25.skeleton} scale={0.01} />
        <skinnedMesh geometry={nodes.Object_27.geometry} material={materials.Winter_exporthuyu_eye_mat} skeleton={nodes.Object_27.skeleton} scale={0.01} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/autumnwinter-transformed.glb");