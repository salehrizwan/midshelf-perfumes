import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, ShoppingBag, Plus, Minus, Trash2, ShieldCheck, 
  ArrowRight, Landmark, Receipt, Sparkles, Copy, Check 
} from 'lucide-react';
import { Perfume } from '../types';

interface CartItem {
  perfume: Perfume;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (perfumeId: string, delta: number) => void;
  onRemoveItem: (perfumeId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [checkoutStep, setCheckoutStep] = useState<'details' | 'success'>('details');
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    phone: '',
    address: '',
    deliveryMethod: 'free-shipping'
  });

  const subtotal = cartItems.reduce((acc, item) => {
    const priceNum = parseFloat(item.perfume.price.replace('$', ''));
    return acc + priceNum * item.quantity;
  }, 0);

  const deliveryFee = 0.00; // Nationwide Delivery is Free as requested
  const total = subtotal + deliveryFee;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutForm.name || !checkoutForm.phone || !checkoutForm.address) {
      alert('Please fill out all billing and delivery fields.');
      return;
    }
    setCheckoutStep('success');
  };

  const handleWhatsAppReceiptShare = () => {
    const itemsDescription = cartItems.map(item => `${item.quantity}x ${item.perfume.name}`).join(', ');
    const whatsappText = `Hello MIDSHELF PERFUMES! I have placed an order for ${itemsDescription}. Total amount: $${total.toFixed(2)}. Delivery Address: ${checkoutForm.address}. Buyer: ${checkoutForm.name}. I would like to share my Bank Transfer transaction screenshot for confirmation.`;
    const encodedText = encodeURIComponent(whatsappText);
    window.open(`https://wa.me/15557836473?text=${encodedText}`, '_blank');
  };

  return (
    <>
      {/* Sidebar Cart Panel Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop cover scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-luxury-black/60 backdrop-blur-sm"
              id="cart-backdrop"
            />

            <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="w-screen max-w-md bg-luxury-white border-l border-luxury-brown/20 flex flex-col justify-between shadow-2xl relative"
                id="cart-drawer-panel"
              >
                {/* Header section of cart */}
                <div className="p-6 border-b border-luxury-brown/15 bg-luxury-cream/40 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <ShoppingBag className="w-5 h-5 text-luxury-brown" />
                    <h3 className="font-serif text-xl font-medium text-luxury-black uppercase tracking-wide">
                      Boutique Bag
                    </h3>
                    <span className="bg-luxury-black text-luxury-beige text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 -mr-2 rounded-full hover:bg-luxury-black/5 text-luxury-black/60 hover:text-luxury-black transition-colors duration-200"
                    id="close-cart-btn"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body scroll area containing cart items */}
                <div className="flex-grow p-6 overflow-y-auto space-y-6">
                  {cartItems.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-20 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-luxury-cream border border-luxury-brown/15 flex items-center justify-center text-luxury-brown/60">
                        <ShoppingBag className="w-8 h-8" />
                      </div>
                      <h4 className="font-serif text-lg font-medium text-luxury-black">
                        Your Boutique Bag is Empty
                      </h4>
                      <p className="text-xs text-luxury-black/50 font-light max-w-[240px]">
                        Curation takes time. Select from our signature collections to find your fragrance companion.
                      </p>
                      <button
                        onClick={onClose}
                        className="px-6 py-2.5 border border-luxury-black text-luxury-black hover:bg-luxury-black hover:text-luxury-white font-semibold text-[10px] uppercase tracking-widest rounded-sm transition-all duration-300"
                      >
                        Explore Collection
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4" id="cart-items-list">
                      {cartItems.map((item) => (
                        <div
                          key={item.perfume.id}
                          className="flex items-center space-x-4 p-4 bg-luxury-cream/20 rounded-xl border border-luxury-brown/10 hover:border-luxury-brown/20 transition-all duration-300"
                        >
                          {/* Image Box (Using object-contain to make perfume visible fully) */}
                          <div className="w-20 h-20 bg-luxury-cream/50 rounded-lg p-2 border border-luxury-brown/5 flex items-center justify-center flex-shrink-0 overflow-hidden">
                            <img
                              src={item.perfume.image}
                              alt={item.perfume.name}
                              className="w-full h-full object-contain"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          {/* Info Block */}
                          <div className="flex-grow text-left">
                            <h4 className="font-serif text-base font-medium text-luxury-black leading-tight">
                              {item.perfume.name}
                            </h4>
                            <span className="text-[10px] text-luxury-black/40 block mt-0.5">
                              {item.perfume.volume}
                            </span>
                            <span className="text-xs font-semibold text-luxury-brown mt-1.5 block">
                              {item.perfume.price}
                            </span>

                            {/* Quantity Adjustment Bar */}
                            <div className="flex items-center justify-between mt-3">
                              <div className="inline-flex items-center bg-luxury-cream border border-luxury-brown/10 rounded-md p-0.5 scale-90 -ml-1">
                                <button
                                  onClick={() => onUpdateQuantity(item.perfume.id, -1)}
                                  className="w-6 h-6 flex items-center justify-center hover:bg-luxury-white text-luxury-black/70 rounded"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="w-6 text-center text-[11px] font-bold">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => onUpdateQuantity(item.perfume.id, 1)}
                                  className="w-6 h-6 flex items-center justify-center hover:bg-luxury-white text-luxury-black/70 rounded"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>

                              {/* Remove trash trigger */}
                              <button
                                onClick={() => onRemoveItem(item.perfume.id)}
                                className="p-1.5 text-luxury-black/40 hover:text-red-500 rounded transition-colors duration-200"
                                aria-label="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer totals & checkout trigger */}
                {cartItems.length > 0 && (
                  <div className="p-6 border-t border-luxury-brown/15 bg-luxury-cream/40 space-y-4">
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between text-luxury-black/60 font-light">
                        <span>Items Subtotal:</span>
                        <span className="font-semibold text-luxury-black">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-luxury-black/60 font-light">
                        <span>Nationwide Delivery:</span>
                        <span className="font-bold text-green-600 uppercase">FREE</span>
                      </div>
                      <hr className="border-luxury-brown/10" />
                      <div className="flex justify-between text-sm pt-1">
                        <span className="font-serif font-bold text-luxury-black">Estimated Total:</span>
                        <span className="font-serif font-bold text-luxury-brown text-base">${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setIsCheckoutOpen(true)}
                        className="w-full py-4 bg-luxury-black hover:bg-luxury-brown text-luxury-white hover:text-luxury-black font-semibold text-xs tracking-widest uppercase rounded-sm shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 border border-luxury-black hover:border-luxury-brown"
                        id="checkout-bag-btn"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Secure Checkout</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-center">
                      <button
                        onClick={onClearCart}
                        className="text-[10px] font-bold text-luxury-black/30 hover:text-luxury-brown uppercase tracking-widest transition-colors duration-200"
                      >
                        Empty Entire Bag
                      </button>
                    </div>
                  </div>
                )}

              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Checkout and Bank Wire details modal */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute inset-0 bg-luxury-black/80 backdrop-blur-md"
              id="checkout-backdrop"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-luxury-cream rounded-2xl overflow-hidden border border-luxury-brown/30 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
              id="checkout-modal"
            >
              <button
                onClick={() => {
                  setIsCheckoutOpen(false);
                  setCheckoutStep('details');
                }}
                className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-luxury-black/10 hover:bg-luxury-black/20 text-luxury-black transition-all duration-300"
              >
                <X className="w-4 h-4" />
              </button>

              <AnimatePresence mode="wait">
                {checkoutStep === 'details' ? (
                  <motion.form
                    key="step-details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handlePlaceOrder}
                    className="p-8 space-y-5"
                  >
                    <div className="text-center pb-3 border-b border-luxury-brown/15">
                      <Landmark className="w-8 h-8 text-luxury-brown mx-auto mb-2" />
                      <h3 className="font-serif text-2xl font-light text-luxury-black">
                        Secure Bank Transfer
                      </h3>
                      <p className="text-[10px] text-luxury-black/40 uppercase tracking-widest font-bold mt-1">
                        Boutique Checkout Process
                      </p>
                    </div>

                    {/* Simple summary */}
                    <div className="bg-luxury-white rounded-xl p-4 border border-luxury-brown/10 text-xs">
                      <div className="flex justify-between font-bold text-luxury-black mb-1.5">
                        <span>Total Checkout:</span>
                        <span className="text-luxury-brown font-serif text-sm">${total.toFixed(2)}</span>
                      </div>
                      <p className="text-[10px] text-luxury-black/50 leading-relaxed">
                        Manually verified. Nationwide delivery is insured & shipped free of charge.
                      </p>
                    </div>

                    <div className="space-y-4 text-left">
                      <div>
                        <label className="text-[10px] font-bold tracking-widest text-luxury-black uppercase block mb-1.5">
                          Delivery Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={checkoutForm.name}
                          onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full px-3 py-2.5 bg-luxury-white border border-luxury-brown/20 focus:border-luxury-brown focus:outline-none rounded-md text-xs transition-colors duration-300"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold tracking-widest text-luxury-black uppercase block mb-1.5">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={checkoutForm.phone}
                          onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                          placeholder="Include country code for receipt verification"
                          className="w-full px-3 py-2.5 bg-luxury-white border border-luxury-brown/20 focus:border-luxury-brown focus:outline-none rounded-md text-xs transition-colors duration-300"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold tracking-widest text-luxury-black uppercase block mb-1.5">
                          Full Shipping Address *
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={checkoutForm.address}
                          onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                          placeholder="Street, City, Postal Code, Country"
                          className="w-full px-3 py-2.5 bg-luxury-white border border-luxury-brown/20 focus:border-luxury-brown focus:outline-none rounded-md text-xs transition-colors duration-300 resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-luxury-black hover:bg-luxury-brown text-luxury-white hover:text-luxury-black font-semibold text-xs tracking-widest uppercase rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <Receipt className="w-4 h-4" />
                      <span>View Bank Details & Order</span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="step-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 space-y-6 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-luxury-brown/15 border border-luxury-brown/30 text-luxury-brown flex items-center justify-center mx-auto shadow-sm">
                      <Sparkles className="w-6 h-6" />
                    </div>

                    <div>
                      <h4 className="font-serif text-2xl font-light text-luxury-black">
                        Transfer Details
                      </h4>
                      <p className="text-[10px] text-luxury-black/40 uppercase tracking-widest font-bold mt-1">
                        Secure Account Wire Curation
                      </p>
                    </div>

                    <p className="text-xs text-luxury-black/60 font-light leading-relaxed max-w-sm mx-auto">
                      Please transfer the exact total of <span className="font-bold text-luxury-black">${total.toFixed(2)}</span> to the bank details below. Once done, click the button to share the screenshot on our WhatsApp VIP line.
                    </p>

                    {/* Bank Transfer Details Panel */}
                    <div className="bg-luxury-white border border-luxury-brown/25 rounded-2xl p-5 text-left space-y-4 shadow-sm max-w-sm mx-auto text-xs">
                      {/* Bank Name */}
                      <div className="flex justify-between items-center border-b border-luxury-brown/10 pb-2">
                        <div>
                          <span className="text-[10px] text-luxury-black/40 uppercase tracking-wider block">Boutique Bank</span>
                          <span className="font-semibold text-luxury-black text-sm">Mayfair Private Union</span>
                        </div>
                        <button
                          onClick={() => handleCopy('Mayfair Private Union', 'bank')}
                          className="p-1.5 hover:bg-luxury-cream rounded transition-colors duration-200"
                        >
                          {copiedText === 'bank' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-luxury-black/40" />}
                        </button>
                      </div>

                      {/* Account Title */}
                      <div className="flex justify-between items-center border-b border-luxury-brown/10 pb-2">
                        <div>
                          <span className="text-[10px] text-luxury-black/40 uppercase tracking-wider block">Account Title</span>
                          <span className="font-semibold text-luxury-black text-sm">MIDSHELF PERFUMES LTD</span>
                        </div>
                        <button
                          onClick={() => handleCopy('MIDSHELF PERFUMES LTD', 'title')}
                          className="p-1.5 hover:bg-luxury-cream rounded transition-colors duration-200"
                        >
                          {copiedText === 'title' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-luxury-black/40" />}
                        </button>
                      </div>

                      {/* Account Number */}
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-[10px] text-luxury-black/40 uppercase tracking-wider block">Account IBAN / Wire</span>
                          <span className="font-mono font-bold text-luxury-brown text-sm">GB82 MPUL 9382 1783 64</span>
                        </div>
                        <button
                          onClick={() => handleCopy('GB82 MPUL 9382 1783 64', 'iban')}
                          className="p-1.5 hover:bg-luxury-cream rounded transition-colors duration-200"
                        >
                          {copiedText === 'iban' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-luxury-black/40" />}
                        </button>
                      </div>
                    </div>

                    {/* WhatsApp Action button */}
                    <button
                      onClick={handleWhatsAppReceiptShare}
                      className="w-full py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs tracking-widest uppercase rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 shadow-md border border-[#25D366]"
                    >
                      <i className="fa-brands fa-whatsapp text-base" />
                      <span>Share Receipt on WhatsApp</span>
                    </button>

                    <button
                      onClick={() => {
                        setIsCheckoutOpen(false);
                        setCheckoutStep('details');
                        onClearCart();
                      }}
                      className="text-[11px] font-bold text-luxury-black/40 hover:text-luxury-black uppercase tracking-widest block pt-2 mx-auto"
                    >
                      I will transfer later • Back to shop
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
