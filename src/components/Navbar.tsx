'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/60 backdrop-blur-md border-b border-slate-900 px-6 py-4 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent font-display">
          &lt;/&gt;
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-orange-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 focus:outline-none p-1"
          aria-label="Toggle Navigation Menu"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 p-4 bg-slate-950/95 border border-slate-900 rounded-xl space-y-3 animate-float-slow">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-orange-400 font-medium py-2 border-b border-slate-900/60 last:border-0"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
