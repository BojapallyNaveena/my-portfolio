import { useState, useEffect } from 'react';
import { Menu, X, Code, Terminal as TerminalIcon } from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Profiles', id: 'profiles' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' }
];

export default function Navbar({ onTerminalClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nav-container opacity-0 fixed top-0 left-0 right-0 z-40 transition-all duration-350 ${
      isScrolled 
        ? 'py-3 bg-[#0b0f19]/80 backdrop-blur-md border-b border-white/5 shadow-lg' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo / Personal Brand */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-lg mr-2.5 shadow-md shadow-violet-500/20">
              N
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Naveena <span className="text-violet-500 font-medium text-sm ml-0.5">.dev</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:text-white cursor-pointer ${
                  activeSection === item.id
                    ? 'text-violet-400 bg-violet-500/10 border border-violet-500/20'
                    : 'text-slate-400 border border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Terminal Trigger */}
            <button
              onClick={onTerminalClick}
              className="ml-3 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-800/80 hover:bg-violet-600 text-sky-400 hover:text-white border border-sky-500/30 hover:border-violet-500/50 shadow-md active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
              title="Launch Developer Terminal"
            >
              <TerminalIcon size={14} />
              Terminal
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onTerminalClick}
              className="p-2 bg-slate-800/80 text-sky-400 rounded-xl border border-sky-500/30 cursor-pointer"
            >
              <TerminalIcon size={18} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-400 hover:text-white bg-slate-900/50 rounded-xl border border-white/5 cursor-pointer"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0b0f19]/95 backdrop-blur-lg border-b border-white/5 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-violet-400 bg-violet-500/10 border-l-4 border-violet-500'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
