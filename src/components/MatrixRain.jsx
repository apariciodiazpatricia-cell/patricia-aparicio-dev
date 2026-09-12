import React, { useEffect, useState } from 'react';

const codeSnippets = [
    "const patricia = 'dev';", "import React from 'react';", "npm run build",
    "git push origin main", "useState()", "useEffect()", "tailwind.config.js",
    "<Hero />", "API_STATUS: 200", "node server.js", "async/await", "git commit -m 'feat'",
    "01100001 01110000", "0x7F // hex", "while(learning) { code(); }",
    "export default function", "REST_API::OK", "FULLSTACK_MODE: ON",
    "flex flex-col", "rgba(0, 255, 102, 1)", "fetch('/api/projects')",
    "<h1>PORTFOLIO</h1>", "&& true", "{ ...state }", "return ( <App /> );"
];

export default function MatrixRain() {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        const items = Array.from({ length: 45 }).map((_, i) => ({
            id: i,
            text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
            left: Math.random() * 96 + 2,
            duration: Math.random() * 8 + 7, // 7s a 15s
            delay: Math.random() * 8,
            fontSize: Math.random() > 0.5 ? '11px' : '9.5px',
        }));
        setElements(items);
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <style>{`
        @keyframes matrixFall {
          0% { transform: translateY(-120px); opacity: 0; }
          15% { opacity: 0.14; }
          85% { opacity: 0.14; }
          100% { transform: translateY(110vh); opacity: 0; }
        }
        .matrix-code {
          animation: matrixFall linear infinite;
        }
      `}</style>

            {elements.map((item) => (
                <div
                    key={item.id}
                    className="absolute font-mono matrix-code select-none whitespace-nowrap tracking-wider text-[#00FF66]"
                    style={{
                        left: `${item.left}%`,
                        fontSize: item.fontSize,
                        animationDuration: `${item.duration}s`,
                        animationDelay: `${item.delay}s`,
                        textShadow: '0 0 4px rgba(0, 255, 102, 0.35)'
                    }}
                >
                    {item.text}
                </div>
            ))}
        </div>
    );
}