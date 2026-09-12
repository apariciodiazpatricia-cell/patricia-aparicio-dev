import React, { useState } from 'react';

export default function About() {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <section id="about" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
            <div className="border-l-4 border-[#00FF66] pl-4 mb-12">
                <h2 className="text-3xl font-extrabold text-white">Sobre Mí</h2>
                <p className="text-[#A0A0A0] text-sm mt-1">Filosofía de desarrollo, trayectoria y evolución técnica.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                {/* Columna Izquierda: Claridad sobre tu nivel actual y formación en backend */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-black border border-[#222] px-3.5 py-1.5 rounded-lg text-xs font-mono text-[#00FF66]">
            // PHILOSOPHY.JS
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        Frontend con identidad visual y formación intensiva en backend.
                    </h3>

                    <p className="text-[#A0A0A0] text-sm md:text-base leading-relaxed">
                        Me muevo como pez en el agua en el desarrollo frontend: maquetando con precisión, estructurando interfaces en React y cuidando cada detalle de la experiencia de usuario.
                    </p>

                    <p className="text-[#A0A0A0] text-sm md:text-base leading-relaxed">
                        Actualmente <span className="text-[#00FF66] font-semibold">me estoy formando de manera intensa en el ecosistema backend</span> y bases de datos. No pretendo vender humo: domino la base del desarrollo web y estudio duro cada día para dominar por completo la arquitectura de servidor.
                    </p>
                </div>

                {/* Columna Derecha: Bloque de Código Interactivo */}
                <div className="lg:col-span-6 bg-black border border-[#222] rounded-2xl overflow-hidden shadow-2xl font-mono text-xs">

                    <div className="bg-[#121212] border-b border-[#222] px-4 py-3 flex items-center justify-between">
                        <div className="flex gap-2">
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${activeTab === 'profile' ? 'bg-black text-[#00FF66] border border-[#222]' : 'text-[#777] hover:text-white'}`}
                            >
                                profile.json
                            </button>
                            <button
                                onClick={() => setActiveTab('status')}
                                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${activeTab === 'status' ? 'bg-black text-[#00FF66] border border-[#222]' : 'text-[#777] hover:text-white'}`}
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

                    <div className="p-6 text-white space-y-2 leading-relaxed">
                        {activeTab === 'profile' ? (
                            <div>
                                <p className="text-[#777]">// Datos principales del sistema</p>
                                <p><span className="text-[#00FF66]">const</span> <span className="text-yellow-400">patricia</span> = &#123;</p>
                                <p className="pl-4">core: <span className="text-green-300">"Frontend & React Developer"</span>,</p>
                                <p className="pl-4">location: <span className="text-green-300">"Sevilla, España"</span>,</p>
                                <p className="pl-4">stack: <span className="text-green-300">["React", "Tailwind", "JavaScript", "HTML/CSS"]</span>,</p>
                                <p className="pl-4">mindset: <span className="text-green-300">"Clean Code & Continuous Learning"</span></p>
                                <p>&#125;;</p>
                            </div>
                        ) : (
                            <div>
                                <p className="text-[#777]">// Estado actual de aprendizaje</p>
                                <p><span className="text-[#00FF66]">const</span> <span className="text-yellow-400">currentSprint</span> = &#123;</p>
                                <p className="pl-4">focus: <span className="text-green-300">"Backend Architecture & Node.js"</span>,</p>
                                <p className="pl-4">status: <span className="text-yellow-300">"Intensive Training"</span>,</p>
                                <p className="pl-4">goal: <span className="text-green-300">"Fullstack Integration"</span>,</p>
                                <p className="pl-4">progress: <span className="text-blue-400">"99% dedication"</span></p>
                                <p>&#125;;</p>
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </section>
    );
}