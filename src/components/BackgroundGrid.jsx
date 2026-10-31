import React from 'react';

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background HUD Grid */}
      <div className="absolute inset-0 hud-grid opacity-70" />

      {/* Radial atmospheric glows */}
      <div 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-15"
        style={{ background: 'radial-gradient(circle, #ff5b1f 0%, transparent 70%)' }}
      />
      <div 
        className="absolute top-1/2 -left-48 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10"
        style={{ background: 'radial-gradient(circle, #ff5b1f 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-10 right-0 w-[600px] h-[600px] rounded-full blur-[180px] opacity-10"
        style={{ background: 'radial-gradient(circle, #ff5b1f 0%, transparent 70%)' }}
      />

      {/* Cyber Reticles / Corner Accents */}
      <div className="hidden lg:block absolute top-6 left-6 font-mono text-[10px] tracking-widest text-dim/40 uppercase select-none">
        SYS.LOC // TAP_ACADEMY_BTM
      </div>
      <div className="hidden lg:block absolute top-6 right-6 font-mono text-[10px] tracking-widest text-dim/40 uppercase select-none">
        STACK // PYTHON_FULLSTACK
      </div>
    </div>
  );
}
