'use client';

import { socialLinks } from '@/data/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 py-12 px-6 border-t border-slate-900 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-500 font-semibold font-display">
          &copy; {currentYear} Moataz Mohammady. All rights reserved.
        </p>

        {/* Social Icons list */}
        <div className="flex items-center gap-4">
          {Object.entries(socialLinks)
            .filter(([_, value]) => value.show !== false)
            .map(([key, value]) => (
              <a
                key={key}
                href={value.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-orange-500/50 text-slate-400 hover:text-orange-400 flex items-center justify-center transition duration-300"
                title={value.name || key}
              >
                <i className={`fab ${value.icon} text-lg`}></i>
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
}
