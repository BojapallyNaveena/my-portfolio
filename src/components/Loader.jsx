import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Loader({ onComplete }) {
  const [dots, setDots] = useState('');

  useEffect(() => {
    // Staggered letter fade in for Loader title
    const tl = gsap.timeline({
      onComplete: () => {
        // Slide loader up and out
        gsap.to('.loader-container', {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
          onComplete: onComplete
        });
      }
    });

    tl.fromTo('.loader-bg', { opacity: 1 }, { opacity: 1 })
      .fromTo('.loader-letter', {
        opacity: 0,
        y: 15,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.08,
        duration: 0.6,
        ease: 'back.out(2)'
      })
      .to('.loader-cursor', {
        opacity: 0,
        repeat: 3,
        yoyo: true,
        duration: 0.25
      })
      .to('.loader-logo', {
        scale: 0.95,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
        delay: 0.2
      });

    // Dot typing cycle animation
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 300);

    return () => clearInterval(interval);
  }, [onComplete]);

  const logoText = "Naveena Portfolio";

  return (
    <div className="loader-container fixed inset-0 z-50 flex items-center justify-center bg-[#070b13] loader-bg overflow-hidden">
      
      {/* Background radial soft light glow */}
      <div className="absolute w-[400px] h-[400px] bg-violet-600/10 blur-[100px] rounded-full"></div>
      
      <div className="text-center relative z-10 flex flex-col items-center gap-4">
        
        {/* Animated typed branding header */}
        <div className="flex items-center justify-center font-mono text-2xl sm:text-3xl font-extrabold tracking-wide">
          <span className="loader-logo flex items-center">
            {logoText.split('').map((char, index) => (
              <span key={index} className="loader-letter inline-block text-white">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
            <span className="loader-cursor w-2 h-6 bg-violet-500 ml-1 inline-block animate-pulse"></span>
          </span>
        </div>

        {/* Status progress subtext */}
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-2 font-sans">
          Initializing Terminal{dots}
        </p>

      </div>
    </div>
  );
}
