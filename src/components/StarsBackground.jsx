"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

export default function StarsBackground() {
  const starsRef = useRef();

  return (
  <div
  className="fixed top-0 left-0 w-full h-full -z-50 bg-cover bg-center"
>
  {/* Optional: semi-transparent overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-purple-900/10 to-blue-900/10" />

  <Canvas>
    <ambientLight intensity={0.25} color="#99ccff" />
    <pointLight position={[10, 10, 10]} color="#0066ff" intensity={1.5} />
    <pointLight position={[-10, -10, -10]} color="#ff00aa" intensity={1.5} />

    <group ref={starsRef}>
      <Stars
        radius={150}
        depth={60}
        count={8000}
        factor={6}
        saturation={0}
        fade
        speed={2}
      >
        <meshStandardMaterial
          color="#ffffff"
          emissive="#4488ff"
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </Stars>
    </group>

    <OrbitControls
      enableZoom={false}
      autoRotate
      autoRotateSpeed={0.25}
      enablePan={false}
      enableRotate={false}
    />
  </Canvas>
</div>

  );
}