import React from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { ArrowUpRight, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full overflow-hidden border-t border-bone/10 px-4 sm:px-6 md:px-10 pt-16 pb-12 relative bg-ink">
      <div className="max-w-7xl mx-auto">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Column 1: Navigation */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal font-semibold">
              // Navigation
            </span>
            <nav className="flex flex-col gap-2 font-mono text-xs" aria-label="Footer Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-bone/70 hover:text-signal transition-colors w-fit uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 2: Elsewhere / Socials */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal font-semibold">
              // Elsewhere
            </span>
            <div className="flex flex-col gap-2 font-mono text-xs">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone/70 hover:text-signal transition-colors flex items-center gap-1.5 w-fit"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3 h-3 text-dim" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone/70 hover:text-signal transition-colors flex items-center gap-1.5 w-fit"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 text-dim" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="text-bone/70 hover:text-signal transition-colors flex items-center gap-1.5 w-fit"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Direct Mail</span>
                <ArrowUpRight className="w-3 h-3 text-dim" />
              </a>
            </div>
          </div>

          {/* Column 3: Contact & Status */}
          <div className="flex flex-col md:items-end md:text-right gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal font-semibold">
              // Direct Line
            </span>
            <div className="flex flex-col md:items-end gap-1 font-mono text-xs">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-bone/85 hover:text-signal transition-colors font-medium"
              >
                {personalInfo.email}
              </a>
              <span className="text-dim text-[11px]">{personalInfo.phone}</span>
              <span className="text-dim text-[11px]">{personalInfo.locationDisplay}</span>
            </div>
          </div>

        </div>

        {/* Large Watermark Brand Text (Inspired by reference site) */}
        <div 
          aria-hidden="true" 
          className="w-full text-center overflow-hidden my-6 sm:my-10 select-none pointer-events-none"
        >
          <span className="block uppercase whitespace-nowrap text-[11vw] font-bold leading-none tracking-[-0.04em] text-bone/[0.04]">
            {personalInfo.brandName}
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bone/10 pt-8 font-mono text-[11px] uppercase tracking-wider text-dim flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <span>
            © {currentYear} {personalInfo.name} · All rights reserved.
          </span>
          <span className="flex items-center gap-1.5">
            <span>Trained at</span>
            <a
              href="https://thetapacademy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone hover:text-signal transition-colors underline"
            >
              TAP Academy
            </a>
            <span>· Built with React & Tailwind CSS</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
