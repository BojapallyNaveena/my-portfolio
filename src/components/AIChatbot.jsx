import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, User } from 'lucide-react';

const suggestionPrompts = [
  'Tell me about Naveena',
  'Show projects',
  'What are her skills?',
  'Get contact details'
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Naveena's AI Assistant. Ask me anything about her projects, experience, or skills!", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const processResponse = (userInput) => {
    const input = userInput.trim().toLowerCase();
    
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = '';
      if (input.includes('about') || input.includes('who') || input.includes('naveena') || input.includes('identity')) {
        botResponse = "Bojapally Naveena is a Computer Science (AI & ML) student at Guru Nanak Institute of Technology and a Full Stack Developer. She loves solving algorithms, coordinating tech events, and building innovative full-stack web applications.";
      } else if (input.includes('project') || input.includes('portfolio') || input.includes('build')) {
        botResponse = "Here are Naveena's featured projects:\n1. **HyperLocal Connect**: Geolocation-based Full Stack platform with Gemini AI matching.\n2. **E-Commerce Website**: Dynamic storefront with search, catalog filters, and carts.\n3. **AI Driven Study Plan**: Personalized scheduler to optimize student workflows.\n4. **Secure Healthcare Data Storage**: Cryptographic blockchain simulated records database.";
      } else if (input.includes('skill') || input.includes('stack') || input.includes('tech')) {
        botResponse = "Naveena's skills cover:\n- **Languages**: Python, C, Java (Basics)\n- **Frontend**: HTML, CSS, React, Tailwind CSS\n- **Databases**: MySQL\n- **Tools**: Git, GitHub, VS Code, Jupyter, Colab, Eclipse";
      } else if (input.includes('resume') || input.includes('cv') || input.includes('education') || input.includes('study')) {
        botResponse = "Naveena is pursuing a B.Tech CSE (AI & ML) at Guru Nanak Institute of Technology, graduating in 2027. She recently completed a Web Development Internship at Apex Planet and is a Student Coordinator.";
      } else if (input.includes('contact') || input.includes('email') || input.includes('reach') || input.includes('hire') || input.includes('phone')) {
        botResponse = "You can contact Naveena via:\n- **Email**: bojapallynaveena@gmail.com\n- **Phone**: +91 9666898139\n- **LinkedIn**: linkedin.com/in/bojapally-naveena-27b5bb34a\n- **GitHub**: github.com/BojapallyNaveena";
      } else if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
        botResponse = "Hello! I am Naveena's AI Portfolio Assistant. Feel free to ask about her projects, experience, education, or contact details!";
      } else {
        botResponse = "I'm sorry, I didn't quite catch that. Try asking 'What are her skills?', 'Show projects', or 'Tell me about Naveena'!";
      }

      setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSend = (textToSend) => {
    if (!textToSend.trim()) return;

    setMessages((prev) => [...prev, { text: textToSend, isBot: false }]);
    setInputValue('');
    processResponse(textToSend);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-linear-to-tr from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white flex items-center justify-center shadow-xl shadow-violet-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-violet-400/30"
          title="Chat with AI Assistant"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="w-[320px] sm:w-[360px] h-[450px] glass-panel border border-white/10 rounded-[30px] overflow-hidden flex flex-col justify-between shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="px-5 py-4 bg-slate-900/80 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <Sparkles size={16} />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-extrabold text-white">AI Portfolio Assistant</h4>
                <span className="text-[9px] font-semibold text-emerald-400">● Online</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Logs */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3.5 no-scrollbar text-xs text-left">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2.5 ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                {msg.isBot && (
                  <div className="w-6 h-6 rounded-md bg-slate-900 border border-white/10 flex items-center justify-center shrink-0 text-violet-400">
                    <Sparkles size={12} />
                  </div>
                )}
                
                <div className={`p-3 rounded-2xl max-w-[80%] whitespace-pre-line leading-relaxed ${
                  msg.isBot 
                    ? 'bg-slate-900/60 text-slate-200 border border-white/5 rounded-tl-none' 
                    : 'bg-violet-600 text-white rounded-tr-none shadow-md shadow-violet-600/10'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 justify-start items-center">
                <div className="w-6 h-6 rounded-md bg-slate-900 border border-white/10 flex items-center justify-center shrink-0 text-violet-400">
                  <Sparkles size={12} className="animate-spin" />
                </div>
                <div className="px-3 py-2 bg-slate-900/60 text-slate-400 border border-white/5 rounded-2xl rounded-tl-none flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions & Input Tray */}
          <div className="p-4 bg-slate-950/60 border-t border-white/5 space-y-3">
            
            {/* Suggestion list */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-1.5">
                {suggestionPrompts.map((p) => (
                  <button
                    key={p}
                    onClick={() => handleSend(p)}
                    className="px-2.5 py-1 bg-slate-900 hover:bg-violet-600/20 text-slate-350 hover:text-violet-300 rounded-lg text-[9px] font-bold border border-white/5 hover:border-violet-500/30 transition-all cursor-pointer"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(inputValue)}
                placeholder="Ask me something..."
                className="flex-1 px-3 py-2 bg-slate-900/60 border border-white/5 rounded-xl outline-none text-xs text-white placeholder-slate-600 focus:border-violet-500 transition-colors"
              />
              <button
                onClick={() => handleSend(inputValue)}
                className="p-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Send size={12} />
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
