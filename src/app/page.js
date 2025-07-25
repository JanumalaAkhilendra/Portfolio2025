'use client';

import Image from "next/image";
import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import OrbitRing from "@/components/OrbitingRing";
import SpaceButton from "@/components/SpaceButton";
import SpaceStationModel from "@/components/models/SpaceStationModel";
import Navigation from "@/components/navigation";
import SpaceModel from "@/components/models/SpaceModel";
import Loader from "@/components/Loader/Loader";
import { ChevronDown } from "lucide-react"; // <-- for dropdown arrow

const orbitIcons = [
  { icon: "/icons/github.svg", label: "GitHub", href: "https://github.com" },
  { icon: "/icons/linkedin.svg", label: "LinkedIn", href: "https://linkedin.com" },
  { icon: "/icons/x.svg", label: "Twitter", href: "https://x.com" },
  // add more...
];

export default function Home() {
  const [isLaptop, setIsLaptop] = useState(false);
  const [canvasLoaded, setCanvasLoaded] = useState(false);
  const [modelScale, setModelScale] = useState([0.5, 0.5, 0.5]);


  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024); // Tailwind's lg breakpoint
      if (window.innerWidth < 768) {
      setModelScale([0.35, 0.35, 0.35]); // mobile
      } else {
        setModelScale([0.5, 0.5, 0.5]); // laptop/desktop
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

      <div className="w-full z-10">
        {/* Navigation (only shown after model loads) */}
        {canvasLoaded && (
           <div className="pointer-events-none absolute inset-0 z-30">
            <div className="pointer-events-auto">
              <Navigation />
            </div>

            <div className="absolute right-0 lg:right-24 lg:w-11/12 mx-auto flex flex-col lg:flex-row items-end lg:items-center flex-wrap justify-center lg:justify-end gap-4 px-2 lg:px-4 py-4 mt-12 lg:mt-2 pointer-events-auto">
              <SpaceButton label="GITHUB" imgsrc="/spacebuttoncircle.jpg" href="https://github.com/JanumalaAkhilendra" />
              <SpaceButton label="LinkedIn" imgsrc="/spacebuttoncircle.jpg" href="https://www.linkedin.com/in/akhilendra/" />
              <SpaceButton label="X" imgsrc="/spacebuttoncircle.jpg" href="https://twitter.com/JanumalaAkhilendra" />
              <SpaceButton label="Resume" imgsrc="/spacebuttoncircle.jpg" href="/Akhilendra6.pdf" />
              <SpaceButton label="Leetcode" imgsrc="/spacebuttoncircle.jpg" href="https://leetcode.com/u/janumala_akhilendra/" />
            </div>
          </div>
        )}

        {/* 3D Model Section */}
        <div className="w-full h-[500px] md:h-[600px] mt-14 relative z-10">
          <Suspense fallback={<Loader />}>
            <CanvasWrapper>
              <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <OrbitControls enableZoom={true} minDistance={2} maxDistance={8} enablePan={true} />
                  <SpaceStationModel scale={modelScale} />
                <OrbitRing radius={2.2} />
              </Canvas>
            </CanvasWrapper>
          </Suspense>
        </div>
      </div>

      {/* Buy Me A Coffee Button */}
      <a
        href="https://www.buymeacoffee.com/janumalaakr"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-50"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          className="h-8 w-auto sm:h-10 md:h-12 lg:h-[50px] xl:h-[50px]"
        />
      </a>

    </main>
  );
}
