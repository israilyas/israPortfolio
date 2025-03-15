// // "use client";
// // import React, { useEffect, useState } from "react";
// // import Modal from "react-modal";
// // import { IoMdClose } from "react-icons/io";

// // const VideoModal = ({ isOpen, videoUrl, onClose }) => {
// //     const [open, setOpen] = useState(isOpen);

// //     // Sync local state with prop changes
// //     useEffect(() => {
// //         setOpen(isOpen);
// //     }, [isOpen]);

// //     return (
// //         <Modal
// //             isOpen={open}
// //             onRequestClose={() => {
// //                 setOpen(false);
// //                 if (onClose) onClose(); // Ensure parent component handles closing
// //             }}
// //             className="w-full md:w-[80%] md:h-[600px] bg-[#1E1E2D] text-white rounded-lg relative z-50"
// //             overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-20"
// //         >
// //             {/* Close Button */}
// //             <button
// //                 //  onRequestClose={() => {
// //                 //     setOpen(false);
// //                 //     if (onClose) onClose(); // Ensure parent component handles closing
// //                 // }}
// //                 onClick={() => {
// //                     setOpen(false);
// //                     // if (onClose) onClose();
// //                 }}
// //                 className="absolute top-4 p-2 rounded-full right-4 text-white text-3xl z-50 hover:bg-[#3e3e55] bg-[#2c2c40]"
// //             >
// //                 <IoMdClose />
// //             </button>

// //             {/* Video Player */}
// //             {videoUrl ? (
// //                 <div className="flex flex-row h-full w-full">
// //                     <div className="relative  w-[60%] object-cover h-full overflow-hidden object-center bg-red-400">
// //                         <video
// //                             src={videoUrl}
// //                             className="w-full h-full object-cover"
// //                             controls
// //                             autoPlay
// //                             muted
// //                         />
// //                     </div>
// //                     <div className="flex flex-col gap-5 p-10 w-[40%]">
// //                         <h1 className="text-3xl text-white uppercase font-bold">Video Title</h1>
// //                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit nihil quo fugiat, reiciendis vel unde quos libero aspernatur consectetur doloribus nam. Beatae non incidunt officiis et. Maxime, in labore iure reprehenderit quis veniam suscipit assumenda blanditiis consequatur, pariatur iusto quam ex inventore vitae dolore alias recusandae unde, id officiis repellat vel exercitationem? Tempore quo recusandae accusamus necessitatibus sint et distinctio id repellendus beatae, ipsum soluta? Ratione dicta, magnam tempore dignissimos suscipit earum repellat sequi dolores, ullam blanditiis natus praesentium quae distinctio voluptatum mollitia. Voluptates temporibus tempora qui neque aut iusto, adipisci autem, atque illum obcaecati ipsa eum laborum provident?</p>
// //                         <div className="flex flex-wrap gap-2 mb-6">
// //                             {/* {project.tags.map((tag, i) => ( */}
// //                                 <span className="bg-[#2c2c40] hover:bg-[#3e3e55] px-2 py-1 rounded-md text-[#A78BFA] text-md capitalize">
// //                                     html
// //                                 </span>
// //                                 <span className="text-md bg-[#2c2c40] hover:bg-[#3e3e55] px-2 py-1 rounded-md text-[#A78BFA] capitalize">
// //                                     css
// //                                 </span>
// //                                 <span className="text-md bg-[#2c2c40] hover:bg-[#3e3e55] px-2 py-1 rounded-md text-[#A78BFA] capitalize">
// //                                     React
// //                                 </span>
// //                                 <span className="text-md bg-[#2c2c40] hover:bg-[#3e3e55] px-2 py-1 rounded-md text-[#A78BFA] capitalize">
// //                                    tailwind css
// //                                 </span>
// //                             {/* ))} */}
// //                         </div>
// //                     </div>
// //                 </div>

// //             ) : (
// //                 <p className="text-center">No video available</p>
// //             )}
// //         </Modal>
// //     );
// // };

// // export default VideoModal;


// "use client";
// import React, { useEffect, useState } from "react";
// import Modal from "react-modal";
// import { IoMdClose } from "react-icons/io";
// import { motion } from "framer-motion";

// const VideoModal = ({ isOpen, videoUrl, onClose, project }) => {
//     const [open, setOpen] = useState(isOpen);

//     // Sync local state with prop changes
//     useEffect(() => {
//         setOpen(isOpen);
//     }, [isOpen]);

//     const handleClose = () => {
//         setOpen(false);
//         if (onClose) onClose();
//     };

//       // ✅ Define getEmbedUrl inside the component
//       const getEmbedUrl = (url) => {
//         if (url.includes("streamable.com")) {
//             const videoId = url.split("/").pop(); // Extract video ID
//             return `https://streamable.com/e/${videoId}`; // Embed URL
//         }
//         return url; // If not Streamable, return original URL
//     };

//     return (
//         <Modal
//             isOpen={open}
//             onRequestClose={handleClose}
//             className="w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] max-w-5xl max-h-[90vh] bg-[#1E1E2D] text-white rounded-lg overflow-hidden relative z-50"
//             overlayClassName="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-30"
//         >
//             {/* Close Button */}
//             <motion.button
//                 onClick={handleClose}
//                 className="absolute top-4 right-4 p-2 rounded-full text-white text-2xl z-50 hover:bg-[#3e3e55] bg-[#2c2c40] transition-all duration-300"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//             >
//                 <IoMdClose />
//             </motion.button>

//             {/* Video Player and Content Container */}
//             {videoUrl ? (
//                 <div className="flex flex-col md:flex-row h-full w-full md:h-[600px] overflow-y-auto">
//                     {/* Video Section */}
//                     {/* <div className="relative w-full md:w-[60%] h-64 sm:h-80 md:h-full md:object-cover object-contain object-center">
//                         <video
//                             src={videoUrl}
//                             className="w-full h-full object-cover"
//                             controls
//                             autoPlay
//                             muted
//                         />
//                     </div> */}
//                       {/* Video Section (Supports Streamable) */}
//                       {/* <div className="relative w-full md:w-[60%] object-cover object-center  sm:h-80 md:h-full">
//                         {videoUrl.includes("streamable.com") ? (
//                             <iframe
//                                 src={getEmbedUrl(videoUrl)}
//                                 className="w-full h-full"
//                                 frameBorder="0"
//                                 allow="autoplay; fullscreen"
//                                 allowFullScreen
//                             ></iframe>
//                         ) : (
//                             <video
//                                 src={videoUrl}
//                                 className="w-full h-full object-cover"
//                                 controls
//                                 autoPlay
//                                 muted
//                             />
//                         )}
//                     </div> */}
//                     {/* Video Section (Supports Streamable) */}
// <div className="relative w-full md:w-[60%] h-64 sm:h-80 md:h-full">
//   {videoUrl.includes("streamable.com") ? (
//     <div className="w-full h-full">
//       <iframe
//         src={getEmbedUrl(videoUrl)}
//         className="w-full h-full absolute inset-0"
//         frameBorder="0"
//         allow="autoplay; fullscreen"
//         allowFullScreen
//         style={{ objectFit: "cover" }}
//       ></iframe>
//     </div>
//   ) : (
//     <video
//       src={videoUrl}
//       className="w-full h-full object-cover"
//       controls
//       autoPlay
//       muted
//     />
//   )}
// </div>

//                     {/* Content Section */}
//                     <motion.div 
//                         className="flex flex-col gap-4 p-6 md:p-8 w-full md:w-[40%] md:max-h-[90vh] overflow-y-auto"
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.2 }}
//                     >
//                         <h1 className="text-2xl sm:text-3xl text-white font-bold">
//                             {project?.title || "Project Overview"}
//                         </h1>

//                         <div className="flex flex-wrap gap-2 my-3">
//                             {project?.tags?.map((tag, i) => (
//                                 <motion.span 
//                                     key={i}
//                                     className="bg-[#2c2c40] hover:bg-[#3e3e55] px-3 py-1 rounded-md text-[#A78BFA] text-sm capitalize transition-colors"
//                                     whileHover={{ scale: 1.05 }}
//                                 >
//                                     {tag}
//                                 </motion.span>
//                             ))}
//                         </div>

//                         <div className="text-gray-300 text-sm sm:text-base space-y-4 mt-2">
//                             <p>{project?.shortDesc}</p>
//                         </div>
//                         <div>
//                             {
//                                 project.techStack?.map((item,index)=>{
//                                     <p key={index}>{item}</p>
//                                 })
//                             }
//                         </div>

//                         {/* Project Links */}
//                         {(project?.demoUrl || project?.codeUrl) && (
//                             <div className="flex flex-col sm:flex-row gap-3 mt-6">
//                                 {project?.demoUrl && (
//                                     <motion.a
//                                         href={project.demoUrl}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="px-4 py-2 bg-[#A78BFA] text-white rounded-lg font-medium text-center hover:bg-[#9B7DE3] transition-colors"
//                                         whileHover={{ scale: 1.03 }}
//                                         whileTap={{ scale: 0.97 }}
//                                     >
//                                         Live Demo
//                                     </motion.a>
//                                 )}
//                                 {project?.codeUrl && (
//                                     <motion.a
//                                         href={project.codeUrl}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="px-4 py-2 bg-transparent border border-white/80 text-white rounded-lg font-medium text-center hover:bg-white/10 transition-colors"
//                                         whileHover={{ scale: 1.03 }}
//                                         whileTap={{ scale: 0.97 }}
//                                     >
//                                         View Code
//                                     </motion.a>
//                                 )}
//                             </div>
//                         )}
//                     </motion.div>
//                 </div>
//             ) : (
//                 <div className="flex items-center justify-center p-10 h-40">
//                     <p className="text-center text-gray-400">No video available</p>
//                 </div>
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
import { FaGithub, FaExternalLinkAlt, FaPlayCircle } from "react-icons/fa";

const VideoModal = ({ isOpen, videoUrl, onClose, project }) => {
    const [open, setOpen] = useState(isOpen);
    const [isLoading, setIsLoading] = useState(true);

    // Sync local state with prop changes
    useEffect(() => {
        setOpen(isOpen);
        if (isOpen) {
            setIsLoading(true);
            // Reset loading state when modal opens
            setTimeout(() => setIsLoading(false), 1500);
        }
    }, [isOpen]);

    const handleClose = () => {
        setOpen(false);
        if (onClose) onClose();
    };

    // Define getEmbedUrl inside the component
    const getEmbedUrl = (url) => {
        if (url?.includes("streamable.com")) {
            const videoId = url.split("/").pop(); // Extract video ID
            return `https://streamable.com/e/${videoId}`; // Embed URL
        }
        return url; // If not Streamable, return original URL
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <Modal
            isOpen={open}
            onRequestClose={handleClose}
            className="w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] max-w-5xl max-h-[90vh] bg-gradient-to-br from-[#1E1E2D] to-[#252538] text-white rounded-xl overflow-hidden relative z-50 border border-[#A78BFA]/20 shadow-2xl"
            overlayClassName="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-30"
            closeTimeoutMS={300}
        >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                    background: 'linear-gradient(90deg, #A78BFA 0%, #2c2c40 25%, #2c2c40 75%, #A78BFA 100%)',
                    opacity: 0.1,
                    zIndex: -1
                }}
            />

            {/* Modal content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full relative"
            >
                {/* Close Button */}
                <motion.button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 rounded-full text-white text-2xl z-50 hover:bg-[#3e3e55] bg-[#2c2c40]/80 backdrop-blur-sm transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.1, backgroundColor: "#A78BFA" }}
                    whileTap={{ scale: 0.95 }}
                >
                    <IoMdClose />
                </motion.button>

                {/* Video Player and Content Container */}
                {videoUrl ? (
                    <div className="flex flex-col justify-center items-center md:flex-row h-full w-full md:h-[600px] overflow-hidden">
                        {/* Video Section with loading state */}
                        <div className="relative flex flex-col justify-center items-center w-full md:w-[60%] h-64 sm:h-80 md:h-full flex-shrink-0 bg-black/30 overflow-hidden">
                            {/* Gradient overlay for video border */}
                            <div className="absolute inset-0 p-[1px] rounded-l-xl overflow-hidden z-10 pointer-events-none">
                                <div className="absolute inset-0 rounded-l-xl" style={{
                                    background: 'linear-gradient(135deg, #A78BFA 0%, transparent 50%, transparent 100%)',
                                    opacity: 0.4
                                }} />
                            </div>

                            {/* Loading state */}
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/30 backdrop-blur-sm">
                                    <div className="w-16 h-16 border-4 border-[#A78BFA]/30 border-t-[#A78BFA] rounded-full animate-spin"></div>
                                </div>
                            )}

                            {/* Video content */}
                            {videoUrl.includes("streamable.com") ? (
                                <div className="relative w-full h-full">
                                    <iframe
                                        src={getEmbedUrl(videoUrl)}
                                        className="absolute top-0 left-0 w-full h-full"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen"
                                        allowFullScreen
                                        onLoad={() => setIsLoading(false)}
                                    ></iframe>
                                </div>
                            ) : (
                                <video
                                    src={videoUrl}
                                    className="w-full h-full object-cover"
                                    controls
                                    autoPlay
                                    muted
                                    onLoadedData={() => setIsLoading(false)}
                                />
                            )}

                            {/* Play button overlay (visible until video loads) */}
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <FaPlayCircle className="text-white/70 text-6xl" />
                                </div>
                            )}
                        </div>

                        {/* Content Section with enhanced scrollbar */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col gap-4 p-6 md:p-8 w-full md:w-[40%] md:h-[600px] overflow-y-auto
                            scrollbar-thin scrollbar-thumb-[#A78BFA]/40 scrollbar-track-[#1E1E2D] hover:scrollbar-thumb-[#A78BFA]"
                        >
                            {/* Title with glow effect */}
                            <motion.h1
                                variants={itemVariants}
                                className="text-2xl sm:text-3xl text-white font-bold"
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A78BFA] to-white">
                                    {project?.title || "Project Overview"}
                                </span>
                            </motion.h1>

                            {/* Tags */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-wrap gap-2 my-3"
                            >
                                {project?.tags?.map((tag, i) => (
                                    <motion.span
                                        key={i}
                                        className="bg-gradient-to-r from-[#2c2c40] to-[#332f45] hover:from-[#3e3e55] hover:to-[#4a4161] px-3 py-1 rounded-md text-[#A78BFA] text-sm capitalize transition-colors shadow-sm"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </motion.div>

                            {/* Description */}
                            <motion.div
                                variants={itemVariants}
                                className="text-gray-300 text-sm sm:text-base space-y-4 mt-2 leading-relaxed"
                            >
                                <p>{project?.shortDesc}</p>
                            </motion.div>

                            {/* Tech Stack */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-4"
                            >
                                <h2 className="text-lg font-semibold mb-3 text-[#A78BFA] flex items-center gap-2">
                                    <span className="h-1 w-4 bg-[#A78BFA] rounded-full inline-block"></span>
                                    Tech Stack
                                </h2>
                                <ul className="space-y-2 list-disc list-inside pl-1">
                                    {project?.techStack?.map((item, index) => (
                                        <li
                                            key={index}
                                            className="text-gray-300 text-sm"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Project Links */}
                            {(project?.demoUrl || project?.codeUrl) && (
                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-col sm:flex-row gap-3 mt-6"
                                >
                                    {project?.demoUrl && (
                                        <motion.a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2.5 bg-gradient-to-r from-[#A78BFA] to-[#9B7DE3] text-white rounded-lg font-medium text-center hover:from-[#B89BFF] hover:to-[#A78BFA] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#A78BFA]/20"
                                            whileHover={{ scale: 1.03, y: -2 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            <FaExternalLinkAlt className="text-sm" />
                                            Live Demo
                                        </motion.a>
                                    )}
                                    {project?.codeUrl && (
                                        <motion.a
                                            href={project.codeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2.5 bg-transparent border border-white/30 text-white rounded-lg font-medium text-center hover:bg-white/5 hover:border-white/50 transition-all flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.03, y: -2 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            <FaGithub />
                                            View Code
                                        </motion.a>
                                    )}
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center p-10 h-60">
                        <p className="text-center text-gray-400">No video available</p>
                    </div>
                )}
            </motion.div>
        </Modal>
    );
};

export default VideoModal;