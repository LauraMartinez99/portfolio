import React from 'react';
import Image from "next/image";
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section id="hero" className="py-20 bg-bg-primary">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-text-primary">Hero Section</h1>
            <p className="text-text-secondary">Dynamic headline and intro paragraph will go here.</p>
            <button className="mt-4 px-6 py-2 bg-primary-color text-text-light rounded hover:bg-primary-light transition-colors">Contactarme</button>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 bg-bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-text-primary">About Me</h2>
            <p className="text-text-secondary">Professional profile and skills will go here.</p>
          </div>
        </section>

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
