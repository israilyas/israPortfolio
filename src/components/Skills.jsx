import React from 'react';

function Skills() {
  const technicalSkills = [
    { name: "HTML5", percentage: 95 },
    { name: "CSS3/SASS", percentage: 90 },
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 85 },
    { name: "TypeScript", percentage: 80 },
    { name: "Next.js", percentage: 75 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "Redux", percentage: 80 },
  ];

  const softSkills = [
    { name: "Communication", percentage: 90 },
    { name: "Problem Solving", percentage: 85 },
    { name: "Team Collaboration", percentage: 90 },
    { name: "Time Management", percentage: 85 },
    { name: "Adaptability", percentage: 90 },
    { name: "Remote Work", percentage: 95 },
  ];

  return (
    <section id="skills" className="py-20 bg-[#080810]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My <span className="text-[#A78BFA]">Skills</span></h2>
          <div className="w-16 h-1 bg-[#A78BFA] mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            I've acquired a diverse set of skills through years of continuous learning and professional experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="inline-block mr-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Technical Skills
            </h3>

            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-[#1F1F2E] rounded-full h-2">
                    <div
                      className="bg-[#A78BFA] h-2 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="inline-block mr-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              Soft Skills
            </h3>

            <div className="space-y-5">
              {softSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-[#1F1F2E] rounded-full h-2">
                    <div
                      className="bg-[#A78BFA] h-2 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind', 'Next.js', 'Git', 'Figma', 'VS Code', 'npm', 'Jest'].map((tool) => (
              <div
                key={tool}
                className="px-5 py-3 bg-[#1F1F2E] rounded-lg text-sm font-medium hover:bg-[#2A2A3D] transition-colors"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;