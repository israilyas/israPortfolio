

// import React from 'react';
// import { motion } from 'motion/react';
// import Header from '../components/Header';
// import PageHero from '../components/ui/PageHero';

// function SkillsPage() {
//   // Technical skills data
//   const technicalSkills = [
//     { name: "React", level: 70, icon: "react" },
//     { name: "Next.js", level: 70, icon: "nextjs" },
//     { name: "JavaScript", level: 70, icon: "javascript" },
//     { name: "TypeScript", level: 50, icon: "typescript" },
//     { name: "Tailwind CSS", level: 85, icon: "tailwind" },
//     { name: "HTML5", level: 95, icon: "html5" },
//     { name: "CSS3", level: 90, icon: "css3" },
//     // { name: "Redux", level: 75, icon: "redux" },
//     // { name: "SASS/SCSS", level: 80, icon: "sass" },
//     { name: "Git", level: 85, icon: "git" },
//     { name: "Responsive Design", level: 90, icon: "responsive" },
//     { name: "API Integration", level: 85, icon: "api" }
//   ];

//   // Soft skills data
//   const softSkills = [
//     {
//       title: "Problem-Solving",
//       description: "Analytical approach to troubleshooting and resolving technical challenges.",
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
//         </svg>
//       )
//     },
//     {
//       title: "Communication",
//       description: "Clear and effective communication with clients and team members.",
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//         </svg>
//       )
//     },
//     {
//       title: "Time Management",
//       description: "Efficient prioritization and management of tasks to meet deadlines.",
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       )
//     },
//     {
//       title: "Teamwork",
//       description: "Collaborative approach to working with cross-functional teams.",
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//       )
//     },
//     {
//       title: "Adaptability",
//       description: "Quick to learn new technologies and adapt to changing requirements.",
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//         </svg>
//       )
//     },
//     {
//       title: "Attention to Detail",
//       description: "Meticulous focus on code quality, UI/UX, and testing.",
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//         </svg>
//       )
//     }
//   ];

//   // Tool categories
//   const toolCategories = [
//     {
//       title: "Development",
//       tools: ["VS Code", "GitHub", "Terminal"]
//     },
//     {
//       title: "Design",
//       tools: ["Figma"]
//     },
//     // {
//     //   title: "Project Management",
//     //   tools: ["Jira", "Trello", "Asana", "Notion"]
//     // },
//     {
//       title: "Communication",
//       tools: ["Slack", "Discord", "Zoom", "Microsoft Teams"]
//     }
//   ];

//   return (
//     <div className="bg-[#000319] text-white min-h-screen">
//       <Header />

//       {/* Hero Section */}
//       <PageHero headingWhite="my" headingPur="skills" desc=" A comprehensive overview of my technical expertise, tools, and soft skills
//               that I bring to every project." />

//       {/* Technical Skills Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="mb-12"
//           >
//             <h2 className="text-2xl sm:text-3xl font-bold mb-4">Technical Skills</h2>
//             <p className="text-gray-400">
//               Core technologies and programming languages I work with regularly.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {technicalSkills.map((skill, index) => (
//               <motion.div
//                 key={skill.name}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 viewport={{ once: true }}
//                 className="bg-[#141420] p-4 rounded-lg"
//               >
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="flex items-center">
//                     <div className="w-8 h-8 bg-[#A78BFA] rounded-md flex items-center justify-center mr-3">
//                       <span className="text-white text-xs font-bold">{skill.name.charAt(0)}</span>
//                     </div>
//                     <h3 className="font-medium">{skill.name}</h3>
//                   </div>
//                   <span className="text-sm text-[#A78BFA]">{skill.level}%</span>
//                 </div>

//                 <div className="w-full bg-[#1E1E2D] rounded-full h-2.5">
//                   <motion.div
//                     className="bg-[#A78BFA] h-2.5 rounded-full"
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${skill.level}%` }}
//                     transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
//                     viewport={{ once: true }}
//                   ></motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Soft Skills Section */}
//       <section className="py-16 bg-[#080810]">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="mb-12"
//           >
//             <h2 className="text-2xl sm:text-3xl font-bold mb-4">Soft Skills</h2>
//             <p className="text-gray-400">
//               Beyond technical abilities, these interpersonal skills help me collaborate effectively.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {softSkills.map((skill, index) => (
//               <motion.div
//                 key={skill.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
//                 className="bg-[#141420] p-6 rounded-xl"
//               >
//                 <div className="text-[#A78BFA] mb-4">
//                   {skill.icon}
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
//                 <p className="text-gray-400 text-sm">
//                   {skill.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Tools & Software Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="mb-12"
//           >
//             <h2 className="text-2xl sm:text-3xl font-bold mb-4">Tools & Software</h2>
//             <p className="text-gray-400">
//               Applications and platforms I use to streamline my development workflow.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {toolCategories.map((category, index) => (
//               <motion.div
//                 key={category.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-[#141420] p-6 rounded-xl"
//               >
//                 <h3 className="text-lg font-semibold mb-4 text-[#A78BFA]">{category.title}</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {category.tools.map((tool) => (
//                     <span
//                       key={tool}
//                       className="px-3 py-1 bg-[#1E1E2D] rounded-full text-sm"
//                     >
//                       {tool}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Learning Section */}
//       {/* <section className="py-16 bg-gradient-to-r from-[#141420] to-[#1E1E2D]">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-2xl sm:text-3xl font-bold mb-4">Currently Learning</h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               I'm always expanding my skill set. Here's what I'm currently focused on learning.
//             </p>
//           </motion.div>

//           <div className="flex flex-wrap justify-center gap-4">
//             {["Node js",""].map((skill, index) => (
//               <motion.div
//                 key={skill}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-[#A78BFA] px-4 py-2 rounded-lg text-white font-medium"
//               >
//                 {skill}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//     </div>
//   );
// }

// export default SkillsPage;


import React from 'react';
import { motion } from 'motion/react';
import Header from '../components/Header';
import PageHero from '../components/ui/PageHero';

function SkillsPage() {
  // Technical skills data
  const technicalSkills = [
    { name: "React.js", level: 80, icon: "react" },
    { name: "Next.js", level: 70, icon: "nextjs" },
    { name: "JavaScript", level: 85, icon: "javascript" },
    { name: "Node.js", level: 75, icon: "nodejs" },
    { name: "Express.js", level: 70, icon: "express" },
    { name: "MongoDB", level: 70, icon: "mongodb" },
    { name: "WordPress", level: 65, icon: "wordpress" },
    { name: "HTML5", level: 95, icon: "html5" },
    { name: "CSS3", level: 90, icon: "css3" },
    { name: "Tailwind CSS", level: 85, icon: "tailwind" },
    { name: "Git", level: 85, icon: "git" },
    { name: "Responsive Design", level: 90, icon: "responsive" },
    { name: "SEO Basics", level: 60, icon: "seo" }
  ];

  // Soft skills data
  const softSkills = [
    {
      title: "Problem Solving",
      description: "Analytical approach to troubleshooting and resolving technical challenges.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Communication",
      description: "Clear and effective communication with clients and team members.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Time Management",
      description: "Efficient prioritization and management of tasks to meet deadlines.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Adaptability",
      description: "Quick to learn new technologies and adapt to changing requirements.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Attention to Detail",
      description: "Meticulous focus on code quality, UI/UX, and testing.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Independent Learning",
      description: "Self-motivated and disciplined learner, continuously improving skills.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v8" />
        </svg>
      )
    }
  ];

  // Tool categories
  const toolCategories = [
    {
      title: "Development",
      tools: ["VS Code", "GitHub", "Terminal", "Postman"]
    },
    {
      title: "Design",
      tools: ["Figma", "Canva"]
    },
    {
      title: "SEO",
      tools: ["Google Analytics", "Google Search Console", "Ubersuggest", "SEMrush (basic)"]
    },
    {
      title: "Communication",
      tools: ["Slack", "Discord", "Zoom", "Microsoft Teams"]
    },
    {
      title: "Deployment & Hosting",
      tools: ["Netlify", "Vercel", "Heroku", "Firebase (basic)"]
    }
  ];

  return (
    <div className="bg-[#000319] text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <PageHero
        headingWhite="my"
        headingPur="skills"
        desc="A clear overview of my technical expertise, tools, and soft skills I bring to every project."
      />

      {/* Technical Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-gray-400">Core technologies and programming languages I use regularly.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-[#141420] p-4 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#A78BFA] rounded-md flex items-center justify-center mr-3">
                      <span className="text-white text-xs font-bold">{skill.name.charAt(0)}</span>
                    </div>
                    <h3 className="font-medium">{skill.name}</h3>
                  </div>
                  <span className="text-sm text-[#A78BFA]">{skill.level}%</span>
                </div>

                <div className="w-full bg-[#1E1E2D] rounded-full h-2.5">
                  <motion.div
                    className="bg-[#A78BFA] h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-16 bg-[#080810]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Soft Skills</h2>
            <p className="text-gray-400">
              Beyond technical abilities, these interpersonal skills help me collaborate effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                className="bg-[#141420] p-6 rounded-xl"
              >
                <div className="text-[#A78BFA] mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Software Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Tools & Software</h2>
            <p className="text-gray-400">
              Applications and platforms I use to streamline my development workflow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {toolCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#141420] p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold mb-4 text-[#A78BFA]">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-[#1E1E2D] rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillsPage;
