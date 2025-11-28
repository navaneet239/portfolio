import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface WarpTransitionProps {
  isActive: boolean;
  onComplete?: () => void;
}

const WarpTransition: React.FC<WarpTransitionProps> = ({ isActive, onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let speed = 2; // Initial speed
    const maxSpeed = 50;
    const stars: { x: number; y: number; z: number; angle: number }[] = [];
    const numStars = 500;

    // Set canvas full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width,
        angle: Math.atan2(Math.random() * canvas.height - canvas.height/2, Math.random() * canvas.width - canvas.width/2)
      });
    }

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const render = () => {
      // Fade trail
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Accelerate
      if (speed < maxSpeed) speed *= 1.05;

      ctx.strokeStyle = '#0ed8d9';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';

      stars.forEach(star => {
        // Move z
        star.z -= speed;
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }

        const x = (star.x - cx) * (canvas.width / star.z) + cx;
        const y = (star.y - cy) * (canvas.width / star.z) + cy;
        
        // Previous position for streak
        const prevZ = star.z + speed * 2;
        const px = (star.x - cx) * (canvas.width / prevZ) + cx;
        const py = (star.y - cy) * (canvas.width / prevZ) + cy;

        if (x > 0 && x < canvas.width && y > 0 && y < canvas.height) {
           ctx.beginPath();
           ctx.moveTo(px, py);
           ctx.lineTo(x, y);
           ctx.stroke();
        }
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    // End animation after duration
    const timer = setTimeout(() => {
      cancelAnimationFrame(animationId);
      if (onComplete) onComplete();
    }, 1500); // 1.5s warp

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(timer);
    };
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1, filter: "blur(0px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 1.5, filter: "blur(50px)" }}
      className="fixed inset-0 z-50 bg-black"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-3xl md:text-6xl font-orbitron text-white animate-pulse tracking-widest">
          TRAVELLING...
        </h2>
      </div>
    </motion.div>
  );
};

export default WarpTransition;
