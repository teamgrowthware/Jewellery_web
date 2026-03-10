import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductCard = ({ id, image, name, description, price }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const inWishlist = isInWishlist(id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({ id, image, name, description, price });
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist({ id, image, name, description, price });
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group cursor-pointer bg-dark-light rounded-lg overflow-hidden border border-gray-800 hover:border-gold/50 transition-colors duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
    >
      <div className="relative h-72 md:h-80 overflow-hidden bg-gray-900">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300 pointer-events-none" />

        {/* Top actions container */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {/* Wishlist Toggle Button */}
          <button
            onClick={handleToggleWishlist}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 ${inWishlist ? 'bg-gold text-white' : 'bg-dark/80 text-gray-300 hover:text-gold'
              }`}
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={`w-4 h-4 transition-colors ${inWishlist ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gold/90 backdrop-blur-sm text-black hover:bg-white hover:text-black font-semibold text-xs px-6 py-2.5 rounded-full uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)] translate-y-4 group-hover:translate-y-0"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold transition-colors">{name}</h3>
        <p className="text-gray-400 text-sm mb-3 font-sans line-clamp-2">{description}</p>
        <p className="text-gold font-semibold tracking-wide">{price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
