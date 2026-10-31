import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, Code, Cpu, Award, BookOpen, Compass, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-bone/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-signal font-semibold mb-2">
            <span className="text-bone/40">01 //</span>
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-bone">
            Engineering Foundations & Passion
          </h2>
          <div className="h-1 w-16 bg-signal mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Bio Text & Objective (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Lead Narrative */}
            <div className="space-y-4 text-bone/85 text-base sm:text-lg leading-relaxed">
              {personalInfo.aboutBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Career Objective Terminal Box */}
            <div className="mt-8 p-6 bg-panel border-l-4 border-signal border-t border-r border-b border-bone/10 relative">
              <div className="flex items-center justify-between mb-3 border-b border-bone/10 pb-2">
                <div className="flex items-center gap-2 font-mono text-xs text-signal font-semibold uppercase tracking-wider">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Career Objective</span>
                </div>
                <span className="font-mono text-[10px] text-dim">sys_goal.py</span>
              </div>
              <p className="font-mono text-xs sm:text-sm text-bone/90 leading-relaxed italic">
                "{personalInfo.careerObjective}"
              </p>
            </div>

            {/* Core Values / Working Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-panel border border-bone/10">
                <div className="font-mono text-xs text-signal mb-1">01 / LOGIC FIRST</div>
                <div className="text-xs text-bone/70">Strong focus on object-oriented structures, algorithms and database schemas.</div>
              </div>
              <div className="p-4 bg-panel border border-bone/10">
                <div className="font-mono text-xs text-signal mb-1">02 / CONTINUOUS LEARNING</div>
                <div className="text-xs text-bone/70">Actively absorbing industry workflows and best practices at TAP Academy.</div>
              </div>
              <div className="p-4 bg-panel border border-bone/10">
                <div className="font-mono text-xs text-signal mb-1">03 / PRODUCT MINDSET</div>
                <div className="text-xs text-bone/70">Committed to developing dependable, intuitive full-stack applications.</div>
              </div>
            </div>

          </div>

          {/* Right Column: Spec Highlights & Dossier (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="hud-frame p-6 bg-panel border border-bone/10">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-signal font-semibold mb-6 flex items-center justify-between">
                <span>Developer Dossier</span>
                <span className="text-dim text-[11px] font-normal">v1.0.0</span>
              </div>

              <div className="divide-y divide-bone/10 font-mono text-xs">
                
                <div className="py-3 flex justify-between items-center">
                  <span className="text-dim">NAME</span>
                  <span className="text-bone font-medium">{personalInfo.name}</span>
                </div>

                <div className="py-3 flex justify-between items-center">
                  <span className="text-dim">PRIMARY FOCUS</span>
                  <span className="text-signal font-semibold">Python Full Stack</span>
                </div>

                <div className="py-3 flex justify-between items-center">
                  <span className="text-dim">TRAINING ACADEMY</span>
                  <span className="text-bone">TAP Academy (Bengaluru)</span>
                </div>

                <div className="py-3 flex justify-between items-center">
                  <span className="text-dim">DEGREE</span>
                  <span className="text-bone">B.Tech CSE (Audisankara)</span>
                </div>

                <div className="py-3 flex justify-between items-center">
                  <span className="text-dim">STATUS</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Ready for Hire
                  </span>
                </div>

                <div className="py-3 flex justify-between items-center">
                  <span className="text-dim">LOCATION</span>
                  <span className="text-bone">{personalInfo.locationDisplay}</span>
                </div>

              </div>

              {/* Download Resume Link within Dossier */}
              <div className="mt-6 pt-4 border-t border-bone/10">
                <a
                  href={personalInfo.resumeUrl}
                  download={personalInfo.resumeFileName}
                  className="w-full py-2.5 px-4 bg-signal/10 hover:bg-signal text-signal hover:text-ink border border-signal/40 font-mono text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>Download Full Resume (.PDF)</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              {personalInfo.highlights.map((item, idx) => (
                <div key={idx} className="p-4 bg-panel/70 border border-bone/10">
                  <span className="font-mono text-[10px] text-dim uppercase tracking-wider block mb-1">
                    {item.label}
                  </span>
                  <span className="font-mono text-sm font-bold text-bone block mb-0.5">
                    {item.value}
                  </span>
                  <span className="text-[11px] text-bone/60 block leading-tight">
                    {item.subtext}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
