import React from 'react';

export default function HeroRobot() {
    return (
        <div className="relative w-screen left-1/2 -translate-x-1/2 h-14 overflow-hidden select-none pointer-events-none mb-4">
            <style>{`
        @keyframes patrolAboutFull {
          0% { transform: translateX(16px); }
          50% { transform: translateX(calc(100vw - 290px)); }
          100% { transform: translateX(16px); }
        }
        .about-robot-patrol {
          animation: patrolAboutFull 18s infinite ease-in-out;
        }
      `}</style>

            {/* Droide patrullando por encima de Sobre Mí cruzando toda la pantalla de lado a lado */}
            <div className="absolute top-1 left-0 about-robot-patrol pointer-events-none z-20 flex">
                <div className="bg-black/95 border-2 border-[#00FF66] px-4 py-2 rounded-xl shadow-[0_0_25px_rgba(0,255,102,0.45)] flex items-center gap-3 font-mono text-xs text-[#00FF66]">
                    <span className="text-base animate-bounce">🤖</span>
                    <div className="flex flex-col">
                        <span className="font-bold tracking-wider text-[11px] text-white">[-O_O-] SCOUT_BOT</span>
                        <span className="text-[9px] text-[#00FF66] animate-pulse">&gt;&gt; inspecting about_me...</span>
                    </div>
                </div>
            </div>
        </div>
    );
}