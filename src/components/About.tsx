import { motion } from 'motion/react';
import { BRAND_LOGO } from '../data';
import { Award, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-luxury-white overflow-hidden relative">
      {/* Delicate background scent-spray graphics or blobs */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-luxury-cream blur-3xl opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Grande Logo Display Case */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative p-4 md:p-8 rounded-3xl bg-luxury-cream border border-luxury-brown/10 shadow-lg text-center"
              id="about-logo-case"
            >
              {/* Grand golden bezel trim */}
              <div className="absolute inset-4 border border-luxury-brown/10 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10 py-12 flex flex-col items-center">
                <div className="w-56 h-56 md:w-64 md:h-64 overflow-hidden rounded-full border-2 border-luxury-brown/30 bg-luxury-white p-1 shadow-xl transition-transform duration-700 hover:scale-105">
                  <img
                    src={BRAND_LOGO}
                    alt="Midshelf Perfumes Brand Logo"
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                    id="about-logo-img"
                  />
                </div>
                
                {/* Brand watermark and credential */}
                <h4 className="font-serif text-2xl font-light text-luxury-black tracking-widest uppercase mt-6 mb-1">
                  MIDSHELF
                </h4>
                <p className="text-[10px] tracking-[0.3em] font-sans text-luxury-brown uppercase font-semibold">
                  ESTABLISHED COLLECTION
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: About Narrative Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="text-left">
              <div className="inline-flex items-center space-x-2.5 mb-4">
                <span className="h-[1px] w-6 bg-luxury-brown" />
                <span className="text-xs font-semibold tracking-[0.3em] text-luxury-brown uppercase">
                  Our Heritage & Mission
                </span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-luxury-black tracking-tight mb-6">
                About <span className="italic">MIDSHELF PERFUMES</span>
              </h2>

              <hr className="border-luxury-brown/15 w-20 mb-8" />

              <p className="text-base text-luxury-black/70 font-light leading-relaxed mb-8">
                At MIDSHELF PERFUMES, we believe every fragrance tells a story. We offer carefully selected designer and niche perfumes that combine luxury, quality, and long-lasting performance. Our mission is to help every customer find the perfect scent for every occasion.
              </p>

              {/* Mission pillar bullet-highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-luxury-brown/10">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-luxury-brown flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold tracking-wider text-luxury-black uppercase mb-1">Curation</h4>
                    <p className="text-[11px] text-luxury-black/50 font-light leading-normal">Premium & hard-to-find designer scents.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-luxury-brown flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold tracking-wider text-luxury-black uppercase mb-1">Authenticity</h4>
                    <p className="text-[11px] text-luxury-black/50 font-light leading-normal">100% genuine and certified bottles.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-luxury-brown flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold tracking-wider text-luxury-black uppercase mb-1">Longevity</h4>
                    <p className="text-[11px] text-luxury-black/50 font-light leading-normal">Formulations that linger elegantly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
