import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { Code, Palette, BookOpen, ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight, Cpu, Aperture, Feather, MapPin, Github, Linkedin, Twitter, Mail, MousePointer2, Clock, Calendar, Bookmark, Terminal, Book, ChevronDown } from 'lucide-react';

import StarBackground from './components/StarBackground';
import WarpTransition from './components/WarpTransition';
import AboutSection from './components/AboutSection';
import ScrollProgress from './components/ScrollProgress';

import { CODING_PROJECTS, WRITING_WORKS, ARTWORKS, LOGO_URL, TRANSITION_DURATION } from './constants';
import { Project, WritingWork, Artwork } from './types';

// -- UTILITY COMPONENTS --

const LiquidGalaxyBackground: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax transforms - different elements move at different speeds
  const yBlob1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const yBlob2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const yBlob3 = useTransform(scrollY, [0, 1000], [0, 100]);
  const yStars = useTransform(scrollY, [0, 1000], [0, -50]); // Stars move slowly in opposite direction

  // Generate static star positions once
  const stars = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#020205]">
      {/* Deep Space Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a0a12_0%,_#000_100%)] opacity-80" />
      
      {/* Faint Stars Layer with Parallax */}
      <motion.div style={{ y: yStars }} className="absolute inset-0 z-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animation: `pulse ${star.duration}s ease-in-out infinite ${star.delay}s`
            }}
          />
        ))}
      </motion.div>

      {/* Liquid Blobs with Parallax */}
      <motion.div 
        style={{ y: yBlob1 }}
        animate={{ 
          scale: [1, 1.1, 0.9, 1],
          x: [-50, 50, -30, -50],
          rotate: [0, 45, 90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-purple-900/20 blur-[100px] rounded-full mix-blend-screen opacity-60"
      />
      
      <motion.div 
        style={{ y: yBlob2 }}
        animate={{ 
          scale: [1.1, 0.9, 1.1],
          x: [30, -30, 30],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/20 blur-[120px] rounded-full mix-blend-screen opacity-50"
      />

      <motion.div 
        style={{ y: yBlob3 }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[40vw] h-[40vw] bg-cosmic-cyan/10 blur-[90px] rounded-full mix-blend-screen"
      />
      
      {/* Noise Texture for Realism */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} 
      />
    </div>
  );
};

const HoloCard: React.FC<{ 
  title: string; 
  subtitle: string; 
  icon: React.ReactNode; 
  onClick: () => void;
  delay: number;
}> = ({ title, subtitle, icon, onClick, delay }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ delay, duration: 0.8, type: "spring" }}
      style={{ perspective: 1000 }}
      className="w-full md:w-[320px] md:h-[400px] cursor-pointer"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        onClick();
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="group relative w-full h-full bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-200"
      >
        {/* Hover Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-cyan/10 via-transparent to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 group-hover:border-cosmic-cyan transition-colors" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 group-hover:border-cosmic-cyan transition-colors" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 text-center z-10">
          
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-5 rounded-full bg-white/5 border border-white/10 mb-6 text-white group-hover:text-cosmic-cyan group-hover:border-cosmic-cyan/50 group-hover:rounded-3xl group-hover:rotate-12 transition-all duration-250 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(14,216,217,0.3)]"
          >
            {React.cloneElement(icon as React.ReactElement<any>, { size: 40 })}
          </motion.div>

          <h3 className="text-2xl font-orbitron font-bold text-white mb-2 tracking-widest group-hover:text-glow transition-all">
            {title}
          </h3>
          <div className="h-0.5 w-12 bg-cosmic-cyan/50 mb-4 group-hover:w-24 transition-all duration-300" />
          <p className="font-rajdhani text-gray-400 group-hover:text-gray-200 text-lg leading-tight">
            {subtitle}
          </p>
        </div>

        {/* Scanline */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-cyan/5 to-transparent h-[20%] w-full -translate-y-full group-hover:animate-[scanline_2s_linear_infinite]" />
      </motion.div>
    </motion.div>
  );
};

const SubpageNavbar: React.FC<{ title: string; onBack: () => void }> = ({ title, onBack }) => {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 h-24 z-40 bg-black/60 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6 md:px-12"
    >
      <button 
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onBack();
        }}
        className="flex items-center gap-2 text-gray-400 hover:text-cosmic-cyan transition-colors group"
      >
        <div className="p-2 rounded-full border border-white/10 group-hover:border-cosmic-cyan transition-colors bg-white/5">
           <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </div>
        <span className="font-orbitron hidden md:inline">RETURN TO HUB</span>
      </button>

      <h1 className="absolute left-1/2 -translate-x-1/2 font-orbitron text-xl md:text-2xl text-white tracking-widest text-glow">
        {title}
      </h1>

      <div className="w-10 md:w-auto flex justify-end">
        <img 
          src={LOGO_URL} 
          alt="NPJ Logo" 
          className="w-12 h-12 rounded-full border border-white/20 shadow-[0_0_15px_rgba(14,216,217,0.3)] hover:scale-110 transition-transform cursor-pointer" 
        />
      </div>
    </motion.div>
  );
};

const CosmicFooter: React.FC = () => {
  return (
    <div className="relative mt-32 w-full overflow-hidden border-t border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cosmic-cyan/5 to-transparent animate-pulse" />
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <motion.img 
            whileHover={{ rotate: 180 }}
            transition={{ duration: 1 }}
            src={LOGO_URL} 
            alt="NPJ Logo" 
            className="w-20 h-20 rounded-full border-2 border-cosmic-cyan/50 shadow-[0_0_30px_rgba(14,216,217,0.3)]" 
          />
          <div>
            <h4 className="font-orbitron text-2xl text-white mb-2">J. NAVANEET</h4>
            <p className="font-rajdhani text-gray-400">Constructing the future, one pixel at a time.</p>
          </div>
        </div>

        <div className="flex gap-6">
          <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cosmic-cyan hover:border-cosmic-cyan hover:scale-110 transition-all">
            <Github size={20} />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cosmic-cyan hover:border-cosmic-cyan hover:scale-110 transition-all">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cosmic-cyan hover:border-cosmic-cyan hover:scale-110 transition-all">
            <Twitter size={20} />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cosmic-cyan hover:border-cosmic-cyan hover:scale-110 transition-all">
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="text-center py-4 border-t border-white/5 text-xs font-mono text-gray-600">
        © 2022-25 J. NAVANEET. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

const HomeAbout: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-32 w-full max-w-5xl relative px-4"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-cyan/20 via-purple-500/20 to-cosmic-cyan/20 blur-xl opacity-50" />
      <div className="glass-panel p-8 md:p-12 rounded-3xl relative z-10 border border-white/10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
             <div className="w-48 h-48 rounded-full border-2 border-cosmic-cyan/50 p-2 shadow-[0_0_30px_rgba(14,216,217,0.2)]">
               <img src="pic.jpg" alt="Profile" className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
             </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
             <h3 className="text-3xl font-orbitron text-white">ARCHITECT OF <span className="text-cosmic-cyan">DIGITAL REALITIES</span></h3>
             <p className="font-rajdhani text-lg text-gray-300 leading-relaxed">
               I am a multidisciplinary creator blurring the lines between logic and imagination. Based in the UK, I specialize in building immersive web experiences, crafting complex software systems, and weaving narratives that transcend the screen. My mission is to turn abstract concepts into tangible, interactive universes.
             </p>
             <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-3">
               <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-cosmic-cyan">REACT / NEXT.JS</span>
               <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-cosmic-cyan">WEBGL / THREE.JS</span>
               <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-cosmic-cyan">UI / UX DESIGN</span>
               <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-cosmic-cyan">CREATIVE WRITING</span>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// -- VIEW COMPONENTS --

// 1. Hero View
const Hero: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      className="min-h-screen flex flex-col items-center relative z-10 overflow-hidden"
    >
      <LiquidGalaxyBackground />

      {/* Main Content Container */}
      <div className="text-center flex flex-col -mt-4 mb-4 justify-center relative z-10 px-4 max-w-7xl mx-auto w-full h-screen">
        
        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-3 mb-3"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gray-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <MapPin size={12} className="text-cosmic-cyan" />
            <span className="font-rajdhani font-bold text-xs tracking-[0.2em] uppercase text-cosmic-cyan">India, Asia</span>
          </div>
          <span className="font-orbitron text-xs text-gray-500 tracking-[0.4em] mt-2">WELCOME TO THE UNIVERSE OF</span>
        </motion.div>

        {/* Main Title */}
        <div className="relative mb-3">
          <motion.h1 
            className="flex flex-col items-center justify-center font-orbitron font-black tracking-tighter leading-[0.9]"
          >
            <motion.span 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              NAVANEET
            </motion.span>
            
            <motion.span 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-800 opacity-80"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
            >
              JAGGANNATHAN
            </motion.span>
          </motion.h1>
        </div>

        {/* Subtitle / Persona */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <h2 className="text-md md:text-2xl font-orbitron text-cosmic-cyan tracking-widest text-glow">
            THE MODERN DAY DA VINCI
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-cosmic-cyan to-transparent my-2" />
          <p className="font-rajdhani text-gray-400 text-sm md:text-lg tracking-wide uppercase">
           Entreprenuer <span className="text-cosmic-cyan mx-2">•</span> Coding <span className="text-cosmic-cyan mx-2">•</span> Art <span className="text-cosmic-cyan mx-2">•</span> Narrative
          </p>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="font-orbitron text-xs text-gray-400 tracking-widest animate-pulse">
            EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center"
          >
            <ChevronDown size={10} className="text-cosmic-cyan" />
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Cards */}
      <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ delay: 0.75, duration: 0.5, type: "spring" }}>
      <p className="font-rajdhani text-gray-400 text-sm md:text-lg tracking-wide uppercase">
        Navigate to the Galaxy you wish to explore:
      </p>
      </motion.div>
      <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-center justify-center w-full max-w-7xl px-6 py-8 perspective-1000">
        <HoloCard 
          title="VISUAL ARRAYS" 
          subtitle="Digital & Traditional Artworks"
          icon={<Palette />} 
          delay={0.8}
          onClick={() => onNavigate('/artworks')} 
        />
        <HoloCard 
          title="NEURAL NETWORKS" 
          subtitle="Coding Projects & Ventures"
          icon={<Cpu />} 
          delay={1.0}
          onClick={() => onNavigate('/coding')} 
        />
        <HoloCard 
          title="DATA ARCHIVES" 
          subtitle="Writing & Lore"
          icon={<Feather />} 
          delay={1.2}
          onClick={() => onNavigate('/writing')} 
        />
      </div>

      <HomeAbout />
      <CosmicFooter />
    </motion.div>
  );
};

// 2. Artworks View
const ArtworksView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % ARTWORKS.length));
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + ARTWORKS.length) % ARTWORKS.length));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  // Bento Grid Logic
  const getBentoClass = (i: number) => {
    const pattern = i % 8;
    if (pattern === 0) return "md:col-span-2 md:row-span-2";
    if (pattern === 3) return "md:col-span-2 md:row-span-1";
    if (pattern === 6) return "md:col-span-1 md:row-span-2";
    return "md:col-span-1 md:row-span-1";
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black/95 relative"
    >
      <ScrollProgress />
      <SubpageNavbar title="VISUAL ARRAYS" onBack={onBack} />
      <LiquidGalaxyBackground />
      
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {ARTWORKS.map((art: Artwork, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => openModal(index)}
              className={`group relative overflow-hidden rounded-xl border border-white/10 cursor-pointer ${getBentoClass(index)}`}
            >
              <div className="absolute inset-0 bg-cosmic-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
              <img 
                src={art.url} 
                alt={art.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                <h3 className="font-orbitron text-lg text-white">{art.title}</h3>
                <span className="text-xs text-cosmic-cyan font-mono">VIEW FULLSCREEN</span>
              </div>
            </motion.div>
          ))}
        </div>
        <AboutSection />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-lg p-4"
            onClick={closeModal}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-cosmic-cyan transition-colors z-[110]"
              onClick={closeModal}
            >
              <X size={32} />
            </button>

            <button 
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-cosmic-cyan transition-colors z-[110] hidden md:block"
              onClick={showPrev}
            >
              <ChevronLeft size={48} />
            </button>

            <div 
              className="relative max-w-7xl max-h-[90vh] flex flex-col items-center pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                src={ARTWORKS[selectedIndex].url}
                alt={ARTWORKS[selectedIndex].title}
                className="max-h-[80vh] w-auto object-contain rounded-lg shadow-[0_0_50px_rgba(14,216,217,0.15)] border border-white/10"
              />
              <motion.div 
                key={`text-${selectedIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center"
              >
                <h3 className="text-2xl font-orbitron text-white text-glow">{ARTWORKS[selectedIndex].title}</h3>
              </motion.div>
            </div>

            <button 
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-cosmic-cyan transition-colors z-[110] hidden md:block"
              onClick={showNext}
            >
              <ChevronRight size={48} />
            </button>
            
            {/* Mobile Navigation */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-12 md:hidden z-[110] pointer-events-auto">
               <button onClick={showPrev} className="text-white/70 hover:text-cosmic-cyan p-4"><ChevronLeft size={32}/></button>
               <button onClick={showNext} className="text-white/70 hover:text-cosmic-cyan p-4"><ChevronRight size={32}/></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <CosmicFooter />
    </motion.div>
  );
};

// 3. Coding View
const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-white/10 group mb-8">
      <AnimatePresence mode="wait">
        <motion.img 
          key={index}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      
      {/* Controls */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-cosmic-cyan hover:text-black transition-all backdrop-blur-sm border border-white/20">
        <ChevronLeft />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-cosmic-cyan hover:text-black transition-all backdrop-blur-sm border border-white/20">
        <ChevronRight />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-cosmic-cyan w-6' : 'bg-white/30'}`} />
        ))}
      </div>
    </div>
  );
}

const CodingDetailView: React.FC<{ project: Project; onBack: () => void }> = ({ project, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="min-h-screen z-20 relative bg-black/95 pt-32 pb-24 px-6 md:px-12"
    >
      <ScrollProgress />
      <div className="max-w-6xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-cosmic-cyan mb-8 hover:underline">
          <ArrowLeft size={16} /> RETURN TO SYSTEMS
        </button>

        {/* Header Hierarchy: Logo -> Title -> Date */}
        <div className="flex flex-col items-center mb-10 text-center">
           {project.logo && (
             <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative mb-6"
             >
               <div className="absolute inset-0 bg-cosmic-cyan blur-2xl opacity-20" />
               <img src={project.logo} alt="Logo" className="w-24 h-24 rounded-2xl relative z-10 border border-white/10 shadow-[0_0_30px_rgba(14,216,217,0.3)]" />
             </motion.div>
           )}
           
           <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-4 text-glow tracking-wide uppercase">
             {project.title}
           </h1>
           
           <div className="flex items-center gap-3 text-cosmic-cyan font-mono border border-cosmic-cyan/30 px-4 py-1.5 rounded-full bg-cosmic-cyan/5">
              <Calendar size={16} />
              <span>COMMENCED: {project.startDate || 'UNKNOWN'}</span>
           </div>
        </div>

        {/* Carousel */}
        {project.gallery && <ImageCarousel images={project.gallery} />}

        {/* CTA */}
        <div className="flex justify-center mb-12">
           <a 
             href={project.link || "#"} 
             target="_blank" 
             rel="noreferrer"
             className="group relative px-8 py-4 bg-cosmic-cyan text-black font-orbitron font-bold tracking-widest rounded-lg overflow-hidden hover:scale-105 transition-transform shadow-[0_0_30px_rgba(14,216,217,0.4)]"
           >
             <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
             <span className="relative z-10 flex items-center gap-2">
               INITIALIZE SYSTEM <ExternalLink size={18} />
             </span>
           </a>
        </div>

        {/* Description & Tech */}
        <div className="grid md:grid-cols-3 gap-8">
           <div className="md:col-span-2 glass-panel p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-orbitron text-white mb-6 flex items-center gap-2">
                <Terminal className="text-cosmic-cyan" /> SYSTEM ARCHITECTURE
              </h3>
              <p className="font-rajdhani text-lg leading-relaxed text-gray-300">
                {project.longDescription || project.description}
              </p>
           </div>

           <div className="glass-panel p-8 rounded-2xl border border-white/10 h-fit">
              <h3 className="text-xl font-orbitron text-white mb-6">TECH STACK</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-sm font-mono text-cosmic-cyan hover:bg-cosmic-cyan/10 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
           </div>
        </div>

      </div>
      <AboutSection />
    </motion.div>
  );
}

const CodingView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [filter, setFilter] = useState<'ALL' | 'VENTURE' | 'SIDE_PROJECT' | 'FREELANCE'>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = CODING_PROJECTS.filter(p => filter === 'ALL' || p.type === filter);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-screen z-10 relative bg-black/95"
    >
      <ScrollProgress />
      <SubpageNavbar title="NEURAL NETWORKS" onBack={onBack} />
      <LiquidGalaxyBackground />

      <AnimatePresence mode="wait">
        {selectedProject ? (
          <CodingDetailView key="detail" project={selectedProject} onBack={() => setSelectedProject(null)} />
        ) : (
          <motion.div 
            key="list"
            className="pt-32 pb-24 px-6 md:px-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {['ALL', 'VENTURE', 'SIDE_PROJECT', 'FREELANCE'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f as any)}
                  className={`px-6 py-2 rounded-full font-rajdhani font-bold tracking-wider transition-all border ${
                    filter === f 
                      ? 'bg-cosmic-cyan text-black border-cosmic-cyan shadow-[0_0_15px_#0ed8d9]' 
                      : 'bg-black/40 text-gray-400 border-white/20 hover:border-cosmic-cyan hover:text-white'
                  }`}
                >
                  {f.replace('_', ' ')}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project: Project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={() => setSelectedProject(project)}
                    className="glass-panel p-6 rounded-xl hover:border-cosmic-cyan/50 transition-colors group flex flex-col h-full cursor-pointer"
                  >
                    <div className="h-48 rounded-lg overflow-hidden mb-4 relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-cosmic-cyan border border-cosmic-cyan/30">
                        {project.type}
                      </div>
                    </div>
                    <h3 className="text-2xl font-orbitron mb-2 group-hover:text-cosmic-cyan transition-colors">{project.title}</h3>
                    <p className="text-gray-400 font-rajdhani mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto mb-4">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs font-mono text-white/60 bg-white/5 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-white/10 flex items-center text-cosmic-cyan font-orbitron text-sm tracking-wider group-hover:translate-x-1 transition-transform">
                       ACCESS SYSTEM <ChevronRight size={14} className="ml-1" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <AboutSection />
          </motion.div>
        )}
      </AnimatePresence>
      <CosmicFooter />
    </motion.div>
  );
};

// 4. Writing View & Details
const WritingDetailView: React.FC<{ work: WritingWork; onBack: () => void }> = ({ work, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="min-h-screen z-20 relative bg-black/95 pt-32 pb-24 px-6 md:px-12"
    >
      <ScrollProgress />
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-cosmic-cyan mb-8 hover:underline">
          <ArrowLeft size={16} /> RETURN TO ARCHIVES
        </button>

        <div className="glass-panel p-8 md:p-12 rounded-2xl border border-white/10 relative overflow-hidden">
           {/* Decorative Backdrops */}
           <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
             {work.type === 'BOOK' ? <Book size={150} className="text-white" /> : <Terminal size={150} className="text-white" />}
           </div>
           
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
           >
             <h2 className="text-4xl md:text-5xl font-orbitron text-white mb-2 text-glow">{work.title}</h2>
             
             <div className="flex flex-wrap items-center gap-4 text-gray-400 font-mono text-sm mb-8 border-b border-white/10 pb-6">
               <span className="flex items-center gap-1"><Calendar size={14}/> {work.year}</span>
               <span className="px-2 py-0.5 rounded bg-white/10 text-cosmic-cyan">{work.type}</span>
               <span className="flex items-center gap-1"><Clock size={14}/> {work.type === 'BOOK' ? '12 min read' : '3 min read'}</span>
             </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className={`text-lg text-gray-300 leading-relaxed whitespace-pre-wrap ${work.type === 'POETRY' ? 'font-mono' : 'font-serif'}`}
           >
             {work.content}
           </motion.div>
        </div>
      </div>
      <AboutSection />
    </motion.div>
  );
}

const ArchiveCard: React.FC<{ work: WritingWork; onClick: () => void; delay: number }> = ({ work, onClick, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(14,216,217,0.2)" }}
    onClick={onClick}
    className="glass-panel p-6 rounded-xl border-l-4 border-l-transparent hover:border-l-cosmic-cyan transition-all cursor-pointer group relative overflow-hidden h-full flex flex-col"
  >
    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-20 transition-opacity">
       <ExternalLink size={40} />
    </div>

    <div className="flex justify-between items-start mb-4">
      <div className="bg-white/5 p-2 rounded-lg">
        {work.type === 'BOOK' ? <BookOpen className="text-cosmic-cyan" size={24}/> : <Feather className="text-purple-400" size={24}/>}
      </div>
      <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">{work.year}</span>
    </div>
    
    <h4 className="text-2xl font-bold font-rajdhani text-white group-hover:text-cosmic-cyan transition-colors mb-2">{work.title}</h4>
    
    <p className="text-gray-400 italic font-serif text-sm flex-grow mb-6 opacity-80">
      "{work.excerpt}"
    </p>
    
    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
      <span className="text-xs font-mono text-gray-500">{work.type === 'BOOK' ? 'CHRONICLE' : 'VERSE'}</span>
      <div className="flex items-center text-sm text-cosmic-cyan font-orbitron tracking-wider group-hover:translate-x-1 transition-transform">
        ACCESS DATA <ChevronRight size={14} className="ml-1" />
      </div>
    </div>
  </motion.div>
);

const WritingView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedWork, setSelectedWork] = useState<WritingWork | null>(null);
  const [activeTab, setActiveTab] = useState<'ALL' | 'BOOK' | 'POETRY'>('ALL');

  const filteredWorks = WRITING_WORKS.filter(w => activeTab === 'ALL' || w.type === activeTab);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-screen z-10 relative bg-black/95"
    >
      <ScrollProgress />
      <SubpageNavbar title="DATA ARCHIVES" onBack={onBack} />
      <LiquidGalaxyBackground />
      
      <AnimatePresence mode='wait'>
        {selectedWork ? (
          <WritingDetailView key="detail" work={selectedWork} onBack={() => setSelectedWork(null)} />
        ) : (
          <motion.div 
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-24 px-6 md:px-12"
          >
            {/* Tabs */}
            <div className="flex justify-center mb-12">
               <div className="flex bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-md">
                 {['ALL', 'BOOK', 'POETRY'].map((tab) => (
                   <button
                     key={tab}
                     onClick={() => setActiveTab(tab as any)}
                     className={`px-8 py-2 rounded-full font-rajdhani font-bold tracking-wider transition-all ${
                       activeTab === tab 
                         ? 'bg-cosmic-cyan text-black shadow-[0_0_15px_rgba(14,216,217,0.4)]' 
                         : 'text-gray-400 hover:text-white'
                     }`}
                   >
                     {tab === 'BOOK' ? 'CHRONICLES' : tab === 'POETRY' ? 'VERSES' : 'ALL ARCHIVES'}
                   </button>
                 ))}
               </div>
            </div>

            <div className="max-w-7xl mx-auto">
               <motion.div 
                 layout
                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
               >
                 <AnimatePresence mode="popLayout">
                   {filteredWorks.map((work, index) => (
                     <ArchiveCard 
                       key={work.id} 
                       work={work} 
                       onClick={() => setSelectedWork(work)} 
                       delay={index * 0.1} 
                     />
                   ))}
                 </AnimatePresence>
               </motion.div>
            </div>
            
            <AboutSection />
          </motion.div>
        )}
      </AnimatePresence>
      <CosmicFooter />
    </motion.div>
  );
};

// -- MAIN ORCHESTRATOR --

const ContentOrchestrator: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isWarping, setIsWarping] = useState(false);
  const [nextPath, setNextPath] = useState<string | null>(null);
  const [isBooting, setIsBooting] = useState(true);
  const [isFadingOutLoadingScreen, setIsFadingOutLoadingScreen] = useState(false);

  // Handle Startup
  useEffect(() => {
    navigate('/');

    // 1. Initial "Breathing" Phase (3.5s)
    const bootTimer = setTimeout(() => {
      // 2. Start Warp (Zoom out/in effect)
      setIsWarping(true);
      
      // 3. Complete Warp and Enter Hero
      setTimeout(() => {
         setIsFadingOutLoadingScreen(true); // Start fading out loading screen
         setTimeout(() => {
            setIsBooting(false);
            setIsWarping(false);
         }, TRANSITION_DURATION); // 500ms for fade out
      }, 2000); // 2s Warp duration for smoother transition

    }, 3500); // 3.5s Intro text duration

    return () => clearTimeout(bootTimer);
  }, []);

  const handleNavigate = (path: string) => {
    if (location.pathname === path) return;
    setNextPath(path);
    setIsWarping(true);
  };

  const onWarpComplete = () => {
    if (nextPath) {
      navigate(nextPath);
      setNextPath(null);
      setIsWarping(false);
    } else if (isWarping && !isBooting) {
       setIsWarping(false);
    }
  };

  // Intro Screen
  if (isBooting) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isFadingOutLoadingScreen ? 0 : 1 }}
        transition={{ duration: TRANSITION_DURATION / 1000 }}
        exit={{ opacity: 0, scale: 1.5, filter: "blur(50px)" }}
        className="h-screen w-screen flex items-center justify-center bg-black relative z-50 overflow-hidden"
      >
         <StarBackground />
         <WarpTransition isActive={isWarping} /> 
         
         <AnimatePresence>
           {!isWarping && (
             <motion.div 
               className="relative z-10 flex flex-col items-center"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0, scale: 1.5, filter: "blur(50px)" }} // Fade out into warp
               transition={{ duration: 0.5 }}
             >
                <div className="h-1 w-24 bg-cosmic-cyan mb-8 animate-pulse shadow-[0_0_20px_#0ed8d9]" />
                <motion.h1 
                  initial={{ letterSpacing: '0.5em', filter: "blur(10px)" }}
                  animate={{ letterSpacing: '0.2em', filter: "blur(0px)" }}
                  transition={{ duration: 1.5 }}
                  className="text-white font-orbitron text-2xl md:text-4xl text-center px-4"
                >
                  INITIALIZING SEQUENCE
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ delay: 1.5 }}
                  className="mt-4 font-mono text-cosmic-cyan text-sm"
                >
                  LOADING ASSETS...
                </motion.p>
             </motion.div>
           )}
         </AnimatePresence>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: TRANSITION_DURATION / 1000, delay: TRANSITION_DURATION / 1000 }}
    >
      <StarBackground />
      <WarpTransition isActive={isWarping} onComplete={onWarpComplete} />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero onNavigate={handleNavigate} />} />
          <Route path="/artworks" element={<ArtworksView onBack={() => handleNavigate('/')} />} />
          <Route path="/coding" element={<CodingView onBack={() => handleNavigate('/')} />} />
          <Route path="/writing" element={<WritingView onBack={() => handleNavigate('/')} />} />
        </Routes>
      </AnimatePresence>
    </motion.div>
  );
};

export default function App() {
  return (
    <Router>
      <ContentOrchestrator />
    </Router>
  );
}