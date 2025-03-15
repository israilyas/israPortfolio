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
      shortDesc: "Anita AI is a cutting-edge AI-powered crypto influencer designed to redefine digital influence in the blockchain space. Built using Next.js, this fast, scalable, and interactive website showcases Anita AI's mission to bridge the gap between AI, crypto, and metaverse culture.",
      tags: ["Next.js", "Tailwind CSS", "Swiper.js"],
      demoUrl: "https://itsanita.com/",
      thumbnail: "./Banners/Anita.png",
      videoUrl: "https://streamable.com/hr77eh"
    },
    {
      id: 2,
      title: "Payshift - Modern & Dynamic Website Development",
      shortDesc: "Worked on Payshift, a client website built using Next.js for fast performance and optimized rendering. The project features an interactive and user-friendly interface, enhanced with Swiper.js for smooth and responsive slider functionality.",
      features: [
        {
          heading: "Fast & SEO-Friendly",
          desc: "Leveraging Next.js for server-side rendering and improved performance."
        },
        {
          heading: " Swiper.js Slider",
          desc: "Smooth, touch-friendly slider for interactive content display."
        },
        {
          heading: "Dynamic Routing ",
          desc: "Efficient navigation with optimized page loading."
        },
        {
          heading: "Fully Responsive Design",
          desc: "Ensures compatibility across all screen sizes.."
        },
      ],
      tags: ["Next.js", "Tailwind CSS", "Swiper.js"],
      demoUrl: "https://payshift.vercel.app/",
      thumbnail: "./Banners/payshift.png",
      videoUrl: "https://streamable.com/k1gd8e"
    },
    {
      id: 3,
      title: "Password Generator - Secure & Customizable Passwords",
      shortDesc: "This Password Generator is a React-based application designed to create strong and customizable passwords. It provides users with the flexibility to adjust password length and include special characters or numbers, ensuring enhanced security. The minimalist interface, built with Tailwind CSS, ensures a smooth user experience.",
      features: [
        {
          heading: "Customizable Length",
          desc: "Generate passwords ranging from 6 to 100 characters."
        },
        {
          heading: "Character Options",
          desc: " Include numbers and special characters as needed."
        },
        {
          heading: "One-Click Copy",
          desc: "Easily copy the generated password to the clipboard."
        },
        {
          heading: "Responsive UI",
          desc: "Built with Tailwind CSS for a modern and intuitive design."
        },
      ],
      tags: ["React.js", "Tailwind CSS", "React Hooks"],
      thumbnail: "./Banners/passwordGenerator.png",
      videoUrl: "https://streamable.com/3m446v",
      demoUrl: "https://react-js-2025.vercel.app/",
      codeUrl: "https://github.com/israilyas/React-JS-2025/tree/main/05passwordGenerator",
    },
    {
      id: 4,
      title: "Currency Converter - Real-Time Exchange Rate Application",
      shortDesc: "This Currency Converter is a web application built with React.js, designed to provide real-time exchange rate conversions. It integrates an external API to ensure accurate currency values, offering a seamless and efficient experience for users needing quick conversions.",
      features: [
        {
          heading: "Live Exchange Rate Fetching",
          desc: "Retrieves up-to-date exchange rates using API integration."
        },
        {
          heading: "Instant Currency Swap",
          desc: "Allows users to quickly switch between selected currencies."
        },
        {
          heading: "Responsive & Modern UI",
          desc: "Developed with Tailwind CSS for a clean and accessible interface."
        },
        {
          heading: "Optimized Performance",
          desc: "Utilizes React Hooks for smooth updates and state management."
        },
      ],
      tags: ["React","Tailwind CSS", "API Integration"],
      thumbnail: "./Banners/currencyConverter.png",
      videoUrl: "https://streamable.com/lpupz6",
      demoUrl: "https://currency-converter-reactjs-ebon.vercel.app/",
      codeUrl: "https://github.com/israilyas/React-JS-2025/tree/main/06currencyConverter",
    },
    {
      id: 5,
      title: "Portfoli Using React/React Router",
      shortDesc: "worked on a React Router project to enhance web navigation and create a seamless user experience! 🌐✨ This project allowed me to implement dynamic and nested routes, ensuring smooth page transitions while maintaining performance and structure.",
      features: [
        {
          heading: "Dynamic Routing",
          desc: " Implemented useParams() to handle user-specific pages dynamically, like /user/:userI"
        },
        {
          heading: "Nested Routes & Layouts",
          desc: "Structured pages with nested routes, improving code organization and enhancing navigation flow."
        },
        {
          heading: "RouterProvider & createBrowserRouter",
          desc: "Utilized modern routing techniques to manage multiple routes efficiently."
        },
        {
          heading: "User-Friendly Navigation",
          desc: "Ensured a smooth and intuitive page-switching experience without full reloads."
        },
      ],
      tags: ["React", "React Router", "Tailwind CSS"],
      thumbnail: "./Banners/ReactRouterProject.png",
      videoUrl: "https://streamable.com/dnu2s6",
      demoUrl: "https://react-portfolio-9n9v.vercel.app/",
      codeUrl: "https://github.com/israilyas/react-portfolio",
    },
    {
      id: 6,
      title: "Responsive Blog Website with Tailwind CSS",
      shortDesc: "Developed a fully responsive blog website using Tailwind CSS, ensuring a modern and seamless reading experience. The project focuses on clean UI, smooth navigation, and optimized performance.",
      features: [
        {
          heading: "Dynamic Routing",
          desc: " Implemented useParams() to handle user-specific pages dynamically, like /user/:userI"
        },
        {
          heading: "Nested Routes & Layouts",
          desc: "Structured pages with nested routes, improving code organization and enhancing navigation flow."
        },
        {
          heading: "RouterProvider & createBrowserRouter",
          desc: "Utilized modern routing techniques to manage multiple routes efficiently."
        },
        {
          heading: "User-Friendly Navigation",
          desc: "Ensured a smooth and intuitive page-switching experience without full reloads."
        },
      ],
      tags: ["HTML", "Tailwind CSS"],
      thumbnail: "./Banners/businessly.png",
      videoUrl: "https://streamable.com/jza4p0",
      demoUrl: "https://bussinessly.netlify.app/",
      codeUrl: "https://github.com/israilyas/Blog-Website",
    },
    {
      id: 7,
      title: "OLX Home Page Clone - Web Design",
      shortDesc: "Developed a responsive clone of the OLX home page using HTML and CSS, accurately replicating its layout and design. This project showcases expertise in frontend development, focusing on clean structure, responsiveness, and user-friendly UI.",
      features: [
        {
          heading: "Pixel-Perfect Design",
          desc: "Matches the OLX homepage layout."
        },
        {
          heading: "Fully Responsive",
          desc: "Optimized for all screen sizes."
        },
        {
          heading: "CSS Styling",
          desc: "Structured and well-organized styling."
        },
        {
          heading: "User-Friendly Interface",
          desc: "Ensures an intuitive browsing experience."
        },
      ],
      tags: ["HTML5", "CSS3"],
      thumbnail: "./Banners/olx.png",
      videoUrl: "https://streamable.com/08wwqj",
      demoUrl: "https://olxhomepageclone.netlify.app/",
      codeUrl: "https://github.com/israilyas/OLX-clone",
    },
    {
      id: 8,
      title: "To-Do List - Task Management App",
      shortDesc: "A JavaScript-powered To-Do List that enables users to efficiently create, manage, and track tasks. Designed for seamless usability, the app includes session management to ensure tasks persist even after refreshing the page.",
      features: [
        {
          heading: "Task Management",
          desc: "Add, edit, and delete tasks effortlessly."
        },
        {
          heading: "Session Persistence",
          desc: "Tasks remain saved even after page reload."
        },
        {
          heading: "User-Friendly Interface",
          desc: "Clean and intuitive design for easy navigation."
        },
        {
          heading: "Responsive Layout",
          desc: "Optimized for both desktop and mobile devices."
        },
      ],

      tags: ["HTML5", "CSS3", "JavaScript"],
      thumbnail: "./Banners/todo.png",
      videoUrl: "https://streamable.com/frsenv",
      demoUrl: "https://to-do-list-app-by-israilyas.netlify.app/",
      codeUrl: "https://github.com/israilyas/TO-DO-LIST-JS-PROJECT",
    },
    {
      id: 9,
      title: "Guess The Number Game",
      shortDesc: "The Guess The Number Game is an interactive web-based game built using HTML, CSS, and JavaScript. Players attempt to guess a randomly generated number within a specific range while receiving real-time feedback to help them reach the correct answer.This project demonstrates dynamic user interaction and JavaScript-driven logic, making it an engaging experience for users.",
      features: [
        {
          heading: "Random Number Generation",
          desc: "Ensures a unique challenge each time."
        },
        {
          heading: "Live Feedback System",
          desc: " Guides players with hints (higher/lower)."
        },
        {
          heading: "User-Friendly UI",
          desc: "Clean and responsive design for a smooth experience."
        },
      
      ],

      tags: ["HTML5", "CSS3", "JavaScript"],
      thumbnail: "./Banners/guessNumber.png",
      videoUrl: "https://streamable.com/xzc09s",
      demoUrl: "https://guess-number-game-by-isra.netlify.app/",
      codeUrl: "https://github.com/israilyas/Guess-The-Number-Game-JavaScript-",
    },
    {
      id: 10,
      title: "BMI Calculator",
      shortDesc: "The BMI Calculator is an interactive web-based tool designed to help users calculate their Body Mass Index (BMI) based on their height and weight. It provides instant results along with personalized feedback to help users understand their BMI category and health implications.",
      features: [
        {
          heading: "Instant BMI Calculation ",
          desc: "Enter height and weight to get results immediately."
        },
        {
          heading: "Personalized Feedback",
          desc: "Displays BMI category (Underweight, Normal, Overweight, Obese)."
        },
        {
          heading: "User-Friendly Interface ",
          desc: "Simple, clean, and responsive design."
        },
      
      ],

      tags: ["HTML5", "CSS3", "JavaScript"],
      thumbnail: "./Banners/bmi.png",
      videoUrl: "https://streamable.com/t3kr6i",
      demoUrl: "https://bmi-calculator-by-isra.netlify.app/",
      codeUrl: "https://github.com/israilyas/BMI-Calculator-JS",
    },

    {
      id: 11,
      title: "Personal Portfolio Website",
      shortDesc: "I designed and developed my portfolio website using HTML, CSS, and JavaScript to showcase my skills, projects, and services in a professional and visually appealing way.",
      features: [
        {
          heading: "Modern & Responsive Design",
          desc: "Ensures a seamless experience across all devices."
        },
        {
          heading: "Interactive Navigation",
          desc: "Smooth scrolling and user-friendly layout."
        },
        {
          heading: "Project Showcase",
          desc: "Displays my key development projects effectively."
        },
      
      ],

      tags: ["HTML5", "CSS3", "JavaScript"],
      thumbnail: "./Banners/portfolio1.png",
      videoUrl: "https://streamable.com/d7dq4w",
      demoUrl: "https://isra-ilyas.netlify.app/",
      // codeUrl: "https://github.com/israilyas/BMI-Calculator-JS",
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
