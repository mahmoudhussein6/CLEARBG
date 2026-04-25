import React from 'react';
import { Layers } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
           <Layers className="w-5 h-5 text-primary" />
           <span className="font-bold text-white">CLEARBG</span>
        </div>
        <p className="text-sm text-slate-500">
          © 2026 ClearBG AI. All rights reserved. Made By Mahmoud Hussein
        </p>
      </div>
    </footer>
  );
};

export default Footer;
