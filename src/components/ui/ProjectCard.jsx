import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VideoModal from './Modal';

const ProjectCard = ({ project, index }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);

  const openVideoPreview = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setShowVideoModal(true);
  };

  return (
    <button className='flex-1 w-full ' onClick={() => openVideoPreview(project.videoUrl)}>
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-[#141420] md:h-[500px] rounded-xl overflow-hidden shadow-xl relative flex flex-col"
    >
      
        <div className="h-48 bg-gray-800  relative overflow-hidden cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>

          {/* Project Thumbnail */}
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#1E1E2D] to-[#272734]"></div>
          )}

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-12 h-12 bg-[#A78BFA] bg-opacity-80 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      

      <div className="p-6 flex-1">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.shortDesc}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-[#1E1E2D] px-2 py-1 rounded-md text-[#A78BFA]">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          {
            project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#A78BFA] text-white rounded-lg font-medium text-sm hover:bg-[#9B7DE3] transition-colors flex-1 text-center"
              >
                Live Demo
              </a>
            ) : null
          }

          {
            project.codeUrl ? (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-transparent border border-white text-white rounded-lg font-medium text-sm hover:bg-white/10 transition-colors flex-1 text-center"
              >
                View Code
              </a>
            ) : null
          }
        </div>
      </div>

      {/* Video Modal */}
      {/* <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoUrl={selectedVideoUrl}
      /> */}
      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoUrl={selectedVideoUrl}
        project={project}
      />
    </motion.div>
    </button>
  );
};

export default ProjectCard;
