import { useState, useEffect } from 'react';
import { Download, ArrowRight, Mail, Terminal, Shield, Code2, Award } from 'lucide-react';
import naveenaProfile from '../assets/naveena_profile.png';
import { Github, Linkedin } from './Icons';

const words = ["Full Stack Developer", "Computer Science Student", "Software Engineer", "Problem Solver"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[wordIndex];
      if (!isDeleting) {
        // Typing characters
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText === currentWord) {
          // Pause at peak
          setTypingSpeed(1500);
          setIsDeleting(true);
        } else {
          setTypingSpeed(100);
        }
      } else {
        // Deleting characters
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(50);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Neon Glowing Circles */}
      <div className="glow-circle w-[350px] h-[350px] bg-violet-600/10 top-[20%] left-[-50px]"></div>
      <div className="glow-circle w-[450px] h-[450px] bg-indigo-600/10 bottom-[10%] right-[-100px] animation-delay-3000"></div>
      <div className="glow-circle w-[250px] h-[250px] bg-sky-500/5 top-[50%] left-[40%] animation-delay-6000"></div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Profile Image Column */}
          <div className="hero-profile-column opacity-0 lg:col-span-5 relative flex flex-col items-center justify-center gap-6 order-1 lg:order-1">
            {/* Soft backdrop glow behind profile image */}
            <div className="absolute w-[320px] h-[320px] bg-violet-600/15 blur-[100px] rounded-full pointer-events-none"></div>
            
            {/* Image Container with Neon Border & Hover Effect */}
            <div className="relative group w-full max-w-[360px] aspect-square rounded-[40px] p-1 overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:rotate-1 hover:shadow-violet-500/20 animate-float-avatar">
              
              {/* Spinning gradient aura behind portrait */}
              <div className="absolute inset-[-50%] bg-gradient-to-tr from-violet-600 via-indigo-500 to-sky-400 opacity-70 blur-md animate-border-spin group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Inner Glossy Card */}
              <div className="w-full h-full rounded-[38px] bg-slate-950/90 overflow-hidden relative flex items-center justify-center z-10">
                <img 
                  src={naveenaProfile} 
                  alt="Bojapally Naveena" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <h4 className="text-white font-extrabold text-sm tracking-wide">Bojapally Naveena</h4>
                  <p className="text-violet-400 text-xs font-semibold">Full Stack Developer</p>
                </div>
              </div>

              {/* Decorative floating widgets on top of profile */}
              <div className="absolute -bottom-4 -right-4 glass-panel py-3 px-4 rounded-2xl border border-white/10 flex items-center gap-2.5 shadow-xl animate-float [animation-delay:2s] z-20">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Shield size={16} />
                </div>
                <div className="text-left">
                  <h4 className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Aadhaar Verified</h4>
                  <p className="text-xs font-extrabold text-white">Trust Enforced</p>
                </div>
              </div>
            </div>

            {/* Social brand links row below picture */}
            <div className="flex gap-4 items-center justify-center z-20">
              <a
                href="https://github.com/BojapallyNaveena"
                target="_blank"
                rel="noreferrer"
                className="hero-social-icon opacity-0 w-10 h-10 rounded-xl bg-slate-900 border border-white/10 hover:border-slate-400/50 flex items-center justify-center text-slate-450 hover:text-white hover:bg-slate-950 transition-all shadow-md active:scale-95"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/bojapally-naveena-27b5bb34a"
                target="_blank"
                rel="noreferrer"
                className="hero-social-icon opacity-0 w-10 h-10 rounded-xl bg-slate-900 border border-white/10 hover:border-blue-500/50 flex items-center justify-center text-slate-450 hover:text-[#0a66c2] hover:bg-slate-950 transition-all shadow-md active:scale-95"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://leetcode.com/u/naveena_37/"
                target="_blank"
                rel="noreferrer"
                className="hero-social-icon opacity-0 w-10 h-10 rounded-xl bg-slate-900 border border-white/10 hover:border-amber-500/50 flex items-center justify-center text-slate-450 hover:text-amber-500 hover:bg-slate-950 transition-all shadow-md active:scale-95"
                title="LeetCode"
              >
                <Code2 size={18} />
              </a>
              <a
                href="https://www.hackerrank.com/profile/bojapallynaveena"
                target="_blank"
                rel="noreferrer"
                className="hero-social-icon opacity-0 w-10 h-10 rounded-xl bg-slate-900 border border-white/10 hover:border-emerald-500/50 flex items-center justify-center text-slate-450 hover:text-emerald-500 hover:bg-slate-950 transition-all shadow-md active:scale-95"
                title="HackerRank"
              >
                <Award size={18} />
              </a>
            </div>
          </div>
          
          {/* Right Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 order-2 lg:order-2">
            <div className="hero-badge opacity-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Open to Opportunities
            </div>
            
            <div className="space-y-2 font-sans">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none text-white">
                <span className="hero-greeting inline-block opacity-0">Hi, I'm </span>{' '}
                <span className="hero-name inline-block">
                  {"Naveena Bojapally".split("").map((char, index) => (
                    <span key={index} className="hero-name-char inline-block opacity-0 translate-y-4 scale-75 bg-gradient-to-r from-violet-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent pb-1">
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </span>
              </h1>
              <div className="hero-subtitle opacity-0 h-12 sm:h-16 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-3xl font-extrabold text-slate-350 tracking-wide typing-cursor font-mono">
                  {currentText}
                </span>
              </div>
            </div>

            <p className="hero-desc opacity-0 text-slate-450 text-base sm:text-lg max-w-2xl leading-relaxed">
              I am a passionate Computer Science (AI & ML) student at GNIT, Full Stack Developer, and aspiring Software Engineer. I turn complex problems into elegant, high-performing code and focus on crafting intuitive user experiences.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => scrollTo('projects')}
                className="hero-btn opacity-0 px-6 py-3.5 rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-violet-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                View Projects
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo('resume')}
                className="hero-btn opacity-0 px-6 py-3.5 rounded-2xl bg-slate-900 border border-white/10 hover:border-violet-500/40 text-slate-200 hover:text-white font-bold text-sm flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                Download Resume
                <Download size={16} />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="hero-btn opacity-0 px-5 py-3.5 rounded-2xl bg-transparent text-slate-400 hover:text-white font-bold text-sm flex items-center gap-2 hover:underline cursor-pointer"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </div>

            {/* Quick stats / Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-10 max-w-md border-t border-white/5 mx-auto lg:mx-0">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">4+</h3>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Projects Built</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">70+</h3>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">DSA Solved</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">9+</h3>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Certifications</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
