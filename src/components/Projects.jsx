import { useState } from 'react';
import { Search, ExternalLink, X, Cpu, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { Github } from './Icons';

// Import project screenshots
import hyperlocalConnectImg from '../assets/hyperlocal_connect.png';
import ecommerceWebsiteImg from '../assets/ecommerce_website.png';
import aiStudyPlanImg from '../assets/ai_study_plan.png';
import healthcareStorageImg from '../assets/healthcare_storage.png';

const projectsData = [
  {
    id: 'hyperlocal-connect',
    name: 'HyperLocal Connect',
    shortDesc: 'AI-powered localized job matching portal connecting workers and employers within a 15-20km radius.',
    desc: 'An AI-powered web platform designed to bridge the gap between local job seekers and employers. Employs geolocation analytics, real-time messaging, and interactive maps to connect domestic help, painters, plumbers, and technicians with local job openings.',
    tech: ['React', 'Node', 'Express', 'Tailwind', 'MySQL', 'Socket.io', 'Gemini AI'],
    image: hyperlocalConnectImg,
    github: 'https://github.com/BojapallyNaveena/connect',
    demo: 'https://hyperlocalconnect.example.com',
    problem: 'Local skilled workers face difficulty finding work opportunities nearby, while households struggle to hire verified local help.',
    solution: 'Built a localized app showing openings on a map. Built an AI chat matching system using Gemini AI to automatically parse natural queries and match profiles. Integrated Aadhaar verification simulation for trust.',
    features: [
      'Dual-role login and custom dashboards.',
      'Gemini AI smart matching assistant.',
      'Aadhaar OTP verification simulation interface.',
      'Integrated OpenStreetMap map view showing jobs.',
      'Socket.io real-time chat between posters and workers.'
    ],
    architecture: 'React (Vite) client -> Express Router API -> Sequelize -> MySQL. Real-time notifications powered by Socket.io.',
    challenges: 'Ensuring geographical distance filtering was accurate and fast on MySQL without heavy GIS indexes.',
    learnings: 'Learned Sequelize spatial calculations (Haversine formula), real-time WebSockets, and database access controls.',
    improvements: 'Adding SMS notifications (Twilio) and Razopay payment integrations.'
  },
  {
    id: 'ecommerce-website',
    name: 'E-Commerce Website',
    shortDesc: 'A premium full-stack e-commerce store with product recommendations, cart analytics, and secure billing.',
    desc: 'A modern e-commerce storefront offering customizable shopping catalogs, responsive layouts, product filters, search, and integrated cart management.',
    tech: ['React', 'Node', 'Express', 'MySQL', 'Tailwind'],
    image: aiStudyPlanImg,
    github: 'https://github.com/BojapallyNaveena/beauty-products',
    demo: 'https://beautyproducts.example.com',
    problem: 'Generic e-commerce structures lack interactive filtering and responsive styling, leading to drop-offs.',
    solution: 'Designed a highly interactive store layout with live search, dynamic cart status trees, and multi-factor product parameters.',
    features: [
      'Robust Product Search and multi-category filtering.',
      'Persistent local and cloud shopping cart synchronization.',
      'Secure token authorization (JWT) and session controls.',
      'Fully responsive UI layout optimized for all device sizes.'
    ],
    architecture: 'React Frontend -> JWT Auth Guard Middleware -> Node/Express Controller endpoints -> MySQL database tables.',
    challenges: 'Maintaining cart state consistency between local storage and database values when guest users log in.',
    learnings: 'Gained expertise in MySQL relational schemas, frontend state caching, and building reusable filter hooks.',
    improvements: 'Integration of automated AI product matching based on user parameters.'
  },
  {
    id: 'ai-study-plan',
    name: 'AI Driven Study Plan',
    shortDesc: 'Personalized schedules and logical study planner built to improve student productivity.',
    desc: 'An AI-powered academic helper that generates customizable study logs, logical resource allocations, and personalized scheduler boards to maximize learning retention.',
    tech: ['React', 'Tailwind', 'Node', 'Express', 'MySQL', 'Python'],
    image: ecommerceWebsiteImg,
    github: 'https://github.com/BojapallyNaveena/ai-study-plan',
    demo: 'https://aistudyplan.example.com',
    problem: 'Students feel overwhelmed trying to schedule coursework logically, leading to study fatigue and low completion rates.',
    solution: 'Developed a planning algorithm that splits coursework into bite-sized tasks, tracks session completion, and schedules review dates.',
    features: [
      'Personalized schedule generation wizard.',
      'Logical task scheduling based on course weightages.',
      'Productivity dashboard displaying sprint burndowns.',
      'Calendar widget synchronizing learning tasks.'
    ],
    architecture: 'React Client -> Express Scheduler Engine -> Python Optimizer -> MySQL database tables.',
    challenges: 'Balancing schedule parameters (difficulty, due date, study hours) in the optimization algorithm.',
    learnings: 'Mastered scheduling algorithms, chart representations in React, and integrating Python scripts into Node backend pipelines.',
    improvements: 'Adding natural language goal setting and reminders via push notifications.'
  },
  {
    id: 'healthcare-blockchain',
    name: 'Secure Healthcare Data Storage',
    shortDesc: 'Decentralized ledger system utilizing blockchain concepts to maintain patient record integrity.',
    desc: 'A decentralized data vault project exploring blockchain technology to secure healthcare data. Patient medical history is saved in a cryptographically chained ledger where patients control provider access keys.',
    tech: ['Python', 'Java', 'Blockchain', 'Cryptography', 'MySQL'],
    image: healthcareStorageImg,
    github: 'https://github.com/BojapallyNaveena/healthcare-blockchain',
    demo: 'https://healthcareblockchain.example.com',
    problem: 'Centralized health storage nodes are prone to data breaches and record manipulation, compromising patient privacy.',
    solution: 'Engineered a simulated decentralized ledger where each patient block is chained cryptographically. Implemented access control rules to validate doctor credentials.',
    features: [
      'SHA-256 cryptographic chaining of medical reports.',
      'Access token logs control patient authorization settings.',
      'Tamper-detection checks to validate blockchain integrity.',
      'Secure relational schemas storing provider data.'
    ],
    architecture: 'Python Ledger API -> Java Encryption Decryption Helpers -> MySQL database storage nodes.',
    challenges: 'Designing cryptographically secure tamper detection models that don\'t compromise system query speed.',
    learnings: 'Deepened knowledge of SHA hashing, public key encryption principles, database referential integrity, and secure APIs.',
    improvements: 'Migrating the simulation to a live Ethereum testnet with solidity contracts.'
  }
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeFilter === 'All') return matchesSearch;
    return matchesSearch && project.tech.includes(activeFilter);
  });

  return (
    <section id="projects" className="relative py-24 border-t border-white/5 overflow-hidden reveal-item">
      
      {/* Background soft glow */}
      <div className="absolute bottom-[20%] right-[-100px] w-[350px] h-[350px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">Portfolio</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Featured Projects</h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A hand-picked selection of full-stack, blockchain, and collaborative software projects representing my coding capabilities.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          
          {/* Search Box */}
          <div className="w-full md:max-w-md relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-900/60 border border-white/10 rounded-2xl outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm text-white placeholder-slate-500 transition-all font-semibold"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {['All', 'React', 'Python', 'Java', 'Blockchain'].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wide transition-all duration-200 cursor-pointer ${
                  activeFilter === tag
                    ? 'bg-violet-600 text-white border border-violet-500'
                    : 'bg-slate-900/40 text-slate-400 hover:text-slate-200 border border-white/5'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

        </div>

        {/* Grid List */}
        <div className="reveal-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="reveal-card opacity-0 glass-panel rounded-[28px] overflow-hidden border border-white/8 hover:border-violet-500/30 flex flex-col group transition-all duration-300 relative shadow-xl hover:-translate-y-2"
            >
              
              {/* Card visual mock container */}
              <div className="h-44 bg-slate-950 border-b border-white/5 relative overflow-hidden flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                
                {/* Tech badges absolute */}
                <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1 z-10">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="px-2 py-0.5 bg-black/85 backdrop-blur-md rounded-md text-[9px] font-bold text-slate-200 border border-white/10">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-0.5 bg-black/85 backdrop-blur-md rounded-md text-[9px] font-bold text-slate-400 border border-white/10">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-extrabold text-white mb-2 group-hover:text-violet-400 transition-colors">
                    {project.name}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
                  >
                    View details
                    <ArrowRight size={12} />
                  </button>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-slate-950/80 hover:bg-slate-900 border border-white/5 rounded-lg text-slate-400 hover:text-white transition-colors"
                      title="View Code"
                    >
                      <Github size={14} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-slate-950/80 hover:bg-slate-900 border border-white/5 rounded-lg text-slate-400 hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 font-semibold">No projects matching your search term.</p>
          </div>
        )}

      </div>

      {/* Project Detail Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          
          <div className="bg-[#0b0f19] border border-white/10 w-full max-w-3xl rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 my-8">
            
            {/* Modal Header */}
            <div className="px-6 py-5 bg-slate-900/60 border-b border-white/5 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-extrabold text-violet-400 uppercase tracking-widest">Project Details</span>
                <h3 className="text-xl font-extrabold text-white mt-0.5">{selectedProject.name}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 bg-slate-950 hover:bg-white/5 text-slate-400 hover:text-white rounded-xl border border-white/5 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6 text-left">
              
              {/* Project screenshot header */}
              <div className="w-full h-48 sm:h-64 rounded-2xl overflow-hidden border border-white/10 relative mb-6 bg-slate-950">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-slate-450 tracking-wider">Overview</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.desc}</p>
              </div>

              {/* Tech stack tags */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-slate-450 tracking-wider">Tech Stack Used</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-xl text-xs font-bold text-violet-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Problem / Solution Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 bg-rose-950/20 border border-rose-500/20 rounded-2xl">
                  <div className="flex items-center gap-2 text-rose-450 font-extrabold text-xs uppercase tracking-wider mb-2">
                    <AlertTriangle size={14} /> The Problem
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{selectedProject.problem}</p>
                </div>
                <div className="p-5 bg-emerald-950/20 border border-emerald-500/20 rounded-2xl">
                  <div className="flex items-center gap-2 text-emerald-450 font-extrabold text-xs uppercase tracking-wider mb-2">
                    <CheckCircle2 size={14} /> The Solution
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-slate-450 tracking-wider">Core Features</h4>
                <ul className="text-slate-350 text-xs space-y-2">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-sky-400 mt-0.5">✦</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture & Challenges */}
              <div className="space-y-4 pt-2 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-xs font-bold uppercase text-slate-450 tracking-wider mb-1">Architecture</h5>
                    <p className="text-slate-400 text-xs leading-relaxed">{selectedProject.architecture}</p>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase text-slate-450 tracking-wider mb-1">Technical Challenges</h5>
                    <p className="text-slate-400 text-xs leading-relaxed">{selectedProject.challenges}</p>
                  </div>
                </div>
              </div>

              {/* Learnings & Future Enhancements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div>
                  <h5 className="text-xs font-bold uppercase text-slate-450 tracking-wider mb-1">Key Learnings</h5>
                  <p className="text-slate-400 text-xs leading-relaxed">{selectedProject.learnings}</p>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase text-slate-450 tracking-wider mb-1">Future Improvements</h5>
                  <p className="text-slate-400 text-xs leading-relaxed">{selectedProject.improvements}</p>
                </div>
              </div>

            </div>

            {/* Modal Footer Links */}
            <div className="px-6 py-5 bg-slate-900/60 border-t border-white/5 flex gap-3 justify-end">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-slate-950 border border-white/10 hover:border-violet-500/40 text-slate-200 hover:text-white rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all"
              >
                <Github size={14} />
                View Code
              </a>
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-md shadow-violet-600/10 transition-all"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            </div>

          </div>

        </div>
      )}

    </section>
  );
}
