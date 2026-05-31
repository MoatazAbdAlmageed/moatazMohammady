'use client';

import { skills } from '@/data/config';

export default function Skills() {
  const getIconClass = (iconName: string) => {
    if (iconName.includes('fa')) {
      return iconName;
    }
    if (iconName === 'ts') {
      return 'fas fa-bolt'; // TS fallback
    }
    return `fab fa-${iconName}`;
  };

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="relative mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-display inline-block">
          Technical Arsenal
        </h2>
        <div className="w-16 h-1 bg-orange-400 rounded mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((category) => (
          <div
            key={category.title}
            className="p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-md"
          >
            <h3 className="text-lg font-bold text-sky-400 mb-6 uppercase tracking-wider flex items-center gap-2">
              <i className="fas fa-server text-sm"></i> {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <a
                  key={skill.title}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 bg-slate-950 border border-slate-900 hover:border-sky-500/50 hover:bg-sky-500/5 text-sm text-slate-300 hover:text-sky-400 rounded-xl transition duration-300"
                >
                  <i className={`${getIconClass(skill.icon)} text-lg text-slate-400 group-hover:text-sky-400`}></i>
                  <span className="font-medium">{skill.title}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
