'use client';

import { certifications } from '@/data/config';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-950/40 border-t border-slate-900 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-display inline-block">
            Professional Credentials
          </h2>
          <div className="w-16 h-1 bg-orange-400 rounded mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={`${cert.title}-${index}`}
              className="p-6 bg-slate-900/40 border border-slate-850 hover:border-pink-500/30 rounded-2xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-sky-500/10 text-sky-400 rounded-full inline-block mb-3">
                  {cert.place}
                </span>
                <h3 className="text-lg font-bold text-slate-100 font-display mb-2">
                  {cert.title}
                </h3>
                {cert.description && (
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-850/60 mt-4">
                <span className="text-xs text-slate-500 font-semibold">
                  Issued: {cert.issued}
                </span>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-pink-400 hover:text-pink-300 flex items-center gap-1.5 transition"
                >
                  Verify <i className="fas fa-external-link-alt text-[9px]"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
