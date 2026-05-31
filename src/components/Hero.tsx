'use client';

export default function Hero() {
  const badges = [
    { name: 'PHP', icon: 'fab fa-php' },
    { name: 'Laravel', icon: 'fab fa-laravel' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'Linux', icon: 'fab fa-linux' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl animate-blob-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl animate-blob-float pointer-events-none" />

      {/* Avatar Container with spinning gradient ring */}
      <div className="relative w-48 h-48 mb-8 mt-16 group">
        <div className="absolute inset-0 -m-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition animate-rotate-slow pointer-events-none" />
        <div className="absolute inset-0 -m-1.5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-rotate-slow pointer-events-none" />
        <img
          src="https://avatars.githubusercontent.com/u/17373050?v=4"
          alt="Moataz Mohammady"
          className="relative w-full h-full rounded-full object-cover border-4 border-slate-950 shadow-2xl"
          loading="eager"
        />
      </div>

      {/* Hero Headline & Intro */}
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4 font-display">
        Moataz <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">AbdAlmageed</span>
      </h1>
      
      <p className="max-w-2xl text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
        Senior Backend Developer. Specialist in PHP, Laravel, WordPress, Node.js and familiar with JS frontend frameworks. 
        Active open-source contributor on{' '}
        <a
          href="https://github.com/MoatazAbdAlmageed"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 font-semibold hover:underline"
        >
          GitHub
        </a>
        , and creator sharing expert coding tutorials on{' '}
        <a
          href="https://www.youtube.com/@moatazMohamady"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 font-semibold hover:underline"
        >
          YouTube
        </a>.
      </p>

      {/* Badges list */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-xl">
        {badges.map((badge) => (
          <div
            key={badge.name}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900/60 border border-slate-800/80 rounded-full backdrop-blur text-sm text-slate-200"
          >
            <i className={`${badge.icon} text-orange-400`}></i>
            <span>{badge.name}</span>
          </div>
        ))}
      </div>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <a
          href="#projects"
          className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 text-center"
        >
          <i className="fas fa-rocket mr-2"></i> View My Work
        </a>
        <a
          href="https://flowcv.com/resume/em2lg0713u"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-3 bg-slate-900 border border-slate-800 hover:border-orange-500/50 hover:bg-slate-850 font-semibold rounded-xl text-slate-200 hover:text-orange-400 transition-all hover:-translate-y-0.5 text-center"
        >
          <i className="fas fa-file-pdf mr-2"></i> Download CV
        </a>
      </div>
    </section>
  );
}
