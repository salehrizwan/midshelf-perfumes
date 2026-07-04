import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Collection from './components/Collection';
import SpecialOffer from './components/SpecialOffer';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductDetailPage from './components/ProductDetailPage';
import CartDrawer from './components/CartDrawer';
import { Perfume } from './types';

interface CartItem {
  perfume: Perfume;
  quantity: number;
}

export default function App() {
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('midshelf_perfumes_cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync cart items to localStorage for high-craftsmanship persistent shopping
  useEffect(() => {
    localStorage.setItem('midshelf_perfumes_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleSelectPerfume = (perfume: Perfume) => {
    setSelectedPerfume(perfume);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleAddToCart = (perfume: Perfume, quantity: number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.perfume.id === perfume.id);
      if (existing) {
        return prev.map(item => 
          item.perfume.id === perfume.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { perfume, quantity }];
    });
  };

  const handleBuyNow = (perfume: Perfume) => {
    // Add 1 item of perfume to cart if it's not already in there
    setCartItems(prev => {
      const existing = prev.find(item => item.perfume.id === perfume.id);
      if (!existing) {
        return [...prev, { perfume, quantity: 1 }];
      }
      return prev;
    });
    // Open the cart drawer which initiates checkout immediately
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (perfumeId: string, delta: number) => {
    setCartItems(prev => 
      prev.map(item => {
        if (item.perfume.id === perfumeId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (perfumeId: string) => {
    setCartItems(prev => prev.filter(item => item.perfume.id !== perfumeId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleNavigateHome = (anchor?: string) => {
    setSelectedPerfume(null);
    if (anchor) {
      setTimeout(() => {
        const element = document.querySelector(anchor);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-luxury-cream text-luxury-black font-sans antialiased overflow-x-hidden selection:bg-luxury-brown selection:text-luxury-black" id="app-root">
      {/* Premium Sticky Navigation */}
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        onNavigateHome={handleNavigateHome}
      />

      {/* Main Routing Layout */}
      <main>
        {selectedPerfume ? (
          /* Render Dedicated Product Detail Page View */
          <ProductDetailPage 
            perfume={selectedPerfume}
            onBack={() => setSelectedPerfume(null)}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            isAddedToCart={cartItems.some(item => item.perfume.id === selectedPerfume.id)}
          />
        ) : (
          /* Render Main Landing Page Sections */
          <>
            {/* Hero Banner Section */}
            <Hero />

            {/* Product Grid Showcase Section */}
            <Collection onSelectPerfume={handleSelectPerfume} />

            {/* 40% OFF Special Offer Banner */}
            <SpecialOffer />

            {/* Storytelling & Mission Section */}
            <About />

            {/* 6 Elegant Benefit Cards Grid */}
            <WhyChooseUs />

            {/* Customer Starry Testimonials */}
            <Testimonials />

            {/* Concierge Split Inquiry & Contact Section */}
            <Contact />
          </>
        )}
      </main>

      {/* Global Shopping Bag Drawer Panel */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Footer Branding Block */}
      <Footer />
    </div>
  );
}
