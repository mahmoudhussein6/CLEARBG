import React, { useState, useEffect, useCallback, useRef } from 'react';
import { removeBackground } from '@imgly/background-removal';
import { Download, Sparkles } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import EditorLoader from './EditorLoader';
import EditorPreview from './EditorPreview';
import EditorControls from './EditorControls';
import { saveToHistory } from '../utils/history';

const Editor = ({ image, onReset }) => {
  const [originalUrl, setOriginalUrl] = useState(null);
  const [processedUrl, setProcessedUrl] = useState(null);
  const [isProcessing, setIsProcessing] = useState(true);
  const [progress, setProgress] = useState(0);
  const [bgColor, setBgColor] = useState('transparent');
  const [bgBlur, setBgBlur] = useState(0);
  const [bgImage, setBgImage] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      setOriginalUrl(url);
      processImage(image);
      return () => URL.revokeObjectURL(url);
    }
  }, [image]);

  const processImage = async (imgFile) => {
    setIsProcessing(true);
    setProgress(0);
    try {
      const config = {
        progress: (key, current, total) => {
          const p = Math.round((current / total) * 100);
          setProgress(p);
        },
        publicPath: 'https://staticimgly.com/@imgly/background-removal-data/1.7.0/dist/',
      };
      
      const blob = await removeBackground(imgFile, config);
      const url = URL.createObjectURL(blob);
      setProcessedUrl(url);
    } catch (error) {
      console.error("Background removal failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !processedUrl) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = processedUrl;
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      if (bgColor !== 'transparent') {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      if (bgImage) {
        const bgImg = new Image();
        bgImg.src = bgImage;
        bgImg.onload = () => {
          ctx.filter = `blur(${bgBlur}px)`;
          ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
          ctx.filter = 'none';
          ctx.drawImage(img, 0, 0);
          triggerDownload(canvas);
        };
      } else {
        ctx.drawImage(img, 0, 0);
        triggerDownload(canvas);
      }
    };
  }, [processedUrl, bgColor, bgImage, bgBlur]);

  const triggerDownload = (canvas) => {
    const imageData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'removed-bg.png';
    link.href = imageData;
    link.click();
    
    // Save to local history
    saveToHistory(imageData);
  };

  const handleBgUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setBgImage(url);
    }
  };

  return (
    <div className="w-full mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Main Preview Area */}
        <div className="lg:col-span-3 space-y-6">
          <div className="relative glass-morphism overflow-hidden min-h-[300px] md:min-h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isProcessing ? (
                <EditorLoader progress={progress} />
              ) : (
                <EditorPreview 
                  originalUrl={originalUrl}
                  processedUrl={processedUrl}
                  bgColor={bgColor}
                  bgImage={bgImage}
                  bgBlur={bgBlur}
                  onReset={onReset}
                />
              )}
            </AnimatePresence>
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-4 glass p-4 rounded-2xl">
            <div className="flex items-center gap-2">
               <div className="flex items-center gap-2 px-3 py-1.5 glass-morphism text-xs font-medium uppercase tracking-wider text-slate-400">
                <Sparkles className="w-3 h-3 text-primary" />
                AI Enhanced
               </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={handleDownload}
                disabled={isProcessing}
                className="btn-primary flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-5 h-5" />
                Download PNG
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Controls */}
        <EditorControls 
          bgColor={bgColor}
          setBgColor={setBgColor}
          bgBlur={bgBlur}
          setBgBlur={setBgBlur}
          bgImage={bgImage}
          setBgImage={setBgImage}
          handleBgUpload={handleBgUpload}
          onReset={onReset}
        />
      </div>
      
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default Editor;

