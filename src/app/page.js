'use client';

import Image from "next/image";
import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import SpaceButton from "@/components/SpaceButton";
import SpaceStationModel from "@/components/models/SpaceStationModel";
import Navigation from "@/components/navigation";
import SpaceModel from "@/components/models/SpaceModel";
import Loader from "@/components/Loader/Loader";

export default function Home() {
  const [isLaptop, setIsLaptop] = useState(false);
  const [canvasLoaded, setCanvasLoaded] = useState(false);

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024); // Tailwind's lg breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Custom wrapper to simulate when canvas and model are mounted
  const CanvasWrapper = ({ children }) => {
    useEffect(() => {
      const timeout = setTimeout(() => {
        setCanvasLoaded(true);
      }, 500); // Simulated delay for loading

      return () => clearTimeout(timeout);
    }, []);
    return children;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">

      {/* Background 3D Space */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Suspense fallback={<Loader />}>
          <CanvasWrapper>
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 5, 2]} intensity={1} />
              <OrbitControls enableZoom={true} minDistance={5} maxDistance={15} />
              <SpaceModel />
            </Canvas>
          </CanvasWrapper>
        </Suspense>
      </div>

      <div className="w-full h-screen">
        {/* Navigation (only shown after model loads) */}
        {canvasLoaded && (
          <div className="relative z-[999]">
            {/* Mobile Navigation (default) */}
            <div className="block lg:hidden">
              <Navigation />
            </div>

            {/* Laptop Navigation */}
            <div className="hidden lg:flex justify-center space-x-6 py-4">
              <SpaceButton label="HOME" href="/" />
              <SpaceButton label="ABOUT" imgsrc="../../spacebutton2.jpg" href="/about" />
              <SpaceButton label="PROJECTS" imgsrc="../../spacebutton3.jpg" href="/projects" />
              <SpaceButton label="CONTACT" imgsrc="../../spacebutton1.png" href="/contact" />
              <SpaceButton label="GITHUB" imgsrc="../../spacebuttoncircle.jpg" href="https://github.com/JanumalaAkhilendra" />
              <SpaceButton label="LinkedIn" imgsrc="../../spacebuttoncircle.jpg" href="https://www.linkedin.com/in/akhilendra/" />
              <SpaceButton label="X" imgsrc="../../spacebuttoncircle.jpg" href="https://twitter.com/JanumalaAkhilendra" />
              <SpaceButton label="Resume" imgsrc="../../spacebuttoncircle.jpg" href="../../Akhilendra6.pdf" />
              <SpaceButton label="Leetcode" imgsrc="../../spacebuttoncircle.jpg" href="https://leetcode.com/u/janumala_akhilendra/" />
            </div>
          </div>
        )}

        {/* 3D Model Section */}
        <div className="w-full h-[500px] md:h-[600px] relative z-10">
          <Suspense fallback={<Loader />}>
            <CanvasWrapper>
              <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <OrbitControls
                  enableZoom={true}
                  minDistance={2}
                  maxDistance={8}
                  enablePan={true}
                />
                <SpaceStationModel scale={[0.5, 0.5, 0.5]} />
              </Canvas>
            </CanvasWrapper>
          </Suspense>
        </div>
      </div>
    </main>
  );
}
