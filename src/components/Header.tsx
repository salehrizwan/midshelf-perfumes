import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, ShoppingBag } from 'lucide-react';
import { BRAND_LOGO } from '../data';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigateHome: (anchor?: string) => void;
}

export default function Header({ cartCount, onCartClick, onNavigateHome }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#collections' },
    { name: 'About', href: '#about' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigateHome(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-luxury-black/95 backdrop-blur-md border-b border-luxury-brown/20 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-3 group"
              id="header-logo-link"
            >
              <div className="relative w-12 h-12 overflow-hidden rounded-full border border-luxury-brown/30 bg-luxury-white p-0.5 transition-transform duration-500 group-hover:scale-105">
                <img
                  src={BRAND_LOGO}
                  alt="Midshelf Perfumes Logo"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                  id="header-logo-img"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className="font-serif text-lg sm:text-xl font-bold tracking-widest text-luxury-white group-hover:text-luxury-beige transition-colors duration-300"
                  id="brand-name-header"
                >
                  MIDSHELF
                </span>
                <span className="text-[9px] tracking-[0.3em] font-sans text-luxury-beige font-semibold uppercase">
                  PERFUMES
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative text-sm font-medium tracking-wider text-luxury-white/85 hover:text-luxury-beige transition-colors duration-300 py-2 uppercase"
                  id={`nav-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop Cart + CTA Section */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Boutique Bag Icon Button */}
              <button
                onClick={onCartClick}
                className="relative p-2.5 text-luxury-white hover:text-luxury-beige transition-colors duration-300 focus:outline-none"
                aria-label="View Shopping Bag"
                id="header-cart-desktop-btn"
              >
                <ShoppingBag className="w-5.5 h-5.5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-luxury-brown text-luxury-black font-bold text-[9px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-luxury-black shadow-md animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              <a
                href="#collections"
                onClick={(e) => handleNavClick(e, '#collections')}
                className="inline-flex items-center px-5 py-2.5 border border-luxury-beige/30 hover:border-luxury-beige bg-luxury-brown/10 hover:bg-luxury-brown/20 text-luxury-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-all duration-300"
                id="header-cta-button"
              >
                <span>Shop Now</span>
                <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Actions (Bag Button + Burger Menu) */}
            <div className="flex items-center space-x-4 md:hidden">
              {/* Mobile Shopping Bag Trigger */}
              <button
                onClick={onCartClick}
                className="relative p-2 text-luxury-white hover:text-luxury-beige transition-colors duration-300 focus:outline-none"
                aria-label="View Shopping Bag"
                id="header-cart-mobile-btn"
              >
                <ShoppingBag className="w-5.5 h-5.5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-luxury-brown text-luxury-black font-bold text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center border border-luxury-black shadow-md">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-luxury-white hover:text-luxury-beige p-2 focus:outline-none transition-colors duration-300"
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-[73px] z-40 md:hidden bg-luxury-black border-b border-luxury-brown/20 shadow-2xl py-6 px-4"
            id="mobile-nav-panel"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base font-semibold tracking-widest text-luxury-white/90 hover:text-luxury-beige py-2.5 border-b border-luxury-white/5 uppercase"
                  id={`mobile-nav-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#collections"
                onClick={(e) => handleNavClick(e, '#collections')}
                className="w-full text-center py-3 bg-luxury-brown text-luxury-black font-semibold text-xs tracking-widest uppercase rounded-sm hover:bg-luxury-beige transition-all duration-300"
                id="mobile-nav-cta"
              >
                Shop Collection
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
