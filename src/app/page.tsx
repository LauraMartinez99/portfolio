import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <AboutMe />
        <Projects />
        <Certifications />
      </main>
    </>
  );
}
