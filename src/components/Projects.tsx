'use client';

import { useState } from 'react';
import { projects } from '@/data/config';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = projects.filter((p) => p.show);
  // Default to showing 6 projects, then toggle to show all
  const displayedProjects = showAll ? visibleProjects : visibleProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="relative mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-display inline-block">
          Side Projects
        </h2>
        <div className="w-16 h-1 bg-orange-400 rounded mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col bg-slate-900/40 border border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-500/40"
          >
            {/* Project Image Placeholder / Icon header */}
            <div className="h-44 bg-gradient-to-br from-slate-900 to-slate-950 border-b border-slate-850 flex items-center justify-center p-6 text-center">
              <div className="absolute inset-0 bg-radial-gradient from-orange-500/5 to-transparent pointer-events-none" />
              <i className={`${project.icon || 'fas fa-code'} text-4xl text-slate-700/60`} />
            </div>

            {/* Project body */}
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                Released {project.year}
              </span>
              
              <h3 className="text-xl font-bold text-slate-100 font-display mt-1 mb-3">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tools list */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/10 px-2 py-0.5 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Action Link button */}
              <div className="pt-4 border-t border-slate-850/60 flex items-center gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold bg-slate-950 border border-slate-900 hover:border-orange-500/50 hover:bg-orange-500/5 text-slate-300 hover:text-orange-400 rounded-xl transition duration-300 flex items-center gap-2"
                >
                  <i className="fas fa-external-link-alt text-[10px]"></i> View Project
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition duration-300"
                    title="View GitHub Repository"
                  >
                    <i className="fab fa-github text-lg"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle reveal button */}
      {visibleProjects.length > 6 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-orange-500/40 text-sm font-semibold text-slate-200 hover:text-orange-400 rounded-xl transition duration-300 cursor-pointer shadow-lg"
          >
            {showAll ? (
              <>
                Show Less <i className="fas fa-chevron-up ml-2 text-xs"></i>
              </>
            ) : (
              <>
                Show All Projects ({visibleProjects.length}) <i className="fas fa-chevron-down ml-2 text-xs"></i>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
