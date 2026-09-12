import React from 'react';

export default function HeroRobot() {
    return (
        <>
            <style>{`
        @keyframes patrolBottomHero {
          0% { transform: translateX(0px); }
          50% { transform: translateX(calc(100vw - 320px)); }
          100% { transform: translateX(0px); }
        }
        .hero-bottom-patrol {
          animation: patrolBottomHero 20s infinite ease-in-out;
        }
      `}</style>

            {/* Droide más grande patrullando la base del Hero */}
            <div className="absolute bottom-2 left-6 hero-bottom-patrol pointer-events-none z-20 hidden md:flex">
                <div className="bg-black border-2 border-[#00FF66] px-4 py-2.5 rounded-xl shadow-[0_0_25px_rgba(0,255,102,0.4)] flex items-center gap-3 font-mono text-xs text-[#00FF66]">
                    <span className="text-lg animate-bounce">🤖</span>
                    <div className="flex flex-col">
                        <span className="font-bold tracking-wider text-xs text-white">[-O_O-] CORE_ACTIVE</span>
                        <span className="text-[10px] text-[#00FF66] animate-pulse">&gt;&gt;&gt; compiling fullstack modules...</span>
                    </div>
                </div>
            </div>
        </>
    );
}