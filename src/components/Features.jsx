import React from 'react';
import { Zap, ShieldCheck, Sparkles } from 'lucide-react';

const Features = () => {
  return (
    <div className="mt-24 max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 glass rounded-2xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <h3 className="text-white font-bold mb-1">Instant Processing</h3>
            <p className="text-sm text-slate-400">Powered by advanced edge AI models running directly in your browser.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 glass rounded-2xl flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h3 className="text-white font-bold mb-1">Secure & Private</h3>
            <p className="text-sm text-slate-400">Your photos are never uploaded to a server. Everything stays on your device.</p>
          </div>
        </div>
        <div className="flex gap-4">
           <div className="flex-shrink-0 w-12 h-12 glass rounded-2xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-white font-bold mb-1">Smart Customization</h3>
            <p className="text-sm text-slate-400">Change backgrounds, add blurs, and enhance photos with one click.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
