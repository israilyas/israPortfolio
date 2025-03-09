import React from 'react';
import { motion } from 'motion/react';
import Header from '../components/Header';
import PageHero from '../components/ui/PageHero'

function ProjectsPage() {
  // Project data array
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce website built with React, Next.js, and Stripe integration for secure payments.",
      image: "/projects/ecommerce.jpg",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      demoUrl: "https://ecommerce-demo.isra.dev",
      codeUrl: "https://github.com/isradev/ecommerce-platform"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "An admin dashboard with data visualization and user management features. Built with React and D3.js.",
      image: "/projects/dashboard.jpg",
      tags: ["React", "D3.js", "Redux", "Material UI"],
      demoUrl: "https://dashboard.isra.dev",
      codeUrl: "https://github.com/isradev/admin-dashboard"
    },
    {
      id: 3,
      title: "Travel Blog",
      description: "A travel blog with CMS integration allowing content creators to manage posts and media easily.",
      image: "/projects/travel-blog.jpg",
      tags: ["React", "Sanity.io", "Framer Motion", "CSS Modules"],
      demoUrl: "https://travelblog.isra.dev",
      codeUrl: "https://github.com/isradev/travel-blog"
    },
    {
      id: 4,
      title: "Weather App",
      description: "Real-time weather application with location detection and 7-day forecast using OpenWeather API.",
      image: "/projects/weather-app.jpg",
      tags: ["React", "OpenWeather API", "Geolocation", "CSS"],
      demoUrl: "https://weather.isra.dev",
      codeUrl: "https://github.com/isradev/weather-app"
    },
    {
      id: 5,
      title: "Portfolio Template",
      description: "A customizable portfolio template for developers featuring dark/light themes and easy content management.",
      image: "/projects/portfolio.jpg",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      demoUrl: "https://portfolio-template.isra.dev",
      codeUrl: "https://github.com/isradev/portfolio-template"
    },
    {
      id: 6,
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality and user authentication.",
      image: "/projects/task-app.jpg",
      tags: ["React", "Firebase", "React DnD", "Styled Components"],
      demoUrl: "https://tasks.isra.dev",
      codeUrl: "https://github.com/isradev/task-management"
    }
  ];

  return (
    <div className="bg-[#000319] text-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <PageHero headingWhite="My" headingPur="Project" desc="A collection of my recent web development projects, showcasing my skills in frontend technologies and responsive design." />
      
      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-[#141420] rounded-xl overflow-hidden shadow-xl"
              >
                <div className="h-48 bg-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#141420] z-10"></div>
                  {/* Using placeholder image for now */}
                  <div className="w-full h-full bg-gradient-to-br from-[#1E1E2D] to-[#272734]"></div>
                  
                  {/* Project icon/logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#A78BFA] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-[#1E1E2D] px-2 py-1 rounded-md text-[#A78BFA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#A78BFA] text-white rounded-lg font-medium text-sm hover:bg-[#9B7DE3] transition-colors flex-1 text-center"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-transparent border border-white text-white rounded-lg font-medium text-sm hover:bg-white/10 transition-colors flex-1 text-center"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
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
    </div>
  );
}

export default ProjectsPage;
