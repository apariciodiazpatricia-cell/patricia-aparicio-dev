import React, { useState, useEffect } from 'react';
import ApiWidget from './ApiWidget';
import HeroRobot from './HeroRobot'; // <--- Importamos el robot del Hero

export default function Hero() {
    const fullText = "Desarrolladora Frontend & Entusiasta Fullstack";
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText[index]);
                setIndex(index + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <section id="hero" className="pt-28 pb-14 px-6 md:px-16 max-w-7xl mx-auto relative overflow-hidden">

            {/* Robot patrullando por la parte superior del Hero */}
            <HeroRobot />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                <div className="lg:col-span-7 space-y-6 text-left">
                    <div className="inline-flex items-center gap-2 bg-black border border-[#222] px-4 py-1.5 rounded-full text-xs font-mono text-[#00FF66] shadow-[0_0_20px_rgba(0,255,102,0.15)]">
                        <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping"></span>
                        <span>// PORTAFOLIO OFICIAL •</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Hola, soy <span className="text-[#00FF66] drop-shadow-[0_0_25px_rgba(0,255,102,0.4)]">Patricia Aparicio</span>
                    </h1>

                    <div className="font-mono text-xs sm:text-sm text-[#A0A0A0]">
                        <span className="text-[#00FF66]">&gt; </span>
                        {displayedText}
                        <span className="animate-pulse text-[#00FF66] ml-1">_</span>
                    </div>

                    <p className="text-[#888] text-xs sm:text-sm max-w-xl leading-relaxed">
                        <span>Arquitectura limpia en React, </span>
                        <span>interfaces con identidad visual propia y aprendizaje backend en constante evolución.</span>
                    </p>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-4 relative">

                    <div className="w-full bg-black border border-[#222] rounded-xl p-4 font-mono text-xs shadow-2xl relative">
                        <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#222] text-[#666]">
                            <div className="flex gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66]/80"></span>
                            </div>
                            <span>terminal_session.js</span>
                        </div>
                        <div className="space-y-1 text-white text-[11px]">
                            <p><span className="text-[#00FF66]">const</span> <span className="text-yellow-400">profile</span> = &#123;</p>
                            <p className="pl-4">name: <span className="text-green-300">"Patricia Aparicio"</span>,</p>
                            <p className="pl-4">location: <span className="text-green-300">"Sevilla, España"</span>,</p>
                            <p className="pl-4">status: <span className="text-green-300">"Ready for deployment"</span></p>
                            <p>&#125;;</p>
                        </div>
                    </div>

                    <div className="w-full [&>div]:max-w-none">
                        <ApiWidget />
                    </div>

                </div>

            </div>

        </section>
    );
}