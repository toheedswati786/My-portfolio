import { motion } from 'motion/react';
import { useState } from 'react';

const skillGroups = [
  {
    category: "Architecture",
    skills: ["React", "TypeScript", "Node.js", "Express", "Next.js", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "Design & UX",
    skills: ["Figma", "Interaction Design", "Prototyping", "Adobe Suite", "Motion Design", "Design Systems"]
  },
  {
    category: "Management",
    skills: ["Brand Strategy", "SEO", "Content Ops", "Social Media", "Community Building"]
  },
  {
    category: "Creative",
    skills: ["Video Editing", "Copywriting", "Visual Storytelling", "High-Impact Assets"]
  }
];

export default function Skills() {
  const [selectedGroup, setSelectedGroup] = useState<number>(0);

  return (
    <div className="py-8 relative overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-6"
            >
              Technical Arsenal
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-7xl font-bold mb-12"
            >
              The Science <br /> Behind the <span className="text-gradient italic">Art.</span>
            </motion.h2>

            <div className="flex flex-col gap-4">
              {skillGroups.map((group, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedGroup(i)}
                  className={`group flex items-center justify-between p-6 rounded-2xl transition-all duration-500 border ${
                    selectedGroup === i 
                    ? "bg-primary/10 border-primary shadow-[0_10px_30px_rgba(99,102,241,0.1)]" 
                    : "bg-black/[0.02] border-black/5 hover:border-black/20"
                  }`}
                >
                  <span className={`text-xl font-bold transition-colors ${selectedGroup === i ? "text-primary" : "text-black/40"}`}>
                    {group.category}
                  </span>
                  <div className={`w-2 h-2 rounded-full transition-all ${
                    selectedGroup === i ? "bg-primary scale-150" : "bg-black/10 group-hover:bg-black/30"
                  }`} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 h-[400px] lg:h-[600px] flex items-center justify-center relative">
            {/* Animated Sphere/Cluster logic can go here, but for simplicity we'll use a dynamic tag cloud */}
            <div className="flex flex-wrap gap-4 justify-center">
              {skillGroups[selectedGroup].skills.map((skill, index) => (
                <motion.div
                  key={`${selectedGroup}-${index}`}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: index * 0.05 
                  }}
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  className="px-8 py-4 rounded-3xl glass border-primary/20 text-black/80 font-medium text-lg hover:text-primary hover:border-primary transition-colors cursor-none shadow-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* Background glowing orb */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] -z-10 w-[80%] h-[80%] m-auto" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
