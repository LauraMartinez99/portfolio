'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-navbar shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-text-light">
              LM
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#hero" className="text-text-light hover:text-accent2-color px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Inicio
              </Link>
              <Link href="#about" className="text-text-light hover:text-accent2-color px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Sobre Mí
              </Link>
              <Link href="#projects" className="text-text-light hover:text-accent2-color px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Proyectos
              </Link>
              <Link href="#certifications" className="text-text-light hover:text-accent2-color px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Certificaciones
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-light hover:text-accent2-color hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent2-color transition-colors"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navbar">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#hero" className="block text-text-light hover:text-accent2-color px-3 py-2 rounded-md text-base font-medium transition-colors">
              Inicio
            </Link>
            <Link href="#about" className="block text-text-light hover:text-accent2-color px-3 py-2 rounded-md text-base font-medium transition-colors">
              Sobre Mí
            </Link>
            <Link href="#projects" className="block text-text-light hover:text-accent2-color px-3 py-2 rounded-md text-base font-medium transition-colors">
              Proyectos
            </Link>
            <Link href="#certifications" className="block text-text-light hover:text-accent2-color px-3 py-2 rounded-md text-base font-medium transition-colors">
              Certificaciones
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 