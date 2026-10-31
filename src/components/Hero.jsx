import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDownRight, Download, Github, Linkedin, Mail, MapPin, Terminal, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-28 pb-16 md:py-32 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Details & Headings (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Terminal Command Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-panel border border-bone/10 font-mono text-xs text-bone/90 mb-6">
              <span className="text-signal font-bold">&gt;</span>
              <span className="text-bone/70">status:</span>
              <span className="text-emerald-400 font-medium">trained @ TAP Academy</span>
              <span className="text-dim">|</span>
              <span className="text-dim text-[11px] hidden sm:inline">B.Tech CSE 2026</span>
            </div>

            {/* Sub-label */}
            <div className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-signal font-semibold mb-3">
              Hello, I am
            </div>

            {/* Prominent Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-bone mb-4 leading-[1.08]">
              {personalInfo.name}
            </h1>

            {/* Professional Title */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-6 bg-signal"></span>
              <h2 className="font-mono text-lg sm:text-xl md:text-2xl text-signal font-medium tracking-tight">
                {personalInfo.title}
              </h2>
            </div>

            {/* Short Attractive Introduction */}
            <p className="text-base sm:text-lg text-bone/80 max-w-2xl leading-relaxed mb-8 font-normal">
              Computer Science graduate specialized in engineering clean, scalable full-stack applications with{' '}
              <span className="text-bone font-medium border-b border-signal/40">Python</span>,{' '}
              <span className="text-bone font-medium border-b border-signal/40">Django</span>,{' '}
              <span className="text-bone font-medium border-b border-signal/40">REST APIs</span>, and{' '}
              <span className="text-bone font-medium border-b border-signal/40">MySQL</span>.
              Passionate about robust backend architecture and creating intuitive digital solutions.
            </p>

            {/* Key Stack Quick Badges */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['Python', 'Django', 'MySQL', 'REST APIs', 'React.js', 'OOP'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-panel border border-bone/10 font-mono text-xs text-bone/75 hover:border-signal/50 hover:text-signal transition-colors"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* Action Buttons: View Projects & Download Resume */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="px-7 py-3.5 bg-signal text-ink hover:bg-bone font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg shadow-signal/20 hover:shadow-none"
              >
                <span>View My Projects</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-panel hover:bg-panel-light text-bone hover:text-signal border border-bone/20 hover:border-signal font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 flex items-center justify-center gap-2.5"
              >
                <Download className="w-4 h-4 text-signal" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Media Links & Location */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-bone/10 w-full font-mono text-xs text-dim">
              <div className="flex items-center gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-bone/70 hover:text-signal transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-bone/70 hover:text-signal transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1.5 text-bone/70 hover:text-signal transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">Email</span>
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-bone/50 ml-auto">
                <MapPin className="w-3.5 h-3.5 text-signal/70" />
                <span>{personalInfo.locationDisplay}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Photograph in HUD Bracket Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Outer HUD Corner Bracket Frame */}
              <div className="hud-frame p-3 bg-panel/80 border border-bone/10 shadow-2xl shadow-black/80">
                
                {/* Photo Container */}
                <div className="relative overflow-hidden bg-ink aspect-[3/4] border border-bone/10 group">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03]"
                    loading="eager"
                  />
                  
                  {/* Subtle Tech Scanline & Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Corner Coordinates */}
                  <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-ink/80 border border-bone/10 font-mono text-[9px] text-bone/70">
                    ID // JSY-2026
                  </div>
                  <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-ink/80 border border-bone/10 font-mono text-[9px] text-signal font-semibold">
                    SYS:ONLINE
                  </div>

                  {/* Bottom Image Tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-ink/90 backdrop-blur-md border border-bone/15 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-xs font-semibold text-bone">{personalInfo.name}</p>
                      <p className="font-mono text-[10px] text-signal">Python Full Stack Intern</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-signal animate-ping" />
                  </div>
                </div>

                {/* Bottom Frame Info Strip */}
                <div className="mt-3 pt-2.5 border-t border-bone/10 flex items-center justify-between font-mono text-[10px] text-dim">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-signal rounded-none inline-block" />
                    TAP ACADEMY
                  </span>
                  <span>BENGALURU, IN</span>
                </div>
              </div>

              {/* Decorative Background Accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-signal/20 -z-10 pointer-events-none hidden sm:block" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
