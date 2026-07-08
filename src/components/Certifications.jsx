import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';

const certsData = [
  {
    name: 'Web Development Internship Certificate',
    provider: 'Apex Planet',
    date: 'Jan 2026',
    link: 'https://apexplanet.com/certificate/naveena',
    badge: 'Internship Completed'
  },
  {
    name: 'Python (Basic) Certification',
    provider: 'HackerRank Testing Services',
    date: 'Nov 2025',
    link: 'https://hackerrank.com/certificates/python-naveena',
    badge: 'Skill Verified'
  },
  {
    name: 'Problem Solving (Basic) Certification',
    provider: 'HackerRank Testing Services',
    date: 'Oct 2025',
    link: 'https://hackerrank.com/certificates/problem-solving-naveena',
    badge: 'Skill Verified'
  },
  {
    name: 'Data Analytics Certification',
    provider: 'NPTEL Online Certification',
    date: 'Aug 2025',
    link: 'https://nptel.ac.in/noc/noc25_cs80',
    badge: 'NPTEL Certified'
  },
  {
    name: 'Full Stack Development Certificate',
    provider: 'LinkedIn Learning',
    date: 'Jun 2025',
    link: 'https://linkedin.com/learning/certificates/full-stack',
    badge: 'Course Completed'
  },
  {
    name: 'Professional Skill Development',
    provider: 'Skill India Certifications',
    date: 'Feb 2025',
    link: 'https://skillindia.gov.in/cert/naveena',
    badge: 'Skill Certified'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 border-t border-white/5 overflow-hidden reveal-item">
      
      {/* Background Soft Glow */}
      <div className="absolute top-[30%] right-[-100px] w-[300px] h-[300px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">Verifications</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Certifications & Badges</h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Academic courses, platform testing credentials, and language assessment certificates.
          </p>
        </div>

        {/* Grid layout */}
        <div className="reveal-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certsData.map((cert, index) => (
            <div 
              key={index}
              className="reveal-card opacity-0 glass-panel p-6 rounded-3xl border border-white/10 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-600/10 hover:-translate-y-1.5 transition-all duration-300 relative group text-left flex flex-col justify-between"
            >
              
              <div>
                {/* Header info */}
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-violet-400 group-hover:bg-violet-600/10 group-hover:border-violet-400/40 group-hover:text-violet-300 transition-all duration-300">
                    <Award size={20} />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-bold text-emerald-450 uppercase">
                    <ShieldCheck size={10} />
                    {cert.badge}
                  </span>
                </div>

                <h4 className="text-sm font-extrabold text-white mb-1 group-hover:text-violet-400 transition-colors">
                  {cert.name}
                </h4>
                <p className="text-slate-550 text-[11px] font-semibold tracking-wide uppercase">
                  {cert.provider}
                </p>
              </div>

              {/* Footer row */}
              <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-xs font-semibold text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar size={12} className="text-slate-500" />
                  {cert.date}
                </span>
                
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:text-sky-300 flex items-center gap-1 hover:underline cursor-pointer"
                >
                  Verify
                  <ExternalLink size={10} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
