import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <AboutMe />
        <Projects />
        
        {/* Projects Section */}
        <section id="projects" className="py-20 bg-bg-primary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-text-primary">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project cards will go here */}
              <div className="border border-bg-accent p-4 rounded bg-bg-secondary text-text-primary">Project 1</div>
              <div className="border border-bg-accent p-4 rounded bg-bg-secondary text-text-primary">Project 2</div>
              <div className="border border-bg-accent p-4 rounded bg-bg-secondary text-text-primary">Project 3</div>
              <div className="border border-bg-accent p-4 rounded bg-bg-secondary text-text-primary">Project 4</div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 bg-bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-text-primary">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Certification items will go here */}
              <div className="border border-bg-accent p-4 rounded bg-bg-primary text-text-primary">Certification 1</div>
              <div className="border border-bg-accent p-4 rounded bg-bg-primary text-text-primary">Certification 2</div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-bg-primary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-text-primary">Experience</h2>
            <div className="space-y-6">
              {/* Experience items will go here */}
              <div className="border border-bg-accent p-4 rounded bg-bg-secondary text-text-primary">Experience 1</div>
              <div className="border border-bg-accent p-4 rounded bg-bg-secondary text-text-primary">Experience 2</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-text-primary">Contact</h2>
            <p className="text-text-secondary">Contact form and information will go here.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-primary-color text-text-light">
          <div className="container mx-auto px-4">
            <p>Copyright notice, social links, and contact email will go here.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
