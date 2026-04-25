import React from 'react';
import { motion } from 'framer-motion';
import { Home, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] px-6">
      <div className="relative text-center max-w-2xl">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex p-4 rounded-3xl glass mb-8">
            <AlertCircle className="w-16 h-16 text-primary" />
          </div>
          
          <h1 className="text-8xl font-black text-white mb-4 tracking-tighter">404</h1>
          <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Oops! The page you're looking for has vanished into thin air. 
            Maybe it was removed along with a background?
          </p>
          
          <Link 
            to="/"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white group"
          >
            <Home className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
