import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terminal from './components/Terminal';
import AIChatbot from './components/AIChatbot';
import Loader from './components/Loader';
import { Rocket } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showRocket, setShowRocket] = useState(false);
  const [rocketLaunching, setRocketLaunching] = useState(false);
  const [loading, setLoading] = useState(true);
  const cursorRef = useRef(null);

  useEffect(() => {
    // 1. Mouse Glow movement tracker
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 2. Scroll tracking for progress and rocket visibility
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }

      setShowRocket(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLoaderComplete = () => {
    setLoading(false);
    
    // Start entrance animations sequence
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Navbar slide down and fade in
    tl.to('.nav-container', {
      y: 0,
      opacity: 1,
      duration: 0.8
    })
    // 2. Opportunities badge fade in
    .to('.hero-badge', {
      opacity: 1,
      y: 0,
      duration: 0.5
    }, '-=0.3')
    // 3. Greeting "Hi, I'm..." fade in from left
    .fromTo('.hero-greeting', {
      x: -35,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 0.6
    }, '-=0.2')
    // 4. Name "Naveena" staggered letter scale-in / reveal
    .to('.hero-name-char', {
      opacity: 1,
      scale: 1,
      y: 0,
      stagger: 0.08,
      duration: 0.5,
      ease: 'back.out(1.7)'
    }, '-=0.1')
    // 5. Subtitle reveal
    .fromTo('.hero-subtitle', {
      y: 15,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.6
    }, '-=0.2')
    // 6. Description fade in
    .fromTo('.hero-desc', {
      y: 15,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8
    }, '-=0.3')
    // 7. Social media icons staggered entry with slight bounce
    .fromTo('.hero-social-icon', {
      scale: 0,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      stagger: 0.1,
      duration: 0.6,
      ease: 'back.out(2)'
    }, '-=0.4')
    // 8. Resume, Projects, and Contact buttons stagger slide up
    .fromTo('.hero-btn', {
      y: 25,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power3.out'
    }, '-=0.3')
    // 9. Profile image column enters from the right
    .fromTo('.hero-profile-column', {
      x: 60,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 1.0,
      ease: 'power4.out',
      onComplete: () => {
        // Initialize ScrollTriggers for scroll revealing elements after entrance is complete
        initializeScrollTriggers();
      }
    }, '-=0.6');
  };

  const initializeScrollTriggers = () => {
    // 10. Scroll Reveal for entire sections (About, Skills, Projects, Experience, Contact)
    gsap.utils.toArray('.reveal-item').forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // 11. Staggered reveal for grid card groups (Projects, Skills, Certifications, Profiles)
    gsap.utils.toArray('.reveal-group').forEach((group) => {
      const cards = group.querySelectorAll('.reveal-card');
      if (cards.length > 0) {
        gsap.fromTo(cards, 
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });
  };

  const handleLaunchRocket = () => {
    if (rocketLaunching) return;

    setRocketLaunching(true);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Reset rocket after animation completes
    setTimeout(() => {
      setRocketLaunching(false);
    }, 800);
  };

  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-violet-600/30 selection:text-violet-300">
      
      {/* Cinematic Dark Entrance Loader Screen */}
      {loading && <Loader onComplete={handleLoaderComplete} />}
      
      {/* Ambient animated particle grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[12%] left-[10%] w-1.5 h-1.5 bg-violet-500 rounded-full animate-bubble opacity-25"></div>
        <div className="absolute top-[28%] left-[75%] w-2 h-2 bg-indigo-500 rounded-full animate-bubble [animation-delay:4s] opacity-20"></div>
        <div className="absolute top-[48%] left-[15%] w-1 h-1 bg-sky-500 rounded-full animate-bubble [animation-delay:2s] opacity-35"></div>
        <div className="absolute top-[62%] left-[85%] w-1.5 h-1.5 bg-purple-500 rounded-full animate-bubble [animation-delay:6s] opacity-25"></div>
        <div className="absolute top-[78%] left-[25%] w-2 h-2 bg-violet-400 rounded-full animate-bubble [animation-delay:1s] opacity-20"></div>
        <div className="absolute top-[92%] left-[65%] w-1 h-1 bg-indigo-400 rounded-full animate-bubble [animation-delay:5s] opacity-30"></div>
      </div>
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-violet-600 via-indigo-500 to-sky-400 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Interactive Cursor Glow Element */}
      <div ref={cursorRef} className="cursor-glow hidden md:block"></div>

      {/* Navigation Header */}
      <Navbar onTerminalClick={() => setShowTerminal(true)} />

      {/* Content Layout Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <CodingProfiles />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      {/* Footer Branding Segment */}
      <Footer />

      {/* Advanced Interactive terminal modal overlay */}
      {showTerminal && (
        <Terminal onClose={() => setShowTerminal(false)} />
      )}

      {/* Floating AI Chatbot Assistant */}
      <AIChatbot />

      {/* Rocket back-to-top trigger button */}
      {showRocket && (
        <button
          onClick={handleLaunchRocket}
          className={`fixed bottom-6 left-6 w-12 h-12 rounded-xl bg-slate-900 border border-white/10 hover:border-violet-500/40 text-violet-400 hover:text-violet-300 flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer z-40 ${
            rocketLaunching ? 'rocket-animate' : 'hover:-translate-y-1'
          }`}
          title="Back to Top"
        >
          <Rocket size={18} className={rocketLaunching ? 'animate-pulse' : ''} />
        </button>
      )}

    </div>
  );
}

export default App;
