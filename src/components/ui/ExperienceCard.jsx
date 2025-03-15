import React from 'react'
import { motion } from 'motion/react';

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#141420] rounded-xl overflow-hidden shadow-xl p-6 relative"
        >
            <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Company Logo */}
                <div className="flex-shrink-0 w-16 h-16 bg-[#1E1E2D] rounded-lg flex items-center justify-center overflow-hidden">
                    {experience.logo ? (
                        <img src={experience.logo} alt={`${experience.company} logo`} className="w-full h-full object-contain" />
                    ) : (
                        <div className="text-[#A78BFA] text-xl font-bold">
                            {experience.company.charAt(0)}
                        </div>
                    )}
                </div>

                {/* Experience Details */}
                <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                        <span className="text-[#A78BFA] text-sm font-medium">{experience.period}</span>
                    </div>

                    <h4 className="text-gray-300 mb-3">{experience.company}</h4>

                    <p className="text-gray-400 text-sm mb-4">{experience.description}</p>

                    <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, i) => (
                            <span key={i} className="text-xs bg-[#1E1E2D] px-2 py-1 rounded-md text-[#A78BFA]">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ExperienceCard
