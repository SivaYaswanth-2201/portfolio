import React from 'react';
import { educationData, certificationsData } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, Sparkles, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-bone/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-signal font-semibold mb-2">
              <span className="text-bone/40">04 //</span>
              <span>Milestones & Learning</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-bone">
              Education & Placement Training
            </h2>
            <div className="h-1 w-16 bg-signal mt-3"></div>
          </div>

          <p className="font-mono text-xs text-dim mt-4 md:mt-0 max-w-sm">
            Continuous academic and practical milestones focused on engineering excellence.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-bone/15 ml-3 sm:ml-6 md:ml-8 pl-6 sm:pl-8 md:pl-10 space-y-12 mb-20">
          
          {educationData.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[47px] top-1.5 flex items-center justify-center">
                <div className={`w-4 h-4 border-2 transition-transform duration-300 group-hover:scale-125 ${
                  item.status === 'Currently Pursuing'
                    ? 'bg-signal border-bone'
                    : 'bg-ink border-signal'
                }`} />
              </div>

              {/* Card Container */}
              <div className="cyber-card p-6 sm:p-7 relative">
                
                {/* Header Strip */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-signal font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                    <span className="text-dim">|</span>
                    <span className={`px-2 py-0.5 text-[10px] uppercase tracking-wider ${
                      item.status === 'Currently Pursuing' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                        : 'bg-panel-light text-dim border border-bone/10'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  {item.score && (
                    <span className="font-mono text-xs px-2.5 py-0.5 bg-signal/15 text-signal border border-signal/30 font-bold">
                      {item.score}
                    </span>
                  )}
                </div>

                {/* Degree / Program Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-bone mb-1 group-hover:text-signal transition-colors">
                  {item.title}
                </h3>

                {/* Institution & Location */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-dim mb-4">
                  <span className="text-bone/90 font-medium flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-signal" />
                    {item.institution}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-dim" />
                    {item.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-bone/75 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-bone/10">
                  {item.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-2.5 py-1 bg-ink border border-bone/10 font-mono text-[11px] text-bone/70"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Certifications Subsection */}
        <div className="pt-8">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-5 h-5 text-signal" />
            <h3 className="font-mono text-base uppercase tracking-widest text-bone font-semibold">
              Industry Certifications & Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((cert, cIdx) => (
              <div key={cIdx} className="hud-frame p-6 bg-panel border border-bone/10 hover:border-signal/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold px-2 py-0.5 bg-signal/10 border border-signal/20">
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> VERIFIED
                  </span>
                </div>

                <h4 className="text-lg font-bold text-bone mb-2">
                  {cert.name}
                </h4>

                <p className="text-xs sm:text-sm text-bone/70 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
