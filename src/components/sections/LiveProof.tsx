import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Globe, ShieldCheck, Zap, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PROJECT_LIST } from '../../constants';
import Magnetic from '../ui/Magnetic';

export default function LiveProof({ onContactClick }: { onContactClick: () => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const featuredProjects = PROJECT_LIST.slice(0, 4);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  return (
    <div className="py-8 relative overflow-hidden bg-black/[0.005]">
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-4"
            >
              Verified Deployments
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter"
            >
              Live <span className="text-black/20 italic font-light">Ecosystems.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-black/40 mt-6 font-light leading-relaxed max-w-xl"
            >
              Real-world architectures engineered for peak performance. These platforms represent a history of high-stakes production across diverse industries.
            </motion.p>
          </div>
          
          <div className="hidden lg:flex items-center gap-4 text-[10px] uppercase tracking-widest text-indigo-600 bg-indigo-600/5 px-6 py-2 border border-indigo-600/10 rounded-full">
            <ShieldCheck size={14} />
            <span>Active Performance Monitor: 99.9% Up</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((site, index) => (
            <motion.div
              key={site.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <a 
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[4/5] rounded-3xl overflow-hidden glass border-black/5 group-hover:border-primary/40 transition-all duration-500 shadow-2xl"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={site.image} 
                    alt={site.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-bg-deep/80 via-bg-deep/20 to-transparent" />
                </div>

                <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1 h-1 rounded-full bg-indigo-600 animate-pulse" />
                      <span className="text-[8px] uppercase tracking-[0.3em] font-black text-indigo-600">LIVE STATUS</span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tighter truncate group-hover:text-primary transition-colors">
                      {site.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-black/40 mt-1">
                      {site.category}
                    </p>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-black/5 backdrop-blur-md border border-black/10 flex items-center justify-center text-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0 group-hover:bg-primary group-hover:text-black group-hover:border-primary">
                  <ExternalLink size={18} />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Magnetic>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-4 px-10 py-5 glass rounded-full border-primary/20 hover:border-primary transition-all group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="relative z-10 flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/80 group-hover:text-black transition-colors">
                  Explore Network Archive
                </span>
                <Globe size={16} className="text-primary animate-pulse" />
              </div>
            </button>
          </Magnetic>
        </div>

        {/* Full Archive Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-12 overflow-hidden"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-2xl"
                onClick={() => setIsModalOpen(false)}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-7xl h-full glass rounded-[3rem] border-black/10 overflow-hidden flex flex-col shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
              >
                {/* Modal Header */}
                <div className="p-8 md:p-12 border-b border-black/5 flex justify-between items-center bg-black/[0.02]">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tighter italic text-black">The Full Archive.</h3>
                    <p className="text-black/40 text-xs uppercase tracking-widest mt-2">{PROJECT_LIST.length} Production Ready Ecosystems</p>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/5 flex items-center justify-center text-black/40 hover:bg-black hover:text-white transition-all group"
                  >
                    <X size={24} className="group-hover:rotate-90 transition-transform duration-500" />
                  </button>
                </div>

                {/* Modal Grid */}
                <div 
                  className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar overscroll-contain"
                  data-lenis-prevent
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {PROJECT_LIST.map((site, index) => (
                      <motion.div
                        key={site.url}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <a 
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-col p-6 glass rounded-2xl border-black/5 hover:border-primary/40 hover:bg-black/[0.02] transition-all duration-300 relative overflow-hidden"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                              <Globe size={18} />
                            </div>
                            <ExternalLink size={14} className="text-black/20 group-hover:text-primary transition-colors" />
                          </div>
                          <div className="mt-auto">
                            <span className="text-[8px] uppercase tracking-widest text-primary font-bold">{site.category}</span>
                            <h4 className="text-sm font-bold tracking-tight truncate mt-1 group-hover:text-primary transition-colors text-black">{site.title}</h4>
                          </div>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* High Impact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-12 glass rounded-[3rem] border-black/5 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 tracking-tighter italic text-black">Ready for the next deployment?</h3>
            <p className="text-black/40 mb-10 max-w-lg mx-auto font-light text-sm">
              Your vision requires a partner who understands the weight of a live environment. Let's initiate the design protocol.
            </p>
            <Magnetic>
              <button 
                onClick={onContactClick}
                className="premium-button inline-flex items-center gap-4 cursor-none"
              >
                <span>SEND TRANSMISSION</span>
                <Zap size={18} className="text-white" />
              </button>
            </Magnetic>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}
