import React, { useState, useRef } from "react";
import {
  Environment,
  useGLTF,
  MeshTransmissionMaterial,
  Float,
} from "@react-three/drei";
import { Mesh } from "three";
import { useFrame, useThree } from "@react-three/fiber";
// import { useControls } from "leva";

const Model = ({ reverse }: { reverse: boolean | undefined }) => {
  const mesh1 = useRef<Mesh>(null);
  const { nodes } = useGLTF("/shapes.glb");
  const { viewport } = useThree();
  const [isHovering, setIsHovering] = useState(false);

  useFrame(() => {
    if (mesh1 && mesh1.current && isHovering) {
      mesh1.current.rotation.x += 0.004;
      mesh1.current.rotation.y -= 0.004;
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
    <group scale={viewport.width / 7}>
      <Environment
        preset="city"
        backgroundBlurriness={1}
        backgroundRotation={[0, Math.PI / 2, 0]}
      />
      <Float speed={5}>
        {reverse && (
          <mesh
            onPointerEnter={() => {
              setIsHovering(true);
            }}
            onPointerOut={() => {
              setIsHovering(false);
            }}
            ref={mesh1}
            {...nodes.Icosphere}
            position={[0, 0.1, 0]}
          >
            <MeshTransmissionMaterial {...materialProps} />
          </mesh>
        )}
        {!reverse && (
          <mesh
            onPointerEnter={() => {
              setIsHovering(true);
            }}
            onPointerOut={() => {
              setIsHovering(false);
            }}
            ref={mesh1}
            {...nodes.Icosphere001}
            position={[0, 0.1, 0]}
          >
            <MeshTransmissionMaterial {...materialProps} />
          </mesh>
        )}
      </Float>
    </group>
  );
};

export default Model;
