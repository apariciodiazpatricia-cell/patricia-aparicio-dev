import React, { useState } from 'react';
import NavbarPacman from './components/NavbarPacman';
import Hero from './components/Hero';
import MatrixRain from './components/MatrixRain';
import HeroRobot from './components/HeroRobot';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import CvSection from './components/CvSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioAssistant from './components/PortfolioAssistant';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleOpenAssistant = () => {
    const assistantBtn = document.querySelector('button[aria-label="Abrir asistente de IA"]');
    if (assistantBtn) {
      assistantBtn.click();
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative bg-black min-h-screen text-white font-mono selection:bg-[#00FF66] selection:text-black flex flex-col overflow-x-hidden"
    >

      {/* 🌐 FONDO GLOBAL MATRIX + GRID TÉCNICO UNIFICADO */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Grid Técnico Verde */}
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 102, 0.16) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 102, 0.16) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Lluvia Matrix de código */}
        <div className="absolute inset-0">
          <MatrixRain />
        </div>

        {/* Foco Neón Dinámico interactivo con el ratón */}
        <div
          className="absolute w-[550px] h-[550px] bg-[#00FF66]/12 rounded-full blur-[130px] transition-all duration-150 pointer-events-none"
          style={{
            transform: `translate(${mousePos.x - 275}px, ${mousePos.y - 275}px)`,
          }}
        ></div>

        {/* Resplandor ambiental inferior */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[320px] bg-[#00FF66]/10 rounded-full blur-[140px] pointer-events-none"></div>
      </div>

      {/* 🚀 CONTENIDO DE LA PÁGINA */}
      <div className="relative z-10 flex flex-col flex-grow">

        {/* 1. Navbar con Pacman y Fantasmas */}
        <NavbarPacman />

        {/* 2. Contenido Principal con espaciado para el Navbar fijo */}
        <div className="flex-grow w-full pt-20 sm:pt-24">
          <Hero onOpenAssistant={handleOpenAssistant} />

          {/* Resto de secciones */}
          <main className="max-w-6xl mx-auto px-4 py-8 space-y-16 w-full">
            <div id="about">
              <About />
            </div>
            <div id="stack"><TechStack /></div>
            <div id="projects"><Projects /></div>
            <div id="cv"><CvSection /></div>
            <div id="contact"><Contact /></div>
          </main>
        </div>

        {/* 3. Footer con droide patrulla integrado */}
        <Footer />

        {/* 4. Asistente Conversacional IA Gemini 2.5 Flash */}
        <PortfolioAssistant />

      </div>
    </div>
  );
}