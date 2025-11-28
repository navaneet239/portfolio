import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface CosmicButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  colorClass?: string;
}

const CosmicButton: React.FC<CosmicButtonProps> = ({ label, icon, onClick, colorClass = "bg-white/5" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(14, 216, 217, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative group w-full md:w-64 h-32 rounded-2xl ${colorClass} backdrop-blur-md border border-white/10 flex flex-col items-center justify-center gap-3 overflow-hidden transition-all duration-300`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="text-cosmic-cyan group-hover:text-white transition-colors duration-300 transform group-hover:-translate-y-1">
        {icon}
      </div>
      
      <span className="font-orbitron text-xl tracking-wider text-white group-hover:text-cosmic-cyan transition-colors">
        {label}
      </span>

      <ChevronRight className="absolute right-4 bottom-4 text-white/20 group-hover:text-cosmic-cyan group-hover:translate-x-1 transition-all" size={20} />
    </motion.button>
  );
};

export default CosmicButton;
