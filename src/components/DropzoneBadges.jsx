import React from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

const DropzoneBadges = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <div className="flex items-center gap-2 px-4 py-2 glass-morphism text-sm text-slate-300">
        <ImageIcon className="w-4 h-4" />
        <span>Supports PNG, JPG, WEBP</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 glass-morphism text-sm text-slate-300">
        <Sparkles className="w-4 h-4 text-primary" />
        <span>AI Powered</span>
      </div>
    </div>
  );
};

export default DropzoneBadges;
