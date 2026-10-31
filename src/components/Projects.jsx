import React from 'react';
import { projectsData } from '../data/portfolioData';
import { Github, ExternalLink, Terminal, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-bone/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-signal font-semibold mb-2">
              <span className="text-bone/40">03 //</span>
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-bone">
              Featured Projects & Systems
            </h2>
            <div className="h-1 w-16 bg-signal mt-3"></div>
          </div>

          <p className="font-mono text-xs text-dim mt-4 md:mt-0 max-w-md">
            Production-grade implementations focusing on real problem-solving, clean architecture, and practical engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="hud-frame p-6 sm:p-8 bg-panel border border-bone/10 transition-all duration-300 hover:border-signal/40 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Project Details (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  
                  <div>
                    {/* Top Meta Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="font-mono text-[10px] uppercase px-2.5 py-1 bg-signal text-ink font-bold tracking-widest">
                        {project.badge}
                      </span>
                      <span className="font-mono text-[10px] uppercase px-2 py-0.5 bg-panel-light border border-bone/10 text-dim">
                        {project.category}
                      </span>
                      <span className="font-mono text-[10px] text-dim/60 ml-auto hidden sm:inline">
                        SYS_ID // 0{idx + 1}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-bone mb-4 group-hover:text-signal transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-bone/80 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="space-y-2.5 mb-6">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-signal font-semibold flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Key Engineering Highlights</span>
                      </h4>
                      <ul className="space-y-2">
                        {project.keyPoints.map((point, pIdx) => (
                          <li key={pIdx} className="text-xs sm:text-sm text-bone/75 flex items-start gap-2.5">
                            <span className="text-signal mt-1 flex-shrink-0 text-xs">▸</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack & Links */}
                  <div className="pt-6 border-t border-bone/10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-ink border border-bone/10 font-mono text-xs text-bone/85 group-hover:border-signal/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-signal text-ink hover:bg-bone font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Repository</span>
                      </a>

                      <span className="text-dim text-[11px] font-mono">
                        Clean code · Architecture documented
                      </span>
                    </div>
                  </div>

                </div>

                {/* Right: Technical Mockup & System Architecture Card (5 cols) */}
                <div className="lg:col-span-5 h-full">
                  <div className="bg-ink border border-bone/15 p-5 flex flex-col justify-between h-full font-mono text-xs">
                    
                    {/* Simulated Terminal Window Header */}
                    <div className="flex items-center justify-between border-b border-bone/10 pb-3 mb-4">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                        <span className="ml-2 text-[10px] text-dim">{project.id}.py</span>
                      </div>
                      <span className="text-[10px] text-signal uppercase tracking-widest font-semibold">
                        ACTIVE
                      </span>
                    </div>

                    {/* Architecture Code Snippet Simulation */}
                    <div className="space-y-2 text-[11px] leading-relaxed text-bone/70 select-none overflow-x-auto py-2">
                      <p className="text-dim"># {project.badge} architecture</p>
                      <p><span className="text-signal">class</span> <span className="text-bone font-semibold">{project.id.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')}Service</span>:</p>
                      <p className="pl-4"><span className="text-signal">def</span> <span className="text-bone">__init__</span>(self, config):</p>
                      <p className="pl-8 text-dim">self.database = MySQL.connect()</p>
                      <p className="pl-8 text-dim">self.models = load_trained_pipeline()</p>
                      <p className="pl-4"><span className="text-signal">def</span> <span className="text-bone">process_request</span>(self, payload):</p>
                      <p className="pl-8 text-dim">clean_data = self.preprocess(payload)</p>
                      <p className="pl-8"><span className="text-signal">return</span> {`{"status": 200, "match_rate": 0.94}`}</p>
                    </div>

                    {/* Interactive Status Footer */}
                    <div className="mt-4 pt-3 border-t border-bone/10 flex items-center justify-between text-[10px] text-dim">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        DEPLOYED PIPELINE
                      </span>
                      <span>TAP ACADEMY VERIFIED</span>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
