import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

const EditorPreview = ({ originalUrl, processedUrl, bgColor, bgImage, bgBlur, onReset }) => {
  return (
    <motion.div
      key="editor"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full h-full flex items-center justify-center p-4 lg:p-8"
    >
      <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ 
            backgroundColor: bgColor,
            backgroundImage: bgImage ? `url(${bgImage})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: `blur(${bgBlur}px)`
          }}
        />
        
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={originalUrl} alt="Original" />}
          itemTwo={<ReactCompareSliderImage src={processedUrl} alt="Processed" />}
          style={{ width: '100%', height: 'auto' }}
        />
        
        <button 
          onClick={onReset}
          className="absolute top-4 right-4 p-2 glass rounded-full hover:bg-red-500/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default EditorPreview;
