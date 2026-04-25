import React from 'react';
import { Layers, UserCircle, Clock } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Navbar = ({ onOpenHistory }) => {
  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="p-2 glass rounded-xl group-hover:scale-110 transition-transform duration-300">
          <Layers className="w-6 h-6 text-primary" />
        </div>
        <span className="text-2xl font-black tracking-tighter text-white">
          CLEAR<span className="text-primary">BG</span>
        </span>
      </div>
      
      <div className="flex items-center gap-3 md:gap-6">
        <button 
          onClick={onOpenHistory}
          className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 glass rounded-full hover:bg-white/10 transition-colors border border-white/10"
        >
          <Clock className="w-4 h-4 text-slate-300" />
          <span className="text-xs md:text-sm font-semibold text-white hidden md:inline">History</span>
        </button>

        <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 glass rounded-full border border-white/10">
          <UserCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          <span className="text-xs md:text-sm font-semibold text-white truncate max-w-[80px] md:max-w-none">Welcome Guest</span>
        </div>
      </div>
    </nav>
  );
};    

export default Navbar;
