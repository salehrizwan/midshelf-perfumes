import React from 'react';
import { motion } from 'motion/react';
import { HERO_BG, HERO_FEATURES } from '../data';

export default function Hero() {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt="Luxury Perfumes Collection Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          id="hero-bg-image"
        />
        {/* Elegant Scrim Gradient - Luxury Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-luxury-black/75 to-transparent md:bg-gradient-to-r" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/50" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center pt-16 pb-20 md:py-32">
        <div className="max-w-2xl text-left">
          {/* Accent Line & Tag */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-3 mb-6"
            id="hero-welcome-badge"
          >
            <span className="h-[1px] w-12 bg-luxury-brown" />
            <span className="text-xs font-semibold tracking-[0.4em] text-luxury-beige uppercase">
              The Essence of Timelessness
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-luxury-white leading-tight mb-6"
            id="hero-headline"
          >
            Luxury Fragrances <br />
            <span className="italic font-normal text-luxury-beige text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mt-2">
              for Every Personality
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base sm:text-lg text-luxury-cream/80 tracking-wide font-light leading-relaxed mb-10 max-w-xl"
            id="hero-subheading"
          >
            Discover premium designer and niche perfumes carefully selected to match your unique style. Experience elegance, confidence, and timeless scents.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
            id="hero-actions"
          >
            <a
              href="#collections"
              onClick={(e) => handleScrollClick(e, '#collections')}
              className="px-8 py-4 bg-luxury-brown hover:bg-luxury-beige text-luxury-black font-semibold text-xs tracking-[0.2em] uppercase rounded-sm shadow-xl transition-all duration-300 text-center border border-luxury-brown"
              id="hero-btn-collection"
            >
              Shop Collection
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollClick(e, '#contact')}
              className="px-8 py-4 bg-transparent hover:bg-luxury-white/5 text-luxury-white font-semibold text-xs tracking-[0.2em] uppercase rounded-sm border border-luxury-white/30 hover:border-luxury-beige transition-all duration-300 text-center"
              id="hero-btn-contact"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Features Bar (Below Hero) */}
      <div className="relative z-10 w-full bg-luxury-black border-t border-luxury-brown/20 py-8 lg:py-12" id="hero-features-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {HERO_FEATURES.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + idx * 0.15 }}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-luxury-white/[0.02] transition-colors duration-300"
                id={`hero-feature-item-${idx}`}
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-luxury-brown/10 border border-luxury-brown/30 text-luxury-beige">
                  <i className={`${feature.icon} text-lg`} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-luxury-white tracking-wide mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-luxury-cream/60 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
