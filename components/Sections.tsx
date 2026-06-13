'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Building2, Key, ChartBar, Headphones, Star, Send } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-sm overflow-hidden relative border border-white/10 shadow-xl">
            <Image 
              src="https://picsum.photos/seed/brokerage/800/1000" 
              alt="Luxury Architecture" 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent"></div>
          </div>
          <div className="absolute -bottom-8 -right-8 w-64 bg-[#080808] border border-white/10 p-8 rounded-sm shadow-xl backdrop-blur-xl">
            <p className="text-5xl font-bold text-red-600 mb-2 relative z-10">20+</p>
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest relative z-10">Years of<br/> Excellence</p>
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-red-600"></div>
            <h4 className="text-red-500 font-bold tracking-widest uppercase text-sm">Our Legacy</h4>
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight tracking-wide">
            Setting the Standard in luxury <span className="font-bold">Real Estate</span>
          </h2>
          <p className="text-zinc-400 mb-6 leading-relaxed text-lg">
            Founded on the principles of integrity, exclusivity, and profound market knowledge, we cater to distinguished individuals seeking exceptional estates worldwide.
          </p>
          <p className="text-zinc-400 mb-10 leading-relaxed text-lg">
            Our team of dedicated professionals provides a bespoke concierge service, ensuring that every transaction is handled with absolute discretion and unmatched expertise.
          </p>
          
          <ul className="space-y-4 mb-12">
            {[
              'Unrivaled Global Elite Network', 
              'Discreet Off-Market Opportunities', 
              'Award-Winning Consultations',
              'End-to-End Concierge Experience'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full border border-red-500/30 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-red-600 group-hover:bg-white transition-colors"></div>
                </div>
                <span className="text-neutral-200 font-medium tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
          
          <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-sm hover:bg-white/10 transition-all uppercase tracking-widest text-[10px] font-bold shadow-lg">
            Inside Lucky Agro
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    { icon: Building2, title: 'Property Buying', desc: 'Expert guidance through the acquisition of premium estates and architectural masterworks globally.' },
    { icon: Key, title: 'Property Selling', desc: 'Strategic global marketing to showcase unparalleled properties to the right high-net-worth audience.' },
    { icon: ChartBar, title: 'Investment Advice', desc: 'Data-driven insights and exclusive modeling for lucrative real estate portfolio expansion.' },
    { icon: Headphones, title: 'Concierge Care', desc: 'Bespoke end-to-end relocation, architectural detailing, and property management.' },
  ];

  return (
    <section id="services" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-red-600"></div>
            <h4 className="text-red-500 font-bold tracking-widest uppercase text-sm">Expertise</h4>
            <div className="w-8 h-px bg-red-600"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">Our Tailored <span className="font-bold">Services</span></h2>
          <p className="text-zinc-400 text-lg">Comprehensive real estate solutions designed exclusively for the discerning client.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-lg hover:bg-red-950/20 hover:border-red-900/30 transition-all duration-300 group shadow-lg text-center"
            >
              <div className="flex justify-center mb-6">
                <service.icon size={32} className="text-red-500" />
              </div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Showcase() {
  const images = [
    'https://picsum.photos/seed/arch1/600/800',
    'https://picsum.photos/seed/arch2/800/600',
    'https://picsum.photos/seed/arch3/600/600',
    'https://picsum.photos/seed/arch4/800/800'
  ];
  return (
    <section className="py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-red-600"></div>
              <h4 className="text-red-500 font-bold tracking-widest uppercase text-sm">Gallery</h4>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">Cinematic Showcase</h2>
            <p className="text-zinc-400 text-lg">Glimpse into the extraordinary lifestyles, master-crafted designs, and grand architectures our properties offer.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[350px] gap-6">
          <div className="md:col-span-2 relative group rounded-sm overflow-hidden border border-white/10 shadow-xl">
            <Image src={images[0]} alt="Showcase" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-8 left-8 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border-l-[3px] border-red-600">
              <p className="text-white font-medium text-2xl mb-1">Architectural Digest</p>
              <p className="text-zinc-400 text-[10px] tracking-widest uppercase">Los Angeles, CA</p>
            </div>
          </div>
          <div className="relative group rounded-sm overflow-hidden border border-white/10 shadow-xl">
            <Image src={images[1]} alt="Showcase" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-[#050505]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-8 left-8 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border-l-[3px] border-white">
              <p className="text-white font-medium text-2xl mb-1">Modern Oasis</p>
              <p className="text-zinc-400 text-[10px] tracking-widest uppercase">Miami, FL</p>
            </div>
          </div>
          <div className="relative group rounded-sm overflow-hidden border border-white/10 shadow-xl">
            <Image src={images[2]} alt="Showcase" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-[#050505]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-8 left-8 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border-l-[3px] border-white">
              <p className="text-white font-medium text-2xl mb-1">Classic Elegance</p>
              <p className="text-zinc-400 text-[10px] tracking-widest uppercase">New York, NY</p>
            </div>
          </div>
          <div className="md:col-span-2 relative group rounded-sm overflow-hidden border border-white/10 shadow-xl">
            <Image src={images[3]} alt="Showcase" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-8 left-8 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border-l-[3px] border-red-600">
              <p className="text-white font-medium text-2xl mb-1">Silicon Estate</p>
              <p className="text-zinc-400 text-[10px] tracking-widest uppercase">Palo Alto, CA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const reviews = [
    { name: "Alexander Pierce", role: "CEO, Apex Corp", text: "Luxe Estates found us a property that wasn't even on the market yet. Their connections and discretion are unmatched in the industry." },
    { name: "Eleanor Sterling", role: "International Investor", text: "A truly flawless experience from viewing to closing. Their knowledge of premium global markets gave me complete confidence." },
    { name: "Jameson Wright", role: "Entrepreneur", text: "They understood exactly what my family needed. The cinematic presentation of properties saved me countless hours searching." }
  ];

  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-20 tracking-wide">Client <span className="font-bold">Perspectives</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-zinc-900/50 backdrop-blur-md p-10 rounded-sm border border-white/10 relative group hover:border-white/20 transition-colors shadow-lg"
            >
              <div className="flex text-red-500 mb-8 gap-1">
                {[...Array(5)].map((_, idx) => <Star key={idx} size={18} fill="currentColor" />)}
              </div>
              <p className="text-zinc-400 mb-10 leading-relaxed min-h-[100px] font-light">"{r.text}"</p>
              <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                <div className="w-14 h-14 bg-[#080808] rounded-full overflow-hidden relative ring-2 ring-white/10 group-hover:ring-red-500/50 transition-all">
                  <Image src={`https://picsum.photos/seed/face${i}/150/150`} alt={r.name} fill referrerPolicy="no-referrer" className="object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-white">{r.name}</h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#050505] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 relative z-10">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-red-600"></div>
            <h4 className="text-red-500 font-bold tracking-widest uppercase text-sm">Discreet Inquiries</h4>
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-8">Begin the <span className="font-bold">Conversation</span></h2>
          <p className="text-zinc-400 mb-12 leading-relaxed text-lg">
            Contact our dedicated expert team to schedule a private viewing protocol or to list your extraordinary property with us. Every inquiry is handled with absolute confidentiality.
          </p>
          <div className="space-y-10">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full border border-red-500/30 flex items-center justify-center shrink-0">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-2">Global Headquarters</p>
                <p className="text-xl font-medium text-white">One World Trade Center, Suite 4500<br/>New York, NY 10007</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full border border-red-500/30 flex items-center justify-center shrink-0">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-2">Direct Line</p>
                <p className="text-xl font-medium text-red-500">+91 9304252262</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full border border-red-500/30 flex items-center justify-center shrink-0">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-2">Email Desk</p>
                <p className="text-xl font-medium text-red-500">luckyagro001@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-zinc-900/50 p-10 md:p-12 rounded-sm border border-white/10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[80px] pointer-events-none"></div>
          <form className="space-y-8 relative z-10" onSubmit={e => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-4">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 focus:border-red-500 pb-3 text-lg text-white outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-4">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 focus:border-red-500 pb-3 text-lg text-white outline-none transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-4">Phone</label>
              <input type="tel" className="w-full bg-transparent border-b border-white/20 focus:border-red-500 pb-3 text-lg text-white outline-none transition-colors" placeholder="+91 9304252262" />
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-4">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-white/20 focus:border-red-500 pb-3 text-lg text-white outline-none transition-colors resize-none" placeholder="Details of your inquiry..."></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-red-700 to-red-900 text-white font-semibold py-5 rounded-sm flex items-center justify-center gap-3 hover:brightness-110 transition-all uppercase tracking-widest text-[10px] shadow-lg shadow-red-900/20">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#080808] py-16 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-6 tracking-tighter uppercase">LUCKY AGRO<span className="text-red-500"> INDUSTRIES</span></h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Curating the world's finest properties for the most discerning individuals and families globally.</p>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-white uppercase text-[10px] tracking-widest">Collections</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-red-500 transition-colors">Mansions</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Penthouses</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Villas</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Commercial Estates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-white uppercase text-[10px] tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#about" className="hover:text-red-500 transition-colors">Our Legacy</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Concierge Services</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Journal & Media</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact Directory</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-white uppercase text-[10px] tracking-widest">Private Newsletter</h4>
            <p className="text-sm text-zinc-500 mb-6">Subscribe to receive exclusive off-market listings and luxury editorials.</p>
            <div className="flex border border-white/10 rounded-sm overflow-hidden focus-within:border-red-500/50 transition-colors">
              <input type="email" placeholder="Email address" className="bg-white/5 w-full px-6 py-4 text-sm outline-none text-white" />
              <button className="bg-red-600 px-6 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-red-700 transition">Join</button>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-zinc-600 font-medium tracking-[0.2em] uppercase">© 2026 LUCKY AGRO INDUSTRIES. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 text-[10px] text-zinc-400 font-medium tracking-widest uppercase">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
