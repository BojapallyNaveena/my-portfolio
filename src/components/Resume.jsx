import { Download, Eye, Briefcase, GraduationCap, Code2, Award } from 'lucide-react';

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/naveena_resume.pdf';
    link.download = 'naveena_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="relative py-24 border-t border-white/5 overflow-hidden reveal-item">
      
      {/* Background Soft Glow */}
      <div className="absolute top-[30%] left-[-150px] w-[350px] h-[350px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">Curriculum Vitae</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Professional Resume</h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Review my experience at a glance or download my full CV for your talent files.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Quick summary of sections */}
          <div className="md:col-span-4 flex flex-col justify-between gap-6">
            
            <div className="glass-panel p-6 rounded-3xl border border-white/10 text-left space-y-4">
              <h4 className="font-extrabold text-sm uppercase tracking-wider text-slate-350">Quick Skills</h4>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'MySQL', 'Python', 'C', 'Java', 'Git', 'DSA'].map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-slate-950 rounded-xl text-[10px] font-extrabold text-slate-300 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/10 text-left space-y-2">
              <h4 className="font-extrabold text-sm uppercase tracking-wider text-slate-350">Languages</h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                English (Fluent)<br />
                Telugu (Native)<br />
                Hindi (Conversational)
              </p>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/10 text-left space-y-4 flex-1 flex flex-col justify-center items-center text-center">
              <div className="w-12 h-12 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center mb-2">
                <Download size={22} />
              </div>
              <h5 className="font-extrabold text-sm text-slate-200">Need a paper copy?</h5>
              <p className="text-slate-450 text-xs leading-normal mb-4">
                Get the print-friendly PDF format highlighting key project milestones.
              </p>
              <button
                onClick={handleDownload}
                className="w-full py-3 bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-violet-600/25 cursor-pointer active:scale-98 transition-all"
              >
                <Download size={14} />
                Download PDF Resume
              </button>
            </div>

          </div>

          {/* Right Column: Visual Interactive Mock Resume Sheet */}
          <div className="md:col-span-8 glass-panel border border-white/12 rounded-[32px] overflow-hidden p-6 sm:p-8 text-left relative flex flex-col justify-between">
            {/* Top Bar Visual design */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-600 via-indigo-500 to-sky-500"></div>

            <div className="space-y-6">
              {/* Header Info */}
              <div className="border-b border-white/5 pb-5">
                <h4 className="text-xl sm:text-2xl font-black text-white">Bojapally Naveena</h4>
                <p className="text-violet-400 text-xs sm:text-sm font-semibold mt-0.5">Computer Science Engineer (AI & ML) & Full Stack Developer</p>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1 block">Nizamabad, India · +91 9666898139 · bojapallynaveena@gmail.com</span>
              </div>

              {/* Education section */}
              <div className="space-y-3">
                <h5 className="text-[10px] font-bold uppercase text-slate-450 tracking-wider flex items-center gap-1.5">
                  <GraduationCap size={14} className="text-violet-400" />
                  Education
                </h5>
                <div className="pl-5 relative border-l border-white/5 space-y-1">
                  <span className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-violet-500"></span>
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-350">
                    <strong>B.Tech in Computer Science & Engineering (AI & ML)</strong>
                    <span className="text-slate-500">2023 - 2027</span>
                  </div>
                  <p className="text-slate-450 text-xs">Guru Nanak Institute of Technology. Intermediate: 97.8% | SSC: 10 GPA</p>
                </div>
              </div>

              {/* Work / Leadership experience */}
              <div className="space-y-3">
                <h5 className="text-[10px] font-bold uppercase text-slate-450 tracking-wider flex items-center gap-1.5">
                  <Briefcase size={14} className="text-sky-400" />
                  Experience & Leadership
                </h5>
                <div className="space-y-4">
                  <div className="pl-5 relative border-l border-white/5 space-y-1">
                    <span className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-350">
                      <strong>Web Development Intern - Apex Planet</strong>
                      <span className="text-slate-500">Nov 2025 - Jan 2026</span>
                    </div>
                    <p className="text-slate-450 text-xs">Contributed to frontend design, codebase debugging, Git-based versioning workflows, and interface alignment testing.</p>
                  </div>
                  
                  <div className="pl-5 relative border-l border-white/5 space-y-1">
                    <span className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-350">
                      <strong>Student Coordinator - GNIT Campus</strong>
                      <span className="text-slate-500">Sep 2024 - Present</span>
                    </div>
                    <p className="text-slate-450 text-xs">Organized the IGNITE AIML event, coordinated coding workshops, and managed technical registration lists.</p>
                  </div>
                </div>
              </div>

              {/* Projects highlight */}
              <div className="space-y-3">
                <h5 className="text-[10px] font-bold uppercase text-slate-450 tracking-wider flex items-center gap-1.5">
                  <Code2 size={14} className="text-indigo-400" />
                  Project Highlights
                </h5>
                <div className="space-y-3">
                  <div className="pl-5 relative border-l border-white/5 text-xs">
                    <span className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                    <strong className="text-slate-300">HyperLocal Connect:</strong> Geolocation-based Full Stack platform with Aadhaar OTP matching and Gemini AI assist.
                  </div>
                  <div className="pl-5 relative border-l border-white/5 text-xs">
                    <span className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                    <strong className="text-slate-300">AI Driven Study Plan:</strong> Personalized schedule planner generating logical study maps to improve productivity.
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Preview buttons */}
            <div className="border-t border-white/5 pt-6 mt-6 flex justify-between items-center">
              <span className="text-[10px] font-semibold text-slate-550">
                Generated: July 2026
              </span>
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-slate-900 border border-white/10 hover:border-violet-500/40 text-slate-200 hover:text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
              >
                <Eye size={12} />
                Preview File
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
