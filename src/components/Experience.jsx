import { Calendar, Briefcase, Award, Users, Trophy } from 'lucide-react';

const experienceData = [
  {
    category: 'internship',
    organization: 'Apex Planet',
    role: 'Web Development Intern',
    duration: 'Nov 2025 - Jan 2026',
    responsibilities: [
      'Contributed to frontend feature development using HTML, CSS, and JavaScript.',
      'Investigated codebase bug tickets and performed local testing to debug interface alignment.',
      'Gained deep familiarity with industry standard Git-based version controls and real-world development workflows.'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Git', 'VS Code'],
    achievements: 'Successfully resolved 15+ UI alignment tickets and optimized assets.'
  },
  {
    category: 'leadership',
    organization: 'Guru Nanak Institute of Technology',
    role: 'Student Coordinator',
    duration: 'Sep 2024 - Present',
    responsibilities: [
      'Organized the department IGNITE AIML college event, handling team registrations and layout plans.',
      'Coordinated the student committee to run technical hands-on coding workshops and Hackathons.',
      'Managed registration desks and schedule tracking for the annual College Tech Fest.'
    ],
    tech: ['Team Coordination', 'Event Planning', 'Operations'],
    achievements: 'Coordinated events with 200+ students and managed hackathon project presentations.'
  }
];

export default function Experience() {
  
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'internship':
        return <Briefcase className="text-violet-400" size={18} />;
      case 'leadership':
        return <Users className="text-sky-400" size={18} />;
      case 'hackathon':
        return <Trophy className="text-amber-400" size={18} />;
      default:
        return <Award className="text-indigo-400" size={18} />;
    }
  };

  const getCategoryBadgeClass = (category) => {
    switch (category) {
      case 'internship':
        return 'bg-violet-500/10 text-violet-400 border-violet-500/20';
      case 'leadership':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/20';
      case 'hackathon':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      default:
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
    }
  };

  return (
    <section id="experience" className="relative py-24 border-t border-white/5 overflow-hidden reveal-item">
      
      {/* Background Soft Glow */}
      <div className="absolute top-[40%] left-[-100px] w-[300px] h-[300px] bg-violet-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">Timeline</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Experience & Activities</h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Professional internships, student leadership, collaborative hackathons, and technical volunteer work.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline center line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-linear-to-b from-violet-600 via-indigo-500 to-sky-500 rounded-full"></div>

          <div className="reveal-group space-y-12">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`reveal-card opacity-0 flex flex-col md:flex-row relative items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Circle Pin Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[15px] top-6 w-8 h-8 rounded-full bg-slate-900 border-2 border-violet-500 flex items-center justify-center z-10 shadow-md shadow-violet-500/20">
                    {getCategoryIcon(item.category)}
                  </div>

                  {/* Card Content Spacer Column */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    
                    {/* Visual Card */}
                    <div className="glass-panel p-6 sm:p-8 rounded-[28px] border border-white/10 hover:border-violet-500/30 transition-all duration-300 relative group">
                      
                      {/* Timeline Duration */}
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-slate-500 mb-2 uppercase">
                        <Calendar size={12} />
                        {item.duration}
                      </span>

                      {/* Header title */}
                      <div className="mb-4">
                        <span className={`inline-block px-2.5 py-0.5 border rounded-lg text-[9px] font-bold uppercase tracking-wider ${getCategoryBadgeClass(item.category)}`}>
                          {item.category}
                        </span>
                        <h4 className="text-lg font-extrabold text-white mt-1.5">{item.role}</h4>
                        <p className="text-violet-400 font-semibold text-sm">{item.organization}</p>
                      </div>

                      {/* Responsibilities list */}
                      <ul className="text-slate-400 text-xs sm:text-sm space-y-2 mb-6 text-left">
                        {item.responsibilities.map((resp, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <span className="text-violet-500 mt-1">▪</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies used */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {item.tech.map((t) => (
                          <span key={t} className="px-2 py-1 bg-slate-950 rounded-md text-[10px] font-bold text-slate-350 border border-white/5">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Achievements segment */}
                      <div className="p-3.5 bg-violet-650/10 border-l-2 border-violet-500 rounded-r-xl text-left text-xs text-slate-300">
                        <strong className="text-violet-400 font-bold uppercase tracking-wide block mb-0.5">Key Achievement</strong>
                        {item.achievements}
                      </div>

                    </div>

                  </div>

                  {/* Empty Spacer Column for Desktop Center Sync */}
                  <div className="hidden md:block w-1/2"></div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
