import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import PageHero from '../components/ui/PageHero';

function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#000319]">
        <Header />
        <PageHero headingWhite="Get to Know" headingPur="isra ilyas" desc="Discover how I bring ideas to life through frontend development, creating visually stunning and interactive web solutions."  />
      </div>
      <About />
    </div>
  );
}

export default AboutPage;