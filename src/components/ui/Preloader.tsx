import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-bg-deep flex flex-col items-center justify-center p-6"
    >
      <div className="w-full max-w-sm">
        <div className="flex justify-between items-end mb-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xs uppercase tracking-[0.5em] text-primary"
          >
            Digital Force Initiated
          </motion.div>
          <div className="text-4xl font-light tabular-nums leading-none text-black">
            {percent}<span className="text-sm ml-1 text-black/30">%</span>
          </div>
        </div>
        
        <div className="h-[1px] w-full bg-black/5 relative overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          />
        </div>
        
        <div className="mt-12 overflow-hidden">
           <motion.p 
            animate={{ y: [20, 0, -20] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-[10px] uppercase tracking-widest text-center text-black/20 h-4"
          >
            Loading Immersive Environment
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
