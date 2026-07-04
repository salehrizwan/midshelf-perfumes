import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 lg:py-32 bg-luxury-cream relative">
      {/* Visual background lines for structure */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-luxury-cream to-luxury-cream opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2.5 mb-4">
            <span className="h-[1px] w-6 bg-luxury-brown" />
            <span className="text-xs font-semibold tracking-[0.3em] text-luxury-brown uppercase">
              The Midshelf Standard
            </span>
            <span className="h-[1px] w-6 bg-luxury-brown" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-luxury-black tracking-tight mb-5">
            Why Choose <span className="italic">Us</span>
          </h2>
          <p className="text-sm sm:text-base text-luxury-black/60 font-light leading-relaxed">
            We are dedicated to providing more than just luxury products. We offer an unparalleled shopping experience, from scent selection to doorstep delivery.
          </p>
        </div>

        {/* Benefits Grid - Exactly 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="why-choose-us-grid">
          {WHY_CHOOSE_US.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 sm:p-10 bg-luxury-white rounded-2xl border border-luxury-brown/15 shadow-sm hover:shadow-xl hover:border-luxury-brown/40 transition-all duration-300 flex flex-col justify-between"
              id={`why-card-${index}`}
            >
              <div>
                {/* Gold/Brown Beveled Icon Box */}
                <div className="w-14 h-14 rounded-full bg-luxury-cream border border-luxury-brown/30 flex items-center justify-center text-luxury-brown group-hover:bg-luxury-black group-hover:text-luxury-beige group-hover:border-luxury-black transition-all duration-500 mb-6 shadow-sm">
                  <i className={`${benefit.icon} text-xl`} />
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-xl font-medium text-luxury-black mb-3 group-hover:text-luxury-brown transition-colors duration-300">
                  {benefit.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-luxury-black/60 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Minimalist interactive corner highlight */}
              <div className="w-full flex justify-end mt-4">
                <span className="text-[10px] text-luxury-brown font-semibold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Reliable Premium Choice •
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
