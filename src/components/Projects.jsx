import React from 'react';
import { Trophy, Home, ShoppingCart, Tv, Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import buhardillaVideo from '../assets/buhardilla-demo.mp4';
import inmobiliariaVideo from '../assets/inmobiliaria-demo.mp4';
import valhallaVideo from '../assets/valhalla-demo.mp4';
import worldcupImg from '../assets/worldcup-demo.png';
import WeatherWidget from './WeatherWidget';

export default function Projects() {
  const { projects } = portfolioData;

  const mediaMap = {
    'world-cup-2026': { type: 'image', src: worldcupImg },
    'habitatcode': { type: 'video', src: inmobiliariaVideo },
    'valhalla-chatarrero': { type: 'video', src: valhallaVideo },
    'buhardilla-retro': { type: 'video', src: buhardillaVideo }
  };

  const getProjectIcon = (id) => {
    switch (id) {
      case 'world-cup-2026': return <Trophy className="w-5 h-5 text-[#00FF66]" />;
      case 'habitatcode': return <Home className="w-5 h-5 text-[#FFE600]" />;
      case 'valhalla-chatarrero': return <ShoppingCart className="w-5 h-5 text-[#FF6B00]" />;
      case 'buhardilla-retro': return <Tv className="w-5 h-5 text-[#00FFAA]" />;
      default: return <Sparkles className="w-5 h-5 text-[#00FF66]" />;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      
      {/* Header de Sección con Widget Clima */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="border-l-4 border-[#00FF66] pl-4">
          <h2 className="text-3xl font-extrabold text-white">Proyectos & Casos de Éxito</h2>
          <p className="text-[#A0A0A0] text-sm mt-1 max-w-xl">
            Aplicaciones desarrolladas con React, APIs en tiempo real, integración climática y diseño responsive.
          </p>
        </div>

        <div className="w-full md:w-auto md:min-w-[320px]">
          <WeatherWidget />
        </div>
      </div>

      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {projects.map((project) => {
          const media = mediaMap[project.id];

          return (
            <div
              key={project.id}
              className="bg-[#121212] border border-[#222] hover:border-[#00FF66]/50 rounded-2xl overflow-hidden shadow-2xl transition duration-500 flex flex-col justify-between group"
            >
              
              {/* Media: Video o Imagen del proyecto */}
              <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center border-b border-[#222]">
                {media?.type === 'video' && (
                  <video
                    src={media.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                )}
                {media?.type === 'image' && (
                  <img
                    src={media.src}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                  />
                )}
                {!media && (
                  <div className="w-full h-full bg-gradient-to-tr from-black via-[#0d1f14] to-black flex flex-col items-center justify-center text-center p-6 text-white relative">
                    <div className="w-16 h-16 rounded-2xl bg-[#00FF66]/10 border border-[#00FF66]/40 flex items-center justify-center mb-3 shadow-[0_0_30px_rgba(0,255,102,0.3)]">
                      <Trophy className="w-8 h-8 text-[#00FF66]" />
                    </div>
                    <h4 className="font-mono font-bold text-lg text-white">WORLD CUP 2026 // LIVE STATS</h4>
                    <p className="text-xs text-[#00FF66] font-mono mt-1">Sports Data & Dynamic Routing</p>
                  </div>
                )}

                {/* Badge flotante de categoría */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-[#00FF66] text-xs font-mono font-bold border border-[#00FF66]/30 shadow-md">
                    {project.badge}
                  </span>
                </div>

                {/* Resaltado del proyecto */}
                <div className="absolute bottom-2.5 left-3 right-3 px-3 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-white/10 text-[11px] text-[#00FF66] font-mono truncate">
                  ⚡ {project.highlight}
                </div>
              </div>

              {/* Contenido Textual */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-black border border-[#222] flex items-center justify-center">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#00FF66] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-400">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-[#A0A0A0] text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags / Tecnologías */}
                <div className="space-y-4 pt-3 border-t border-[#1c1c1c]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-1 rounded-md bg-black border border-[#222] text-gray-300 text-[11px] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Botones Enlaces a GitHub & Vercel */}
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-black border border-[#00FF66]/40 text-[#00FF66] hover:bg-[#00FF66] hover:text-black font-mono text-xs font-bold transition flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,255,102,0.1)] cursor-pointer"
                    >
                      <span>Demo en Vercel</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-4 rounded-xl bg-black border border-[#222] hover:border-[#00FF66] text-gray-300 hover:text-[#00FF66] text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer"
                      title="Ver Repositorio en GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span className="hidden sm:inline">Código</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}