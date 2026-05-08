import { motion } from 'motion/react';
import { 
  Code2, 
  Palette, 
  Search, 
  Share2, 
  BarChart3, 
  Megaphone, 
  Workflow, 
  Laptop 
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "Complex architectures brought to life with precision and scalability. I specialize in Next.js, React, Node, and specialized database systems.",
    gradient: "from-[#00ff88] to-[#00ccff]"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Immersive digital interfaces that blend aesthetics with functionality. Every pixel serves a purpose in the user journey.",
    gradient: "from-[#00ccff] to-[#ff00ff]"
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    desc: "Strategic community building and engagement. Transforming followers into dedicated brand advocates through narrative-driven content.",
    gradient: "from-[#ff00ff] to-[#ff8800]"
  },
  {
    icon: Search,
    title: "SEO Mastery",
    desc: "Data-driven visibility strategies. I don't just optimize for search engines; I optimize for human intent and conversion.",
    gradient: "from-[#ff8800] to-[#00ff88]"
  },
  {
    icon: Share2,
    title: "Content Strategy",
    desc: "Specialized mental health niche strategy. Ethical, impactful, and authoritative storytelling that builds profound trust.",
    gradient: "from-[#00ff88] via-[#00ccff] to-[#ff00ff]"
  },
  {
    icon: BarChart3,
    title: "Brand Management",
    desc: "Cohesive identity design across all touchpoints. Ensuring your brand's voice is consistent, powerful, and unforgettable.",
    gradient: "from-[#00ccff] to-[#ff8800]"
  },
  {
    icon: Workflow,
    title: "Virtual Assistance",
    desc: "High-impact executive support and operational streamlining. Management of complex workflows and digital assets.",
    gradient: "from-[#ff00ff] to-[#00ff88]"
  },
  {
    icon: Laptop,
    title: "High-Impact Creator",
    desc: "Cinematic video and graphic content creation. High-production value assets designed to pull users into your brand story.",
    gradient: "from-[#ff8800] via-[#ff00ff] to-[#00ccff]"
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="py-8 relative">
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            A Unified Force of <br /> <span className="text-primary italic">Digital Mastery.</span>
          </motion.h2>
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-black/40 max-w-2xl mx-auto font-light"
          >
            I offer a complete ecosystem of services designed to work in synergy, ensuring every aspect of your digital presence is optimized for peak performance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
               className={cn(
                "relative h-[300px] rounded-[2rem] overflow-hidden cursor-none transition-all duration-700",
                activeIndex === index ? "glass border-primary/30" : "bg-black/[0.02] border-transparent"
              )}
            >
              {/* Background Glow */}
              <motion.div 
                className={cn(
                  "absolute inset-0 bg-linear-to-br opacity-0 transition-opacity duration-700 blur-3xl",
                  service.gradient
                )}
                animate={{ opacity: activeIndex === index ? 0.1 : 0 }}
              />

              <div className="p-10 h-full flex flex-col justify-between relative z-10">
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700",
                  activeIndex === index ? "bg-primary text-black scale-110 shadow-[0_0_30px_rgba(0,255,136,0.2)]" : "bg-black/5 text-black/40"
                )}>
                  <service.icon size={28} />
                </div>

                <div>
                  <h3 className={cn(
                    "text-xl font-bold mb-2 transition-all duration-500",
                    activeIndex === index ? "text-black" : "text-black/60"
                  )}>
                    {service.title}
                  </h3>
                  <p className={cn(
                    "text-sm leading-relaxed transition-all duration-700",
                    activeIndex === index ? "text-black/70 italic" : "text-black/20 line-clamp-2"
                  )}>
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Progress Line */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: activeIndex === index ? '100%' : '0%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
