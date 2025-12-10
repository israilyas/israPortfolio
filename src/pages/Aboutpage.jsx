import React from 'react';
import Header from '../components/Header';
import PageHero from '../components/ui/PageHero';

function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#000319]">
        <Header />
        <PageHero headingWhite="About" headingPur="Me" desc="I develop websites using MERN stack and WordPress, focusing on clean design and easy-to-use features. I also apply SEO techniques to help websites get found on search engines and perform better online."  />
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
            <h3 className="text-2xl font-semibold mb-4">Full Stack Developer & SEO Specialist</h3>
            
            <p className="text-gray-300 mb-6">
             Hello! I’m Isra, a full stack developer with strong skills in the MERN stack (MongoDB, Express, React, Node.js) and WordPress development. I build complete web applications that are responsive, fast, and user-friendly. I handle both the frontend and backend to deliver seamless digital experiences.
            </p>
            
            <p className="text-gray-300 mb-6">
              I started my programming journey with C and Python and gradually moved into web development. Over time, I have developed expertise in frontend frameworks like React.js and Next.js. I’m comfortable working with databases, servers, and APIs to create full-featured applications.
            </p>

             <p className="text-gray-300 mb-6">
             Alongside coding, I am currently deepening my knowledge in SEO. I’m learning how to optimize websites to rank higher on search engines, drive more organic traffic, and improve overall site performance. This combination of development and SEO skills allows me to build websites that not only look great but also perform well in search results.
            </p>

             <p className="text-gray-300 mb-6">
            My goal is to create digital solutions that help businesses grow online by combining clean, efficient code with smart SEO strategies. I am eager to take on remote work and collaborations that challenge me and help me grow further.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-gray-400">Isra ILyas</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-gray-400">israilyas754@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">From:</p>
                <p className="text-gray-400">Karachi, Pakistan</p>
              </div>
              <div>
                <p className="font-medium">Experience:</p>
                <p className="text-gray-400">2+ Years</p>
              </div>
            </div>

            {/* <a
            download
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#1F1F2E] text-white rounded-lg font-medium hover:bg-[#2A2A3D] transition-colors"
            >
              Download Resume
            </a> */}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default AboutPage;