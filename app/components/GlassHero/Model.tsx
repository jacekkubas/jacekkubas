import React, { useRef, useState, useEffect } from "react";
import {
  Environment,
  useGLTF,
  Text,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { Mesh } from "three";
import { useFrame, useThree } from "@react-three/fiber";
// import { useControls } from "leva";

const Model = () => {
  const mesh1 = useRef<Mesh>(null);
  const mesh2 = useRef<Mesh>(null);
  const mesh3 = useRef<Mesh>(null);
  const { nodes } = useGLTF("/shapes.glb");
  const { viewport, camera, pointer } = useThree();

  useFrame(() => {
    let y =
      Math.abs(pointer.x) > Math.abs(pointer.y)
        ? Math.abs(pointer.x)
        : Math.abs(pointer.y);

    // top bottom
    camera.position.y = pointer.y; // 0.5
    camera.rotation.x = pointer.y * -0.2; // 0.1

    // left right
    camera.position.x = pointer.x * -2.5; // 2
    camera.rotation.y = pointer.x / -2; // 0.5

    // in out
    camera.position.z = 5 - y; // 4
  });

  useFrame(() => {
    if (mesh1 && mesh1.current) {
      mesh1.current.rotation.x += 0.008;
      mesh1.current.rotation.y -= 0.008;
    }
    if (mesh2 && mesh2.current) {
      mesh2.current.rotation.x += 0.008;
      mesh2.current.rotation.y += 0.008;
    }
    if (mesh3 && mesh3.current) {
      mesh3.current.rotation.x -= 0.008;
      mesh3.current.rotation.y += 0.008;
    }
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
        // fontWeight={100}
        position={[0, 0, -5]}
        // font="/DM-Sans.ttf"
      >
        Clear Concepts
      </Text>
      <mesh ref={mesh1} {...nodes.Cube}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      <mesh ref={mesh2} {...nodes.Icosphere}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      <mesh ref={mesh3} {...nodes.Icosphere001}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};

export default Model;
