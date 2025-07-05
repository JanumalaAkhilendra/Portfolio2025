import { motion } from "framer-motion";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import PropTypes from 'prop-types';

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", damping: 10 } }
};

const ProjectLink = motion(Link);

const ProjectLayout = ({ 
  name, 
  description, 
  date, 
  demoLink, 
  category = 'react', 
  tags = [], 
  imageUrl = null 
}) => {
  const getCategoryColor = () => {
    switch (category) {
      case "react": 
        return {
          bg: "bg-blue-900/80 hover:bg-blue-800/80",
          border: "border-blue-500/30 hover:border-blue-400",
          text: "text-blue-200",
          accent: "bg-blue-800/60 text-blue-100"
        };
      case "django": 
        return {
          bg: "bg-emerald-900/80 hover:bg-emerald-800/80",
          border: "border-emerald-500/30 hover:border-emerald-400",
          text: "text-emerald-200",
          accent: "bg-emerald-800/60 text-emerald-100"
        };
      case "react-native": 
        return {
          bg: "bg-sky-900/80 hover:bg-sky-800/80",
          border: "border-sky-500/30 hover:border-sky-400",
          text: "text-sky-200",
          accent: "bg-sky-800/60 text-sky-100"
        };
      case "ai": 
        return {
          bg: "bg-purple-900/80 hover:bg-purple-800/80",
          border: "border-purple-500/30 hover:border-purple-400",
          text: "text-purple-200",
          accent: "bg-purple-800/60 text-purple-100"
        };
      default: 
        return {
          bg: "bg-gray-900/80 hover:bg-gray-800/80",
          border: "border-gray-500/30 hover:border-gray-400",
          text: "text-gray-200",
          accent: "bg-gray-800/60 text-gray-100"
        };
    }
  };

  const colors = getCategoryColor();

  return (
    <div className="relative h-full w-full flex flex-row flex-wrap group">

      {/* Project Card */}
      <ProjectLink
        variants={item}
        href={demoLink}
        target="_blank"
        className={`relative flex flex-col justify-center w-[350px] h-full p-6 rounded-2xl overflow-hidden ${colors.bg} ${colors.border} shadow-xl hover:shadow-2xl transition-all duration-300`}
        whileHover={{ 
          y: -5,
          scale: 1.03,
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Project Image (if provided) */}
        {imageUrl && (
          <div className="w-full h-40 mb-4 rounded-lg overflow-hidden relative">
            <motion.img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col flex-1 space-y-4 z-10">
          <div className="flex justify-between items-start">
            <h2 className={`text-xl font-bold tracking-wide group-hover:text-cyan-300 transition-colors ${colors.text}`}>
              {name}
            </h2>
            <span className={`text-xs px-3 py-1 rounded-full ${colors.accent}`}>
              {category}
            </span>
          </div>
          
          <p className="text-sm text-white/80 line-clamp-3">
            {description}
          </p>
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs px-2 py-1 rounded-full bg-black/40 text-white/80"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
          
          <div className="mt-auto pt-2">
            <p className="text-xs text-white/60">
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
        {/* Animated star with tail */}

      </ProjectLink>
    </div>
  );
};

ProjectLayout.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  category: PropTypes.oneOf(['react', 'django', 'react-native', 'ai']),
  tags: PropTypes.arrayOf(PropTypes.string),
  imageUrl: PropTypes.string
};

export default ProjectLayout;