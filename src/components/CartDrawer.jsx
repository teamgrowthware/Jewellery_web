import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { isCartOpen, toggleCart, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  // Prevent background scrolling when cart is open
  React.useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isCartOpen]);

  // Format number as currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleCheckout = () => {
    // Replace this with your actual WhatsApp business phone number (include country code, omit +)
    const phoneNumber = "917974994741";

    let message = "Hello, I would like to place an order from Aurelia:\n\n";
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Qty: ${item.quantity} - ${item.price}\n`;
    });

    message += `\n*Total: ${formatCurrency(cartTotal)}*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[#0a0a0a] border-l border-gold/20 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h2 className="text-2xl font-serif text-gold flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Your Cart
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                  <ShoppingBag className="w-16 h-16 opacity-20" />
                  <p className="font-sans text-lg">Your cart is empty.</p>
                  <button
                    onClick={toggleCart}
                    className="mt-4 px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-black transition-colors uppercase tracking-widest text-sm"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-dark-light rounded-lg border border-gray-800">
                    <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-900 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif text-white text-lg leading-tight">{item.name}</h3>
                          <p className="text-gold font-semibold mt-1">{item.price}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-500 hover:text-red-400 transition-colors p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-gray-700 rounded-md overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="bg-gray-800 px-2 py-1 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1 bg-dark text-white text-sm w-10 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="bg-gray-800 px-2 py-1 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-dark border-t border-gray-800">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-400 font-sans">Subtotal</span>
                  <span className="text-2xl font-serif text-white">{formatCurrency(cartTotal)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-gold text-black font-semibold uppercase tracking-widest hover:bg-white transition-colors duration-300"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
