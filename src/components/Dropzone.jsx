import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import DropzoneFeatures from './DropzoneFeatures';
import DropzoneIcon from './DropzoneIcon';
import DropzoneInfo from './DropzoneInfo';
import DropzoneBadges from './DropzoneBadges';

const Dropzone = ({ onImageUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      onImageUpload(file);
    }
  }, [onImageUpload]);

  const handleFileChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      onImageUpload(file);
    }
  }, [onImageUpload]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto px-4"
    >
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative group cursor-pointer transition-all duration-500 rounded-[32px] p-1 ${
          isDragging ? 'bg-gradient-to-br from-primary via-secondary to-accent' : 'bg-white/5 hover:bg-white/10'
        }`}
      >
        <div className={`flex flex-col items-center justify-center py-12 md:py-20 px-6 md:px-10 rounded-[31px] border-2 border-dashed transition-all duration-500 ${
          isDragging ? 'bg-slate-900/90 border-transparent' : 'border-white/10 hover:border-white/20 bg-slate-900/40'
        }`}>
          <input
            type="file"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept="image/*"
          />
          
          <DropzoneIcon isDragging={isDragging} />
          <DropzoneInfo />
          <DropzoneBadges />
        </div>
      </div>

      <DropzoneFeatures />
    </motion.div>
  );
};

export default Dropzone;
