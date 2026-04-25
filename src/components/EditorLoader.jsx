import React from 'react';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const EditorLoader = ({ progress }) => {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center gap-6"
    >
      <div className="relative">
        <Loader2 className="w-16 h-16 text-primary animate-spin" />
        <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">AI is working its magic...</h3>
        <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-slate-400 text-sm">{progress}% processed</p>
      </div>
    </motion.div>
  );
};

export default EditorLoader;
