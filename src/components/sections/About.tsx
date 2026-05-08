import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Zap, Target, Globe } from 'lucide-react';

const stats = [
  { label: 'Global Projects', value: '50+' },
  { label: 'Client Retention', value: '98%' },
  { label: 'Content Reach', value: '5M+' },
  { label: 'Years Experience', value: '7+' }
];

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <div ref={containerRef} className="py-8 relative overflow-hidden bg-black/[0.01]">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              I don't just build websites. <br />
              <span className="text-primary">I build legacies.</span>
            </h2>
            <p className="text-lg text-black/70 mb-8 leading-relaxed font-light">
              In a world of noise, I help brands find their resonance. My approach is holistic—integrating the precision of full-stack engineering with the emotional intelligence of user-centric design and the strategic foresight of content management.
            </p>
            <p className="text-lg text-black/70 mb-12 leading-relaxed font-light">
              Specializing in full-stack architecture and mental health content strategy, I create digital environments that are not only functional but deeply impactful and human-centric.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-black/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Zap, title: "Speed", desc: "Optimized for extreme performance" },
              { icon: Shield, title: "Security", desc: "Hardened full-stack infrastructure" },
              { icon: Target, title: "Precision", desc: "Pixel-perfect detailed design" },
              { icon: Globe, title: "Reach", desc: "Global-scale content strategies" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-black/40 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="100" cy="0" r="40" fill="url(#grad)" />
          <defs>
            <radialGradient id="grad">
              <stop offset="0%" stopColor="#00ff88" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
