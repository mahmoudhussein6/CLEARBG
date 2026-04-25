import React, { useState, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Dropzone from './components/Dropzone';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import SplashScreen from './components/SplashScreen';
import './App.css';

const Editor = lazy(() => import('./components/Editor'));

function App() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <SplashScreen finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="min-h-screen relative overflow-hidden">
        <Helmet>
          <title>AI Image Background Remover | Free, HD & Instant | ClearBG</title>
          <meta name="description" content="Remove image backgrounds for free with ClearBG. Our AI-powered tool provides instant, high-quality HD results directly in your browser. No signup, 100% secure." />
          <meta name="keywords" content="background remover, ai background removal, remove bg, transparent png, free background remover, image editor" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://clearbg.ai/" />
          <meta property="og:title" content="AI Image Background Remover | Free, HD & Instant" />
          <meta property="og:description" content="Professional background removal in seconds. High quality, instant, and secure." />
          <meta property="og:image" content="https://clearbg.ai/og-image.jpg" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://clearbg.ai/" />
          <meta property="twitter:title" content="AI Image Background Remover | Free, HD & Instant" />
          <meta property="twitter:description" content="Professional background removal in seconds. High quality, instant, and secure." />
          <meta property="twitter:image" content="https://clearbg.ai/og-image.jpg" />

          <link rel="canonical" href="https://clearbg.ai/" />
        </Helmet>

        {/* Background Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full pointer-events-none animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

        <Navbar />

        {/* Main Content */}
        <main className="relative z-10 pt-10 pb-20">
          {!image ? (
            <section className="container mx-auto">
              <Hero />
              <Dropzone onImageUpload={(file) => setImage(file)} />
              <Features />
            </section>
          ) : (
            <section className="w-full px-4 md:px-8">
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-[400px]">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              }>
                <Editor image={image} onReset={() => setImage(null)} />
              </Suspense>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
