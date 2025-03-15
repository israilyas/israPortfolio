import React from 'react';
import { motion } from 'motion/react';
import Header from '../components/Header';
import PageHero from '../components/ui/PageHero'
import { div } from 'motion/react-client';
import ProjectCard from '../components/ui/ProjectCard';
import CTA from '../components/ui/CTA';

function ProjectsPage() {
  // Project data array
  const projects = [
    {
      id: 1,
      title: "Anita AI: The Future of AI-Powered Crypto Influence",
      shortDesc: "Anita AI is a cutting-edge AI-powered crypto influencer designed to redefine digital influence in the blockchain space. Built using Next.js, this fast, scalable, and interactive website showcases Anita AI’s mission to bridge the gap between AI, crypto, and metaverse culture.",
      description: "",
      techStack: ["Next.js - For performance and scalability.", "Tailwind CSS - For a responsive and modern UI.", "Framer Motion - For smooth animations and enhanced user experience.", "Swiper.js - For sliders"],
      image: "./Banners/Anita.png",
      tags: ["Next.js", "Tailwind CSS", "Swiper.js"],
      demoUrl: "https://anita-henna.vercel.app/",
      thumbnail: "./Banners/Anita.png",
      videoUrl: "https://streamable.com/hr77eh"
    },
    {
      id: 1,
      title: "PaySHift Website",
      description: "A fully responsive e-commerce website built with React, Next.js, and Stripe integration for secure payments.",
      image: "/projects/ecommerce.jpg",
      tags: ["Next.js", "Tailwind CSS", "Swiper.js"],
      demoUrl: "https://ecommerce-demo.isra.dev",
      thumbnail: "./Banners/payshift.png",
      videoUrl: "/Videos/PayShift.mp4"
    },
    {
      id: 2,
      title: "Password Generator",
      description: "An admin dashboard with data visualization and user management features. Built with React and D3.js.",
      image: "/projects/dashboard.jpg",
      tags: ["React", "D3.js", "Redux", "Material UI"],
      thumbnail: "./Banners/passwordGenerator.png",
      videoUrl: "/Videos/PasswordGenerator.mp4",
      demoUrl: "https://ecommerce-demo.isra.dev",
      codeUrl: "https://github.com/isradev/ecommerce-platform",
    },
    {
      id: 3,
      title: "Currency Converter",
      description: "A travel blog with CMS integration allowing content creators to manage posts and media easily.",
      image: "/projects/travel-blog.jpg",
      tags: ["React"],
      thumbnail: "./Banners/currencyConverter.png",
      videoUrl: "/Videos/CurrencyConverter.mp4",
      demoUrl: "https://ecommerce-demo.isra.dev",
      codeUrl: "https://github.com/isradev/ecommerce-platform",
    },
    {
      id: 4,
      title: "Weather App",
      description: "Real-time weather application with location detection and 7-day forecast using OpenWeather API.",
      image: "/projects/weather-app.jpg",
      tags: ["React", "OpenWeather API", "Geolocation", "CSS"],
      thumbnail: "./Banners/ReactRouterProject.png",
      videoUrl: "/Videos/reactRouterProject.mp4",
      demoUrl: "https://ecommerce-demo.isra.dev",
      codeUrl: "https://github.com/isradev/ecommerce-platform",
    },
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
            {projects.map((projectCard, index) => (
              <ProjectCard project={projectCard} index={index} key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTA />
    </div>
  );
}

export default ProjectsPage;
