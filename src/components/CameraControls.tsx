import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";
import {
  CAMERA_MODE,
  useCharacterCustomization,
} from "../context/CharacterCustomizationContext";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
const cameraPosition = {
  [CAMERA_MODE[1]]: {
    position: new THREE.Vector3(0, 0.5, 1),
    target: new THREE.Vector3(0, 0.5, 0),
  },
  [CAMERA_MODE[2]]: {
    position: new THREE.Vector3(0, 0.2, 0.8),
    target: new THREE.Vector3(0, 0, 0),
  },
  [CAMERA_MODE[3]]: {
    position: new THREE.Vector3(0, -0.5, 1),
    target: new THREE.Vector3(0, -0.5, 0),
  },
};

export const CameraControls = () => {
  const { cameraMode, setCameraMode }: any = useCharacterCustomization();
  const orbitControls = useRef<any>(null);
  useFrame((state, delta) => {
    switch (cameraMode) {
      case CAMERA_MODE[1]:
        state?.camera?.position?.lerp(cameraPosition[cameraMode].position, 0.2);
        orbitControls.current.target.lerp(
          cameraPosition[cameraMode].target,
          0.2
        );
        return;
      case CAMERA_MODE[2]:
        state?.camera?.position?.lerp(cameraPosition[cameraMode].position, 0.2);
        orbitControls.current.target.lerp(
          cameraPosition[cameraMode].target,
          0.2
        );
        return;
      case CAMERA_MODE[3]:
        state?.camera?.position?.lerp(cameraPosition[cameraMode].position, 0.2);
        orbitControls.current.target.lerp(
          cameraPosition[cameraMode].target,
          0.2
        );
        return;

      default:
        return;
    }
  });
  return (
    <>
      <OrbitControls ref={orbitControls} />
    </>
  );
};
