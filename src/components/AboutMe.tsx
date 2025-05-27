'use client';

import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import aboutAnimation from '../../public/animations/About_me_Animation.json';

const AboutMe = () => {
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
    <section ref={sectionRef} id="about" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Animation */}
          <div className="relative animate-on-scroll">
            <div className="absolute inset-0 bg-blue-100 opacity-50 rounded-full transform rotate-12"></div>
            <div className="relative">
              <Lottie
                animationData={aboutAnimation}
                className="w-full h-full"
                loop={true}
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="space-y-4 animate-on-scroll">
              <h2 className="text-3xl font-bold text-gray-900">Acerca de Mí</h2>
              <p className="text-gray-600">
                Ingeniera Biomédica e Ingeniera Electrónica con experiencia en desarrollo de soluciones tecnológicas integrando software y hardware. 
                Apasionada por la innovación en el sector salud y la movilidad, con experiencia en análisis de datos biomédicos.
              </p>
              <p className="text-gray-600">
                Interesada en aportar mis conocimientos en procesos de I+D+i, combinando tecnología, salud y desarrollo social.
              </p>
            </div>

            {/* Skills Section */}
            <div className="space-y-4 animate-on-scroll">
              <h3 className="text-2xl font-semibold text-gray-900">Habilidades</h3>
              
              {/* Technical Skills */}
              <div>
                <h4 className="text-xl font-medium text-gray-800 mb-2">Habilidades Técnicas</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-700">Lenguajes de Programación</h5>
                    <ul className="list-disc list-inside text-gray-600">
                      <li className="skill-item">C++</li>
                      <li className="skill-item">C# (Unity)</li>
                      <li className="skill-item">Python</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-700">Herramientas y Tecnologías</h5>
                    <ul className="list-disc list-inside text-gray-600">
                      <li className="skill-item">Desarrollo de Software</li>
                      <li className="skill-item">Desarrollo de Hardware</li>
                      <li className="skill-item">Electrónica</li>
                      <li className="skill-item">Análisis de Datos</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h4 className="text-xl font-medium text-gray-800 mb-2">Habilidades Blandas</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li className="skill-item">Resolución de Problemas</li>
                  <li className="skill-item">Trabajo en Equipo</li>
                  <li className="skill-item">Gestión de Proyectos</li>
                </ul>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4 animate-on-scroll">
              <h3 className="text-2xl font-semibold text-gray-900">Educación</h3>
              <div className="space-y-4">
                <div className="skill-item">
                  <h4 className="text-xl font-medium text-gray-800">Ingeniería Biomédica</h4>
                  <p className="text-gray-600">Universidad Autónoma de Manizales</p>
                </div>
                <div className="skill-item">
                  <h4 className="text-xl font-medium text-gray-800">Ingeniería Electrónica</h4>
                  <p className="text-gray-600">Universidad Autónoma de Manizales</p>
                </div>
              </div>
            </div>

            {/* Download CV Button */}
            {/* <div className="pt-4 animate-on-scroll">
              <a
                href="/cv.pdf"
                download
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 transition-transform"
              >
                Descargar CV
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 