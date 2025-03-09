import React from 'react'
import {motion} from 'motion/react'
import { Link } from 'react-router'

const Explore = () => {
    return (
        <div>

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
    )
}

export default Explore
