import { Award, ExternalLink, GitFork, UserPlus, Code2, ShieldAlert } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const profiles = [
  {
    name: 'GitHub',
    icon: <Github size={24} className="text-white" />,
    url: 'https://github.com/BojapallyNaveena',
    username: 'BojapallyNaveena',
    colorClass: 'group-hover:border-slate-400/50 group-hover:shadow-2xl group-hover:shadow-slate-500/15',
    iconBg: 'group-hover:bg-slate-500/10 group-hover:border-slate-400/30',
    stats: [
      { name: 'Repositories', value: '18+' },
      { name: 'Contributions (2026)', value: '150+' },
      { name: 'Followers', value: '25+' },
      { name: 'Core Language', value: 'JavaScript' }
    ],
    highlights: 'Pinned Projects: HyperLocal Connect, E-Commerce Recommendation engine.'
  },
  {
    name: 'LeetCode',
    icon: <Code2 size={24} className="text-amber-500" />,
    url: 'https://leetcode.com/u/naveena_37/',
    username: 'naveena_37',
    colorClass: 'group-hover:border-amber-500/50 group-hover:shadow-2xl group-hover:shadow-amber-500/15',
    iconBg: 'group-hover:bg-amber-500/10 group-hover:border-amber-500/30',
    stats: [
      { name: 'Problems Solved', value: '70+' },
      { name: 'Contest Rating', value: '1420' },
      { name: 'Badges Earned', value: '2' },
      { name: 'Accuracy Rate', value: '62%' }
    ],
    highlights: 'Solved array manipulations, binary search trees, and dynamic programming tasks.'
  },
  {
    name: 'HackerRank',
    icon: <Award size={24} className="text-emerald-500" />,
    url: 'https://www.hackerrank.com/profile/bojapallynaveena',
    username: 'bojapallynaveena',
    colorClass: 'group-hover:border-emerald-500/50 group-hover:shadow-2xl group-hover:shadow-emerald-500/15',
    iconBg: 'group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30',
    stats: [
      { name: 'Java Skill Stars', value: '5 Stars' },
      { name: 'Python Skill Stars', value: '5 Stars' },
      { name: 'Certifications', value: '2' },
      { name: 'Global Rank', value: 'Top 5%' }
    ],
    highlights: 'Certified in Java (Basic) and Problem Solving (Basic) assessment tracks.'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={24} className="text-[#0a66c2]" />,
    url: 'https://www.linkedin.com/in/bojapally-naveena-27b5bb34a',
    username: 'bojapally-naveena-27b5bb34a',
    colorClass: 'group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/15',
    iconBg: 'group-hover:bg-blue-500/10 group-hover:border-blue-500/30',
    stats: [
      { name: 'Followers', value: '350+' },
      { name: 'Connections', value: '320+' },
      { name: 'Active Groups', value: 'React Developers' },
      { name: 'Engagements', value: 'High' }
    ],
    highlights: 'Sharing full-stack coding progress, hackathon logs, and UI design mockups.'
  }
];

export default function CodingProfiles() {
  return (
    <section id="profiles" className="relative py-24 border-t border-white/5 overflow-hidden reveal-item">
      
      {/* Background Soft Glow */}
      <div className="absolute top-[30%] left-[-150px] w-[350px] h-[350px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">Developer Log</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Coding Profiles</h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Live trackers across various coding playgrounds and developer platforms representing my active problem-solving presence.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="reveal-group grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {profiles.map((prof, i) => (
            <div 
              key={i}
              className={`reveal-card opacity-0 glass-panel p-6 sm:p-8 rounded-[32px] border border-white/10 hover:bg-[#0c1221] shadow-lg transition-all duration-300 group flex flex-col justify-between ${prof.colorClass}`}
            >
              <div>
                {/* Brand Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center transition-all duration-300 ${prof.iconBg}`}>
                      {prof.icon}
                    </div>
                    <div className="text-left">
                      <h4 className="font-extrabold text-slate-100 text-base">{prof.name}</h4>
                      <span className="text-xs font-semibold text-slate-500">@{prof.username}</span>
                    </div>
                  </div>
                  <a
                    href={prof.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-slate-950 border border-white/10 text-slate-450 hover:text-white rounded-xl hover:bg-slate-900 transition-all flex items-center gap-1.5 text-xs font-bold"
                  >
                    Visit Profile
                    <ExternalLink size={12} />
                  </a>
                </div>

                {/* Grid stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {prof.stats.map((s, idx) => (
                    <div key={idx} className="p-4 bg-slate-950/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block mb-0.5">{s.name}</span>
                      <span className="text-sm font-extrabold text-slate-200">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights strip */}
              <div className="p-3.5 bg-white/5 border border-white/5 rounded-2xl text-left text-xs text-slate-400">
                <strong className="text-violet-400 font-bold block mb-0.5">Platform Summary</strong>
                {prof.highlights}
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
