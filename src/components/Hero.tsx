'use client';

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/animations/hero-animation.json';

const titles = [
  "Ingeniera Biomédica",
  "Ingeniera Electrónica",
  "Desarrolladora de Software"
] as const;

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = titles[currentTitle];
    const speed = isDeleting ? 50 : 100; // Más rápido al borrar

    if (!isDeleting && displayText === currentText) {
      // Pausa antes de empezar a borrar
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTitle((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitle, titles]);

  return (
    <section id="hero" className="min-h-screen flex items-center py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="hero-title text-gray-900 animate-fade-in">
              Hola, soy Laura Martínez
            </h1>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg transform -rotate-1"></div>
              <div className="relative">
                <p className="hero-subtitle text-gray-800 font-semibold">
                  {displayText}
                  <span className="animate-blink">|</span>
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-lg mt-4">
              Creando soluciones tecnológicas innovadoras
            </p>
          </div>

          {/* Right Column - Animation */}
          <div className="relative animate-rotate-in">
            <div className="absolute inset-0 bg-blue-100 opacity-50 rounded-full transform rotate-12"></div>
            <div className="relative">
              <Lottie
                animationData={animationData}
                className="w-full h-full"
                loop={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 