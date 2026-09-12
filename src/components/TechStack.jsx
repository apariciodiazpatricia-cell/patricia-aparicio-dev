import React from 'react';

const stackCategories = [
    {
        category: "Frontend & UI",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS", "Bootstrap", "Figma"]
    },
    {
        category: "Backend, APIs & Databases",
        skills: ["Node.js", "Express", "REST APIs", "Bases de Datos Relacionales", "SQL", "Manejo de Servidores"]
    },
    {
        category: "Herramientas & Workflow",
        skills: ["Git", "GitHub", "Visual Studio Code", "Vercel", "Postman", "Control de Versiones"]
    }
];

export default function TechStack() {
    return (
        <section id="stack" className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
            <div className="border-l-4 border-[#00FF66] pl-4 mb-10">
                <h2 className="text-3xl font-extrabold text-white">Stack Tecnológico</h2>
                <p className="text-[#A0A0A0] text-sm mt-1">Tecnologías y herramientas que domino para el desarrollo integral de aplicaciones web.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stackCategories.map((group, index) => (
                    <div
                        key={index}
                        className="bg-[#121212] border border-[#222] p-6 rounded-2xl shadow-xl hover:border-[#00FF66]/50 transition duration-300"
                    >
                        <h3 className="text-lg font-bold mb-5 text-[#00FF66] font-mono border-b border-[#222] pb-3">
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs font-mono bg-black text-[#A0A0A0] border border-[#222] px-3 py-1.5 rounded-lg hover:text-[#00FF66] hover:border-[#00FF66]/40 transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}