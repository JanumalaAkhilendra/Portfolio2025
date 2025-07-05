'use client';
import Image from "next/image";
import bg from "../../public/background/space3.jpg";
import SpaceStationModel from "@/components/models/SpaceStationModel";
import Navigation from "@/components/navigation";
import astro from "../../public/Screenshot_2024-11-10_104015-removebg-preview.png";
import SpaceModel from "@/components/models/SpaceModel";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">

      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <OrbitControls enableZoom={false} />
          <SpaceModel />
        </Canvas>
      </div>

      <div className="w-full h-screen">
       <div className="relative z-[999]">
          <Navigation />
        </div>

        <div className="w-full h-[500px] md:h-[600px] relative">
          <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <OrbitControls enableZoom={false} />
            <SpaceStationModel scale={[0.5, 0.5, 0.5]} />
          </Canvas>
        </div>

      </div>
    </main>
  );
}
