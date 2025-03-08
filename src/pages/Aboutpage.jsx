import React from 'react';
import Header from '../components/Header';
import About from '../components/About';

function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#000319] py-28">
        <Header />
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About <span className="text-[#A78BFA]">Me</span></h1>
          <p className="text-gray-400 max-w-lg mx-auto">Learn more about my background, skills, and what drives me as a frontend developer.</p>
        </div>
      </div>
      <About />
    </div>
  );
}

export default AboutPage;