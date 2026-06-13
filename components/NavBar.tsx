'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050505]/90 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-red-600 to-red-900 rounded-sm shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
          <span className="text-xl font-bold tracking-tighter uppercase">Lucky Agro<span className="text-red-600"> Industries</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium">
          {navLinks.filter(l => l.name !== 'Contact').map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-red-500 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(220,38,38,1)]" />
            </Link>
          ))}
          <Link href="#contact" className="px-5 py-2 border border-red-600/50 hover:bg-red-600 transition-all rounded-sm">Contact Agent</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-red-500 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505] border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-red-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
