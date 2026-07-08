import { Trophy, Code2, Award, Presentation, Milestone } from 'lucide-react';

const achievementsList = [
  {
    icon: <Trophy className="text-amber-400" size={24} />,
    title: 'Internal Hackathon Winner',
    category: 'Hackathons',
    desc: 'Secured first place in the college internal hackathon for designing an innovative educational planner concept.'
  },
  {
    icon: <Award className="text-violet-400" size={24} />,
    title: 'Department Topper',
    category: 'Academics',
    desc: 'Consistently ranked in the top tier of students in the Computer Science (AI & ML) branch for academic performance.'
  },
  {
    icon: <Code2 className="text-sky-400" size={24} />,
    title: 'Intermediate First Rank',
    category: 'Academics',
    desc: 'Secured first rank at the intermediate level with a aggregate score of 97.8%.'
  },
  {
    icon: <Milestone className="text-emerald-400" size={24} />,
    title: 'Essay Writing Winner',
    category: 'Competitions',
    desc: 'Won first prize in the college essay writing competition for technical analysis on future trends of AI.'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 border-t border-white/5 overflow-hidden reveal-item">
      
      {/* Background Soft Glow */}
      <div className="absolute top-[20%] right-[-100px] w-[350px] h-[350px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">Achievements</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Milestones & Counters</h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Key metrics and career highlights that demonstrate my coding dedication, academic excellence, and hackathon accomplishments.
          </p>
        </div>

        {/* Counters Grid */}
        <div className="reveal-group grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { count: '4+', label: 'Projects Built' },
            { count: '70+', label: 'Solved Problems' },
            { count: '9+', label: 'Certifications' },
            { count: '1', label: 'Hackathon Winner' }
          ].map((stat, i) => (
            <div 
              key={i} 
              className="reveal-card opacity-0 glass-panel p-6 sm:p-8 rounded-[28px] border border-white/10 text-center shadow-lg hover:border-violet-500/30 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-violet-650/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent text-glow-violet block mb-2">
                {stat.count}
              </span>
              <span className="text-[10px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-widest block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Detailed Achievements Cards */}
        <div className="reveal-group grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievementsList.map((item, index) => (
            <div 
              key={index}
              className="reveal-card opacity-0 glass-panel p-6 sm:p-8 rounded-[32px] border border-white/10 hover:border-violet-500/30 shadow-xl transition-all duration-300 flex items-start gap-5 relative group"
            >
              
              {/* Icon Holder */}
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-115 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Text */}
              <div className="text-left space-y-1">
                <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block">
                  {item.category}
                </span>
                <h4 className="text-base font-extrabold text-white">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
