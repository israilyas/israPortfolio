import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import PageHero from '../components/ui/PageHero';
import CTA from '../components/ui/CTA';
import ExperienceCard from '../components/ui/ExperienceCard';
import SkillsCard from '../components/ui/SkillsCard';

function ExperiencePage() {
  // Experience data array
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Agile Networking Consultants",
      period: "Nov 2024 - Present",
      description: "Developed and maintained multiple client websites and web applications. Collaborated with backend developer and designers to implement responsive UI components and interactive features.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Wordpress"],
      logo: "/logos/techvision.png"
    },
    // {
    //   id: 2,
    //   title: "Frontend Developer",
    //   company: "WebSolutions Ltd.",
    //   period: "2019 - 2021",
    //   description: "Developed and maintained multiple client websites and web applications. Collaborated with designers to implement responsive UI components and interactive features.",
    //   skills: ["JavaScript", "React", "CSS3", "SCSS", "RESTful APIs"],
    //   logo: "/logos/websolutions.png"
    // },
    // {
    //   id: 3,
    //   title: "Web Developer Intern",
    //   company: "DigitalCraft Agency",
    //   period: "2018 - 2019",
    //   description: "Assisted in the development of client websites. Learned modern web development practices and collaborated in an agile team environment.",
    //   skills: ["HTML5", "CSS3", "JavaScript", "WordPress", "Git"],
    //   logo: "/logos/digitalcraft.png"
    // },
  ];

  // Skills data
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "HTML5", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion", "Swiper.js"]
    },
    // {
    //   category: "Backend",
    //   skills: ["Node.js", "Express", "MongoDB", "Firebase", "RESTful APIs", "GraphQL"]
    // },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Netlify"]
    }
  ];

  return (
    <div className="bg-[#000319] text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <PageHero
        headingWhite="My"
        headingPur="Experience"
        desc="A showcase of my professional journey,studies, skills, and expertise in web development ."
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <SkillsCard
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
  <h4 className="text-gray-300 mb-3">
    Federal Urdu University of Arts, Science and Technology
  </h4>
  <p className="text-[#A78BFA] text-sm font-medium mb-4">2023 - 2027</p>

  <h4 className="text-lg font-semibold text-gray-200 mb-2">Core Subjects Studied:</h4>
  <ul className="text-gray-400 text-sm space-y-2">
    <li className="border-l-4 border-[#A78BFA] pl-3">
      <span className="font-semibold text-white">Programming & Development:</span>  
      <span className="block">Foundations of Programming (FOP), Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), Web Technologies, Software Engineering.</span>
    </li>

    <li className="border-l-4 border-[#A78BFA] pl-3">
      <span className="font-semibold text-white">Database & Systems:</span>  
      <span className="block">Database Management Systems (DBMS), SQL, Operating Systems.</span>
    </li>

    <li className="border-l-4 border-[#A78BFA] pl-3">
      <span className="font-semibold text-white">Mathematical & Logical Thinking:</span>  
      <span className="block">Discrete Structures, Linear Algebra, Probability & Statistics.</span>
    </li>

    <li className="border-l-4 border-[#A78BFA] pl-3">
      <span className="font-semibold text-white">Low-Level & Advanced Computing:</span>  
      <span className="block">Assembly Language, Computer Architecture.</span>
    </li>
  </ul>
</motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#141420] rounded-xl overflow-hidden shadow-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
              <h4 className="text-gray-300 mb-3">Federal Urdu University of Art, Science and technology</h4>
              <p className="text-[#A78BFA] text-sm font-medium mb-4">2023 - 2027</p>
              <h4>Core Subjects Studied:</h4>

              <ul className="text-gray-400 text-sm">
                <li>
                  <span className='font-semibold'>Programming & Development:</span> Foundations of Programming (FOP), Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), Web Technologies, Software Engineering.
                </li>
                <li>
                  Database & Systems: Database Management Systems (DBMS), SQL, Operating Systems.
                </li>

                <li>
                  Mathematical & Logical Thinking: Discrete Structures, Linear Algebra, Probability & Statistics.
                </li>
                <li>
                  Low-Level & Advanced Computing: Assembly Language, Computer Architecture..
                </li>
              </ul>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#141420] rounded-xl overflow-hidden shadow-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="space-y-3">
                {/* <li className="pb-3 border-b border-[#1E1E2D]">
          <h4 className="font-medium">Python Programming Internship</h4>
          <p className="text-gray-400 text-sm">CodSoft • 2024</p>
        </li> */}
                <li className="pb-3 border-b border-[#1E1E2D]">
                  <h4 className="font-medium">React JS & JavaScript ChatGPT Clone Bootcamp</h4>
                  <p className="text-gray-400 text-sm">DevTown • 2024</p>
                </li>
                <li className="pb-3 border-b border-[#1E1E2D]">
                  <h4 className="font-medium">Cybersecurity Webinar</h4>
                  <p className="text-gray-400 text-sm">Tech Fusion Series 1.0 • 2024</p>
                </li>
                <li>
                  <h4 className="font-medium">Google Software Engineer Webinar</h4>
                  <p className="text-gray-400 text-sm">Career Connect Society • 2024</p>
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