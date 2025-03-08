// import React from 'react';
// import { Link } from 'react-router-dom';
// import { TypeAnimation } from 'react-type-animation'; // You'll need to install this package
// import Header from './Header';
// import SocalLinks from './ui/SocalLinks';
// import { motion } from 'motion/react';


// function HomeHero() {
//   return (
//     <section className="relative w-full min-h-screen bg-[#000319]">
//       {/* Video background with overlay */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <video
//           src="/portfolioBg.mp4"
//           loop
//           muted
//           autoPlay
//           className="absolute w-full h-full object-cover"
//         ></video>
//         {/* Black overlay with 0.5 opacity */}
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//       </div>

//       <div className="relative z-10 min-h-screen flex flex-col">
//         {/* Header placed inside the hero section */}
//         <Header />

//         <div className='flex flex-col justify-center items-center'>


//           <div className="flex-1 flex flex-col  items-center justify-center px-6">

//             {/* ============ Hero Content  =========== */}
//             <div className="text-center max-w-3xl min-h-screen flex flex-col justify-center items-center mx-auto">
//               <motion.p 
//                className="text-sm tracking-wide text-gray-400 uppercase mb-4">Frontend Development Specialist</motion.p>
//               <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
//                 Hi, I'm <span className="text-[#A78BFA]">Isra</span>
//               </h1>

//               <div className="text-2xl sm:text-3xl font-medium mb-8 h-16">
//                 <TypeAnimation
//                   sequence={[
//                     'Frontend Developer', 2000,
//                     'UI/UX Enthusiast', 2000,
//                     'Remote Team Player', 2000,
//                     'Problem Solver', 2000,
//                   ]}
//                   wrapper="span"
//                   speed={50}
//                   repeat={Infinity}
//                 />
//               </div>

//               <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//                 I create responsive web applications with modern tools and frameworks.
//                 Currently working remotely and passionate about building exceptional digital experiences.
//               </p>

//               <div className="flex flex-wrap justify-center gap-4">
//                 <Link
//                   to="/projects"
//                   className="px-6 py-3 bg-[#A78BFA] text-white rounded-lg font-medium hover:bg-[#9B7DE3] transition-colors"
//                 >
//                   View My Work
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
//                 >
//                   Get In Touch
//                 </Link>
//               </div>

//               {/* Social Links */}
//               <SocalLinks />
//             </div>

//             {/* ============ Hero Content  =========== */}

//             {/* Section Previews */}
//             <div className="mt-16 w-full max-w-6xl mx-auto mb-12">
//               <h2 className="text-xl font-semibold text-center mb-10">Explore My Portfolio</h2>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
//                 {/* About Preview */}
//                 <div className="bg-[#141420] rounded-xl p-6 hover:shadow-lg transition-all hover:transform hover:-translate-y-1">
//                   <div className="mb-4 text-[#A78BFA]">
//                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                     </svg>
//                   </div>
//                   <h3 className="text-lg font-semibold mb-2">About Me</h3>
//                   <p className="text-gray-400 text-sm mb-4">Learn more about my background, experience, and what motivates me as a developer.</p>
//                   <Link to="/about" className="text-[#A78BFA] text-sm font-medium hover:underline flex items-center">
//                     Read More
//                     <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </Link>
//                 </div>

//                 {/* Skills Preview */}
//                 <div className="bg-[#141420] rounded-xl p-6 hover:shadow-lg transition-all hover:transform hover:-translate-y-1">
//                   <div className="mb-4 text-[#A78BFA]">
//                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
//                     </svg>
//                   </div>
//                   <h3 className="text-lg font-semibold mb-2">My Skills</h3>
//                   <p className="text-gray-400 text-sm mb-4">Explore my technical skills, tools, and areas of expertise in frontend development.</p>
//                   <Link to="/skills" className="text-[#A78BFA] text-sm font-medium hover:underline flex items-center">
//                     View Skills
//                     <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </Link>
//                 </div>

//                 {/* Projects Preview */}
//                 <div className="bg-[#141420] rounded-xl p-6 hover:shadow-lg transition-all hover:transform hover:-translate-y-1">
//                   <div className="mb-4 text-[#A78BFA]">
//                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                     </svg>
//                   </div>
//                   <h3 className="text-lg font-semibold mb-2">My Projects</h3>
//                   <p className="text-gray-400 text-sm mb-4">Check out my portfolio of web projects, applications, and development work.</p>
//                   <Link to="/projects" className="text-[#A78BFA] text-sm font-medium hover:underline flex items-center">
//                     Browse Projects
//                     <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default HomeHero;

import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Header from './Header';
import SocalLinks from './ui/SocalLinks';
import { motion } from 'motion/react';

function HomeHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#000319]">
      {/* Video background with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="/portfolioBg.mp4"
          loop
          muted
          autoPlay
          className="absolute w-full h-full object-cover"
        ></video>
        {/* Black overlay with 0.5 opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header placed inside the hero section */}
        <Header />

        <div className="flex flex-col justify-center items-center">

          <div className="flex-1 flex flex-col items-center justify-center px-6">
            {/* ============ Hero Content (always visible) =========== */}
            <div className='flex flex-col min-h-screen items-center justify-center '>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm tracking-wide text-gray-400 uppercase mb-4"
            >
              Frontend Development Specialist
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-bold leading-tight mb-6"
            >
              Hi, I'm <span className="text-[#A78BFA]">Isra</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl sm:text-3xl font-medium mb-8 h-16"
            >
              <TypeAnimation
                sequence={[
                  'Frontend Developer', 2000,
                  'Next Js/ Rect Developer', 2000,
                  'Remote Team Player', 2000,
                  'Problem Solver', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              I create responsive web applications with modern tools and frameworks.
              Currently working remotely and passionate about building exceptional digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/projects"
                className="px-6 py-3 bg-[#A78BFA] text-white rounded-lg font-medium hover:bg-[#9B7DE3] transition-colors"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <SocalLinks />
            </motion.div>
            </div>
            {/* ============ End Hero Content =========== */}

            {/* Section Previews (animate on scroll) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-16 w-full max-w-6xl mx-auto mb-12"
            >
              <motion.h2
                className="text-xl font-semibold text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Explore My Portfolio
              </motion.h2>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* About Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                  className="bg-[#141420] rounded-xl p-6 transition-all"
                >
                  <div className="mb-4 text-[#A78BFA]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">About Me</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Learn more about my background, experience, and what motivates me as a developer.
                  </p>
                  <Link to="/about" className="text-[#A78BFA] text-sm font-medium hover:underline flex items-center">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>

                {/* Skills Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                  className="bg-[#141420] rounded-xl p-6 transition-all"
                >
                  <div className="mb-4 text-[#A78BFA]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">My Skills</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Explore my technical skills, tools, and areas of expertise in frontend development.
                  </p>
                  <Link to="/skills" className="text-[#A78BFA] text-sm font-medium hover:underline flex items-center">
                    View Skills
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>

                {/* Projects Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                  className="bg-[#141420] rounded-xl p-6 transition-all"
                >
                  <div className="mb-4 text-[#A78BFA]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">My Projects</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Check out my portfolio of web projects, applications, and development work.
                  </p>
                  <Link to="/projects" className="text-[#A78BFA] text-sm font-medium hover:underline flex items-center">
                    Browse Projects
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
