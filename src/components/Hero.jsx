import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="text-center mb-16 space-y-4">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-morphism text-xs font-bold text-primary uppercase tracking-widest mb-4">
        <Sparkles className="w-3 h-3" />
        Next-Gen AI Technology
      </div>
      <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
        Remove background from <br />
        <span className="animated-gradient-text">images for free.</span>
      </h1>
      <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
        100% automatic and free. No signup required. High-resolution results in seconds.
      </p>
    </div>
  );
};

export default Hero;
