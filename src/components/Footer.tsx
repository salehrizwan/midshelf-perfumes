import { BRAND_LOGO } from '../data';
import { ArrowUp, Github } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-luxury-black text-luxury-white border-t border-luxury-brown/15 py-16 relative overflow-hidden" id="footer-section">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/50 to-luxury-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-luxury-white/5">
          
          {/* Logo and Tagline Column */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-luxury-brown/30 bg-luxury-white p-0.5">
                <img
                  src={BRAND_LOGO}
                  alt="Midshelf Perfumes Logo Watermark"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                  id="footer-logo-img"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-widest text-luxury-white">
                  MIDSHELF
                </span>
                <span className="text-[9px] tracking-[0.3em] font-sans text-luxury-beige font-semibold uppercase">
                  PERFUMES
                </span>
              </div>
            </div>
            <p className="text-xs text-luxury-cream/60 leading-relaxed font-light max-w-sm">
              Luxury Designer & Niche Perfumes. Exquisitely curated for individuals seeking elegance, confidence, and long-lasting performance.
            </p>
          </div>

          {/* Pillars List Column */}
          <div className="md:col-span-4 flex flex-col items-start space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-luxury-beige uppercase mb-1">
              Boutique Pillars
            </h4>
            <ul className="text-xs space-y-2 text-luxury-cream/80 font-light">
              <li className="flex items-center space-x-2">
                <span className="text-luxury-brown">✨</span>
                <span>Designer & Niche Perfumes</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-luxury-brown">🚚</span>
                <span>Nationwide Delivery</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-luxury-brown">🔒</span>
                <span>Secure Bank Transfer</span>
              </li>
            </ul>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 flex flex-col items-start space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-luxury-beige uppercase mb-1">
              Explore
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-luxury-cream/70 font-light">
              <a href="#home" className="hover:text-luxury-beige transition-colors duration-200">Home</a>
              <a href="#collections" className="hover:text-luxury-beige transition-colors duration-200">Collections</a>
              <a href="#about" className="hover:text-luxury-beige transition-colors duration-200">About</a>
              <a href="#why-choose-us" className="hover:text-luxury-beige transition-colors duration-200">Why Choose Us</a>
              <a href="#contact" className="hover:text-luxury-beige transition-colors duration-200">Contact Us</a>
            </div>
          </div>

        </div>

        {/* Bottom copyright section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-luxury-cream/40 font-light">
          <p>
            Copyright © 2026 MIDSHELF PERFUMES. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span>Designed in Boutique Suite</span>
            <button
              onClick={handleScrollToTop}
              className="w-8 h-8 rounded-full border border-luxury-white/10 hover:border-luxury-brown bg-luxury-white/5 hover:bg-luxury-brown hover:text-luxury-black flex items-center justify-center transition-all duration-300 group"
              aria-label="Scroll to top"
              id="back-to-top-btn"
            >
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
