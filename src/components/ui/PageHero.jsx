import React from 'react'
import { motion } from 'motion/react'

const PageHero = () => {
    return (
        <section className="relative py-20 bg-[#080810]">
            {/* Hero */}
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">My <span className="text-[#A78BFA]">Projects</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of my recent web development projects, showcasing my skills
                        in frontend technologies and responsive design.
                    </p>
                </motion.div>
            </div>
            {/* Decorative element */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent"></div>
        </section>
    )
}

export default PageHero
