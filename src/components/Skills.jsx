import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, 
  Boxes, 
  FileCode, 
  Server, 
  Network, 
  Cpu, 
  Layout, 
  Palette, 
  Flame, 
  Atom, 
  Database, 
  Table, 
  GitBranch, 
  Terminal,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Boxes: Boxes,
  FileCode: FileCode,
  Server: Server,
  Network: Network,
  Cpu: Cpu,
  Layout: Layout,
  Palette: Palette,
  Flame: Flame,
  Atom: Atom,
  Database: Database,
  Table: Table,
  GitBranch: GitBranch,
  Terminal: Terminal
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Programming' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'database', label: 'Databases & Tools' }
  ];

  const filteredCategories = activeCategory === 'all'
    ? skillsData.categories
    : skillsData.categories.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 border-t border-bone/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-signal font-semibold mb-2">
              <span className="text-bone/40">02 //</span>
              <span>Technical Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-bone">
              Skills & Architecture Capabilities
            </h2>
            <div className="h-1 w-16 bg-signal mt-3"></div>
          </div>

          <p className="font-mono text-xs text-dim mt-4 md:mt-0 max-w-sm">
            Focusing on authentic proficiency, clear fundamentals, and practical building capabilities.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 border transition-all duration-200 uppercase tracking-wider ${
                activeCategory === cat.id
                  ? 'bg-signal text-ink border-signal font-bold shadow-md shadow-signal/20'
                  : 'bg-panel text-bone/70 border-bone/10 hover:border-signal/50 hover:text-bone'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Categories Display */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              
              {/* Category Subheading */}
              <div className="flex items-center justify-between border-b border-bone/10 pb-2">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-signal" />
                  <h3 className="font-mono text-sm uppercase tracking-widest text-bone font-semibold">
                    {category.title}
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-dim hidden sm:inline">
                  {category.description}
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className={`cyber-card p-5 relative overflow-hidden group ${
                        skill.highlight ? 'border-bone/20' : ''
                      }`}
                    >
                      {/* Highlight Top Bar */}
                      {skill.highlight && (
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-signal" />
                      )}

                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 bg-panel-light border border-bone/10 flex items-center justify-center text-signal group-hover:scale-110 transition-transform">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-[10px] uppercase px-2 py-0.5 bg-ink border border-bone/10 text-dim group-hover:text-signal transition-colors">
                          {skill.level}
                        </span>
                      </div>

                      <h4 className="text-base font-semibold text-bone mb-1 group-hover:text-signal transition-colors">
                        {skill.name}
                      </h4>

                      <p className="text-xs text-bone/60 leading-relaxed min-h-[32px]">
                        {skill.note}
                      </p>

                      <div className="mt-4 pt-3 border-t border-bone/10 flex items-center justify-between font-mono text-[10px] text-dim">
                        <span>PRACTICAL LEVEL</span>
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                          <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                          <span className={`w-1.5 h-1.5 rounded-full ${skill.level === 'Proficient' || skill.level === 'Strong Fundamentals' ? 'bg-signal' : 'bg-bone/20'}`} />
                          <span className={`w-1.5 h-1.5 rounded-full ${skill.level === 'Proficient' ? 'bg-signal' : 'bg-bone/20'}`} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
