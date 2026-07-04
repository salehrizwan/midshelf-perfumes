import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, ShoppingCart, ShieldCheck, Award, Heart, Sparkles, 
  Check, Truck, RotateCcw, Plus, Minus, Info 
} from 'lucide-react';
import { Perfume } from '../types';

interface ProductDetailPageProps {
  perfume: Perfume;
  onBack: () => void;
  onAddToCart: (perfume: Perfume, quantity: number) => void;
  onBuyNow: (perfume: Perfume) => void;
  isAddedToCart: boolean;
}

export default function ProductDetailPage({ 
  perfume, 
  onBack, 
  onAddToCart, 
  onBuyNow,
  isAddedToCart 
}: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'notes' | 'shipping'>('details');
  const [showNotification, setShowNotification] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Scroll to top when page is mounted
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [perfume]);

  const handleAddToCartClick = () => {
    onAddToCart(perfume, quantity);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleQuantityChange = (type: 'inc' | 'dec') => {
    if (type === 'inc') {
      setQuantity(prev => prev + 1);
    } else if (type === 'dec' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="bg-luxury-cream min-h-screen pt-28 pb-20 relative" id="product-page-view">
      {/* Dynamic Toast Notification */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        showNotification ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}>
        <div className="bg-luxury-black text-luxury-white border border-luxury-brown/30 px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-luxury-brown/20 flex items-center justify-center text-luxury-beige">
            <Check className="w-4.5 h-4.5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-luxury-beige">Added to Boutique Bag</p>
            <p className="text-[11px] text-luxury-cream/70 font-light">{quantity}x {perfume.name} is ready for checkout.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Back Button */}
        <div className="mb-8">
          <button 
            onClick={onBack}
            className="group inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.2em] text-luxury-black/60 hover:text-luxury-brown transition-colors duration-300"
            id="back-to-collection-btn"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back To Collection</span>
          </button>
        </div>

        {/* Product Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 bg-luxury-white rounded-3xl border border-luxury-brown/15 p-6 sm:p-10 md:p-12 shadow-xl">
          
          {/* Left Block: Full Premium Image Display (With object-contain request honored) */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-luxury-cream/40 border border-luxury-brown/10 p-6 md:p-10 flex items-center justify-center group shadow-inner">
              
              {/* Product Image Stage: using object-contain so pictures appear fully without clipping */}
              <img
                src={perfume.image}
                alt={`${perfume.name} Premium Bottle View`}
                className="max-w-full max-h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                id="product-detail-page-image"
              />

              {/* Scent Class Tag Overlay */}
              <div className="absolute top-6 left-6 bg-luxury-black text-luxury-beige text-[10px] font-bold tracking-[0.25em] uppercase py-1.5 px-3.5 rounded-full border border-luxury-brown/20 shadow-md">
                {perfume.type}
              </div>

              {/* Wishlist Heart Button */}
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`absolute top-6 right-6 w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isLiked 
                    ? 'bg-red-50 border-red-200 text-red-500 shadow-md' 
                    : 'bg-luxury-white/80 backdrop-blur-sm border-luxury-brown/20 hover:border-luxury-brown text-luxury-black/70 hover:text-luxury-black'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>

              {/* Subtle gold inner frames */}
              <div className="absolute inset-4 border border-luxury-brown/5 rounded-xl pointer-events-none" />
            </div>

            {/* Quality Accolades Bar */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-luxury-cream/40 rounded-xl p-3 border border-luxury-brown/10 flex flex-col items-center">
                <Award className="w-5 h-5 text-luxury-brown mb-1" />
                <span className="text-[10px] font-bold text-luxury-black uppercase tracking-wider">Authentic</span>
                <span className="text-[9px] text-luxury-black/40 font-light">100% Genuine</span>
              </div>
              <div className="bg-luxury-cream/40 rounded-xl p-3 border border-luxury-brown/10 flex flex-col items-center">
                <Truck className="w-5 h-5 text-luxury-brown mb-1" />
                <span className="text-[10px] font-bold text-luxury-black uppercase tracking-wider">Expedited</span>
                <span className="text-[9px] text-luxury-black/40 font-light">Nationwide Delivery</span>
              </div>
              <div className="bg-luxury-cream/40 rounded-xl p-3 border border-luxury-brown/10 flex flex-col items-center">
                <RotateCcw className="w-5 h-5 text-luxury-brown mb-1" />
                <span className="text-[10px] font-bold text-luxury-black uppercase tracking-wider">Premium Care</span>
                <span className="text-[9px] text-luxury-black/40 font-light">Luxury Boxed</span>
              </div>
            </div>
          </div>

          {/* Right Block: Product Detailed Specification Panel */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              {/* Brand Watermark Indicator */}
              <div className="flex items-center space-x-2.5 mb-3">
                <span className="h-[1px] w-6 bg-luxury-brown" />
                <span className="text-xs font-semibold tracking-[0.3em] text-luxury-brown uppercase">
                  MIDSHELF PERFUMES
                </span>
              </div>

              {/* Product Title Headliner */}
              <h1 className="font-serif text-4xl sm:text-5xl font-light text-luxury-black tracking-tight mb-2">
                {perfume.name}
              </h1>

              {/* Scent tagline */}
              <p className="text-sm font-medium italic text-luxury-brown tracking-wide mb-6">
                {perfume.tagline}
              </p>

              {/* Amount & Volume Block */}
              <div className="bg-luxury-cream/50 border border-luxury-brown/10 rounded-2xl p-5 mb-8 flex items-center justify-between shadow-sm">
                <div>
                  <span className="text-[10px] font-bold text-luxury-black/40 uppercase tracking-widest block mb-0.5">
                    Boutique Investment
                  </span>
                  <span className="text-3xl font-serif text-luxury-black font-light tracking-wide">
                    {perfume.price}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-luxury-black/40 uppercase tracking-widest block mb-0.5">
                    Standard Volume
                  </span>
                  <span className="text-xs font-semibold text-luxury-brown tracking-wider">
                    {perfume.volume}
                  </span>
                </div>
              </div>

              {/* Interactive Tabs for Product Details & Specifications */}
              <div className="border-b border-luxury-brown/15 mb-6">
                <div className="flex space-x-6">
                  {['details', 'notes', 'shipping'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab as any)}
                      className={`pb-3 text-xs font-bold uppercase tracking-widest border-b-2 transition-all duration-300 relative ${
                        activeTab === tab 
                          ? 'border-luxury-brown text-luxury-black' 
                          : 'border-transparent text-luxury-black/40 hover:text-luxury-black/85'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Contents */}
              <div className="min-h-[160px] mb-8 text-left">
                {activeTab === 'details' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <p className="text-xs sm:text-sm text-luxury-black/75 font-light leading-relaxed">
                      {perfume.description}
                    </p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-3 border-t border-luxury-brown/10 text-xs">
                      <div className="flex justify-between border-b border-luxury-cream pb-1.5">
                        <span className="text-luxury-black/40">Classification:</span>
                        <span className="font-semibold text-luxury-black">{perfume.type}</span>
                      </div>
                      <div className="flex justify-between border-b border-luxury-cream pb-1.5">
                        <span className="text-luxury-black/40">Longevity:</span>
                        <span className="font-semibold text-luxury-black">{perfume.longevity}</span>
                      </div>
                      <div className="flex justify-between border-b border-luxury-cream pb-1.5">
                        <span className="text-luxury-black/40">Sillage projection:</span>
                        <span className="font-semibold text-luxury-black">{perfume.sillage}</span>
                      </div>
                      <div className="flex justify-between border-b border-luxury-cream pb-1.5">
                        <span className="text-luxury-black/40">Concentration:</span>
                        <span className="font-semibold text-luxury-black">High Oil Blend</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'notes' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <p className="text-xs text-luxury-black/60 font-light mb-4">
                      Every perfume unfolds in three sequential chapters. Here is the olfactory structure of this masterpiece:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="bg-luxury-cream/30 border border-luxury-brown/15 p-4 rounded-xl text-center">
                        <div className="w-8 h-8 rounded-full bg-luxury-brown/10 border border-luxury-brown/20 flex items-center justify-center mx-auto mb-2 text-luxury-brown">
                          <span className="text-xs font-bold">01</span>
                        </div>
                        <h4 className="text-[10px] font-bold tracking-widest text-luxury-black uppercase mb-1">Top Notes</h4>
                        <p className="text-[11px] text-luxury-black/75 font-medium leading-relaxed">{perfume.topNotes.join(', ')}</p>
                        <span className="text-[9px] text-luxury-black/40 font-light block mt-1">(First impression)</span>
                      </div>

                      <div className="bg-luxury-cream/30 border border-luxury-brown/15 p-4 rounded-xl text-center">
                        <div className="w-8 h-8 rounded-full bg-luxury-brown/10 border border-luxury-brown/20 flex items-center justify-center mx-auto mb-2 text-luxury-brown">
                          <span className="text-xs font-bold">02</span>
                        </div>
                        <h4 className="text-[10px] font-bold tracking-widest text-luxury-black uppercase mb-1">Heart Notes</h4>
                        <p className="text-[11px] text-luxury-black/75 font-medium leading-relaxed">{perfume.heartNotes.join(', ')}</p>
                        <span className="text-[9px] text-luxury-black/40 font-light block mt-1">(Core signature)</span>
                      </div>

                      <div className="bg-luxury-cream/30 border border-luxury-brown/15 p-4 rounded-xl text-center">
                        <div className="w-8 h-8 rounded-full bg-luxury-brown/10 border border-luxury-brown/20 flex items-center justify-center mx-auto mb-2 text-luxury-brown">
                          <span className="text-xs font-bold">03</span>
                        </div>
                        <h4 className="text-[10px] font-bold tracking-widest text-luxury-black uppercase mb-1">Base Notes</h4>
                        <p className="text-[11px] text-luxury-black/75 font-medium leading-relaxed">{perfume.baseNotes.join(', ')}</p>
                        <span className="text-[9px] text-luxury-black/40 font-light block mt-1">(Lasting trail)</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'shipping' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4 text-xs text-luxury-black/75 font-light leading-relaxed"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-luxury-brown/15 text-luxury-brown flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <div>
                        <p className="font-semibold text-luxury-black uppercase tracking-wider text-[10px]">Nationwide Insured Delivery</p>
                        <p className="text-luxury-black/60 mt-0.5">Free standard shipping with trace numbers. Dispatched in pristine custom boutique double-walled box inserts to secure the glass perfume bottle.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-luxury-brown/15 text-luxury-brown flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <div>
                        <p className="font-semibold text-luxury-black uppercase tracking-wider text-[10px]">Secure Direct Bank Transfer Verification</p>
                        <p className="text-luxury-black/60 mt-0.5">Our team verifies payments manually within minutes of your transfer. Instant digital PDF invoice will be generated and sent directly to your registered email.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Action Bar: Quantity selection, Add to Cart & Buy Now buttons */}
            <div className="border-t border-luxury-brown/10 pt-6 space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-luxury-black/40">
                  Select Quantity:
                </span>
                
                {/* Quantity adjuster */}
                <div className="inline-flex items-center border border-luxury-brown/30 bg-luxury-cream/30 rounded-lg p-1">
                  <button
                    onClick={() => handleQuantityChange('dec')}
                    className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-luxury-brown/10 text-luxury-black/70 hover:text-luxury-black transition-colors duration-200"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center text-xs font-bold text-luxury-black">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange('inc')}
                    className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-luxury-brown/10 text-luxury-black/70 hover:text-luxury-black transition-colors duration-200"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Add to Cart button */}
                <button
                  onClick={handleAddToCartClick}
                  className="w-full py-4 bg-transparent hover:bg-luxury-black/[0.03] text-luxury-black font-semibold text-xs tracking-widest uppercase rounded-sm border border-luxury-black hover:border-luxury-brown transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm"
                  id="add-to-cart-page-btn"
                >
                  <ShoppingCart className="w-4 h-4 text-luxury-brown" />
                  <span>{isAddedToCart ? 'Add Another' : 'Add to Cart'}</span>
                </button>

                {/* Buy Now button */}
                <button
                  onClick={() => onBuyNow(perfume)}
                  className="w-full py-4 bg-luxury-black hover:bg-luxury-brown text-luxury-white hover:text-luxury-black font-semibold text-xs tracking-widest uppercase rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 border border-luxury-black hover:border-luxury-brown flex items-center justify-center space-x-2"
                  id="buy-now-page-btn"
                >
                  <Sparkles className="w-4 h-4 text-luxury-beige" />
                  <span>Buy It Now</span>
                </button>
              </div>

              {/* Security watermark */}
              <div className="flex items-center justify-center space-x-2 pt-2 text-[10px] text-luxury-black/40">
                <ShieldCheck className="w-3.5 h-3.5 text-luxury-brown" />
                <span>Encrypted checkout session • Fully insured boutique courier dispatch</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
