import { MessageSquare, Terminal } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070b13] border-t border-white/5 pt-16 pb-12 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-4 cursor-pointer" onClick={() => scrollTo('home')}>
              <div className="w-9 h-9 rounded-lg bg-linear-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-base mr-2">
                N
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                Bojapally Naveena
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs mb-5">
              Building innovative web applications with clean code, creativity, and problem-solving.
            </p>
            <p className="text-slate-500 italic text-xs font-semibold">
              "Building software that solves real-world problems."
            </p>
          </div>

          {/* Site Navigation */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'certifications', 'contact'].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left text-slate-400 hover:text-sky-400 text-sm font-semibold capitalize transition-colors duration-150 cursor-pointer"
                >
                  {id}
                </button>
              ))}
            </div>
          </div>

          {/* Social Profiles */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4">Connect Online</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://github.com/BojapallyNaveena"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-slate-900/80 border border-white/5 hover:border-violet-500/50 hover:bg-violet-600 hover:text-white text-slate-400 rounded-xl flex items-center justify-center transition-all duration-200 shadow-md"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/bojapally-naveena-27b5bb34a"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-slate-900/80 border border-white/5 hover:border-indigo-500/50 hover:bg-indigo-600 hover:text-white text-slate-400 rounded-xl flex items-center justify-center transition-all duration-200 shadow-md"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://leetcode.com/u/naveena_37/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-slate-900/80 border border-white/5 hover:border-amber-500/50 hover:bg-amber-600 hover:text-white text-slate-400 rounded-xl flex items-center justify-center transition-all duration-200 shadow-md"
                title="LeetCode"
              >
                <span className="font-bold text-sm">LC</span>
              </a>
              <a
                href="https://www.hackerrank.com/profile/bojapallynaveena"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-slate-900/80 border border-white/5 hover:border-emerald-500/50 hover:bg-emerald-600 hover:text-white text-slate-400 rounded-xl flex items-center justify-center transition-all duration-200 shadow-md"
                title="HackerRank"
              >
                <span className="font-bold text-xs">HR</span>
              </a>
            </div>
            <p className="text-slate-500 text-xs font-medium">
              Location: Nizamabad, India
            </p>
            <p className="text-emerald-400 text-xs font-semibold mt-1">
              ● Available for Work / Internships
            </p>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <p>© {currentYear} Naveena Bojapally. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
