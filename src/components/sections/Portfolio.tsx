import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Github, Eye, X, ArrowUpRight, Code, Shield } from 'lucide-react';
import { useState } from 'react';
import Magnetic from '../ui/Magnetic';

const projects = [
  {
    id: 'p1',
    title: "NeuroSphere",
    category: "Full-Stack • Mental Health",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000",
    desc: "A complete patient management and AI-driven insights platform for mental health practitioners. Features real-time data analysis and secure patient portal.",
    fullDesc: "NeuroSphere is a sophisticated patient management system designed specifically for the mental health niche. It leverages AI to provide practitioners with deep insights into patient progress over time. The platform was built with a security-first approach, ensuring all patient data is encrypted and HIPAA compliant. I focused on creating a UI that is calming and intuitive, reducing administrative friction for therapists.",
    tech: ["Next.js", "Python", "TensorFlow", "Auth0", "Tailwind"],
    github: "#",
    live: "#"
  },
  {
    id: 'p2',
    title: "EcoVibe Branding",
    category: "Design • Brand Management",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    desc: "A holistic identity system for a global sustainability brand, focusing on organic growth and trust. Includes full visual ecosystem.",
    fullDesc: "EcoVibe required a transformation from a standard green-tech brand to a global leader in sustainability aesthetics. I developed a comprehensive brand management system that includes visual identity, tone of voice, and content strategy. The interaction design on their primary platform focuses on 'organic motion', mimicking natural growth patterns to reinforce the brand essence.",
    tech: ["Figma", "After Effects", "GSAP", "Three.js", "Contentful"],
    github: "#",
    live: "#"
  },
  {
    id: 'p3',
    title: "Quantum Dashboard",
    category: "Engineering • UI/UX",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    desc: "Real-time surveillance and data visualization dashboard for industrial grade IoT networks. High-density information management.",
    fullDesc: "The Quantum Dashboard is an industrial-grade surveillance suite built for high-density IoT environments. The challenge was displaying thousands of concurrent data points without overwhelming the user. I implemented a hierarchical visualization system with a custom-built WebGL rendering engine for the maps and charts. The UI uses a brutalist yet premium aesthetic to communicate technical authority.",
    tech: ["React", "WebGL", "Socket.io", "Node.js", "D3.js"],
    github: "#",
    live: "#"
  }
];

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="py-8 relative">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4"
            >
              Curated Showcase
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold"
            >
              Selected <span className="text-black/20 italic">Artifacts.</span>
            </motion.h2>
          </div>
          <Magnetic>
            <motion.button 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="px-8 py-3 rounded-full border border-black/10 hover:bg-black/5 transition-all text-[10px] uppercase tracking-[0.2em] font-bold"
            >
              Full Archive
            </motion.button>
          </Magnetic>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(project)}
              className="relative group cursor-none"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-black/5 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 border border-transparent group-hover:border-black/[0.05]">
                {/* Image Wrap */}
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-90"
                />

                {/* Overlay Content */}
                <motion.div 
                  className="absolute inset-0 bg-linear-to-t from-white via-white/40 to-transparent p-10 flex flex-col justify-end"
                  animate={{ backgroundColor: hoveredIndex === index ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.5)' }}
                >
                  <p className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4">{project.category}</p>
                  <h3 className="text-3xl font-bold mb-4 tracking-tighter text-black">{project.title}</h3>
                  
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: (hoveredIndex === index || shouldReduceMotion) ? 'auto' : 0,
                      opacity: (hoveredIndex === index || shouldReduceMotion) ? 1 : 0
                    }}
                    className="overflow-hidden mb-6"
                  >
                    <p className="text-black/60 text-sm font-light leading-relaxed">
                      {project.desc}
                    </p>
                  </motion.div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                      <Eye size={18} />
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-black/30 hidden group-hover:flex items-center">
                      View Exploration
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Immersive Project View */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-6 lg:p-12"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-white/95 backdrop-blur-2xl"
            />
            
            <motion.div
              layoutId={selectedProject.id}
              className="relative w-full max-w-7xl h-full lg:h-auto lg:aspect-[16/9] glass rounded-[3rem] overflow-hidden flex flex-col lg:flex-row border-black/[0.05] shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-30 w-12 h-12 rounded-full bg-white/50 backdrop-blur-md border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <X size={20} />
              </button>

              <div className="lg:w-3/5 h-1/2 lg:h-full relative overflow-hidden">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent" />
                
                <div className="absolute bottom-12 left-12 right-12 z-10 hidden lg:block">
                  <div className="flex gap-4 mb-4">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-primary/10 backdrop-blur-md rounded-full text-[10px] text-primary border border-primary/20 uppercase tracking-widest font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-2/5 p-10 lg:p-20 flex flex-col justify-center bg-black/[0.02]">
                <p className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-6">{selectedProject.category}</p>
                <h3 className="text-4xl lg:text-7xl font-bold mb-10 leading-[0.9] tracking-tighter text-black">{selectedProject.title}</h3>
                <p className="text-black/60 text-lg font-light leading-relaxed mb-12">
                  {selectedProject.fullDesc}
                </p>

                <div className="flex flex-wrap gap-6 pt-10 border-t border-black/5">
                  <Magnetic>
                    <a href={selectedProject.live} className="premium-button flex items-center gap-4">
                      <span>Launch Preview</span>
                      <ArrowUpRight size={18} />
                    </a>
                  </Magnetic>
                  
                  <div className="flex items-center gap-4">
                    <a href={selectedProject.github} className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all text-black">
                      <Github size={22} />
                    </a>
                  </div>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-8 text-[10px] uppercase tracking-[0.2em] text-black/20">
                  <div className="flex items-center gap-2">
                    <Code size={14} />
                    <span>Clean Engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={14} />
                    <span>Security First</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
