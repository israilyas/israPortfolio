import React from 'react'
import { motion } from 'motion/react'; 

const SkillsCard = ({ category, skills, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#141420] rounded-xl overflow-hidden shadow-xl p-6"
        >
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="bg-[#1E1E2D] px-4 py-3 rounded-lg"
                    >
                        <span className="text-[#A78BFA] font-medium">{skill}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillsCard