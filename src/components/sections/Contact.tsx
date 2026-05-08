import { motion, useReducedMotion } from 'motion/react';
import { Mail, Phone, ArrowUpRight, Copy, Check, Download, Send } from 'lucide-react';
import { useState } from 'react';
import Magnetic from '../ui/Magnetic';

const contactInfo = [
  {
    icon: Mail,
    label: "Direct Communication",
    value: "toheedswati786@gmail.com",
    href: "mailto:toheedswati786@gmail.com"
  },
  {
    icon: Phone,
    label: "Secure Line",
    value: "+92 (331)-0343751",
    href: "tel:+923310343751"
  }
];

export default function Contact({ onContactClick }: { onContactClick: () => void }) {
  const [copied, setCopied] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div id="contact" className="py-12 relative overflow-hidden bg-black/[0.005]">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary uppercase tracking-[0.5em] text-[10px] font-bold mb-6"
            >
              Connectivity
            </motion.p>
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-9xl font-black mb-12 tracking-tighter"
            >
              Let's Build the <br /> <span className="text-gradient italic">Next Legacy.</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                   className="relative group p-8 glass rounded-[2rem] overflow-hidden border-black/[0.03] hover:border-primary/20 transition-all duration-500"
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                        <info.icon size={20} />
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => copyToClipboard(info.value)}
                          className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors"
                        >
                          {copied === info.value ? <Check size={14} className="text-primary" /> : <Copy size={14} />}
                        </button>
                        <a 
                          href={info.href}
                          className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors"
                        >
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-[9px] uppercase tracking-[0.3em] text-black/30 mb-2 font-bold">{info.label}</p>
                    <h3 className="text-lg font-bold truncate group-hover:text-primary transition-colors text-black">{info.value}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* High Conversion CTA - Resume & Main Contact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="lg:col-span-8 glass p-10 lg:p-16 rounded-[3rem] relative border-black/[0.05] overflow-hidden group shadow-[0_30px_100px_rgba(0,0,0,0.05)]"
            >
              <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-3xl lg:text-5xl font-bold mb-6 leading-none text-black">Ready to initiate the pulse?</h3>
                  <p className="text-black/40 mb-10 max-w-md font-light leading-relaxed">
                    I am currently accepting select projects for development and strategic brand management. Let's discuss your next digital evolution.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                    <Magnetic>
                      <button 
                        onClick={onContactClick}
                        className="premium-button inline-flex items-center gap-4 group"
                      >
                        <span className="font-bold">SEND TRANSMISSION</span>
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </Magnetic>

                    <Magnetic>
                      <a 
                        href="#" // Placeholder for actual resume file
                        className="inline-flex items-center justify-center gap-4 px-8 py-4 bg-black/5 border border-black/10 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-black/10 transition-all group text-black"
                      >
                        <span>DOWNLOAD RESUME</span>
                        <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                      </a>
                    </Magnetic>
                  </div>
                </div>

                <div className="lg:w-1/3 flex justify-center">
                  <div className="relative">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-40 h-40 border-2 border-dashed border-primary/20 rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border border-primary/30">
                        <ArrowUpRight size={40} className="text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-[50%] h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="mt-40 pb-12 border-t border-black/5 pt-12">
        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-black/20 text-[10px] uppercase tracking-[0.4em]">
            © 2026 ELYSIAN DIGITAL • ENGINEERED WITH PRECISION
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-black/30">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
