/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/model/woman.gltf
*/

import { FC, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCharacterAnimations } from "../context/CharacterAnimationContext";

export const Woman: FC<any> = (props) => {
  const group = useRef();
  const { nodes, materials, animations }: any = useGLTF("/model/woman.gltf");
  const { actions, names } = useAnimations(animations, group);

  const {
    setAnimations,
    animationIndex,
    animations: animations_name,
  }: any = useCharacterAnimations();

  useEffect(() => {
    if (!group.current) return;
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    actions[animations_name[animationIndex]]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      actions[animations_name[animationIndex]]?.reset()?.fadeOut(0.5);
    };
  }, [animationIndex, animations_name]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <group name="SM_Chr_Developer_Female_02">
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019"
              geometry={nodes.Mesh019.geometry}
              material={materials.Glasses}
              skeleton={nodes.Mesh019.skeleton}
              morphTargetDictionary={nodes.Mesh019.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019.morphTargetInfluences}
            />
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_1"
              geometry={nodes.Mesh019_1.geometry}
              material={materials.Eyes}
              skeleton={nodes.Mesh019_1.skeleton}
              morphTargetDictionary={nodes.Mesh019_1.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019_1.morphTargetInfluences}
            />
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_2"
              geometry={nodes.Mesh019_2.geometry}
              material={materials.Hair}
              skeleton={nodes.Mesh019_2.skeleton}
              morphTargetDictionary={nodes.Mesh019_2.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019_2.morphTargetInfluences}
            />
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_3"
              geometry={nodes.Mesh019_3.geometry}
              material={materials.Skin}
              skeleton={nodes.Mesh019_3.skeleton}
              morphTargetDictionary={nodes.Mesh019_3.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019_3.morphTargetInfluences}
            />
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_4"
              geometry={nodes.Mesh019_4.geometry}
              material={materials.Mouth}
              skeleton={nodes.Mesh019_4.skeleton}
              morphTargetDictionary={nodes.Mesh019_4.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019_4.morphTargetInfluences}
            />
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_5"
              geometry={nodes.Mesh019_5.geometry}
              material={materials.Shirt}
              skeleton={nodes.Mesh019_5.skeleton}
              morphTargetDictionary={nodes.Mesh019_5.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019_5.morphTargetInfluences}
            />
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_6"
              geometry={nodes.Mesh019_6.geometry}
              material={materials.Pants}
              skeleton={nodes.Mesh019_6.skeleton}
              morphTargetDictionary={nodes.Mesh019_6.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019_6.morphTargetInfluences}
            />
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_7"
              geometry={nodes.Mesh019_7.geometry}
              material={materials.Shoes}
              skeleton={nodes.Mesh019_7.skeleton}
              morphTargetDictionary={nodes.Mesh019_7.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019_7.morphTargetInfluences}
            />
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_8"
              geometry={nodes.Mesh019_8.geometry}
              material={materials.Sole}
              skeleton={nodes.Mesh019_8.skeleton}
              morphTargetDictionary={nodes.Mesh019_8.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019_8.morphTargetInfluences}
            />
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_9"
              geometry={nodes.Mesh019_9.geometry}
              material={materials.Laces}
              skeleton={nodes.Mesh019_9.skeleton}
              morphTargetDictionary={nodes.Mesh019_9.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019_9.morphTargetInfluences}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/model/woman.gltf");
