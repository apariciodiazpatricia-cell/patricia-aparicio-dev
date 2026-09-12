import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixRain from './components/MatrixRain';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00FF66] selection:text-black font-sans relative bg-grid-pattern overflow-x-hidden">

      {/* Lluvia Matrix de fondo absolute a toda la altura */}
      <MatrixRain />

      {/* Luces de ambiente neón */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF66] rounded-full blur-[120px] pointer-events-none animate-blob"></div>
      <div className="absolute top-1/2 right-10 w-[30rem] h-[30rem] bg-[#00FF66] rounded-full blur-[150px] pointer-events-none animate-blob" style={{ animationDelay: '3s' }}></div>

      <Navbar />

      {/* Flujo compacto sin grandes huecos */}
      <div className="relative z-10 flex flex-col gap-6 pt-16">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}