import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowDown, Zap } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

export default function Hero() {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const titleWords = "DESIGNING ECOSYSTEMS, NOT JUST SITES.".split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[80px] mask-radial opacity-30" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] bg-indigo-900/5 rounded-full blur-[100px] mask-radial opacity-10" 
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f105_1px,transparent_1px),linear-gradient(to_bottom,#6366f105_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-6 py-2 mb-10 glass rounded-full text-[10px] font-bold tracking-[0.5em] uppercase text-primary border border-primary/20 backdrop-blur-2xl"
          >
            <Zap size={12} className="animate-pulse" />
            <span>Digital Force Multiplier</span>
          </motion.div>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter mb-12 flex flex-wrap justify-center gap-x-[0.2em]"
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                variants={child}
                className={word === "ECOSYSTEMS," ? "text-gradient italic" : ""}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto mb-16 font-light leading-relaxed tracking-wide"
          >
            Synthesizing high-impact content, full-stack engineering, and mental health-driven strategy into unified digital narratives that command authority.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full sm:w-auto"
          >
            <Magnetic>
              <button className="premium-button group w-full sm:w-auto min-w-[240px]">
                <span>THE JOURNEY</span>
                <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:scale-150 transition-transform"></div>
              </button>
            </Magnetic>
            <Magnetic>
              <button className="px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-black/30 hover:text-primary transition-all border border-black/5 hover:border-primary/20 rounded-sm w-full sm:w-auto">
                Connect
              </button>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-black/5" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-black/5" />

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-black/20 flex flex-col items-center gap-3"
      >
        <span className="text-[8px] uppercase tracking-[0.5em] font-medium">Initialize Sequence</span>
        <div className="w-[1px] h-12 bg-gradient-to-t from-primary/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
