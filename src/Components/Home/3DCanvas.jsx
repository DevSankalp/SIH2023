import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useDrag } from "react-use-gesture";
import * as THREE from "three";

const Emblem = () => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, "./images/emblem.glb");

  const mixer = new THREE.AnimationMixer(gltf.scene);

  const bind = useDrag(({ offset: [x, y] }) => {
    if (mesh.current) {
      const rotationSpeed = 0.00005;
      mesh.current.rotation.x += y * rotationSpeed;
      mesh.current.rotation.y += x * rotationSpeed;
    }
  });

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.z += 0.5 * delta;
    }
    mixer.update(delta);
  });

  return (
    <mesh ref={mesh} scale={[0.01, 0.01, 0.01]} {...bind()}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default Emblem;
