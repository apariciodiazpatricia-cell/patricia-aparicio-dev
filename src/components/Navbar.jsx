import React, { useState, useEffect } from 'react';
import { Menu, X, Bot, Sparkles, Download, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenAssistant }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 font-sans ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
        : 'bg-white/70 backdrop-blur-sm border-b border-slate-100 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO & IDENTIDAD */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="w-9 h-9 rounded-xl bg-slate-950 flex items-center justify-center text-white font-extrabold text-base shadow-sm group-hover:bg-black group-hover:scale-105 transition-transform border border-slate-800">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E575] via-[#FFE500] to-[#FF6B00]">PA</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-black text-slate-900 text-base sm:text-lg tracking-tight">
              <span>Patri Aparicio</span>
              <span className="w-2 h-2 rounded-full bg-[#00E575] shadow-[0_0_8px_#00E575] animate-pulse"></span>
            </div>
            <p className="text-[10px] text-slate-500 font-mono hidden sm:block">Frontend Dev & React</p>
          </div>
        </div>

        {/* NAVEGACIÓN ESCRITORIO */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button onClick={() => scrollToSection('about')} className="hover:text-slate-950 transition-colors cursor-pointer">
            Sobre mí
          </button>
          <button onClick={() => scrollToSection('stack')} className="hover:text-slate-950 transition-colors cursor-pointer">
            Tecnologías
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-slate-950 transition-colors cursor-pointer">
            Proyectos
          </button>
          <button onClick={() => scrollToSection('cv')} className="hover:text-slate-950 transition-colors cursor-pointer flex items-center gap-1">
            <span>CV</span>
            <span className="bg-emerald-100 text-[#008736] text-[10px] px-1.5 py-0.5 rounded font-bold font-mono">PDF</span>
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-slate-950 transition-colors cursor-pointer">
            Contacto
          </button>
        </nav>

        {/* ACCIONES DERECHA */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Botón Asistente IA */}
          <button
            onClick={onOpenAssistant}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/90 text-slate-900 border border-slate-200 text-xs font-bold transition shadow-xs cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Patri AI</span>
            <span className="bg-[#00E575]/20 text-[#008736] text-[9px] px-1 rounded font-mono">2.5</span>
          </button>

          {/* Enlace de Contacto Directo */}
          <button
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-black text-white text-xs font-bold transition shadow-sm hover:shadow-md cursor-pointer flex items-center gap-1.5"
          >
            <span>Hablemos</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#00FF66]" />
          </button>
        </div>

        {/* BOTÓN MENÚ MÓVIL */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenAssistant}
            className="p-2 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 cursor-pointer"
            aria-label="Abrir asistente"
          >
            <Bot className="w-5 h-5 text-[#FF6B00]" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900 text-white cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 font-medium text-slate-800 text-base">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Sobre mí</span>
              <span className="text-xs text-slate-400 font-mono">01</span>
            </button>
            <button
              onClick={() => scrollToSection('stack')}
              className="text-left py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Tecnologías</span>
              <span className="text-xs text-slate-400 font-mono">02</span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-left py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Proyectos</span>
              <span className="text-xs text-slate-400 font-mono">03</span>
            </button>
            <button
              onClick={() => scrollToSection('cv')}
              className="text-left py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Curriculum Vitae</span>
              <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded font-mono font-bold">PDF</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 flex items-center justify-between"
            >
              <span>Contacto</span>
              <span className="text-xs text-slate-400 font-mono">05</span>
            </button>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssistant();
              }}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#00E575] to-[#FFE500] text-slate-950 font-bold text-xs uppercase flex items-center justify-center gap-2 shadow-sm"
            >
              <Bot className="w-4 h-4" />
              <span>Chatear con Patri AI</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}