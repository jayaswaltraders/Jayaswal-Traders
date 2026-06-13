'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, BedDouble, Bath, Square, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const allProperties = [
  { id: 1, title: 'Beverly Hills Mansion', price: '$12,500,000', location: 'Beverly Hills, CA', beds: 6, baths: 8, sqft: '10,500', category: 'Luxury', image: 'https://picsum.photos/seed/lux1/800/600' },
  { id: 2, title: 'Downtown Penthouse', price: '$4,200,000', location: 'New York, NY', beds: 4, baths: 4, sqft: '4,200', category: 'Buy', image: 'https://picsum.photos/seed/lux2/800/600' },
  { id: 3, title: 'Silicon Valley Estate', price: '$18,900,000', location: 'Palo Alto, CA', beds: 7, baths: 9, sqft: '14,000', category: 'Luxury', image: 'https://picsum.photos/seed/lux3/800/600' },
  { id: 4, title: 'Oceanfront Villa', price: '$22,000/mo', location: 'Miami, FL', beds: 5, baths: 6, sqft: '6,800', category: 'Rent', image: 'https://picsum.photos/seed/lux4/800/600' },
  { id: 5, title: 'Modern Tech Hub', price: '$35,000,000', location: 'Austin, TX', beds: 0, baths: 12, sqft: '45,000', category: 'Commercial', image: 'https://picsum.photos/seed/lux5/800/600' },
  { id: 6, title: 'Mountain Retreat', price: '$8,500,000', location: 'Aspen, CO', beds: 6, baths: 7, sqft: '8,200', category: 'Buy', image: 'https://picsum.photos/seed/lux6/800/600' },
];

const categories = ['All', 'Buy', 'Rent', 'Luxury', 'Commercial'];

export default function FeaturedProperties() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProperties = activeCategory === 'All' 
    ? allProperties 
    : allProperties.filter(p => p.category === activeCategory);

  return (
    <section id="properties" className="py-32 bg-[#080808] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase mb-6">
              Featured <span className="font-bold">Properties</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed max-w-lg">
              Discover our exclusive selection of the finest properties curated to meet the highest standards of luxury and design.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === category 
                  ? 'bg-red-600 text-white shadow-lg shadow-red-900/20' 
                  : 'bg-white/5 border border-white/10 text-neutral-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group rounded-xl overflow-hidden bg-zinc-900/50 border border-white/10 hover:border-white/20 transition-all flex flex-col"
              >
                <div className="relative h-72 overflow-hidden bg-neutral-800">
                  <Image 
                    src={property.image} 
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] tracking-widest font-bold uppercase text-white border border-white/10">
                      {property.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-white">{property.title}</h3>
                    <span className="text-red-500 font-bold whitespace-nowrap">{property.price}</span>
                  </div>
                  <p className="text-xs text-zinc-500 mb-4">{property.location}</p>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-zinc-400 uppercase tracking-widest pt-4 mt-auto border-t border-white/5">
                    <span>{property.beds || 0} Beds</span>
                    <span>•</span>
                    <span>{property.baths} Baths</span>
                    <span>•</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <button className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-all font-medium border-b border-red-500 pb-1 group uppercase tracking-widest text-sm">
            View All Properties <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
