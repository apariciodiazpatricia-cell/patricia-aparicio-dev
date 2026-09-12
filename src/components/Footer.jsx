import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [latency, setLatency] = useState(14);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * (22 - 11 + 1)) + 11);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full relative pt-12 pb-16 px-6 md:px-16 overflow-hidden bg-transparent border-t border-[#00FF66]/20 mt-16 font-mono">

      {/* Animación de patrulla para el droide */}
      <style>{`
        @keyframes patrolRobotFooter {
          0% { transform: translateX(0px); }
          50% { transform: translateX(calc(100vw - 320px)); }
          100% { transform: translateX(0px); }
        }
        .robot-patrol {
          animation: patrolRobotFooter 18s infinite ease-in-out;
        }
      `}</style>

      {/* Tarjeta contenedora principal */}
      <div className="w-full relative z-10 bg-[#0d0d0d]/85 backdrop-blur-md border border-[#222] hover:border-[#00FF66]/50 transition duration-500 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,255,102,0.12)]">

        {/* Franja de luz láser superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#00FF66] to-transparent shadow-[0_0_15px_#00FF66]"></div>

        {/* Droide Patrullero Integrado */}
        <div className="absolute -top-6 left-6 robot-patrol pointer-events-none z-20">
          <div className="bg-black border-2 border-[#00FF66] px-3.5 py-2 rounded-xl shadow-[0_0_20px_rgba(0,255,102,0.4)] flex items-center gap-3 font-mono text-xs text-[#00FF66]">
            <span className="text-base animate-bounce">🤖</span>
            <div className="flex flex-col">
              <span className="font-bold tracking-wider text-[11px] text-white">[-O_O-] AI_UNIT</span>
              <span className="text-[9px] text-[#00FF66] animate-pulse">scanning codebase...</span>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between pt-4">

          {/* Identidad y Frase */}
          <div className="lg:col-span-5 space-y-3">
            <div className="inline-flex items-center gap-2 bg-black border border-[#222] px-3 py-1 rounded-lg text-xs font-mono text-[#00FF66]">
              <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping"></span>
              // CORE_SYSTEM: ONLINE
            </div>
            <h3 className="text-xl font-extrabold text-white tracking-wide">
              {profile.displayName} <span className="text-[#00FF66]">// Frontend Dev Jr</span>
            </h3>
            <p className="text-[#A0A0A0] text-xs leading-relaxed font-mono bg-black/40 p-3 rounded-lg border border-[#1a1a1a]">
              &gt; Código limpio en React, diseño UI/UX de alto impacto y formación intensiva continua. Transformo requerimientos en interfaces interactivas de primer nivel.
            </p>
          </div>

          {/* Botón Central de Copiar Email */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <span className="text-[10px] font-mono text-[#777] mb-2">// PORTAPAPELES RÁPIDO</span>
            <button
              onClick={handleCopyEmail}
              className="w-full py-3 px-6 rounded-xl bg-black border border-[#222] text-white font-mono text-xs hover:border-[#00FF66] hover:text-[#00FF66] transition duration-300 shadow-[0_0_15px_rgba(0,255,102,0.1)] group cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{copied ? '¡EMAIL COPIADO AL PORTAPAPELES!' : '📋 Copiar Email'}</span>
            </button>
          </div>

          {/* Telemetría y Botón Top */}
          <div className="lg:col-span-3 flex items-center justify-end gap-6">
            <div className="text-right font-mono text-[11px] hidden sm:block">
              <div className="text-[#555]">PING: <span className="text-[#00FF66]">{latency}ms</span></div>
              <div className="text-[#555]">ENV: <span className="text-white">PROD</span></div>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3.5 rounded-xl bg-black border border-[#222] text-[#00FF66] hover:bg-[#00FF66] hover:text-black transition duration-300 cursor-pointer shadow-[0_0_20px_rgba(0,255,102,0.15)] font-mono text-xs font-bold"
              title="Volver arriba"
            >
              ▲ TOP
            </button>
          </div>

        </div>

        {/* Enlaces de Redes y Copyright Integrados */}
        <div className="mt-10 pt-6 border-t border-[#222] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#777] gap-4">
          <div>
            © {new Date().getFullYear()} Patricia Aparicio Díaz •
          </div>
          <div className="flex gap-6">
            <a href={profile.socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-[#00FF66] transition flex items-center gap-1">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#00FF66] transition flex items-center gap-1">
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a href={profile.socialLinks.vercel} target="_blank" rel="noreferrer" className="hover:text-[#00FF66] text-[#FF6B00] transition">
              Vercel
            </a>
          </div>
        </div>

      </div>

    </footer>
  );
}