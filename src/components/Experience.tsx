'use client';

import { jobs } from '@/data/config';
import dayjs from 'dayjs';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950/40 border-y border-slate-900 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-display inline-block">
            Professional Journey
          </h2>
          <div className="w-16 h-1 bg-orange-400 rounded mt-2 mx-auto" />
        </div>

        {/* Vertical Timeline container */}
        <div className="relative border-l-2 border-slate-850 pl-8 space-y-12 ml-4">
          {jobs.map((job) => {
            const start = dayjs(job.startDate);
            const end = job.present ? dayjs() : dayjs(job.endDate);
            const totalMonths = Math.max(1, Math.round(end.diff(start, 'month', true)));
            
            const years = Math.floor(totalMonths / 12);
            const months = totalMonths % 12;
            const durationStr = `${years > 0 ? `${years} yr ` : ''}${months > 0 ? `${months} mos` : ''}`;

            return (
              <div key={job.company} className="relative group">
                {/* Timeline node */}
                <span className="absolute -left-[45px] top-1 bg-slate-950 border-2 border-slate-800 rounded-full w-8 h-8 flex items-center justify-center group-hover:border-orange-500 transition duration-300">
                  {job.logo ? (
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-5 h-5 object-contain rounded bg-white p-0.5"
                    />
                  ) : (
                    <i className="fas fa-code text-xs text-orange-400"></i>
                  )}
                </span>

                {/* Timeline card content */}
                <div className="p-6 sm:p-8 bg-slate-900/40 border border-slate-850 hover:border-orange-500/30 rounded-2xl transition duration-300 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 font-display">
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-orange-400 transition"
                        >
                          {job.company}
                        </a>
                      </h3>
                      <p className="text-orange-400 font-semibold text-sm">
                        {job.occupation}
                      </p>
                    </div>
                    
                    <div className="text-left sm:text-right">
                      <span className="text-xs font-mono font-semibold px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full">
                        {start.format('MMM YYYY')} — {job.present ? 'Present' : dayjs(job.endDate).format('MMM YYYY')}
                      </span>
                      <span className="block text-xs text-slate-500 mt-1 font-semibold">
                        ({durationStr})
                      </span>
                    </div>
                  </div>

                  {job.description && (
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed italic">
                      {job.description}
                    </p>
                  )}

                  <ul className="space-y-2 mb-6">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start gap-2.5">
                        <span className="text-orange-400 mt-1.5 text-[10px]">&#10142;</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badge tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-850/60">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-slate-950 text-slate-400 px-2.5 py-1.5 rounded-lg border border-slate-900"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
