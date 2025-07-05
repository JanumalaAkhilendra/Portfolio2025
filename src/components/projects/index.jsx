"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mx-auto max-w-7xl"
    >
      {projects.map((project, index) => (
        <div key={index} className="w-full h-full">
          <ProjectLayout {...project} />
        </div>
      ))}
    </motion.div>
  );
};

export default ProjectList;
