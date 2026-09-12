import React from 'react';

// Importamos los vídeos de los assets
import buhardillaVideo from '../assets/buhardilla-demo.mp4';
import inmobiliariaVideo from '../assets/inmobiliaria-demo.mp4';
import valhallaVideo from '../assets/valhalla-demo.mp4';

const projectsList = [
    {
        id: "01",
        title: "Nido Estudiantil Granada",
        category: "Fullstack Web Application",
        description: "Plataforma React para gestión de alojamiento estudiantil. Conecta con APIs en tiempo real para disponibilidad y filtrado de inmuebles.",
        tags: ["React", "Tailwind CSS", "JavaScript", "REST API", "Vercel"],
        link: "https://github.com/apariciodiazpatricia-cell",
        video: inmobiliariaVideo
    },
    {
        id: "02",
        title: "Valhalla del Chatarrero",
        category: "E-Commerce Post-Apocalíptico",
        description: "Interfaz de comercio electrónico con temática post-apocalíptica. Integra pasarelas de datos, componentes React avanzados y la API del clima para estados atmosféricos en vivo.",
        tags: ["React", "Tailwind CSS", "Weather API", "JavaScript", "Figma"],
        link: "https://github.com/apariciodiazpatricia-cell",
        video: valhallaVideo
    },
    {
        id: "03",
        title: "Proyecto Buhardilla",
        category: "Web Frontend & Interactive UI",
        description: "Desarrollo interactivo enfocado en la maquetación de espacios. Conecta con la API del tiempo para simular condiciones meteorológicas dinámicas sobre los entornos.",
        tags: ["React", "JavaScript", "Weather API", "Tailwind CSS", "Git"],
        link: "https://github.com/apariciodiazpatricia-cell",
        video: buhardillaVideo
    }
];

export default function Projects() {
    return (
        <section id="projects" className="w-full py-20 px-6 md:px-16 max-w-[1600px] mx-auto relative">

            {/* Cabecera de la sección estilo terminal */}
            <div className="flex flex-col mb-12">
                <div className="inline-flex items-center gap-2 bg-black border border-[#222] px-3.5 py-1.5 rounded-lg text-xs font-mono text-[#00FF66] w-fit mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping"></span>
                    <span>03. _projects // DEPLOYED_SYSTEMS</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                    Trabajos y <span className="text-[#00FF66]">Desarrollados Destacados</span>
                </h2>
            </div>

            {/* Cuadrícula grande y expandida de proyectos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsList.map((project) => (
                    <div
                        key={project.id}
                        className="group bg-[#111] border border-[#222] hover:border-[#00FF66] transition-all duration-500 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,102,0.15)]"
                    >
                        {/* Línea decorativa superior neón al pasar el ratón */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#00FF66] transition-all duration-500"></div>

                        <div>
                            {/* Cabecera de la tarjeta */}
                            <div className="flex items-center justify-between mb-6 font-mono">
                                <span className="text-2xl font-black text-[#333] group-hover:text-[#00FF66] transition">
                                    {project.id}
                                </span>
                                <span className="text-[11px] text-[#00FF66] bg-black border border-[#222] px-3 py-1 rounded-full">
                                    {project.category}
                                </span>
                            </div>

                            {/* Reproductor de vídeo integrado en bucle automático */}
                            <div className="w-full h-48 bg-black border border-[#222] rounded-xl mb-6 overflow-hidden relative shadow-inner">
                                <video
                                    src={project.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-300"
                                />
                            </div>

                            {/* Título y descripción */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00FF66] transition">
                                {project.title}
                            </h3>
                            <p className="text-[#999] text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>
                        </div>

                        <div>
                            {/* Stacks tecnológicos resaltados en verde neón */}
                            <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-black text-[#00FF66] border border-[#00FF66]/30 px-2.5 py-1 rounded-md shadow-[0_0_8px_rgba(0,255,102,0.15)]"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Enlace de acción grande */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full py-3.5 px-5 bg-black border border-[#222] hover:border-[#00FF66] hover:text-[#00FF66] text-white font-mono text-xs font-bold rounded-xl transition duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                            >
                                <span>&gt; EXPLORAR_REPOSITORIO</span>
                                <span className="group-hover/btn:translate-x-1 transition">→</span>
                            </a>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
}