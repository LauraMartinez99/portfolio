'use client';

import React, { useEffect, useRef } from 'react';
import CertificationCard from './CertificationCard';

const certifications = [
  {
    title: "Curso de Fundamentos de JavaScript",
    imageUrl: "/images/certifications/Curso de Fundamentos de JavaScript.jpg"
  },
  {
    title: "Curso de Git y GitHub",
    imageUrl: "/images/certifications/Curso de Git y GitHub.jpg"
  },
  {
    title: "Curso de Introducción a la Terminal y Línea de Comandos",
    imageUrl: "/images/certifications/Curso de Introducción a la Terminal y Línea de Comandos.jpg"
  },
  {
    title: "Curso de Fundamentos de Ingeniería de Software",
    imageUrl: "/images/certifications/Curso de Fundamentos de Ingeniería de Software.jpg"
  },
  {
    title: "Curso Definitivo de HTML y CSS",
    imageUrl: "/images/certifications/Curso Definitivo de HTML y CSS.jpg"
  },
  {
    title: "Curso de React.js",
    imageUrl: "/images/certifications/Curso de Reactjs.jpg"
  }
];

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-on-scroll">
          Certificaciones
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <CertificationCard {...certification} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 