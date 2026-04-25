import React from 'react';
import { Upload, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const DropzoneIcon = ({ isDragging }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
      <div className="relative glass p-6 rounded-2xl">
        <Upload className={`w-12 h-12 transition-transform duration-500 ${isDragging ? 'scale-110 text-primary' : 'text-white/60 group-hover:scale-110 group-hover:text-white'}`} />
      </div>
      
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -top-2 -right-2"
      >
        <Sparkles className="w-6 h-6 text-accent" />
      </motion.div>
    </div>
  );
};

export default DropzoneIcon;
