import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Cpu, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import Magnetic from './Magnetic';

const navLinks = [
  { name: 'Core', href: '#hero' },
  { name: 'Expertise', href: '#services' },
  { name: 'Proof', href: '#proof' },
  { name: 'Artifacts', href: '#work' },
  { name: 'Network', href: '#contact' },
];

export default function Navbar({ onContactClick }: { onContactClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-[100] transition-all duration-500",
      scrolled ? "py-4" : "py-8"
    )}>
      <div className="max-w-[95%] lg:max-w-7xl mx-auto px-6 py-4 glass rounded-full flex justify-between items-center relative overflow-hidden group">
        {/* Glowing border effect */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <a href="#hero" className="flex items-center gap-3 relative z-10 group/logo">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover/logo:bg-primary group-hover/logo:text-black transition-all duration-500">
            <Cpu size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-tighter leading-none">TOHEED SWATI</span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-black/30 font-bold">Protocol v.2.6</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 hover:text-primary transition-all relative group"
            >
              <span>{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
            </a>
          ))}
          
          <div className="h-6 w-[1px] bg-black/10" />
          
          <div className="flex items-center gap-3 text-[9px] uppercase tracking-widest text-indigo-600 group">
            <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
            <span className="font-black">SYSTEM ACTIVE</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
           <div className="flex items-center gap-2 text-[8px] uppercase tracking-widest text-indigo-600/50">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600/30" />
            <span>ONLINE</span>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 flex items-center justify-center text-black relative z-10 p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-[2.5%] right-[2.5%] mt-4 overflow-hidden rounded-[2rem] glass p-10 border-primary/20"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold tracking-tighter text-black/60 hover:text-primary transition-colors flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
            
            <div className="mt-12 pt-12 border-t border-black/5 flex flex-col gap-6">
               <div className="flex items-center gap-4 text-xs text-black/30">
                  <Globe size={16} />
                  <span>Available for global deployment</span>
               </div>
               <Magnetic>
                 <button 
                   onClick={() => {
                     setIsOpen(false);
                     onContactClick();
                   }} 
                   className="premium-button w-full cursor-none"
                 >
                   INITIATE CONNECTION
                 </button>
               </Magnetic>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
