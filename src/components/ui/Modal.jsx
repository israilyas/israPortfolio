// "use client";
// import React, { useEffect, useState } from "react";
// import Modal from "react-modal";
// import { IoMdClose } from "react-icons/io";

// const VideoModal = ({ isOpen, videoUrl, onClose }) => {
//     const [open, setOpen] = useState(isOpen);

//     // Sync local state with prop changes
//     useEffect(() => {
//         setOpen(isOpen);
//     }, [isOpen]);

//     return (
//         <Modal
//             isOpen={open}
//             onRequestClose={() => {
//                 setOpen(false);
//                 if (onClose) onClose(); // Ensure parent component handles closing
//             }}
//             className="w-full md:w-[80%] md:h-[600px] bg-[#1E1E2D] text-white rounded-lg relative z-50"
//             overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-20"
//         >
//             {/* Close Button */}
//             <button
//                 //  onRequestClose={() => {
//                 //     setOpen(false);
//                 //     if (onClose) onClose(); // Ensure parent component handles closing
//                 // }}
//                 onClick={() => {
//                     setOpen(false);
//                     // if (onClose) onClose();
//                 }}
//                 className="absolute top-4 p-2 rounded-full right-4 text-white text-3xl z-50 hover:bg-[#3e3e55] bg-[#2c2c40]"
//             >
//                 <IoMdClose />
//             </button>

//             {/* Video Player */}
//             {videoUrl ? (
//                 <div className="flex flex-row h-full w-full">
//                     <div className="relative  w-[60%] object-cover h-full overflow-hidden object-center bg-red-400">
//                         <video
//                             src={videoUrl}
//                             className="w-full h-full object-cover"
//                             controls
//                             autoPlay
//                             muted
//                         />
//                     </div>
//                     <div className="flex flex-col gap-5 p-10 w-[40%]">
//                         <h1 className="text-3xl text-white uppercase font-bold">Video Title</h1>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit nihil quo fugiat, reiciendis vel unde quos libero aspernatur consectetur doloribus nam. Beatae non incidunt officiis et. Maxime, in labore iure reprehenderit quis veniam suscipit assumenda blanditiis consequatur, pariatur iusto quam ex inventore vitae dolore alias recusandae unde, id officiis repellat vel exercitationem? Tempore quo recusandae accusamus necessitatibus sint et distinctio id repellendus beatae, ipsum soluta? Ratione dicta, magnam tempore dignissimos suscipit earum repellat sequi dolores, ullam blanditiis natus praesentium quae distinctio voluptatum mollitia. Voluptates temporibus tempora qui neque aut iusto, adipisci autem, atque illum obcaecati ipsa eum laborum provident?</p>
//                         <div className="flex flex-wrap gap-2 mb-6">
//                             {/* {project.tags.map((tag, i) => ( */}
//                                 <span className="bg-[#2c2c40] hover:bg-[#3e3e55] px-2 py-1 rounded-md text-[#A78BFA] text-md capitalize">
//                                     html
//                                 </span>
//                                 <span className="text-md bg-[#2c2c40] hover:bg-[#3e3e55] px-2 py-1 rounded-md text-[#A78BFA] capitalize">
//                                     css
//                                 </span>
//                                 <span className="text-md bg-[#2c2c40] hover:bg-[#3e3e55] px-2 py-1 rounded-md text-[#A78BFA] capitalize">
//                                     React
//                                 </span>
//                                 <span className="text-md bg-[#2c2c40] hover:bg-[#3e3e55] px-2 py-1 rounded-md text-[#A78BFA] capitalize">
//                                    tailwind css
//                                 </span>
//                             {/* ))} */}
//                         </div>
//                     </div>
//                 </div>

//             ) : (
//                 <p className="text-center">No video available</p>
//             )}
//         </Modal>
//     );
// };

// export default VideoModal;


"use client";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const VideoModal = ({ isOpen, videoUrl, onClose, project }) => {
    const [open, setOpen] = useState(isOpen);

    // Sync local state with prop changes
    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        setOpen(false);
        if (onClose) onClose();
    };

    return (
        <Modal
            isOpen={open}
            onRequestClose={handleClose}
            className="w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] max-w-5xl max-h-[90vh] bg-[#1E1E2D] text-white rounded-lg overflow-hidden relative z-50"
            overlayClassName="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-30"
        >
            {/* Close Button */}
            <motion.button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full text-white text-2xl z-50 hover:bg-[#3e3e55] bg-[#2c2c40] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <IoMdClose />
            </motion.button>

            {/* Video Player and Content Container */}
            {videoUrl ? (
                <div className="flex flex-col md:flex-row h-full w-full md:h-[600px] overflow-y-auto">
                    {/* Video Section */}
                    <div className="relative w-full md:w-[60%] h-64 sm:h-80 md:h-full md:object-cover object-contain object-center">
                        <video
                            src={videoUrl}
                            className="w-full h-full object-cover"
                            controls
                            autoPlay
                            muted
                        />
                    </div>
                    
                    {/* Content Section */}
                    <motion.div 
                        className="flex flex-col gap-4 p-6 md:p-8 w-full md:w-[40%] md:max-h-[90vh] overflow-y-auto"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-2xl sm:text-3xl text-white font-bold">
                            {project?.title || "Project Overview"}
                        </h1>
                        
                        <div className="flex flex-wrap gap-2 my-3">
                            {project?.tags?.map((tag, i) => (
                                <motion.span 
                                    key={i}
                                    className="bg-[#2c2c40] hover:bg-[#3e3e55] px-3 py-1 rounded-md text-[#A78BFA] text-sm capitalize transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                        
                        <div className="text-gray-300 text-sm sm:text-base space-y-4 mt-2">
                            <p>{project?.description || "No description available"}</p>
                        </div>
                        
                        {/* Project Links */}
                        {(project?.demoUrl || project?.codeUrl) && (
                            <div className="flex flex-col sm:flex-row gap-3 mt-6">
                                {project?.demoUrl && (
                                    <motion.a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-[#A78BFA] text-white rounded-lg font-medium text-center hover:bg-[#9B7DE3] transition-colors"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        Live Demo
                                    </motion.a>
                                )}
                                {project?.codeUrl && (
                                    <motion.a
                                        href={project.codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-transparent border border-white/80 text-white rounded-lg font-medium text-center hover:bg-white/10 transition-colors"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        View Code
                                    </motion.a>
                                )}
                            </div>
                        )}
                    </motion.div>
                </div>
            ) : (
                <div className="flex items-center justify-center p-10 h-40">
                    <p className="text-center text-gray-400">No video available</p>
                </div>
            )}
        </Modal>
    );
};

export default VideoModal;