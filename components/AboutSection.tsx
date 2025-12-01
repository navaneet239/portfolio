import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-32 w-full max-w-5xl relative px-4"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-cyan/20 via-purple-500/20 to-cosmic-cyan/20 blur-xl opacity-50" />
      <div className="m-auto glass-panel p-8 md:p-12 rounded-3xl relative z-10 border border-white/10">
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

export default AboutSection;
