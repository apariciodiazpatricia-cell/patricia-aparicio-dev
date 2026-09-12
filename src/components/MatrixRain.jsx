import React, { useEffect, useState } from 'react';

const codeSnippets = [
    "const patricia = 'dev';", "import React from 'react';", "npm run build",
    "git push origin main", "useState()", "useEffect()", "tailwind.config.js",
    "<Hero />", "API_STATUS: 200", "node server.js", "async/await", "git commit"
];

export default function MatrixRain() {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        const items = Array.from({ length: 45 }).map((_, i) => ({
            id: i,
            text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
            left: Math.random() * 96 + 2,
            duration: Math.random() * 10 + 6,
            delay: Math.random() * 8,
            opacity: Math.random() * 0.22 + 0.05
        }));
        setElements(items);
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <style>{`
        @keyframes matrixFall {
          0% { transform: translateY(-100px); opacity: 0; }
          15% { opacity: 0.22; }
          85% { opacity: 0.22; }
          100% { transform: translateY(105vh); opacity: 0; }
        }
        .matrix-code {
          animation: matrixFall linear infinite;
        }
      `}</style>

            {elements.map((item) => (
                <div
                    key={item.id}
                    className="absolute font-mono text-[11px] text-[#00FF66] matrix-code select-none"
                    style={{
                        left: `${item.left}%`,
                        animationDuration: `${item.duration}s`,
                        animationDelay: `${item.delay}s`,
                        opacity: item.opacity
                    }}
                >
                    {item.text}
                </div>
            ))}
        </div>
    );
}