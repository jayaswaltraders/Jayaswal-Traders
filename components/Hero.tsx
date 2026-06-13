'use client';

import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[#050505]">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url("https://picsum.photos/seed/luxuryestate/1920/1080")' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="mb-4 px-3 py-1 bg-red-950/30 border border-red-800/30 text-red-500 text-[10px] uppercase tracking-[0.3em] inline-block w-fit rounded-full"
          >
             Defining Luxury Since 1994
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-6"
          >
            Find Your <br />
            <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-500 relative z-10">
              Dream Estate.
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-zinc-400 text-lg mb-10 max-w-sm leading-relaxed"
          >
            Experience the pinnacle of luxury living. Discover exclusive estates, unparalleled penthouses, and bespoke properties curated for the world's most discerning clientele.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link 
              href="#properties"
              className="px-8 py-4 bg-gradient-to-r from-red-700 to-red-900 rounded-sm font-semibold tracking-wide shadow-lg shadow-red-900/20 hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              Explore Properties <ArrowRight size={18} />
            </Link>
            
            <Link 
              href="#contact"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-sm font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={18} /> Contact Agent
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Stats */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 right-6 md:right-10 lg:right-20 hidden md:flex flex-col gap-4"
      >
        <div className="bg-[#050505]/80 backdrop-blur-xl border border-white/10 p-8 rounded-sm shadow-2xl w-64 ring-1 ring-white/5 relative overflow-hidden">
          <div className="space-y-8 relative z-10">
            <div>
              <p className="text-3xl font-bold text-red-600 mb-1">150+</p>
              <p className="text-[10px] tracking-tighter text-zinc-500 uppercase">Properties Sold</p>
            </div>
            <div className="h-[1px] w-full bg-white/10 border-t border-red-900/20"></div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">99%</p>
              <p className="text-[10px] tracking-tighter text-zinc-500 uppercase">Happy Clients</p>
            </div>
            <div className="h-[1px] w-full bg-white/10 border-t border-red-900/20"></div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">20+</p>
              <p className="text-[10px] tracking-tighter text-zinc-500 uppercase">Years Experience</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
