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
        <div className="absolute inset-0 bg-black opacity-20"></div>
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

           
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
