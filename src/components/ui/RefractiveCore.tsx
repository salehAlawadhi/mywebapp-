"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function GlassCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Inertia rotation targets
  const targetRotationX = useRef(0);
  const targetRotationY = useRef(0);
  const currentRotationX = useRef(0);
  const currentRotationY = useRef(0);

  // Mouse tracking on window for smooth inertia
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;

      targetRotationY.current = x * 1.5;
      targetRotationX.current = -y * 1.5;
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Smooth interpolation (Inertia/Lag)
    currentRotationX.current += (targetRotationX.current - currentRotationX.current) * 2 * delta;
    currentRotationY.current += (targetRotationY.current - currentRotationY.current) * 2 * delta;

    meshRef.current.rotation.x = currentRotationX.current;
    meshRef.current.rotation.y = currentRotationY.current;

    // Very slow continuous ambient spin
    meshRef.current.rotation.z += delta * 0.1;
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <mesh ref={meshRef} castShadow receiveShadow>
        {/* Abstract elegant shape */}
        <torusKnotGeometry args={[1.5, 0.4, 256, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={1.5}
          chromaticAberration={0.03}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.05}
          transmission={1}
          ior={1.5}
          color="#ffffff"
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Internal Core Light */}
      <pointLight position={[0, 0, 0]} intensity={2} color="#00ffff" distance={5} />
    </Float>
  );
}

export default function RefractiveCore() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, -10]} intensity={0.5} angle={0.3} penumbra={1} />

        {/* Soft studio environment reflection */}
        <Environment preset="city" environmentIntensity={0.2} />

        <GlassCore />
      </Canvas>
    </div>
  );
}
