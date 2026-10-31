import React, { useState, useEffect } from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { Menu, X, Download, Terminal, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple active section detection
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-ink/90 backdrop-blur-md border-b border-bone/10 py-3 shadow-lg shadow-black/40' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#hero" 
            className="group flex items-center gap-2.5 font-mono text-sm tracking-wider uppercase text-bone transition-colors"
          >
            <span className="w-2.5 h-2.5 bg-signal rounded-none rotate-45 transition-transform duration-300 group-hover:scale-125" />
            <span className="font-bold tracking-tight text-bone group-hover:text-signal transition-colors">
              {personalInfo.brandName}
            </span>
            <span className="text-dim text-xs font-normal hidden sm:inline">
              // DEV
            </span>
          </a>

          {/* Availability Status Badge (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-panel border border-bone/10 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-bone/80 text-[11px] tracking-wide">AVAILABLE FOR ROLES</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 transition-colors uppercase tracking-wider ${
                    isActive 
                      ? 'text-signal font-semibold border-b border-signal' 
                      : 'text-bone/70 hover:text-bone hover:bg-panel'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Resume Button in Navbar */}
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              className="ml-3 px-4 py-2 bg-signal/10 hover:bg-signal text-signal hover:text-ink border border-signal/40 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              className="px-2.5 py-1 bg-signal text-ink font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1"
            >
              <Download className="w-3 h-3" />
              <span>CV</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-bone/80 hover:text-bone hover:bg-panel border border-bone/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-signal" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ink/95 border-b border-bone/10 backdrop-blur-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-bone/80 hover:text-signal hover:bg-panel border-l-2 border-transparent hover:border-signal transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-dim text-[10px]">→</span>
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-bone/10 flex flex-col gap-2">
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                className="w-full py-2.5 bg-signal text-ink font-bold text-center uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center justify-center gap-2 pt-2 text-dim text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{personalInfo.status}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
