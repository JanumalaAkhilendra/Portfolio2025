'use client";'
import Image from "next/image";
import staff from "../../../../public/ssword-removebg-preview.png";
import ProjectList from "@/components/projects";
import StarsBackground from "@/components/StarsBackground";
import { projectsData } from "../../data";

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
       {/* 3D Stars Background (Replaces static image) */}
      <StarsBackground />

      <ProjectList projects={projectsData} />

      {/* Render 3D Model */}
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 -z-10">
        <Image
          src={staff}
          alt="Astronaut Image"
          width={200}
          height={200}
          className="mr-20 animate-float -z-20 my-10 mx-auto"
        />
      </div>
    </>
  );
}
