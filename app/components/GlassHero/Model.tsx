import React, { useRef } from "react";
import {
  Environment,
  useGLTF,
  Text,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { Mesh } from "three";
import { useFrame, useThree } from "@react-three/fiber";

const Model = () => {
  const mesh1 = useRef<Mesh>(null);
  const { nodes: nodes1 } = useGLTF("/cube.glb");
  const { viewport } = useThree();

  useFrame((state) => {
    if (!mesh1 || !mesh1.current) return;
    // mesh1.current.rotation.set(
    //   -Math.PI * state.pointer.y,
    //   -Math.PI * state.pointer.x,
    //   0
    // );

    mesh1.current.rotation.x += 0.008;
    mesh1.current.rotation.y -= 0.008;
  });

  const materialProps = {
    backside: false,
    chromaticAbberration: 0.02,
    ior: 1.2,
    roughness: 0,
    thickness: 0.2,
    transmission: 1,
  };

  return (
    <group scale={viewport.width / 10}>
      <directionalLight intensity={3} position={[-0.5, 3, 2]} />
      <Environment preset="sunset" />
      <Text
        fontSize={1.1}
        fontWeight={100}
        position={[0, 0, -1.5]}
        font="/DM-Sans.ttf"
      >
        Jacek Kubas
      </Text>
      <mesh ref={mesh1} {...nodes1.Cube}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};

export default Model;
