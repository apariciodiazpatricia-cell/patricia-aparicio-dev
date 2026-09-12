import React, { useState, useEffect } from 'react';
import NavbarPacman from './NavbarPacman';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono text-xs ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-[#222] py-3.5 shadow-xl' : 'bg-transparent py-6'
            }`}>

            <NavbarPacman />

            <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between relative z-50">

                <div
                    onClick={() => scrollToSection('hero')}
                    className="flex items-center gap-2 cursor-pointer group"
                >
                    <span className="text-[#00FF66] font-bold text-sm">~/patricia-aparicio</span>
                    <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse"></span>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-[#A0A0A0]">
                    <button onClick={() => scrollToSection('about')} className="hover:text-[#00FF66] transition cursor-pointer">
                        <span className="text-[#00FF66]">01.</span> _about
                    </button>
                    <button onClick={() => scrollToSection('stack')} className="hover:text-[#00FF66] transition cursor-pointer">
                        <span className="text-[#00FF66]">02.</span> _stack
                    </button>
                    <button onClick={() => scrollToSection('projects')} className="hover:text-[#00FF66] transition cursor-pointer">
                        <span className="text-[#00FF66]">03.</span> _projects
                    </button>
                    <button onClick={() => scrollToSection('contact')} className="hover:text-[#00FF66] transition cursor-pointer">
                        <span className="text-[#00FF66]">04.</span> _contact
                    </button>
                </nav>

                <div className="hidden lg:flex items-center gap-2 bg-[#121212] border border-[#222] px-3 py-1.5 rounded-lg text-[#777]">
                    <span className="text-[#00FF66]">status:</span>
                    <span className="text-white">online_ready</span>
                </div>

            </div>
        </header>
    );
}