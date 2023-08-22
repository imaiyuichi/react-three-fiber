import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import {
  ContactShadows,
  Environment,
  Float,
  Html,
  OrbitControls,
  PresentationControls,
  Text,
  useGLTF,
} from "@react-three/drei";
function App() {
  const macbook = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <div>
      <Canvas camera={{ fov: 45, near: 0.1, far: 2000 }}>
        <OrbitControls />
        <ambientLight />
        <directionalLight position={[2.5, 8, 5]} intensity={1.7} />
        <color args={["#333333"]} attach="background" />
        <PresentationControls
          global
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          rotation={[-0.05, 0, 0]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 300 }}
        >
          <Float rotationIntensity={1}>
            <rectAreaLight
              width={2.0}
              height={1.65}
              intensity={75}
              color={"#0021a7"}
              rotation={[0.1, Math.PI, 0]}
              position={[0, 0, -1]}
            />
            <primitive
              object={macbook.scene}
              position-y={0.3}
              position-x={0}
              position={[0, 0, 0]}
              scale={0.4}
            >
              <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={1.17}
                position={[0, 1.56, -1.4]}
                rotation-x={-0.256}
              >
                <iframe src=" https://imaiyuichi.github.io/repo_2305/" />
              </Html>
            </primitive>
          </Float>
          <Text fontSize={0.3} position={[0, 1.5, 0.2]} textAlign="center">
            imai yuichi
          </Text>
        </PresentationControls>
        <ContactShadows position-y={-0.3} opacity={0.7} scale={7} blur={2.4} />
      </Canvas>
    </div>
  );
}

export default App;
