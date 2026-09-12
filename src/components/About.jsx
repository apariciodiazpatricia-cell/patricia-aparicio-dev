import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import HeroRobot from './HeroRobot';

export default function About() {
  const [activeTab, setActiveTab] = useState('profile');
  const { profile } = portfolioData;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-mono relative">
      
      {/* 🤖 Droide explorador patrullando justo arriba de Sobre Mí */}
      <HeroRobot />

      {/* Header de Sección */}
      <div className="border-l-4 border-[#00FF66] pl-4 mb-12 mt-4">
        <h2 className="text-3xl font-extrabold text-white">Sobre Mí</h2>
        <p className="text-[#A0A0A0] text-sm mt-1">Filosofía de desarrollo, trayectoria y evolución técnica.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Columna Izquierda */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 bg-black border border-[#222] px-3.5 py-1.5 rounded-lg text-xs font-mono text-[#00FF66]">
            // PHILOSOPHY.JS
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Frontend Junior con identidad visual y formación intensiva para Full Stack.
          </h3>

          <p className="text-[#A0A0A0] text-sm md:text-base leading-relaxed">
            Me muevo como pez en el agua en el desarrollo frontend: estructurando interfaces modulares en <strong>React</strong>, cuidando cada detalle de la experiencia de usuario con <strong>Tailwind CSS</strong>, diseñando con <strong>Figma y Stitch</strong>, y optimizando el rendimiento.
          </p>

          <p className="text-[#A0A0A0] text-sm md:text-base leading-relaxed bg-black/50 p-4 rounded-xl border border-[#1c1c1c]">
            Actualmente <span className="text-[#00FF66] font-semibold">estoy inmersa en un bootcamp intensivo de más de 600 horas para completar mi formación y titularme como Full Stack</span>. Doy un giro hacia el sector tech con una sólida trayectoria previa en resolución ágil de problemas.
          </p>

          {/* Estadísticas Clave (Tarjetas con tono gris de la paleta principal) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {profile.stats.map((st, i) => (
              <div 
                key={i} 
                className="p-3 sm:p-4 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#00FF66]/60 hover:bg-[#1a1a1a] transition duration-300 flex flex-col items-center justify-center text-center shadow-lg min-h-[85px] group"
              >
                <div className="text-lg sm:text-xl md:text-2xl font-black text-[#00FF66] font-mono tracking-tight leading-none mb-1 group-hover:scale-105 transition-transform">
                  {st.value}
                </div>
                <div className="text-[11px] sm:text-xs text-gray-400 font-mono leading-tight group-hover:text-gray-300 transition-colors">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Bloque de Código Interactivo */}
        <div className="lg:col-span-6 bg-black border border-[#222] rounded-2xl overflow-hidden shadow-2xl font-mono text-xs">
          
          <div className="bg-[#121212] border-b border-[#222] px-4 py-3 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  activeTab === 'profile'
                    ? 'bg-black text-[#00FF66] border border-[#333]'
                    : 'text-[#777] hover:text-white'
                }`}
              >
                profile.json
              </button>
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  activeTab === 'philosophy'
                    ? 'bg-black text-[#FFE600] border border-[#333]'
                    : 'text-[#777] hover:text-white'
                }`}
              >
                philosophy.js
              </button>
              <button
                onClick={() => setActiveTab('learning')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  activeTab === 'learning'
                    ? 'bg-black text-[#FF6B00] border border-[#333]'
                    : 'text-[#777] hover:text-white'
                }`}
              >
                learning.log
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-[#555]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66]/80"></span>
            </div>
          </div>

          <div className="p-6 text-white space-y-2 leading-relaxed min-h-[260px] flex flex-col justify-center">
            {activeTab === 'profile' && (
              <div>
                <p className="text-[#777]">// Datos principales del sistema</p>
                <p><span className="text-[#00FF66]">const</span> <span className="text-yellow-400">patricia</span> = &#123;</p>
                <p className="pl-4">name: <span className="text-green-300">"Patricia Aparicio Díaz"</span>,</p>
                <p className="pl-4">displayName: <span className="text-green-300">"Patri Aparicio"</span>,</p>
                <p className="pl-4">role: <span className="text-green-300">"Frontend Developer Junior"</span>,</p>
                <p className="pl-4">bootcamp: <span className="text-green-300">"+600 horas intensivas"</span>,</p>
                <p className="pl-4">target: <span className="text-green-300">"Full Stack Developer"</span>,</p>
                <p className="pl-4">location: <span className="text-green-300">"Sevilla, España"</span>,</p>
                <p className="pl-4">stack: <span className="text-yellow-300">["React", "JavaScript", "Tailwind CSS", "Figma", "Stitch"]</span></p>
                <p>&#125;;</p>
              </div>
            )}

            {activeTab === 'philosophy' && (
              <div>
                <p className="text-[#777]">// Principios de desarrollo de software</p>
                <p><span className="text-[#00FF66]">class</span> <span className="text-yellow-400">FrontendCraft</span> &#123;</p>
                <p className="pl-4">cleanCode = <span className="text-blue-400">true</span>;</p>
                <p className="pl-4">userExperience = <span className="text-green-300">"Zero friction & pixel perfection"</span>;</p>
                <p className="pl-4">performance = <span className="text-yellow-300">"Modular components & fast load"</span>;</p>
                <p className="pl-4"><span className="text-[#00FF66]">build</span>() &#123; <span className="text-[#00FF66]">return</span> <span className="text-green-300">"Interfaces that work on first try"</span>; &#125;</p>
                <p>&#125;;</p>
              </div>
            )}

            {activeTab === 'learning' && (
              <div>
                <p className="text-[#777]">// Estado actual de formación continua</p>
                <p><span className="text-[#00FF66]">const</span> <span className="text-yellow-400">currentSprint</span> = &#123;</p>
                <p className="pl-4">bootcamp: <span className="text-green-300">"Bootcamp intensivo (+600h)"</span>,</p>
                <p className="pl-4">currentFocus: <span className="text-green-300">"Frontend Junior (React & JS)"</span>,</p>
                <p className="pl-4">target: <span className="text-yellow-300">"Full Stack Developer"</span>,</p>
                <p className="pl-4">dedication: <span className="text-blue-400">"100% daily active training"</span></p>
                <p>&#125;;</p>
              </div>
            )}
          </div>

        </div>

      </div>

    </section>
  );
}