import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Trash2, Clock, X } from 'lucide-react';
import { getHistory, removeFromHistory, clearHistory } from '../utils/history';

const History = ({ isOpen, onClose }) => {
  const [items, setItems] = useState([]);

  const loadHistory = () => {
    setItems(getHistory());
  };

  useEffect(() => {
    loadHistory();
    window.addEventListener('historyUpdated', loadHistory);
    return () => window.removeEventListener('historyUpdated', loadHistory);
  }, []);

  const handleDownload = (imageData) => {
    const link = document.createElement('a');
    link.download = `cleared-bg-${Date.now()}.png`;
    link.href = imageData;
    link.click();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md h-full bg-[#020617] border-l border-white/10 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2 glass rounded-xl">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">Recent Downloads</h2>
                  <p className="text-xs text-slate-400">{items.length} item(s) saved</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                  <Clock className="w-12 h-12 text-slate-500 mb-4" />
                  <p className="text-slate-300 font-medium">No recent downloads</p>
                  <p className="text-sm text-slate-500 mt-2 max-w-[200px]">Images you download will appear here automatically.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-end">
                    <button 
                      onClick={clearHistory}
                      className="text-[10px] uppercase tracking-widest font-bold text-red-400 hover:text-red-300 transition-colors px-3 py-1.5 glass rounded-lg"
                    >
                      Clear All
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <AnimatePresence mode="popLayout">
                      {items.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="group relative aspect-square rounded-2xl overflow-hidden glass border border-white/5"
                        >
                          <img 
                            src={item.image} 
                            alt="Recent" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <button 
                              onClick={() => handleDownload(item.image)}
                              className="p-2 bg-primary rounded-full text-white hover:scale-110 transition-transform"
                              title="Download"
                            >
                              <Download className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => removeFromHistory(item.id)}
                              className="p-2 bg-red-500 rounded-full text-white hover:scale-110 transition-transform"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default History;
