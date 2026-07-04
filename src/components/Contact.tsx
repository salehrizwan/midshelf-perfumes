import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquareText, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scent: 'General Consultation',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactDetails = [
    {
      icon: 'fa-solid fa-phone',
      label: 'Call Our Concierge',
      value: '+1 (555) 783-6472',
      href: 'tel:+15557836472',
      actionText: 'Tap to call'
    },
    {
      icon: 'fa-brands fa-whatsapp',
      label: 'WhatsApp VIP Chat',
      value: '+1 (555) 783-6473',
      href: 'https://wa.me/15557836473',
      actionText: 'Start chat'
    },
    {
      icon: 'fa-solid fa-envelope',
      label: 'Email Enquiries',
      value: 'concierge@midshelfperfumes.com',
      href: 'mailto:concierge@midshelfperfumes.com',
      actionText: 'Send email'
    },
    {
      icon: 'fa-solid fa-map-pin',
      label: 'Boutique Location',
      value: '18 Mayfair Arcade, London, W1S',
      href: 'https://maps.google.com',
      actionText: 'Get directions'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setIsSubmitting(true);
    
    // Simulate premium backend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', scent: 'General Consultation', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-luxury-cream relative">
      {/* Structural layout details */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-luxury-black" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-luxury-white rounded-3xl border border-luxury-brown/20 overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Direct details */}
            <div className="lg:col-span-5 bg-luxury-black text-luxury-white p-8 sm:p-12 md:p-16 flex flex-col justify-between relative">
              {/* Decorative faint circles */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-luxury-brown/5 blur-3xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-luxury-brown/10 border border-luxury-brown/20 px-3 py-1 rounded-full mb-6">
                  <Sparkles className="w-3 h-3 text-luxury-beige" />
                  <span className="text-[9px] tracking-[0.25em] font-semibold text-luxury-beige uppercase">
                    Personalized Scent Selection
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-luxury-white tracking-tight mb-4">
                  Get In <span className="italic text-luxury-beige">Touch</span>
                </h2>
                
                <p className="text-xs sm:text-sm text-luxury-cream/70 font-light leading-relaxed mb-10">
                  Looking for your next signature fragrance? Contact us today. Our expert consultants are at your service.
                </p>

                {/* Contact information nodes */}
                <div className="space-y-6">
                  {contactDetails.map((detail, idx) => (
                    <a
                      key={idx}
                      href={detail.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start space-x-4 p-3 rounded-xl hover:bg-luxury-white/[0.03] border border-transparent hover:border-luxury-brown/10 transition-all duration-300"
                      id={`contact-detail-${idx}`}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-luxury-brown/15 border border-luxury-brown/30 flex items-center justify-center text-luxury-beige transition-colors duration-300 group-hover:bg-luxury-beige group-hover:text-luxury-black">
                        <i className={detail.icon} />
                      </div>
                      <div>
                        <span className="text-[10px] tracking-wider text-luxury-cream/40 uppercase block font-semibold">
                          {detail.label}
                        </span>
                        <span className="text-xs sm:text-sm text-luxury-cream group-hover:text-luxury-beige font-medium block mt-0.5">
                          {detail.value}
                        </span>
                        <span className="text-[9px] text-luxury-brown opacity-0 group-hover:opacity-100 transition-opacity duration-300 block mt-0.5 font-bold uppercase tracking-widest">
                          {detail.actionText} →
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Secure guarantee text bottom left */}
              <div className="border-t border-luxury-white/10 pt-6 mt-12 text-[11px] text-luxury-cream/40 font-light">
                Secure SSL Encrypted Channel • Direct Wire Verification Available
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-luxury-white">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="boutique-inquiry-form"
                  >
                    <div className="text-left border-b border-luxury-brown/10 pb-4">
                      <h3 className="font-serif text-2xl font-light text-luxury-black">
                        Send An Inquiry
                      </h3>
                      <p className="text-[11px] text-luxury-black/40 font-light mt-1">
                        Please specify your preferences below.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="flex flex-col text-left">
                        <label htmlFor="name-input" className="text-[10px] font-bold tracking-widest text-luxury-black uppercase mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name-input"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="px-4 py-3 bg-luxury-cream border border-luxury-brown/20 focus:border-luxury-brown focus:outline-none rounded-md text-xs transition-colors duration-300"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col text-left">
                        <label htmlFor="email-input" className="text-[10px] font-bold tracking-widest text-luxury-black uppercase mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email-input"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@domain.com"
                          className="px-4 py-3 bg-luxury-cream border border-luxury-brown/20 focus:border-luxury-brown focus:outline-none rounded-md text-xs transition-colors duration-300"
                        />
                      </div>
                    </div>

                    {/* Dropdown for scent */}
                    <div className="flex flex-col text-left">
                      <label htmlFor="scent-input" className="text-[10px] font-bold tracking-widest text-luxury-black uppercase mb-1.5">
                        Scent Of Interest
                      </label>
                      <select
                        id="scent-input"
                        value={formData.scent}
                        onChange={(e) => setFormData({ ...formData, scent: e.target.value })}
                        className="px-4 py-3 bg-luxury-cream border border-luxury-brown/20 focus:border-luxury-brown focus:outline-none rounded-md text-xs text-luxury-black/80 transition-colors duration-300"
                      >
                        <option value="General Consultation">General Fragrance Consultation</option>
                        <option value="Luxury Noir">Luxury Noir (Elegant Woody)</option>
                        <option value="Velvet Bloom">Velvet Bloom (Fresh Floral)</option>
                        <option value="Royal Oud">Royal Oud (Rich Oriental)</option>
                      </select>
                    </div>

                    {/* Message body */}
                    <div className="flex flex-col text-left">
                      <label htmlFor="message-input" className="text-[10px] font-bold tracking-widest text-luxury-black uppercase mb-1.5">
                        Your Message *
                      </label>
                      <textarea
                        id="message-input"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the scent notes you adore or outline your shipping questions..."
                        className="px-4 py-3 bg-luxury-cream border border-luxury-brown/20 focus:border-luxury-brown focus:outline-none rounded-md text-xs transition-colors duration-300 resize-none"
                      />
                    </div>

                    {/* Large Contact Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-luxury-black hover:bg-luxury-brown text-luxury-white hover:text-luxury-black font-semibold text-xs tracking-[0.25em] uppercase rounded-sm shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 border border-luxury-black hover:border-luxury-brown disabled:opacity-50"
                      id="large-contact-button"
                    >
                      <span>{isSubmitting ? 'Submitting Enquiry...' : 'Send Inquiry'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 px-4 space-y-6"
                    id="inquiry-success-message"
                  >
                    <div className="w-16 h-16 rounded-full bg-luxury-brown/15 text-luxury-brown border border-luxury-brown/30 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    
                    <h3 className="font-serif text-3xl font-light text-luxury-black">
                      Inquiry Received
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-luxury-black/60 font-light leading-relaxed max-w-md mx-auto">
                      Thank you for contacting <span className="font-semibold text-luxury-black">MIDSHELF PERFUMES</span>. Your fragrance consultant will review your preferences and contact you via email shortly.
                    </p>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="inline-flex items-center px-6 py-2.5 bg-luxury-cream hover:bg-luxury-black text-luxury-black hover:text-luxury-white font-semibold text-[10px] tracking-widest uppercase rounded-sm border border-luxury-brown/30 hover:border-luxury-black transition-all duration-300"
                    >
                      Submit Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
