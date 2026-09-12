import React, { useState, useEffect } from 'react';

export default function NavbarPacman() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 font-mono shadow-2xl ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-[0_4px_25px_rgba(0,255,102,0.15)] border-b border-[#00FF66]/30' 
        : 'bg-black/90 backdrop-blur-sm border-b border-[#1c1c1c]'
    }`}>
      <style>{`
        @keyframes pacmanRunway {
          0% {
            transform: translateX(-340px);
          }
          100% {
            transform: translateX(calc(100vw + 80px));
          }
        }

        @keyframes pacmanAdvance {
          0% { transform: translateX(0px); }
          25% { transform: translateX(65px); }
          50% { transform: translateX(130px); }
          75% { transform: translateX(195px); }
          92%, 100% { transform: translateX(265px); }
        }

        @keyframes pacmanChompTop {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-38deg); }
        }

        @keyframes pacmanChompBottom {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(38deg); }
        }

        @keyframes scaredFlicker {
          0%, 65%, 100% { fill: #2b45ff; }
          75%, 90% { fill: #ffffff; }
        }

        /* 👻 El fantasma desaparece al ser alcanzado por Pac-Man */
        @keyframes ghost1Eaten {
          0%, 22% { opacity: 1; transform: scale(1); }
          24%, 100% { opacity: 0; transform: scale(0); pointer-events: none; }
        }
        /* 🔢 La puntuación reemplaza al fantasma en el centro exacto sin cortarse */
        @keyframes score1Popup {
          0%, 23% { opacity: 0; transform: scale(0.4); }
          25%, 34% { opacity: 1; transform: scale(1.25); }
          38%, 100% { opacity: 0; transform: scale(0.7); }
        }

        @keyframes ghost2Eaten {
          0%, 46% { opacity: 1; transform: scale(1); }
          48%, 100% { opacity: 0; transform: scale(0); pointer-events: none; }
        }
        @keyframes score2Popup {
          0%, 47% { opacity: 0; transform: scale(0.4); }
          49%, 58% { opacity: 1; transform: scale(1.25); }
          62%, 100% { opacity: 0; transform: scale(0.7); }
        }

        @keyframes ghost3Eaten {
          0%, 70% { opacity: 1; transform: scale(1); }
          72%, 100% { opacity: 0; transform: scale(0); pointer-events: none; }
        }
        @keyframes score3Popup {
          0%, 71% { opacity: 0; transform: scale(0.4); }
          73%, 82% { opacity: 1; transform: scale(1.25); }
          86%, 100% { opacity: 0; transform: scale(0.7); }
        }

        @keyframes ghost4Eaten {
          0%, 88% { opacity: 1; transform: scale(1); }
          90%, 100% { opacity: 0; transform: scale(0); pointer-events: none; }
        }
        @keyframes score4Popup {
          0%, 89% { opacity: 0; transform: scale(0.4); }
          91%, 97% { opacity: 1; transform: scale(1.25); }
          99%, 100% { opacity: 0; transform: scale(0.7); }
        }

        .animate-pacman-runway {
          animation: pacmanRunway 12s linear infinite;
        }

        .animate-pacman-advance {
          animation: pacmanAdvance 12s ease-in-out infinite;
        }

        .animate-chomp-top {
          transform-origin: 16px 16px;
          animation: pacmanChompTop 0.2s infinite ease-in-out;
        }

        .animate-chomp-bottom {
          transform-origin: 16px 16px;
          animation: pacmanChompBottom 0.2s infinite ease-in-out;
        }

        .ghost-scared-body {
          animation: scaredFlicker 2s infinite ease-in-out;
        }

        .ghost-eaten-1 { animation: ghost1Eaten 12s infinite; }
        .score-popup-1 { animation: score1Popup 12s infinite; }

        .ghost-eaten-2 { animation: ghost2Eaten 12s infinite; }
        .score-popup-2 { animation: score2Popup 12s infinite; }

        .ghost-eaten-3 { animation: ghost3Eaten 12s infinite; }
        .score-popup-3 { animation: score3Popup 12s infinite; }

        .ghost-eaten-4 { animation: ghost4Eaten 12s infinite; }
        .score-popup-4 { animation: score4Popup 12s infinite; }
      `}</style>

      {/* Contenido principal del Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between relative z-20">
        {/* Sección izquierda: Terminal Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 text-[#00FF66] font-bold text-base sm:text-lg tracking-wide cursor-pointer group select-none"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66] group-hover:scale-125 transition-transform shadow-[0_0_8px_#00FF66]"></span>
          <span className="group-hover:text-white transition-colors">~/patricia-aparicio</span>
          <span className="text-xs text-gray-500 font-normal hidden sm:inline">[dev]</span>
        </div>

        {/* Sección central: Enlaces */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm lg:text-[15px] text-gray-300 font-medium">
          <button 
            onClick={() => scrollToSection('about')} 
            className="hover:text-[#00FF66] transition-colors py-1 cursor-pointer flex items-center gap-1 group"
          >
            <span className="text-[#00FF66] opacity-80 group-hover:opacity-100">&lt;01.</span>
            <span className="group-hover:text-white transition-colors">_about</span>
            <span className="text-[#00FF66] opacity-80 group-hover:opacity-100">&gt;</span>
          </button>
          <button 
            onClick={() => scrollToSection('stack')} 
            className="hover:text-[#00FF66] transition-colors py-1 cursor-pointer flex items-center gap-1 group"
          >
            <span className="text-[#00FF66] opacity-80 group-hover:opacity-100">&lt;02.</span>
            <span className="group-hover:text-white transition-colors">_stack</span>
            <span className="text-[#00FF66] opacity-80 group-hover:opacity-100">&gt;</span>
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="hover:text-[#00FF66] transition-colors py-1 cursor-pointer flex items-center gap-1 group"
          >
            <span className="text-[#00FF66] opacity-80 group-hover:opacity-100">&lt;03.</span>
            <span className="group-hover:text-white transition-colors">_projects</span>
            <span className="text-[#00FF66] opacity-80 group-hover:opacity-100">&gt;</span>
          </button>
          <button 
            onClick={() => scrollToSection('cv')} 
            className="hover:text-[#00FF66] transition-colors py-1 cursor-pointer flex items-center gap-1 group"
          >
            <span className="text-[#00FF66] opacity-80 group-hover:opacity-100">&lt;04.</span>
            <span className="group-hover:text-white transition-colors">_cv</span>
            <span className="text-[#00FF66] opacity-80 group-hover:opacity-100">&gt;</span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="hover:text-[#00FF66] transition-colors py-1 cursor-pointer flex items-center gap-1 group"
          >
            <span className="text-[#00FF66] opacity-80 group-hover:opacity-100">&lt;05.</span>
            <span className="group-hover:text-white transition-colors">_contact</span>
            <span className="text-[#00FF66] opacity-80 group-hover:opacity-100">&gt;</span>
          </button>
        </nav>

        {/* Sección derecha: Status badge con Puntuación Arcade */}
        <div className="flex items-center gap-2 bg-[#111] border border-[#222] hover:border-[#00FF66]/40 transition-colors px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-[13px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-ping"></span>
          <span className="text-[#00FF66] font-semibold">status:</span>
          <span className="text-gray-300">online</span>
          <span className="text-[10px] font-mono font-bold text-[#FFE600] border-l border-[#333] pl-2 tracking-wider">
            +3000 PTS
          </span>
        </div>
      </div>

      {/* 🕹️ PISTA PACMAN DEBAJO DEL NAVBAR (De lado a lado de la pantalla) */}
      <div className="w-full h-9 relative overflow-hidden bg-black/80 border-t border-[#181818] select-none pointer-events-none flex items-center">
        
        {/* Línea de bolitas/pellets arcade de fondo */}
        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-35">
          {Array.from({ length: 42 }).map((_, i) => (
            <div 
              key={i} 
              className={`rounded-full ${
                i % 8 === 0 
                  ? 'w-2 h-2 bg-[#00FF66] shadow-[0_0_6px_#00FF66] animate-pulse' 
                  : 'w-1 h-1 bg-[#00FF66]/60'
              }`}
            />
          ))}
        </div>

        {/* Grupo en movimiento completo (12s de lado a lado) */}
        <div className="absolute left-0 top-0 bottom-0 flex items-center animate-pacman-runway z-10 w-[340px]">
          
          {/* 1. PAC-MAN persiguiendo y avanzando progresivamente hacia adelante */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-pacman-advance z-30 flex items-center">
            {/* Resplandor amarillo */}
            <div className="absolute -inset-1 rounded-full bg-[#FFE600]/30 blur-sm pointer-events-none"></div>

            <svg viewBox="0 0 32 32" className="w-6 h-6 relative z-10 drop-shadow-[0_0_10px_#FFE600]">
              {/* Mitad superior con boca animada */}
              <g className="animate-chomp-top">
                <path d="M 16 16 L 31 16 A 15 15 0 0 0 1 16 Z" fill="#FFE600" />
                <circle cx="15" cy="8" r="1.6" fill="#000000" />
              </g>
              {/* Mitad inferior con boca animada */}
              <g className="animate-chomp-bottom">
                <path d="M 16 16 L 31 16 A 15 15 0 0 1 1 16 Z" fill="#FFE600" />
              </g>
            </svg>

            {/* Chispas de energía detrás de Pacman */}
            <div className="flex gap-1 ml-1 opacity-60">
              <span className="w-1 h-1 rounded-full bg-[#FFE600] animate-ping"></span>
            </div>
          </div>

          {/* 2. Fantasmita 1 (Clyde) - Reemplazado por +200 */}
          <div className="absolute left-[65px] top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
            <span className="text-[11px] font-black text-[#00FF66] font-mono tracking-tighter score-popup-1 drop-shadow-[0_0_8px_#00FF66] select-none">
              +200
            </span>
            <div className="ghost-eaten-1 absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 drop-shadow-[0_0_8px_rgba(43,69,255,0.8)] animate-pulse">
                <path className="ghost-scared-body" d="M 3 12 A 9 9 0 0 1 21 12 L 21 21 L 18 18.5 L 15 21 L 12 18.5 L 9 21 L 6 18.5 L 3 21 Z" />
                <circle cx="8" cy="10" r="1.8" fill="#ffffff" />
                <circle cx="16" cy="10" r="1.8" fill="#ffffff" />
                <circle cx="8" cy="10" r="0.9" fill="#000000" />
                <circle cx="16" cy="10" r="0.9" fill="#000000" />
                <path d="M 6.5 15.5 Q 8.5 14 10.5 15.5 Q 12.5 17 14.5 15.5 Q 16.5 14 17.5 15.5" stroke="#ffffff" strokeWidth="1.2" fill="none" />
              </svg>
            </div>
          </div>

          {/* 3. Fantasmita 2 (Inky) - Reemplazado por +400 */}
          <div className="absolute left-[130px] top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
            <span className="text-[11px] font-black text-[#00FFFF] font-mono tracking-tighter score-popup-2 drop-shadow-[0_0_8px_#00FFFF] select-none">
              +400
            </span>
            <div className="ghost-eaten-2 absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,255,255,0.7)] animate-pulse">
                <path className="ghost-scared-body" d="M 3 12 A 9 9 0 0 1 21 12 L 21 21 L 18 18.5 L 15 21 L 12 18.5 L 9 21 L 6 18.5 L 3 21 Z" />
                <circle cx="8" cy="10" r="1.8" fill="#ffffff" />
                <circle cx="16" cy="10" r="1.8" fill="#ffffff" />
                <circle cx="8" cy="10" r="0.9" fill="#000000" />
                <circle cx="16" cy="10" r="0.9" fill="#000000" />
                <path d="M 6.5 15.5 Q 8.5 14 10.5 15.5 Q 12.5 17 14.5 15.5 Q 16.5 14 17.5 15.5" stroke="#ffffff" strokeWidth="1.2" fill="none" />
              </svg>
            </div>
          </div>

          {/* 4. Fantasmita 3 (Pinky) - Reemplazado por +800 */}
          <div className="absolute left-[195px] top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
            <span className="text-[11px] font-black text-[#FF66CC] font-mono tracking-tighter score-popup-3 drop-shadow-[0_0_8px_#FF66CC] select-none">
              +800
            </span>
            <div className="ghost-eaten-3 absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 drop-shadow-[0_0_8px_rgba(255,102,204,0.7)] animate-pulse">
                <path className="ghost-scared-body" d="M 3 12 A 9 9 0 0 1 21 12 L 21 21 L 18 18.5 L 15 21 L 12 18.5 L 9 21 L 6 18.5 L 3 21 Z" />
                <circle cx="8" cy="10" r="1.8" fill="#ffffff" />
                <circle cx="16" cy="10" r="1.8" fill="#ffffff" />
                <circle cx="8" cy="10" r="0.9" fill="#000000" />
                <circle cx="16" cy="10" r="0.9" fill="#000000" />
                <path d="M 6.5 15.5 Q 8.5 14 10.5 15.5 Q 12.5 17 14.5 15.5 Q 16.5 14 17.5 15.5" stroke="#ffffff" strokeWidth="1.2" fill="none" />
              </svg>
            </div>
          </div>

          {/* 5. Fantasmita 4 (Blinky) - Reemplazado por +1600 */}
          <div className="absolute left-[260px] top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
            <span className="text-[11px] font-black text-[#FFE600] font-mono tracking-tighter score-popup-4 drop-shadow-[0_0_8px_#FFE600] select-none">
              +1600
            </span>
            <div className="ghost-eaten-4 absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 drop-shadow-[0_0_8px_rgba(255,0,85,0.8)] animate-pulse">
                <path className="ghost-scared-body" d="M 3 12 A 9 9 0 0 1 21 12 L 21 21 L 18 18.5 L 15 21 L 12 18.5 L 9 21 L 6 18.5 L 3 21 Z" />
                <circle cx="8" cy="10" r="1.8" fill="#ffffff" />
                <circle cx="16" cy="10" r="1.8" fill="#ffffff" />
                <circle cx="8" cy="10" r="0.9" fill="#000000" />
                <circle cx="16" cy="10" r="0.9" fill="#000000" />
                <path d="M 6.5 15.5 Q 8.5 14 10.5 15.5 Q 12.5 17 14.5 15.5 Q 16.5 14 17.5 15.5" stroke="#ffffff" strokeWidth="1.2" fill="none" />
              </svg>
            </div>
          </div>

        </div>

        {/* Borde sutil inferior brillante de la pista */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00FF66]/30 to-transparent"></div>
      </div>
    </header>
  );
}