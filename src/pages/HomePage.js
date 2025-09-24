import React from 'react';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import FeaturedCourse from '../components/FeaturedCourse';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <IntroSection />
      <FeaturedCourse />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;