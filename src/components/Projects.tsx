'use client';

import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Marketplace - Next.js Learning Project",
    description: "Un marketplace moderno de e-commerce construido con Next.js 15, TypeScript y Tailwind CSS. Este proyecto fue desarrollado como un ejercicio de aprendizaje para explorar tecnologías modernas de desarrollo web y mejores prácticas.",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS",  "Fake Store API"],
    imageUrl: "/images/projects/marketplace.jpg",
    role: "Desarrolladora full-stack",
    outcomes: [
      "Implementación de funcionalidades de e-commerce completas",
      "Integración con API externa para datos de productos",
      "Gestión de estado con Zustand",
      "Diseño responsive y UI moderna"
    ],
    demoUrl: "https://marketplace-laurafma.vercel.app/"
  },
  {
    title: "Programas Interactivos Unity para Rehabilitación de Adultos Mayores",
    description: "Desarrollo de aplicaciones interactivas en Unity para la rehabilitación física y cognitiva de adultos mayores, enfocadas en mejorar la movilidad y coordinación.",
    technologies: ["Unity", "C#", "Diseño de Interfaces"],
    imageUrl: "/images/projects/unity-rehab.jpg",
    role: "Desarrolladora principal, diseñadora de interfaces y experiencia de usuario",
    outcomes: [
      "Mejora significativa en la adherencia a los ejercicios de rehabilitación",
      "Interfaz intuitiva adaptada a las necesidades de adultos mayores",
      "Sistema de seguimiento de progreso integrado"
    ]
  },
  {
    title: "Monitor de Frecuencia Cardíaca de Bajo Costo",
    description: "Diseño e implementación de un sistema de monitoreo cardíaco accesible, utilizando componentes electrónicos de bajo costo y software personalizado.",
    technologies: ["C++", "Electrónica", "Procesamiento de Señales"],
    imageUrl: "/images/projects/heart-monitor.jpg",
    role: "Ingeniera de hardware y software, responsable del diseño del sistema",
    outcomes: [
      "Sistema funcional con precisión comparable a dispositivos comerciales",
      "Reducción significativa en costos de producción",
      "Documentación completa para replicación"
    ]
  },
  {
    title: "Sistema de Monitoreo de Bicicletas en Tiempo Real (IoT)",
    description: "Desarrollo de un sistema IoT para monitorear parámetros de bicicletas en tiempo real, incluyendo velocidad, cadencia y condiciones del terreno.",
    technologies: ["Python", "IoT", "Análisis de Datos"],
    imageUrl: "/images/projects/bike-monitor.jpg",
    role: "Desarrolladora full-stack, responsable de la arquitectura del sistema",
    outcomes: [
      "Sistema de monitoreo en tiempo real con baja latencia",
      "Plataforma web para visualización de datos",
      "Algoritmos de análisis predictivo para mantenimiento"
    ]
  },
  {
    title: "Procesamiento y Análisis de Señales Biológicas",
    description: "Implementación de algoritmos para el procesamiento y análisis de señales biológicas, con enfoque en aplicaciones médicas y de investigación.",
    technologies: ["Python", "Procesamiento de Señales", "Machine Learning"],
    imageUrl: "/images/projects/bio-signals.jpg",
    role: "Investigadora y desarrolladora de algoritmos",
    outcomes: [
      "Algoritmos optimizados para procesamiento de señales",
      "Herramientas de visualización interactiva",
      "Documentación técnica y científica"
    ]
  }
];

const Projects = () => {
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
    <section ref={sectionRef} id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-on-scroll">
          Proyectos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 