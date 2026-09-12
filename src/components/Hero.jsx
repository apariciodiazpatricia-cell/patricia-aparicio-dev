import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, Download, ExternalLink, Sparkles, Code2, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import avatarImg from '../assets/avatar.jpg';
import { portfolioData } from '../data/portfolioData';
import WeatherWidget from './WeatherWidget';
import ApiWidget from './ApiWidget';

export default function Hero({ onOpenAssistant }) {
  const { profile } = portfolioData;
  const fullText = "Desarrolladora Frontend Junior";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 45);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full pt-6 pb-16 px-4 md:px-12 max-w-7xl mx-auto font-mono">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Columna Izquierda: Presentación y Terminal */}
        <div className="lg:col-span-7 text-left space-y-6">
          
          {/* Barra superior de terminal con estado y mini clima */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/90 border border-[#00FF66]/40 text-xs text-[#888] shadow-[0_0_15px_rgba(0,255,102,0.15)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
              <span className="ml-2 text-[#00FF66]">patri@matrix:~ -- guest-session</span>
            </div>

            <WeatherWidget compact={true} />
          </div>

          <p className="font-mono text-xs sm:text-sm text-[#00FF66] tracking-widest uppercase drop-shadow-[0_0_8px_rgba(0,255,102,0.6)]">
            &gt; SYSTEM_INITIALIZED // WELCOME_USER
          </p>

          {/* Título principal con glow neon */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Hola, soy <span className="text-[#00FF66] drop-shadow-[0_0_25px_rgba(0,255,102,0.5)]">Patri Aparicio</span>
          </h1>

          {/* Efecto máquina de escribir terminal */}
          <div className="font-mono text-sm sm:text-base text-[#A0A0A0] bg-black/60 border border-[#222] px-4 py-2.5 rounded-xl">
            <span className="text-[#00FF66] font-bold">&gt; </span>
            <span className="text-white">{displayedText}</span>
            <span className="animate-pulse text-[#00FF66] font-black ml-1">_</span>
          </div>

          <p className="text-[#888] text-xs sm:text-sm leading-relaxed max-w-xl">
            Desarrolladora <strong>Frontend Junior</strong> especializada en <strong>React</strong>, <strong>JavaScript</strong>, <strong>Tailwind CSS</strong>, diseño UI en <strong>Figma &amp; Stitch</strong> y consumo de APIs. Actualmente inmersa en un <strong>bootcamp intensivo de +600 horas</strong> para convertirse en <strong>Full Stack</strong>.
          </p>

          {/* Botones de acción (CTAs) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* CTA 1: Asistente IA */}
            <button
              onClick={onOpenAssistant}
              className="px-5 py-3 rounded-xl bg-black border-2 border-[#00FF66] text-[#00FF66] hover:bg-[#00FF66] hover:text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(0,255,102,0.3)] hover:shadow-[0_0_30px_rgba(0,255,102,0.6)] cursor-pointer flex items-center gap-2 transform hover:scale-105"
            >
              <Bot className="w-4 h-4" />
              <span>Chatear con Patri AI</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>

            {/* CTA 2: Ver Proyectos */}
            <button
              onClick={() => scrollToSection('projects')}
              className="px-5 py-3 rounded-xl bg-[#121212] border border-[#333] hover:border-[#00FF66] text-white hover:text-[#00FF66] font-bold text-xs uppercase tracking-wider transition duration-300 cursor-pointer flex items-center gap-2"
            >
              <span>Ver Proyectos</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* CTA 3: Descargar CV */}
            <button
              onClick={() => scrollToSection('cv')}
              className="px-4 py-3 rounded-xl bg-black border border-[#222] hover:border-[#00FF66] text-gray-300 hover:text-[#00FF66] font-bold text-xs uppercase transition cursor-pointer flex items-center gap-1.5"
              title="Descargar Curriculum"
            >
              <Download className="w-4 h-4 text-[#00FF66]" />
              <span>CV</span>
            </button>
          </div>

          {/* Enlaces Sociales */}
          <div className="pt-2 flex items-center gap-5 text-xs text-gray-400 font-mono">
            <span className="text-[#00FF66] font-bold">// SOCIAL:</span>
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-[#00FF66] transition"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-[#00FF66] transition"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.socialLinks.vercel}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-[#00FF66] text-[#FFB300] transition"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Vercel</span>
            </a>
          </div>

        </div>

        {/* Columna Derecha: Foto Principal Cyberpunk + Terminal */}
        <div className="lg:col-span-5 flex flex-col items-center gap-6 relative">
          
          {/* Contenedor Avatar con Borde Neón, Scanlines CRT de monitor futurista y Chips Flotantes */}
          <div className="relative z-10 my-2">
            <style>{`
              @keyframes hudLaserScan {
                0% { top: 0%; opacity: 0; }
                15% { opacity: 0.9; }
                85% { opacity: 0.9; }
                100% { top: 100%; opacity: 0; }
              }
              .hud-laser-line {
                animation: hudLaserScan 4s ease-in-out infinite;
              }
            `}</style>

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl p-1.5 bg-gradient-to-tr from-[#00FF66] via-[#00FFAA] to-[#00FF66] shadow-[0_0_50px_rgba(0,255,102,0.4)] overflow-hidden group">
              
              {/* Imagen base */}
              <img
                src={avatarImg}
                alt="Patricia Aparicio Díaz"
                className="w-full h-full object-cover rounded-[22px] bg-black group-hover:scale-105 transition-transform duration-700 filter contrast-[1.08] brightness-[0.95]"
              />

              {/* 📺 CAPA 1: Rayitas de Monitor Futurista (CRT Scanlines interlineadas) */}
              <div 
                className="absolute inset-1.5 rounded-[22px] pointer-events-none z-10 opacity-70"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0px, rgba(0, 0, 0, 0.45) 2px, transparent 2px, transparent 4px)',
                }}
              ></div>

              {/* ⚡ CAPA 2: Haz de Láser de Escáner que barre de arriba a abajo */}
              <div className="absolute inset-x-1.5 h-1 bg-gradient-to-r from-transparent via-[#00FF66] to-transparent shadow-[0_0_15px_#00FF66] hud-laser-line pointer-events-none z-20"></div>

              {/* 📐 CAPA 3: Marcadores HUD en las cuatro esquinas (Visor táctico) */}
              <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-[#00FF66] pointer-events-none z-20"></div>
              <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-[#00FF66] pointer-events-none z-20"></div>
              <div className="absolute bottom-14 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-[#00FF66] pointer-events-none z-20"></div>
              <div className="absolute bottom-14 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-[#00FF66] pointer-events-none z-20"></div>

              {/* 🔴 CAPA 4: Encabezado Holográfico de la Cámara */}
              <div className="absolute top-3.5 left-8 right-8 flex items-center justify-between text-[9px] font-mono text-[#00FF66] pointer-events-none z-20 tracking-wider">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  <span className="font-bold text-red-400">REC</span>
                </div>
                <span className="opacity-80">HUD_CAM // 60FPS</span>
              </div>

              {/* Degradado para legibilidad del badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 opacity-90 rounded-[22px] pointer-events-none z-10"></div>

              {/* Badge Nombre en la foto */}
              <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-black/90 backdrop-blur-md rounded-xl border border-[#00FF66]/40 text-white flex items-center justify-between z-20 shadow-lg">
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-white flex items-center gap-1.5">
                    <span>Patri Aparicio</span>
                    <span className="text-[10px] text-[#00FF66] font-mono">&lt;dev/&gt;</span>
                  </h3>
                  <p className="text-[10px] text-[#00FF66] font-mono">&gt; FRONTEND_CORE</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00FF66]/20 text-[#00FF66] border border-[#00FF66]/40 font-bold animate-pulse">ONLINE</span>
              </div>
            </div>

            {/* Chip Flotante 1: React 19 */}
            <div className="absolute -top-3 -left-4 sm:-left-6 bg-black/95 border border-[#00FF66]/60 px-3 py-1.5 rounded-2xl shadow-[0_0_20px_rgba(0,255,102,0.3)] flex items-center gap-2 z-30">
              <div className="w-6 h-6 rounded-lg bg-[#00FF66]/10 flex items-center justify-center text-[#00FF66]">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-white">React 19</div>
                <p className="text-[8px] text-[#00FF66] font-mono">&gt; clean_code</p>
              </div>
            </div>

            {/* Chip Flotante 2: Gemini 2.5 Flash */}
            <div className="absolute -bottom-3 -right-4 sm:-right-6 bg-black/95 border border-[#00FF66]/60 px-3 py-1.5 rounded-2xl shadow-[0_0_20px_rgba(0,255,102,0.3)] flex items-center gap-2 z-30">
              <div className="w-6 h-6 rounded-lg bg-[#00FF66]/10 flex items-center justify-center text-[#00FF66]">
                <Cpu className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-white">Gemini 2.5 Flash</div>
                <p className="text-[8px] text-[#00FF66] font-mono">&gt; ai_ready</p>
              </div>
            </div>
          </div>

          {/* Widget de Citas de Desarrollo con Rotación Automática */}
          <div className="w-full max-w-md">
            <ApiWidget />
          </div>

        </div>

      </div>

    </section>
  );
}