import React from 'react';

export default function NavbarPacman() {
    return (
        <>
            <style>{`
        @keyframes pacmanMove {
          0% { transform: translateX(-40px); }
          100% { transform: translateX(calc(100vw + 40px)); }
        }
        @keyframes biteMouth {
          0%, 100% { clip-path: polygon(0 0, 100% 0, 100% 40%, 50% 50%, 100% 60%, 100% 100%, 0 100%); }
          50% { clip-path: polygon(0 0, 100% 0, 100% 0%, 50% 50%, 100% 100%, 100% 100%, 0 100%); }
        }
        .pacman-track {
          animation: pacmanMove 12s linear infinite;
        }
        .pacman-body {
          animation: biteMouth 0.25s infinite ease-in-out;
        }
      `}</style>

            {/* Contenedor holgado en el borde inferior del Navbar para evitar recortes */}
            <div className="absolute -bottom-2 left-0 right-0 h-6 overflow-visible pointer-events-none z-40 hidden md:block">
                <div className="absolute top-1 pacman-track flex items-center gap-8">

                    {/* Pac-Man con animación de mordisco limpia por CSS */}
                    <div className="w-4 h-4 bg-[#00FF66] rounded-full pacman-body shadow-[0_0_10px_#00FF66]"></div>

                    {/* Puntos neón al frente */}
                    <div className="flex items-center gap-8 text-[#00FF66]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] shadow-[0_0_6px_#00FF66]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] shadow-[0_0_6px_#00FF66]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] shadow-[0_0_6px_#00FF66]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] shadow-[0_0_6px_#00FF66]"></span>
                    </div>

                </div>
            </div>
        </>
    );
}