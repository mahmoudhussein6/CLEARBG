import React from 'react';
import { Palette, Image as ImageIcon, Upload, Droplets, RefreshCcw, Sparkles } from 'lucide-react';

const EditorControls = ({ bgColor, setBgColor, bgBlur, setBgBlur, bgImage, setBgImage, handleBgUpload, onReset }) => {
  const colors = ['transparent', '#ffffff', '#000000', '#f8fafc', '#ef4444', '#22c55e', '#3b82f6', '#eab308'];

  return (
    <div className="space-y-6">
      <div className="glass p-6 rounded-3xl space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-4 text-white font-bold">
            <Palette className="w-5 h-5 text-primary" />
            Background
          </div>
          <div className="grid grid-cols-4 gap-2">
            {colors.map(color => (
              <button
                key={color}
                onClick={() => { setBgColor(color); setBgImage(null); }}
                className={`h-10 rounded-lg border-2 transition-all ${
                  bgColor === color && !bgImage ? 'border-primary scale-110' : 'border-white/10 hover:scale-105'
                }`}
                style={{ 
                  backgroundColor: color === 'transparent' ? 'transparent' : color,
                  backgroundImage: color === 'transparent' ? 'repeating-conic-gradient(#334155 0% 25%, #1e293b 0% 50%)' : 'none',
                  backgroundSize: '10px 10px'
                }}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4 text-white font-bold">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-secondary" />
              Custom Image
            </div>
            {bgImage && (
              <button onClick={() => setBgImage(null)} className="text-[10px] uppercase text-red-400 hover:text-red-300">Remove</button>
            )}
          </div>
          <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-white/10 rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
            <Upload className="w-6 h-6 text-slate-500 mb-2" />
            <span className="text-xs text-slate-400">Upload background</span>
            <input type="file" className="hidden" onChange={handleBgUpload} accept="image/*" />
          </label>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4 text-white font-bold">
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-accent" />
              Blur Effect
            </div>
            <span className="text-xs text-slate-400">{bgBlur}px</span>
          </div>
          <input
            type="range"
            min="0"
            max="20"
            value={bgBlur}
            onChange={(e) => setBgBlur(parseInt(e.target.value))}
            className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>
        
        <div className="pt-4 border-t border-white/5">
          <button 
            onClick={onReset}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-slate-300 text-sm"
          >
            <RefreshCcw className="w-4 h-4" />
            Upload New Image
          </button>
        </div>
      </div>
      
      <div className="glass p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
           <Sparkles className="w-4 h-4 text-yellow-400" />
           Pro Tip
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          For best results, use images with a clear subject and high contrast between foreground and background.
        </p>
      </div>
    </div>
  );
};

export default EditorControls;
