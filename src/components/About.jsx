import { GraduationCap, Compass, Zap, Heart, Smile } from 'lucide-react';

const timelineData = [
  { year: '2023', title: 'Started B.Tech', desc: 'Commenced B.Tech CSE (AI & ML) at Guru Nanak Institute of Technology.' },
  { year: '2024', title: 'Started Programming', desc: 'Began programming. Mastered Python, C, and Java foundations, focusing on algorithms and problem solving.' },
  { year: '2025', title: 'Built Web Applications', desc: 'Discovered full-stack web technologies. Designed responsive web systems and interactive project pages.' },
  { year: '2026', title: 'Internships & Leadership', desc: 'Undertaking web developer internships, coordinating hackathons, and leading student operations.' }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 border-t border-white/5 overflow-hidden reveal-item">
      
      {/* Background Soft Glow */}
      <div className="absolute top-[30%] right-[-100px] w-[300px] h-[300px] bg-violet-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">About Me</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">My Developer Journey</h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I am a dedicated Computer Science (AI & ML) student based in Hyderabad, driven by building interactive systems. Here's a brief look into who I am and what I've done.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Career Objective */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-violet-500/30 transition-all duration-300 sm:col-span-2">
              <div className="flex items-center gap-3 mb-3 text-violet-400">
                <Compass size={20} />
                <h4 className="font-extrabold text-sm uppercase tracking-wider text-slate-200">Career Objective</h4>
              </div>
              <p className="text-slate-450 text-sm leading-relaxed">
                To obtain a challenging software engineering role where I can utilize my full-stack web development expertise, analytical problem-solving skills, and active leadership to build scalable applications that deliver real impact.
              </p>
            </div>

            {/* Education */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-violet-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3 text-indigo-400">
                <GraduationCap size={20} />
                <h4 className="font-extrabold text-sm uppercase tracking-wider text-slate-200">Education</h4>
              </div>
              <div className="text-slate-450 text-xs sm:text-sm leading-relaxed space-y-2">
                <p>
                  <strong>B.Tech CSE (AI & ML)</strong><br />
                  Guru Nanak Institute of Technology<br />
                  <span className="text-slate-500 font-bold">2023 - 2027</span>
                </p>
                <p>
                  <strong>Intermediate:</strong> 97.8%<br />
                  <strong>SSC:</strong> 10 GPA
                </p>
              </div>
            </div>

            {/* Strengths */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-violet-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3 text-sky-400">
                <Zap size={20} />
                <h4 className="font-extrabold text-sm uppercase tracking-wider text-slate-200">Strengths</h4>
              </div>
              <ul className="text-slate-450 text-xs font-semibold leading-relaxed space-y-1">
                <li>✦ Fast learner & tech adopter</li>
                <li>✦ Structured problem solver (DSA)</li>
                <li>✦ Excellent collaborator & leader</li>
                <li>✦ Focused on UI/UX excellence</li>
              </ul>
            </div>

            {/* Interests */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-violet-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3 text-pink-400">
                <Heart size={20} />
                <h4 className="font-extrabold text-sm uppercase tracking-wider text-slate-200">Interests</h4>
              </div>
              <p className="text-slate-450 text-sm leading-relaxed">
                Web Development, Decentralized Tech (Blockchain), AI Integrations, Open Source contribution, and UI/UX Design patterns.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-violet-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3 text-amber-400">
                <Smile size={20} />
                <h4 className="font-extrabold text-sm uppercase tracking-wider text-slate-200">Fun Facts</h4>
              </div>
              <p className="text-slate-450 text-sm leading-relaxed">
                I debug my code best with coffee. I love participating in intensive hackathons (48 hours of pure build is my jam!), and I design UI cards in my free time.
              </p>
            </div>

          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-5 relative">
            <h4 className="font-extrabold text-base uppercase tracking-wider text-slate-200 mb-8 border-b border-white/5 pb-2 text-center lg:text-left">
              Timeline Progress
            </h4>
            
            {/* Timeline Line */}
            <div className="absolute left-4 top-14 bottom-6 w-0.5 bg-linear-to-b from-violet-600 via-indigo-500 to-sky-500 rounded-full"></div>

            <div className="space-y-8">
              {timelineData.map((node, i) => (
                <div key={i} className="flex gap-6 relative animate-in fade-in duration-500" style={{ animationDelay: `${i * 150}ms` }}>
                  
                  {/* Timeline Dot */}
                  <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-violet-500 flex items-center justify-center text-xs font-bold text-violet-400 relative z-10 shadow-md shadow-violet-500/10">
                    {node.year.slice(2)}
                  </div>
                  
                  {/* Timeline Content */}
                  <div className="flex-1 glass-panel p-5 rounded-2xl border border-white/5 hover:border-violet-500/20 hover:bg-[#0f172a]/70 transition-all">
                    <span className="text-[10px] font-extrabold text-violet-400 tracking-widest uppercase">{node.year} Milestone</span>
                    <h5 className="font-extrabold text-sm text-slate-100 mt-1 mb-2">{node.title}</h5>
                    <p className="text-slate-400 text-xs leading-relaxed">{node.desc}</p>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
