import React from 'react'
import { motion } from 'motion/react';

const CTA = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-[#141420] to-[#1E1E2D]">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">Interested in working together?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        I'm always open to discussing new projects, opportunities, and collaborations.
                    </p>
                    <a
                        href="/contact"
                        className="px-6 py-3 bg-[#A78BFA] text-white rounded-lg font-medium hover:bg-[#9B7DE3] transition-colors inline-block"
                    >
                        Get In Touch
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default CTA
