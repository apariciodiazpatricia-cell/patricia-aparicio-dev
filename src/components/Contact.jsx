import React, { useState } from 'react';
import { Mail, Copy, CheckCircle2, Send, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(formData.subject || 'Contacto desde Portfolio')}&body=${encodeURIComponent(`Hola Patri,\n\nSoy ${formData.name} (${formData.email}).\n\n${formData.message}`)}`;
    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-mono">
      
      {/* Header de Sección */}
      <div className="border-l-4 border-[#00FF66] pl-4 mb-12">
        <h2 className="text-3xl font-extrabold text-white">Contacto Directo</h2>
        <p className="text-[#A0A0A0] text-sm mt-1">
          Hablemos sobre nuevas oportunidades laborales, proyectos o colaboraciones técnicas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Columna Izquierda: Canales Directos */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Tarjeta de Email Rápido */}
          <div className="p-6 rounded-2xl bg-[#121212] border border-[#222] hover:border-[#00FF66]/40 transition duration-500 shadow-[0_0_30px_rgba(0,0,0,0.6)] space-y-4">
            <span className="text-[10px] font-mono text-[#00FF66] font-bold tracking-wider">// CANAL PRIORITARIO</span>
            
            <h3 className="text-lg font-bold text-white">Escríbeme un Correo</h3>
            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              Respondo con prontitud a ofertas de trabajo y consultas de desarrollo.
            </p>

            <div className="p-3 bg-black border border-[#222] rounded-xl flex items-center justify-between">
              <span className="text-xs font-mono text-[#00FF66] font-bold truncate">
                {profile.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-[#181818] hover:bg-[#222] text-white transition cursor-pointer flex-shrink-0"
                title="Copiar email"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-[#00FF66]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full py-3 px-4 rounded-xl bg-black border border-[#222] text-white hover:border-[#00FF66] hover:text-[#00FF66] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition duration-300 shadow-[0_0_15px_rgba(0,255,102,0.1)] cursor-pointer"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#00FF66]" />
                  <span>¡Email Copiado al Portapapeles!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#00FF66]" />
                  <span>Copiar Email al Portapapeles</span>
                </>
              )}
            </button>
          </div>

          {/* Tarjetas de Redes Sociales (LinkedIn, GitHub, Vercel) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-xl bg-black border border-[#222] hover:border-[#00FF66]/60 shadow-sm transition flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#121212] text-[#00FF66] flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div className="truncate">
                <h4 className="text-xs font-bold text-white">LinkedIn</h4>
                <p className="text-[10px] text-gray-500 font-mono truncate">/in/patricia</p>
              </div>
            </a>

            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-xl bg-black border border-[#222] hover:border-[#00FF66]/60 shadow-sm transition flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#121212] text-[#00FF66] flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                <GithubIcon className="w-4 h-4" />
              </div>
              <div className="truncate">
                <h4 className="text-xs font-bold text-white">GitHub</h4>
                <p className="text-[10px] text-gray-500 font-mono truncate">@aparicio</p>
              </div>
            </a>

            <a
              href={profile.socialLinks.vercel}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-xl bg-black border border-[#222] hover:border-[#00FF66]/60 shadow-sm transition flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#121212] text-[#FFB300] flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 1L24 22H0L12 1Z" />
                </svg>
              </div>
              <div className="truncate">
                <h4 className="text-xs font-bold text-white">Vercel</h4>
                <p className="text-[10px] text-gray-500 font-mono truncate">Projects</p>
              </div>
            </a>

          </div>

          {/* Ubicación y Disponibilidad */}
          <div className="p-3.5 rounded-xl bg-black border border-[#222] flex items-center justify-between text-xs font-mono text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00FF66]" />
              <span>Sevilla, España (Remoto / Híbrido)</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping"></span>
          </div>

        </div>

        {/* Columna Derecha: Formulario de Mensaje */}
        <div className="lg:col-span-7 bg-[#121212] border border-[#222] rounded-2xl p-6 sm:p-8 shadow-xl">
          
          <h3 className="text-lg font-bold text-white mb-1">Envíame un Mensaje Directo</h3>
          <p className="text-xs text-gray-400 mb-6 font-mono">
            Rellena el formulario y se abrirá tu gestor de correo preparado para enviar.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-300">Tu Nombre</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ej. María García"
                  className="w-full bg-black border border-[#333] focus:border-[#00FF66] text-white text-xs px-3.5 py-2.5 rounded-xl outline-none transition font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-300">Tu Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@empresa.com"
                  className="w-full bg-black border border-[#333] focus:border-[#00FF66] text-white text-xs px-3.5 py-2.5 rounded-xl outline-none transition font-mono"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300">Asunto</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Ej. Oportunidad Frontend Developer"
                className="w-full bg-black border border-[#333] focus:border-[#00FF66] text-white text-xs px-3.5 py-2.5 rounded-xl outline-none transition font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300">Mensaje</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Cuéntame sobre el puesto, proyecto o requerimientos..."
                className="w-full bg-black border border-[#333] focus:border-[#00FF66] text-white text-xs p-3.5 rounded-xl outline-none transition resize-none font-mono"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-black border-2 border-[#00FF66] text-[#00FF66] hover:bg-[#00FF66] hover:text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition duration-300 shadow-[0_0_15px_rgba(0,255,102,0.15)] cursor-pointer"
            >
              <span>Redactar y Enviar Email</span>
              <Send className="w-4 h-4" />
            </button>

            {formSubmitted && (
              <p className="text-xs text-[#00FF66] font-mono text-center animate-pulse">
                ¡Gracias! Abriendo tu gestor de correo para enviar el mensaje...
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
}