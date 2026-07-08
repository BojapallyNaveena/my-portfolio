import { useState } from 'react';
import { Code2, LayoutTemplate, Server, Database, Wrench, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 className="text-violet-400" size={20} />,
    skills: [
      { name: 'Python', level: 'Intermediate', percentage: 80 },
      { name: 'C', level: 'Intermediate', percentage: 75 },
      { name: 'Java (Basics)', level: 'Basic', percentage: 60 }
    ]
  },
  {
    title: 'Frontend',
    icon: <LayoutTemplate className="text-sky-400" size={20} />,
    skills: [
      { name: 'React', level: 'Intermediate', percentage: 80 },
      { name: 'Tailwind CSS', level: 'Intermediate', percentage: 80 },
      { name: 'HTML & CSS', level: 'Advanced', percentage: 90 }
    ]
  },
  {
    title: 'Database',
    icon: <Database className="text-emerald-400" size={20} />,
    skills: [
      { name: 'MySQL', level: 'Intermediate', percentage: 75 }
    ]
  },
  {
    title: 'Tools',
    icon: <Wrench className="text-amber-400" size={20} />,
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', percentage: 85 },
      { name: 'VS Code & Eclipse', level: 'Advanced', percentage: 90 },
      { name: 'Jupyter & Colab', level: 'Intermediate', percentage: 80 }
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCategories = activeCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.title === activeCategory);

  return (
    <section id="skills" className="relative py-24 border-t border-white/5 overflow-hidden reveal-item">
      
      {/* Background Soft Glow */}
      <div className="absolute top-[20%] left-[-150px] w-[350px] h-[350px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">Skills</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Technical Expertise</h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I work across frontend design, backend servers, databases, and version tools. Here is my development toolkit.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {['All', 'Languages', 'Frontend', 'Backend', 'Database', 'Tools'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/25 border border-violet-500'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="reveal-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, idx) => (
            <div 
              key={category.title}
              className="reveal-card opacity-0 glass-panel p-6 sm:p-8 rounded-[32px] border border-white/10 hover:border-violet-500/30 shadow-xl transition-all duration-300 relative group"
            >
              
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-6 border-b border-white/5 pb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h4 className="font-extrabold text-base text-slate-100">{category.title}</h4>
              </div>

              {/* Skills Progress list */}
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-slate-250 flex items-center gap-1.5">
                        <Sparkles size={10} className="text-violet-400" />
                        {skill.name}
                      </span>
                      <span className="text-slate-400">{skill.level}</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                      <div 
                        className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Glowing Corner Accent */}
              <div className="absolute -bottom-1.5 -right-1.5 w-12 h-12 bg-violet-600/5 blur-[20px] rounded-full group-hover:bg-violet-600/20 transition-all pointer-events-none"></div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
