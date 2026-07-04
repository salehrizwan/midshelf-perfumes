import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-luxury-white relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-4xl h-96 rounded-full bg-luxury-cream/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2.5 mb-4">
            <span className="h-[1px] w-6 bg-luxury-brown" />
            <span className="text-xs font-semibold tracking-[0.3em] text-luxury-brown uppercase">
              Client Appreciations
            </span>
            <span className="h-[1px] w-6 bg-luxury-brown" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-luxury-black tracking-tight mb-5">
            Customer <span className="italic">Testimonials</span>
          </h2>
          <p className="text-sm sm:text-base text-luxury-black/60 font-light leading-relaxed">
            Read stories of olfactory discovery, confidence, and premium boutique experiences from our esteemed perfume collectors.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-8 sm:p-10 bg-luxury-cream rounded-2xl border border-luxury-brown/15 shadow-sm hover:shadow-lg hover:border-luxury-brown/30 transition-all duration-300 flex flex-col justify-between"
              id={`testimonial-card-${index}`}
            >
              {/* Decorative quotation icon */}
              <div className="absolute top-6 right-8 text-luxury-brown/10 group-hover:text-luxury-brown/15 transition-colors duration-300">
                <Quote className="w-12 h-12 stroke-[1.5]" />
              </div>

              <div>
                {/* 5-Star Rating block */}
                <div className="flex items-center space-x-1 mb-6" id={`stars-testimonial-${index}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-xs text-luxury-brown" />
                  ))}
                </div>

                {/* Testimonial Core Text */}
                <p className="text-sm sm:text-base text-luxury-black/85 font-serif italic font-light leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Credits */}
              <div className="flex items-center space-x-3 pt-4 border-t border-luxury-brown/10">
                <div className="w-8 h-8 rounded-full bg-luxury-black text-luxury-beige flex items-center justify-center font-bold text-xs">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-luxury-black">
                    {testimonial.author}
                  </h4>
                  <p className="text-[10px] text-luxury-black/40 uppercase">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
