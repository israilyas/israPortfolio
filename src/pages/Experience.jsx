import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import PageHero from '../components/ui/PageHero';
import CTA from '../components/ui/CTA';

// Components
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
            <img src={experience.logo} alt={`${experience.company} logo`} className="w-full h-full object-contain p-2" />
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

const SkillCategory = ({ category, skills, index }) => {
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

function ExperiencePage() {
  // Experience data array
  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechVision Inc.",
      period: "2021 - Present",
      description: "Leading the frontend development team in building responsive web applications with modern JavaScript frameworks. Implemented CI/CD pipelines and improved page load performance by 40%.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "CI/CD"],
      logo: "/logos/techvision.png"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "WebSolutions Ltd.",
      period: "2019 - 2021",
      description: "Developed and maintained multiple client websites and web applications. Collaborated with designers to implement responsive UI components and interactive features.",
      skills: ["JavaScript", "React", "CSS3", "SCSS", "RESTful APIs"],
      logo: "/logos/websolutions.png"
    },
    {
      id: 3,
      title: "Web Developer Intern",
      company: "DigitalCraft Agency",
      period: "2018 - 2019",
      description: "Assisted in the development of client websites. Learned modern web development practices and collaborated in an agile team environment.",
      skills: ["HTML5", "CSS3", "JavaScript", "WordPress", "Git"],
      logo: "/logos/digitalcraft.png"
    },
  ];

  // Skills data
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Vue.js", "HTML5", "CSS3/SCSS", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "Firebase", "RESTful APIs", "GraphQL"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Jest", "Webpack", "CI/CD", "AWS", "Vercel", "Netlify"]
    }
  ];

  return (
    <div className="bg-[#000319] text-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <PageHero 
        headingWhite="My" 
        headingPur="Experience" 
        desc="A showcase of my professional journey, skills, and expertise in web development and design." 
      />
      
      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Professional <span className="text-[#A78BFA]">Journey</span>
          </motion.h2>
          
          <div className="space-y-6 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-[7.5rem] top-12 bottom-0 w-0.5 bg-[#A78BFA] opacity-30"></div>
            
            {/* Experience Cards */}
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 bg-[#000319]/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technical <span className="text-[#A78BFA]">Skills</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategory 
                key={index}
                category={category.category} 
                skills={category.skills}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Education & <span className="text-[#A78BFA]">Certifications</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#141420] rounded-xl overflow-hidden shadow-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
              <h4 className="text-gray-300 mb-3">University of Technology</h4>
              <p className="text-[#A78BFA] text-sm font-medium mb-4">2015 - 2019</p>
              <p className="text-gray-400 text-sm">Specialized in Web Development and Software Engineering. Graduated with honors.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#141420] rounded-xl overflow-hidden shadow-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="space-y-3">
                <li className="pb-3 border-b border-[#1E1E2D]">
                  <h4 className="font-medium">AWS Certified Developer</h4>
                  <p className="text-gray-400 text-sm">Amazon Web Services • 2022</p>
                </li>
                <li className="pb-3 border-b border-[#1E1E2D]">
                  <h4 className="font-medium">React Certification</h4>
                  <p className="text-gray-400 text-sm">Meta (Facebook) • 2021</p>
                </li>
                <li>
                  <h4 className="font-medium">Google UX Design Professional Certificate</h4>
                  <p className="text-gray-400 text-sm">Google • 2020</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CTA />
    </div>
  );
}

export default ExperiencePage;