import React, { useState } from 'react';

export default function Contact() {
    const [systemStatus, setSystemStatus] = useState('OPTIMIZED');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSystemStatus('TRANSMITTING...');
        setTimeout(() => {
            setSystemStatus('SUCCESS_200');
            alert('¡Paquete de datos transmitido con éxito!');
        }, 1000);
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-[#222] relative overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#00FF66_0%,transparent_40%)] opacity-5 pointer-events-none"></div>

            <div className="relative z-10 bg-[#121212] border border-[#222] rounded-2xl p-8 md:p-14 shadow-[0_0_50px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Columna Izquierda: Terminal Informativa & Redes */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-black border border-[#222] px-3.5 py-1.5 rounded-lg text-xs font-mono text-[#00FF66]">
                        <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping"></span>
            // SEC_PORTAL_OPEN: AI & FULLSTACK
                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                        ¿Construimos el <span className="text-[#00FF66] drop-shadow-[0_0_15px_rgba(0,255,102,0.4)]">futuro digital</span>?
                    </h2>

                    <p className="text-[#A0A0A0] text-sm md:text-base leading-relaxed">
                        Mi stack está listo. Ya sea para escalar una arquitectura web, diseñar interfaces con React o integrar modelos de IA, conversemos sobre tu próximo gran objetivo tecnológico.
                    </p>

                    <div className="space-y-3 pt-2 font-mono text-xs">
                        <a
                            href="mailto:apariciodiazpatricia@gmail.com"
                            className="flex items-center justify-between p-3.5 rounded-xl bg-black border border-[#222] hover:border-[#00FF66] transition group"
                        >
                            <span className="text-[#A0A0A0] group-hover:text-white transition">📧 EMAIL</span>
                            <span className="text-[#00FF66] truncate ml-2">apariciodiazpatricia@gmail.com</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/patriciaapariciodiaz/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between p-3.5 rounded-xl bg-black border border-[#222] hover:border-[#00FF66] transition group"
                        >
                            <span className="text-[#A0A0A0] group-hover:text-white transition">💼 LINKEDIN</span>
                            <span className="text-[#00FF66] truncate ml-2">/in/patriciaapariciodiaz/</span>
                        </a>

                        <a
                            href="https://github.com/apariciodiazpatricia-cell"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between p-3.5 rounded-xl bg-black border border-[#222] hover:border-[#00FF66] transition group"
                        >
                            <span className="text-[#A0A0A0] group-hover:text-white transition">🐙 GITHUB</span>
                            <span className="text-[#00FF66] truncate ml-2">apariciodiazpatricia-cell</span>
                        </a>
                    </div>
                </div>

                {/* Columna Derecha: Formulario Estilo Terminal de IA */}
                <div className="lg:col-span-6 bg-black border border-[#222] rounded-xl p-6 md:p-8 relative shadow-inner">

                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#222] text-xs font-mono text-[#777]">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-[#00FF66]"></div>
                            <span className="ml-2 text-white">secure-transmission.exe</span>
                        </div>
                        <span className="text-[#00FF66]">STATUS: {systemStatus}</span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                        <div>
                            <label className="block text-xs font-mono text-[#A0A0A0] mb-1.5">// IDENTIFICADOR (NOMBRE)</label>
                            <input
                                type="text"
                                required
                                placeholder="Name..."
                                className="w-full bg-[#121212] border border-[#222] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00FF66] transition"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono text-[#A0A0A0] mb-1.5">// CANAL DE RETORNO (CORREO)</label>
                            <input
                                type="email"
                                required
                                placeholder="email@domain.com..."
                                className="w-full bg-[#121212] border border-[#222] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00FF66] transition"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono text-[#A0A0A0] mb-1.5">// PAYLOAD (MENSAJE)</label>
                            <textarea
                                rows="3"
                                required
                                placeholder="Write your message here..."
                                className="w-full bg-[#121212] border border-[#222] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00FF66] transition resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#00FF66] text-black font-extrabold font-mono py-3 rounded-lg text-xs uppercase tracking-wider hover:bg-[#00cc52] transition shadow-[0_0_20px_rgba(0,255,102,0.4)] cursor-pointer"
                        >
                            &gt; Ejecutar_Transmisión_Datos()
                        </button>
                    </form>
                </div>

            </div>

        </section>
    );
}