import { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon } from 'lucide-react';

export default function Terminal({ onClose }) {
  const [history, setHistory] = useState([
    { text: 'Naveena Portfolio v1.0.0 Command Console', type: 'system' },
    { text: 'Type "help" to view list of available commands.', type: 'system' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom on updates
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText) => {
    const rawCmd = cmdText.trim().toLowerCase();
    const args = rawCmd.split(' ');
    const cmd = args[0];

    const newHistory = [...history, { text: `naveena.dev $ ${cmdText}`, type: 'input' }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          text: `Available commands:
  - about    : Read brief bio of Naveena
  - skills   : View specialized tech stacks
  - projects : Display featured portfolio systems
  - resume   : Review curriculum vitae details
  - contact  : Retrieve contact channels
  - clear    : Clear terminal screen
  - exit     : Close console session`,
          type: 'output'
        });
        break;
      case 'about':
        newHistory.push({
          text: `Bojapally Naveena: Computer Science (AI & ML) Student & Full Stack Developer.
Tagline: "Building innovative web applications with clean code, creativity, and problem-solving."
Education: Guru Nanak Institute of Technology (2023-2027)
Located: Hyderabad, India.`,
          type: 'output'
        });
        break;
      case 'skills':
        newHistory.push({
          text: `Technical Toolkit:
  - Languages : Python, C, Java (Basics)
  - Frontend  : HTML, CSS, React, Tailwind CSS
  - Databases : MySQL
  - Toolsets  : Git, GitHub, VS Code, Jupyter Notebook, Google Colab, Eclipse`,
          type: 'output'
        });
        break;
      case 'projects':
        newHistory.push({
          text: `Featured Projects:
  1. HyperLocal Connect             : Geolocation Full Stack platform with Gemini AI matching.
  2. E-Commerce Website             : Product catalog e-commerce storefront.
  3. AI Driven Study Plan           : Academic scheduler optimization system.
  4. Secure Healthcare Data Storage : Cryptographic blockchain simulated storage.`,
          type: 'output'
        });
        break;
      case 'resume':
        newHistory.push({
          text: `Bojapally Naveena - CV Summary:
  - B.Tech CSE (AI & ML) : Guru Nanak Institute of Technology (2023 - 2027)
  - Internship           : Web Development Intern at Apex Planet (Nov 2025 - Jan 2026)
  - Leadership           : Student Coordinator at GNIT Campus (2024 - Present)`,
          type: 'output'
        });
        break;
      case 'contact':
        newHistory.push({
          text: `Get in Touch:
  - Email    : bojapallynaveena@gmail.com
  - Phone    : +91 9666898139
  - LinkedIn : linkedin.com/in/bojapally-naveena-27b5bb34a
  - GitHub   : github.com/BojapallyNaveena`,
          type: 'output'
        });
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      case 'exit':
        onClose();
        return;
      case '':
        break;
      default:
        newHistory.push({
          text: `bash: command not found: ${cmd}. Type "help" for a list of valid commands.`,
          type: 'error'
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      
      {/* Terminal Container */}
      <div className="w-full max-w-2xl bg-[#030712] border border-sky-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-sky-500/5 animate-in zoom-in-95 duration-200">
        
        {/* Terminal Header */}
        <div className="bg-slate-950 px-4 py-3 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-bold font-mono text-slate-400 ml-2 flex items-center gap-1.5">
              <TerminalIcon size={12} className="text-sky-400" />
              naveena@dev-console: ~
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-white/5 text-slate-400 hover:text-white rounded-md transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Terminal Logs (Scrollable) */}
        <div className="p-4 h-[350px] overflow-y-auto font-mono text-xs text-sky-400 text-left space-y-2.5 no-scrollbar">
          {history.map((log, i) => (
            <div 
              key={i} 
              className={`whitespace-pre-wrap leading-relaxed ${
                log.type === 'input' 
                  ? 'text-white' 
                  : log.type === 'error' 
                    ? 'text-rose-400' 
                    : log.type === 'system'
                      ? 'text-slate-500'
                      : 'text-sky-300'
              }`}
            >
              {log.text}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Input Bar */}
        <div className="bg-slate-950 px-4 py-3 border-t border-white/5 flex items-center gap-1 font-mono text-xs text-white">
          <span className="text-emerald-400 font-bold">naveena.dev $</span>
          <input
            type="text"
            autoFocus
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help'..."
            className="flex-1 bg-transparent border-none outline-none text-white caret-sky-400 placeholder-slate-700"
          />
        </div>

      </div>

    </div>
  );
}
