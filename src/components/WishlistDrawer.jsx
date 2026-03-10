import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const WishlistDrawer = () => {
  const { isWishlistOpen, toggleWishlistDrawer, wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  // Prevent background scrolling when drawer is open
  React.useEffect(() => {
    if (isWishlistOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isWishlistOpen]);

  // Handle move to cart
  const handleMoveToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleWishlistDrawer}
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
                <Heart className="w-5 h-5 fill-current" />
                Your Wishlist
              </h2>
              <button
                onClick={toggleWishlistDrawer}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Wishlist Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {wishlistItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                  <Heart className="w-16 h-16 opacity-20" />
                  <p className="font-sans text-lg">Your wishlist is empty.</p>
                  <button
                    onClick={toggleWishlistDrawer}
                    className="mt-4 px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-black transition-colors uppercase tracking-widest text-sm"
                  >
                    Explore Collection
                  </button>
                </div>
              ) : (
                wishlistItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-dark-light rounded-lg border border-gray-800 relative group">
                    <div className="w-24 h-24 rounded-md overflow-hidden bg-gray-900 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="pr-6">
                        <h3 className="font-serif text-white text-lg leading-tight">{item.name}</h3>
                        <p className="text-gold font-semibold mt-1">{item.price}</p>
                      </div>

                      <button
                        onClick={() => handleMoveToCart(item)}
                        className="mt-3 flex items-center justify-center gap-2 w-full py-2 bg-gray-800 text-white hover:bg-gold hover:text-black transition-colors text-sm uppercase tracking-wider font-semibold rounded-sm"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-4 right-4 text-gray-500 hover:text-red-400 transition-colors p-1 bg-dark-light rounded-full"
                      title="Remove from wishlist"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WishlistDrawer;
