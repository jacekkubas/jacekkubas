import React, { useRef } from "react";
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
  const cameraZ = 5;

  useFrame(() => {
    const alpha = 0.01;

    let y =
      Math.abs(pointer.x) > Math.abs(pointer.y)
        ? Math.abs(pointer.x)
        : Math.abs(pointer.y < -1 ? -1 : pointer.y);

    const curPosX = camera.position.x;
    const curPosY = camera.position.y;
    const curPosZ = camera.position.z;

    const curRotX = camera.rotation.x;
    const curRotY = camera.rotation.y;

    const finalPosX = pointer.x * -2.5;
    const finalPosY = pointer.y < -1 ? -1 : pointer.y;
    const finalPosZ = cameraZ - y;

    const finalRotX = pointer.y < -1 ? 0.2 : pointer.y * -0.2;
    const finalRotY = pointer.x / -2;

    // left right
    camera.position.x = curPosX + (finalPosX - curPosX) * alpha;
    camera.rotation.y = curRotY + (finalRotY - curRotY) * alpha;

    //top bottom
    camera.position.y = curPosY + (finalPosY - curPosY) * alpha;
    camera.rotation.x = curRotX + (finalRotX - curRotX) * alpha;

    // in out
    camera.position.z = curPosZ + (finalPosZ - curPosZ) * alpha;

    // lerp
    // current_value = start_value + (end_value - start_value) * a
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
