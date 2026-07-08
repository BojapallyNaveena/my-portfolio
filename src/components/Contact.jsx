import { useState } from 'react';
import { Mail, MapPin, Send, Calendar, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    
    setStatus('sending');
    
    // Simulate EmailJS sending
    setTimeout(() => {
      console.log("Email Sent via Simulated EmailJS", formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto reset success message
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-white/5 overflow-hidden reveal-item">
      
      {/* Background Soft Glow */}
      <div className="absolute bottom-[10%] right-[-100px] w-[350px] h-[350px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">Get In Touch</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Contact Me</h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a project in mind, want to discuss software roles, or looking to collaborate? Drop me a line!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Info Card */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Reach Info panel */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 text-left space-y-6 flex-1 flex flex-col justify-center">
              
              <h4 className="font-extrabold text-base text-white border-b border-white/5 pb-3">Contact Details</h4>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="text-left">
                    <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Email Me</h5>
                    <p className="text-slate-200 text-sm font-semibold mt-0.5">bojapallynaveena@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-450 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="text-left">
                    <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Call Me</h5>
                    <p className="text-slate-200 text-sm font-semibold mt-0.5">+91 9666898139</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="text-left">
                    <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Location</h5>
                    <p className="text-slate-200 text-sm font-semibold mt-0.5">Nizamabad, Telangana, India</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <Calendar size={18} />
                  </div>
                  <div className="text-left">
                    <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Availability</h5>
                    <p className="text-slate-200 text-sm font-semibold mt-0.5">Open for Internships / Full-time roles</p>
                  </div>
                </div>
              </div>

              {/* Social row */}
              <div className="pt-4 border-t border-white/5">
                <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3">Or Connect Via</h5>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/BojapallyNaveena"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-slate-950 border border-white/10 hover:border-violet-500 hover:text-violet-400 rounded-xl text-slate-400 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bojapally-naveena-27b5bb34a"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-slate-950 border border-white/10 hover:border-indigo-500 hover:text-indigo-400 rounded-xl text-slate-400 transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Glassmorphism Form Card */}
          <div className="md:col-span-7 glass-panel p-6 sm:p-8 rounded-[32px] border border-white/10 relative text-left">
            <h4 className="font-extrabold text-base text-white border-b border-white/5 pb-3 mb-6">Send Message</h4>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-450 uppercase tracking-wider block">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950/60 border border-white/10 rounded-2xl outline-none focus:border-violet-500 text-sm text-white placeholder-slate-600 transition-colors font-semibold"
                />
              </div>

              {/* Email field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-450 uppercase tracking-wider block">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="johndoe@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950/60 border border-white/10 rounded-2xl outline-none focus:border-violet-500 text-sm text-white placeholder-slate-600 transition-colors font-semibold"
                />
              </div>

              {/* Subject field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-450 uppercase tracking-wider block">Subject</label>
                <input
                  type="text"
                  placeholder="Project Collaboration / Job Opening"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950/60 border border-white/10 rounded-2xl outline-none focus:border-violet-500 text-sm text-white placeholder-slate-600 transition-colors font-semibold"
                />
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-450 uppercase tracking-wider block">Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Your message details here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950/60 border border-white/10 rounded-2xl outline-none focus:border-violet-500 text-sm text-white placeholder-slate-600 transition-colors font-semibold resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:from-slate-800 disabled:to-slate-800 text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-violet-600/25 active:scale-98 transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={14} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Success status overlay alerts */}
              {status === 'success' && (
                <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-3 text-emerald-400 text-xs font-semibold animate-in fade-in duration-300">
                  <CheckCircle2 size={16} />
                  <span>Your message was sent successfully! I will reach out soon. ✅</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>

    </section>
  );
}
