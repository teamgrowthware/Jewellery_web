import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const { wishlistCount, toggleWishlistDrawer } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collection', href: '#collection' },
    { name: 'Categories', href: '#categories' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg py-4 border-b border-gray-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold tracking-wider text-white">
            AURELIA<span className="text-gold">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center cursor-pointer">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest hover:text-gold transition-colors text-white/90 font-sans"
              >
                {link.name}
              </a>
            ))}

            {/* Desktop Actions */}
            <div className="flex items-center space-x-2 ml-4">
              {/* Wishlist Button */}
              <button
                onClick={toggleWishlistDrawer}
                className="relative text-white hover:text-gold transition-colors p-2 cursor-pointer"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-0 right-0 bg-gold text-black text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full leading-none transform translate-x-1/4 -translate-y-1/4">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Button */}
              <button
                onClick={toggleCart}
                className="relative text-white hover:text-gold transition-colors p-2 cursor-pointer"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-gold text-black text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full leading-none transform translate-x-1/4 -translate-y-1/4">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle & Actions */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleWishlistDrawer}
              className="relative text-white hover:text-gold transition-colors cursor-pointer"
            >
              <Heart className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-gold text-black text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full leading-none transform translate-x-1/4 -translate-y-1/4">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button
              onClick={toggleCart}
              className="relative text-white hover:text-gold transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-gold text-black text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full leading-none transform translate-x-1/4 -translate-y-1/4">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className="text-white hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark border-t border-gray-800 shadow-xl">
          <div className="flex flex-col py-6 px-6 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-gold uppercase tracking-widest text-sm font-sans"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
