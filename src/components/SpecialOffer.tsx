import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function SpecialOffer() {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#collections');
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
    <section className="relative overflow-hidden py-20 lg:py-28 bg-luxury-black text-luxury-white" id="special-offer-section">
      {/* Decorative luxury circular lighting patterns */}
      <div className="absolute -left-1/4 -top-1/2 w-96 h-96 rounded-full bg-luxury-brown/15 blur-3xl" />
      <div className="absolute -right-1/4 -bottom-1/2 w-96 h-96 rounded-full bg-luxury-beige/10 blur-3xl" />
      
      {/* Golden trim highlights */}
      <div className="absolute inset-0 border-y border-luxury-brown/20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="border border-luxury-brown/30 bg-luxury-white/[0.02] backdrop-blur-sm rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-xl">
          <div className="inline-flex items-center justify-center space-x-2 bg-luxury-brown/15 border border-luxury-brown/30 px-4 py-1.5 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5 text-luxury-beige" />
            <span className="text-[10px] tracking-[0.25em] font-semibold text-luxury-beige uppercase">
              Limited Time Invitation
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-luxury-white tracking-tight mb-4">
            Save Up To <span className="italic font-normal text-luxury-beige">40% OFF</span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-luxury-cream/80 font-light tracking-wide max-w-xl mx-auto mb-10 leading-relaxed">
            Enjoy exclusive discounts on selected designer perfumes. Refresh your signature scent or secure the ultimate luxury gift.
          </p>

          {/* Action Button */}
          <div className="flex justify-center">
            <a
              href="#collections"
              onClick={handleScrollClick}
              className="inline-flex items-center px-8 py-4 bg-luxury-brown hover:bg-luxury-beige text-luxury-black font-semibold text-xs tracking-[0.2em] uppercase rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 border border-luxury-brown"
              id="special-offer-shop-btn"
            >
              <span>Shop Now</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
