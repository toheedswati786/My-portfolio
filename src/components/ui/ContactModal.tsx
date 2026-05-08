import { motion, AnimatePresence } from 'motion/react';
import { X, Send, User, Mail, MessageSquare, Terminal } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Magnetic from './Magnetic';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Auto close after success
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-12 overflow-hidden"
        >
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/90 backdrop-blur-3xl"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative w-full max-w-2xl glass rounded-[2.5rem] border-black/10 overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent" />
            
            <div 
              className="p-8 md:p-12 overflow-y-auto max-h-[80vh] custom-scrollbar" 
              data-lenis-prevent
            >
              <div className="flex justify-between items-start mb-12">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal size={14} className="text-primary italic" />
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary">Protocol: Initiation</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tighter italic leading-none text-black">
                    Send <br /> <span className="text-black/20">Transmission.</span>
                  </h3>
                </div>
                <button 
                  onClick={onClose}
                  className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-black/40 hover:bg-red-500/10 hover:text-red-500 transition-all group"
                >
                  <X size={20} className="group-hover:rotate-90 transition-transform duration-500" />
                </button>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-20 text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/20">
                    <Send className="text-primary" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold mb-2 text-black">Signal Received.</h4>
                  <p className="text-black/40 text-sm font-light">The data packet has been successfully uplinked. I will respond shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group/field">
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-black/20 group-focus-within/field:text-primary transition-colors">
                        <User size={18} />
                      </div>
                      <input 
                        required
                        type="text" 
                        placeholder="ENTITY NAME"
                        className="w-full bg-black/5 border border-black/5 rounded-2xl py-5 pl-16 pr-6 text-sm font-bold uppercase tracking-widest placeholder:text-black/20 focus:border-primary/50 focus:bg-black/[0.08] transition-all outline-hidden text-black"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div className="relative group/field">
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-black/20 group-focus-within/field:text-primary transition-colors">
                        <Mail size={18} />
                      </div>
                      <input 
                        required
                        type="email" 
                        placeholder="COMM LINK (EMAIL)"
                        className="w-full bg-black/5 border border-black/5 rounded-2xl py-5 pl-16 pr-6 text-sm font-bold uppercase tracking-widest placeholder:text-black/20 focus:border-primary/50 focus:bg-black/[0.08] transition-all outline-hidden text-black"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="relative group/field">
                    <div className="absolute left-6 top-8 text-black/20 group-focus-within/field:text-primary transition-colors">
                      <MessageSquare size={18} />
                    </div>
                    <textarea 
                      required
                      placeholder="MESSAGE CORE DATA"
                      rows={4}
                      className="w-full bg-black/5 border border-black/5 rounded-[2rem] py-8 pl-16 pr-6 text-sm font-bold uppercase tracking-widest placeholder:text-black/20 focus:border-primary/50 focus:bg-black/[0.08] transition-all outline-hidden resize-none text-black"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <div className="pt-4">
                    <Magnetic>
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full premium-button group/btn flex items-center justify-center gap-4 py-6 text-white"
                      >
                        <span className="tracking-[0.4em] font-black">
                          {isSubmitting ? 'ENCRYPTING...' : 'INITIALIZE UPLINK'}
                        </span>
                        <Send size={18} className={`transition-transform duration-500 ${isSubmitting ? 'translate-x-20 opacity-0' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                      </button>
                    </Magnetic>
                  </div>
                </form>
              )}
            </div>
            
            {/* Modal Bottom Detail */}
            <div className="bg-black/[0.02] p-4 flex justify-center">
              <span className="text-[7px] uppercase tracking-[0.5em] text-black/10 font-bold">Secure End-to-End Encryption Enabled • Status: Optimal</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
