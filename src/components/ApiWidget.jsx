import React, { useState, useEffect } from 'react';

const devQuotesEs = [
    "El código es como el humor. Cuando tienes que explicarlo, es malo.",
    "Primero resuelve el problema. Luego, escribe el código.",
    "Optimizar prematuramente es la raíz de todos los males en programación.",
    "Programar es el arte de decirle a otro humano lo que la computadora debe hacer.",
    "Cualquier código tonto que escribas hoy te pasará factura mañana.",
    "Medir el progreso del desarrollo por líneas de código es como medir el peso de un avión por su construcción.",
    "El software y las catedrales son muy similares: primero se construyen, luego se rezan.",
    "No te preocupes si no funciona bien. Si todo estuviera bien, estarías sin trabajo."
];

export default function ApiWidget() {
    const [currentQuote, setCurrentQuote] = useState(devQuotesEs[0]);
    const [loading, setLoading] = useState(false);

    const fetchRandomQuote = () => {
        setLoading(true);
        setTimeout(() => {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * devQuotesEs.length);
            } while (devQuotesEs[randomIndex] === currentQuote);

            setCurrentQuote(devQuotesEs[randomIndex]);
            setLoading(false);
        }, 250);
    };

    // Rotación automática cada 10 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            fetchRandomQuote();
        }, 10000); // 10000 ms = 10 segundos

        return () => clearInterval(interval);
    }, [currentQuote]);

    return (
        <div className="w-full bg-black border border-[#222] hover:border-[#00FF66]/40 transition rounded-xl p-4 text-xs font-mono shadow-2xl my-2 text-left">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#222] text-[#666]">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping"></span>
                    <span className="text-white">dev_quotes_stream.json</span>
                </div>
                <button
                    onClick={fetchRandomQuote}
                    className="text-[#00FF66] hover:underline cursor-pointer"
                    title="Forzar actualización manual"
                >
                    &gt; Refrescar_API()
                </button>
            </div>

            {loading ? (
                <div className="py-3 text-[#00FF66] animate-pulse">GET /api/v1/quotes/es -- fetching...</div>
            ) : (
                <div className="space-y-1.5 text-white">
                    <p className="text-green-300">"{currentQuote}"</p>
                    <p className="text-[#555] text-right text-[10px]">// STATUS: 200 OK (AUTO_ROTATING)</p>
                </div>
            )}
        </div>
    );
}