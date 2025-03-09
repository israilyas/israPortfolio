// import React, { useState } from 'react';
// import { motion } from 'motion/react';
// import Header from '../components/Header';

// function ExperiencePage() {
//   const [activeTab, setActiveTab] = useState('work');

//   const workExperience = [
//     {
//       company: "Tech Innovations Inc.",
//       role: "Senior Frontend Developer",
//       period: "Jan 2022 - Present",
//       location: "Remote",
//       description: "Leading frontend development for enterprise web applications using React, Next.js, and TypeScript.",
//       achievements: [
//         "Implemented a component library that reduced development time by 40%",
//         "Improved application performance by 35% through code optimization",
//         "Mentored junior developers and conducted code reviews",
//         "Migrated legacy applications to modern React architecture"
//       ]
//     },
//     // Other work experiences
//   ];

//   const education = [
//     {
//       institution: "University of Technology",
//       degree: "Bachelor of Science in Computer Science",
//       period: "2014 - 2018",
//       location: "Boston, MA",
//       description: "Focused on web development, algorithms, and software engineering principles.",
//       achievements: [
//         "GPA: 3.8/4.0",
//         "Dean's List: 7 semesters",
//         "Senior project: Developed an e-learning platform",
//         "Vice President of Computer Science Student Association"
//       ]
//     },
//     // Other education entries
//   ];

//   const certifications = [
//     {
//       title: "AWS Certified Developer - Associate",
//       issuer: "Amazon Web Services",
//       date: "2023",
//       id: "AWS-DEV-12345"
//     },
//     // Other certifications
//   ];

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'work':
//         return workExperience.map((job, index) => (
//           <div key={index} className="mb-6">
//             <h3 className="text-xl font-semibold text-[#A78BFA]">{job.role} at {job.company}</h3>
//             <p className="text-gray-400">{job.period} | {job.location}</p>
//             <p className="mt-2">{job.description}</p>
//             <ul className="list-disc list-inside mt-2">
//               {job.achievements.map((achievement, i) => (
//                 <li key={i} className="text-gray-300">{achievement}</li>
//               ))}
//             </ul>
//           </div>
//         ));
//       case 'education':
//         return education.map((edu, index) => (
//           <div key={index} className="mb-6">
//             <h3 className="text-xl font-semibold text-[#A78BFA]">{edu.degree}</h3>
//             <p className="text-gray-400">{edu.period} | {edu.location}</p>
//             <p className="mt-2">{edu.description}</p>
//             <ul className="list-disc list-inside mt-2">
//               {edu.achievements.map((achievement, i) => (
//                 <li key={i} className="text-gray-300">{achievement}</li>
//               ))}
//             </ul>
//           </div>
//         ));
//       case 'certifications':
//         return certifications.map((cert, index) => (
//           <div key={index} className="mb-6">
//             <h3 className="text-xl font-semibold text-[#A78BFA]">{cert.title}</h3>
//             <p className="text-gray-400">{cert.issuer} | {cert.date}</p>
//             <p className="mt-2">Certification ID: {cert.id}</p>
//           </div>
//         ));
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="bg-[#000319] text-white min-h-screen">
//       <Header />

//       <section className="relative py-20 bg-[#080810] text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-4xl sm:text-5xl font-bold mb-4">My <span className="text-[#A78BFA]">Experience</span></h1>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             A timeline of my professional journey, education, and certifications.
//           </p>
//         </motion.div>
//       </section>

//       <div className="container mx-auto px-6 py-10">
//         <div className="flex justify-center space-x-6 mb-6">
//           {['work', 'education', 'certifications'].map((tab) => (
//             <button
//               key={tab}
//               className={`px-6 py-2 rounded-lg text-lg font-semibold transition duration-300 ${
//                 activeTab === tab ? 'bg-[#A78BFA] text-white' : 'bg-gray-700 text-gray-300'
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </div>
//         <div>{renderContent()}</div>
//       </div>

//     </div>
//   );
// }

// export default ExperiencePage;

import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";

function ExperiencePage() {
  const [activeTab, setActiveTab] = useState("work");

  const workExperience = [
    {
      company: "Tech Innovations Inc.",
      role: "Senior Frontend Developer",
      period: "Jan 2022 - Present",
      location: "Remote",
      description:
        "Leading frontend development for enterprise web applications using React, Next.js, and TypeScript.",
      achievements: [
        "Implemented a component library that reduced development time by 40%",
        "Improved application performance by 35% through code optimization",
        "Mentored junior developers and conducted code reviews",
        "Migrated legacy applications to modern React architecture",
      ],
    },
  ];

  const education = [
    {
      institution: "University of Technology",
      degree: "B.Sc. in Computer Science",
      period: "2014 - 2018",
      location: "Boston, MA",
      description:
        "Focused on web development, algorithms, and software engineering principles.",
      achievements: [
        "GPA: 3.8/4.0",
        "Dean's List: 7 semesters",
        "Senior project: Developed an e-learning platform",
        "Vice President of Computer Science Student Association",
      ],
    },
  ];

  const certifications = [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      id: "AWS-DEV-12345",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "work":
        return workExperience.map((job, index) => (
          <motion.div
            key={index}
            className="bg-[#111827] p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#A78BFA]">
              {job.role} at {job.company}
            </h3>
            <p className="text-gray-400 mt-1">{job.period} | {job.location}</p>
            <p className="mt-3 text-gray-300">{job.description}</p>
            <ul className="mt-3 space-y-2">
              {job.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-400">
                  ✅ {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        ));
      case "education":
        return education.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-[#111827] p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#A78BFA]">{edu.degree}</h3>
            <p className="text-gray-400 mt-1">{edu.period} | {edu.location}</p>
            <p className="mt-3 text-gray-300">{edu.description}</p>
            <ul className="mt-3 space-y-2">
              {edu.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-400">🎓 {achievement}</li>
              ))}
            </ul>
          </motion.div>
        ));
      case "certifications":
        return certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-[#111827] p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#A78BFA]">{cert.title}</h3>
            <p className="text-gray-400 mt-1">{cert.issuer} | {cert.date}</p>
            <p className="mt-3 text-gray-300">Certification ID: {cert.id}</p>
          </motion.div>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#000319] text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold">
            My <span className="text-[#A78BFA]">Experience</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mt-3">
            A journey through my professional work, education, and certifications.
          </p>
        </motion.div>
      </section>

      {/* Tab Navigation */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex justify-center space-x-6 mb-10">
          {["work", "education", "certifications"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-xl text-lg font-semibold transition duration-300 ${
                activeTab === tab
                  ? "bg-[#A78BFA] text-white shadow-md"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-6">{renderContent()}</div>
      </div>
    </div>
  );
}

export default ExperiencePage;

