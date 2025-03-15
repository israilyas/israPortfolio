import React from 'react';
import Header from '../components/Header';
import PageHero from '../components/ui/PageHero';

function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#000319]">
        <Header />
        <PageHero headingWhite="About" headingPur="Me" desc="Discover how I bring ideas to life through frontend development, creating visually stunning and interactive web solutions."  />
      </div>
      <section className="py-20 bg-[#0A0A12]">
      <div className="container mx-auto px-6">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About <span className="text-[#A78BFA]">Me</span></h2>
          <div className="w-16 h-1 bg-[#A78BFA] mx-auto"></div>
        </div> */}

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#A78BFA] rounded-xl transform rotate-6"></div>
              <img
                src="/profile-img.jpeg" // Replace with your actual image
                alt="Isra - Frontend Developer"
                className="relative z-10 w-72 h-72 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="w-full md:w-3/5">
            <h3 className="text-2xl font-semibold mb-4">Frontend Developer</h3>
            
            <p className="text-gray-300 mb-6">
              Hello! I'm Isra, a passionate frontend developer with a keen eye for creating beautiful, functional, 
              and user-centered digital experiences. Currently, I'm focused on remote work, collaborating with 
              teams across different time zones and cultures.
            </p>
            
            <p className="text-gray-300 mb-6">
              With expertise in modern JavaScript frameworks like React.js & Next.js, I build responsive and interactive web 
              applications that deliver exceptional user experiences. I enjoy solving complex problems and turning 
              ideas into reality through clean and efficient code.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-gray-400">Isra ILyas</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-gray-400">israilyasq@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">From:</p>
                <p className="text-gray-400">Karachi, Pakistan</p>
              </div>
              <div>
                <p className="font-medium">Experience:</p>
                <p className="text-gray-400">1+ Years</p>
              </div>
            </div>

            <a
            download
              href="/RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#1F1F2E] text-white rounded-lg font-medium hover:bg-[#2A2A3D] transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default AboutPage;