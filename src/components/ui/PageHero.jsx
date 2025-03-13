import React from 'react'
import { motion } from 'motion/react'

const PageHero = ({headingWhite, headingPur,desc}) => {
    return (
        <section className="relative py-20 bg-[#000319]">
            {/* Hero */}
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 capitalize">{headingWhite} <span className="text-[#A78BFA]">{headingPur}</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {desc}
                    </p>
                </motion.div>
            </div>
            {/* Decorative element */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent"></div>
        </section>
    )
}

export default PageHero
