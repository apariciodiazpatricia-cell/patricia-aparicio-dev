import React from 'react';
import { Layout, Server, Sparkles, Globe, Cpu, Palette, Wand2, CheckCircle2, ShieldCheck, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function TechStack() {
  const { skills } = portfolioData;

  return (
    <section id="stack" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-mono">
      
      {/* Header de Sección */}
      <div className="border-l-4 border-[#00FF66] pl-4 mb-12">
        <h2 className="text-3xl font-extrabold text-white">Tecnologías & Stack</h2>
        <p className="text-[#A0A0A0] text-sm mt-1">
          Herramientas frontend, diseño UI/UX (Figma & Stitch), arquitectura backend, testing automatizado e inteligencia artificial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* TARJETA 1: Frontend Core */}
        <div className="bg-[#121212] border border-[#222] hover:border-[#00FF66]/60 transition duration-300 rounded-2xl p-6 shadow-xl flex flex-col justify-between group h-full">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-black border border-[#222] text-[#00FF66] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Layout className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/30">
                Core Frontend
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">Desarrollo Frontend</h3>
            <p className="text-xs text-gray-400 mb-5 leading-relaxed min-h-[36px]">
              Componentes modulares React, maquetación UI/UX moderna y diseño responsive de alta fidelidad.
            </p>

            <div className="space-y-3.5">
              {skills.frontend.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium text-gray-300">
                    <span>{item.name}</span>
                    <span className="text-[#00FF66] font-mono text-[11px] font-bold">{item.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black rounded-full overflow-hidden border border-[#222]">
                    <div
                      className="h-full bg-gradient-to-r from-[#00FF66] to-[#00FFAA] rounded-full transition-all duration-500"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-3.5 rounded-xl bg-black border border-[#222] flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] text-[#00FF66] font-mono font-bold">// REACT ECOSYSTEM</span>
              <p className="text-xs font-bold text-white">Componentes Modulares & Hooks</p>
            </div>
            <Cpu className="w-4 h-4 text-[#00FF66]" />
          </div>
        </div>

        {/* TARJETA 2: Diseño UI/UX & Prototipado (Figma & Stitch) */}
        <div className="bg-[#121212] border border-[#222] hover:border-[#00FFAA]/60 transition duration-300 rounded-2xl p-6 shadow-xl flex flex-col justify-between group h-full">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-black border border-[#222] text-[#00FFAA] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Palette className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#00FFAA]/10 text-[#00FFAA] border border-[#00FFAA]/30">
                UI/UX & Prototyping
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">Diseño UI/UX, Figma & Stitch</h3>
            <p className="text-xs text-gray-400 mb-5 leading-relaxed min-h-[36px]">
              Prototipos interactivos, wireframing, tokens de diseño y generación UI avanzada con <strong>Figma</strong> y <strong>Stitch</strong>.
            </p>

            <div className="space-y-3.5">
              {skills.designAndTools.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium text-gray-300">
                    <span>{item.name}</span>
                    <span className="text-[#00FFAA] font-mono text-[11px] font-bold">{item.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black rounded-full overflow-hidden border border-[#222]">
                    <div
                      className="h-full bg-gradient-to-r from-[#00FFAA] to-[#00FF66] rounded-full transition-all duration-500"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-3.5 rounded-xl bg-black border border-[#222] flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] text-[#00FFAA] font-mono font-bold">// FIGMA TO CODE</span>
              <p className="text-xs font-bold text-white">Pixel-Perfect React UI</p>
            </div>
            <Wand2 className="w-4 h-4 text-[#00FFAA]" />
          </div>
        </div>

        {/* TARJETA 3: Backend & AI */}
        <div className="bg-[#121212] border border-[#222] hover:border-[#FFE600]/60 transition duration-300 rounded-2xl p-6 shadow-xl flex flex-col justify-between group h-full">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-black border border-[#222] text-[#FFE600] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Server className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#FFE600]/10 text-[#FFE600] border border-[#FFE600]/30">
                Backend & AI
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">Backend & Modelos IA</h3>
            <p className="text-xs text-gray-400 mb-5 leading-relaxed min-h-[36px]">
              Servicios REST en Node.js/Express, integración oficial de Google Gemini 2.5 Flash API y bases de datos.
            </p>

            <div className="space-y-3.5">
              {skills.backendAndAi.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium text-gray-300">
                    <span>{item.name}</span>
                    <span className="text-[#FFE600] font-mono text-[11px] font-bold">{item.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black rounded-full overflow-hidden border border-[#222]">
                    <div
                      className="h-full bg-gradient-to-r from-[#FFE600] to-[#FF6B00] rounded-full transition-all duration-500"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-3.5 rounded-xl bg-black border border-[#222] flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] text-[#FFE600] font-mono font-bold">// FULL STACK PIPELINE</span>
              <p className="text-xs font-bold text-white">Express + Gemini AI + REST CRUD</p>
            </div>
            <Database className="w-4 h-4 text-[#FFE600]" />
          </div>
        </div>

        {/* TARJETA 4: Testing & Calidad de Código */}
        <div className="bg-[#121212] border border-[#222] hover:border-[#FF6B00]/60 transition duration-300 rounded-2xl p-6 shadow-xl flex flex-col justify-between group h-full">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-black border border-[#222] text-[#FF6B00] flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30">
                Testing & QA
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">Testing & Calidad de Código</h3>
            <p className="text-xs text-gray-400 mb-5 leading-relaxed min-h-[36px]">
              Pruebas unitarias y de componentes con <strong>Vitest</strong> y <strong>React Testing Library</strong>, asegurando fiabilidad.
            </p>

            <div className="space-y-3.5">
              {skills.testing.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium text-gray-300">
                    <span>{item.name}</span>
                    <span className="text-[#FF6B00] font-mono text-[11px] font-bold">{item.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black rounded-full overflow-hidden border border-[#222]">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF6B00] to-[#FFE600] rounded-full transition-all duration-500"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-3.5 rounded-xl bg-black border border-[#222] flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] text-[#00FF66] font-mono font-bold">// AUTOMATED TESTS</span>
              <p className="text-xs font-bold text-white">Vitest &amp; RTL Passed (10/10)</p>
            </div>
            <CheckCircle2 className="w-4 h-4 text-[#00FF66]" />
          </div>
        </div>

      </div>

      {/* Franja Horizontal de Habilidades Profesionales y Metodologías */}
      <div className="mt-8 p-5 bg-[#121212] border border-[#222] rounded-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#00FF66]" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">// COMPETENCIAS CLAVE & METODOLOGÍAS:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.softSkills.map((skill, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-lg bg-black border border-[#2a2a2a] text-gray-300 hover:text-[#00FF66] hover:border-[#00FF66]/40 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}