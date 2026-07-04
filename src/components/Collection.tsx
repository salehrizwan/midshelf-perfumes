import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, ShieldCheck, Tag } from 'lucide-react';
import { PERFUMES } from '../data';
import { Perfume } from '../types';

interface CollectionProps {
  onSelectPerfume: (perfume: Perfume) => void;
}

export default function Collection({ onSelectPerfume }: CollectionProps) {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  return (
    <section id="collections" className="py-24 lg:py-32 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2.5 mb-4">
            <span className="h-[1px] w-6 bg-luxury-brown" />
            <span className="text-xs font-semibold tracking-[0.3em] text-luxury-brown uppercase">
              Curated Elegance
            </span>
            <span className="h-[1px] w-6 bg-luxury-brown" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-luxury-black tracking-tight mb-5">
            The Signature <span className="italic">Collection</span>
          </h2>
          <p className="text-sm sm:text-base text-luxury-black/60 font-light leading-relaxed">
            Immerse yourself in three masterfully balanced aromas, each hand-selected and crafted to elevate confidence, evoke deep memory, and assert your presence.
          </p>
        </div>

        {/* Products Grid - Exactly 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12" id="perfume-collection-grid">
          {PERFUMES.map((perfume, index) => (
            <motion.div
              key={perfume.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
              className="group flex flex-col bg-luxury-white rounded-2xl overflow-hidden border border-luxury-brown/10 shadow-md hover:shadow-2xl hover:border-luxury-brown/30 transition-all duration-500"
              id={`perfume-card-${perfume.id}`}
            >
              {/* Product Image Stage - Changed to object-contain for full frame display */}
              <div className="relative aspect-square w-full overflow-hidden bg-luxury-cream/40 p-6 flex items-center justify-center">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  id={`perfume-image-${perfume.id}`}
                />
                
                {/* Elegant overlay scrim on hover */}
                <div className="absolute inset-0 bg-luxury-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Soft Gold Accent Border inside card image on hover */}
                <div className="absolute inset-4 border border-luxury-beige/0 group-hover:border-luxury-beige/30 rounded-xl transition-all duration-500 pointer-events-none" />

                {/* Scent Class Tag */}
                <span className="absolute top-4 left-4 bg-luxury-black/85 backdrop-blur-sm text-luxury-beige text-[10px] font-medium tracking-[0.2em] uppercase py-1.5 px-3 rounded-full border border-luxury-brown/20 shadow-md">
                  {perfume.type}
                </span>
              </div>

              {/* Product Info Block */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between text-center bg-luxury-white">
                <div>
                  <h3 className="font-serif text-2xl font-light text-luxury-black group-hover:text-luxury-brown transition-colors duration-300 mb-2">
                    {perfume.name}
                  </h3>
                  <p className="text-xs text-luxury-brown font-semibold tracking-widest uppercase mb-4">
                    {perfume.price} <span className="text-[10px] text-luxury-black/35 font-light normal-case ml-1">({perfume.volume})</span>
                  </p>
                  <p className="text-xs sm:text-sm text-luxury-black/60 font-light leading-relaxed mb-6 px-2">
                    {perfume.tagline}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onSelectPerfume(perfume)}
                    className="w-full inline-flex items-center justify-center py-3.5 px-6 border border-luxury-black hover:border-luxury-brown bg-transparent hover:bg-luxury-black hover:text-luxury-white text-luxury-black text-xs font-semibold uppercase tracking-widest rounded-sm transition-all duration-300 shadow-sm cursor-pointer"
                    id={`view-details-${perfume.id}`}
                  >
                    <span>View Detail</span>
                    <Eye className="ml-2 w-3.5 h-3.5 text-luxury-brown" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
