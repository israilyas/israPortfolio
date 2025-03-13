// import React from 'react'
// import { motion } from 'motion/react';

// const ProjectCard = ({project,index}) => {
//   return (
//     <motion.div
//       key={project.id}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -10 }}
//       className="bg-[#141420] rounded-xl overflow-hidden shadow-xl"
//     >
//       <div className="h-48 bg-gray-800 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#141420] z-10"></div>
//         {/* Using placeholder image for now */}
//         <div className="w-full h-full bg-gradient-to-br from-[#1E1E2D] to-[#272734]"></div>

//         {/* Project icon/logo */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="w-16 h-16 bg-[#A78BFA] rounded-full flex items-center justify-center">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//             </svg>
//           </div>
//         </div>
//       </div>

//       <div className="p-6">
//         <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//         <p className="text-gray-400 text-sm mb-4">{project.description}</p>

//         <div className="flex flex-wrap gap-2 mb-6">
//           {project.tags.map((tag, i) => (
//             <span
//               key={i}
//               className="text-xs bg-[#1E1E2D] px-2 py-1 rounded-md text-[#A78BFA]"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         <div className="flex space-x-3">
//           <a
//             href={project.demoUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-4 py-2 bg-[#A78BFA] text-white rounded-lg font-medium text-sm hover:bg-[#9B7DE3] transition-colors flex-1 text-center"
//           >
//             Live Demo
//           </a>
//           <a
//             href={project.codeUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-4 py-2 bg-transparent border border-white text-white rounded-lg font-medium text-sm hover:bg-white/10 transition-colors flex-1 text-center"
//           >
//             View Code
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default ProjectCard


import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';

const ProjectCard = ({ project, index }) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const openVideoPreview = () => {
    setShowVideo(true);
    // Play the video when opened
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const closeVideoPreview = () => {
    setShowVideo(false);
    // Pause the video when closed
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-[#141420] rounded-xl overflow-hidden shadow-xl relative"
    >
      <div className="h-48 bg-gray-800 relative overflow-hidden cursor-pointer" onClick={openVideoPreview}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#141420] z-10"></div>
        
        {/* Project thumbnail image */}
        {project.thumbnail && (
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Fallback gradient if no thumbnail */}
        {!project.thumbnail && (
          <div className="w-full h-full bg-gradient-to-br from-[#1E1E2D] to-[#272734]"></div>
        )}

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-12 h-12 bg-[#A78BFA] bg-opacity-80 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-[#1E1E2D] px-2 py-1 rounded-md text-[#A78BFA]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#A78BFA] text-white rounded-lg font-medium text-sm hover:bg-[#9B7DE3] transition-colors flex-1 text-center"
          >
            Live Demo
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-transparent border border-white text-white rounded-lg font-medium text-sm hover:bg-white/10 transition-colors flex-1 text-center"
          >
            View Code
          </a>
          <button
            onClick={openVideoPreview}
            className="px-4 py-2 bg-transparent border border-[#A78BFA] text-[#A78BFA] rounded-lg font-medium text-sm hover:bg-[#A78BFA]/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Video modal */}
      {showVideo && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="relative bg-[#1E1E2D] rounded-xl max-w-4xl w-full mx-auto overflow-hidden">
            <button
              onClick={closeVideoPreview}
              className="absolute right-4 top-4 bg-[#A78BFA] rounded-full p-1 z-10"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
            </div>
            
            <div className="relative aspect-video w-full">
              <video
                ref={videoRef}
                src={project.videoUrl}
                className="w-full h-full object-contain"
                controls
                autoPlay
              />
            </div>
            
            <div className="p-4">
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;