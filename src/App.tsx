/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import SmoothScroll from './components/ui/SmoothScroll';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import LiveProof from './components/sections/LiveProof';
import Portfolio from './components/sections/Portfolio';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import SectionWrapper from './components/ui/SectionWrapper';
import ContactModal from './components/ui/ContactModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time for assets and animations
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      <div className="relative min-h-screen bg-bg-deep scroll-smooth">
        <CustomCursor />
        
        <Navbar onContactClick={() => setIsContactModalOpen(true)} />

        <main className="bg-gradient-mesh overflow-x-hidden">
          <Hero />
          
          <SectionWrapper id="about">
            <About />
          </SectionWrapper>
 
          <SectionWrapper id="services">
            <Services />
          </SectionWrapper>
 
          <SectionWrapper id="proof">
            <LiveProof onContactClick={() => setIsContactModalOpen(true)} />
          </SectionWrapper>
 
          <SectionWrapper id="work">
            <Portfolio />
          </SectionWrapper>
 
          <SectionWrapper id="skills">
            <Skills />
          </SectionWrapper>
 
          <SectionWrapper id="contact">
            <Contact onContactClick={() => setIsContactModalOpen(true)} />
          </SectionWrapper>
        </main>

        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />

        {/* Global Grain/Noise Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[60] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>
    </SmoothScroll>
  );
}
