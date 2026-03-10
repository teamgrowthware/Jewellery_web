import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Load wishlist from local storage on initial render
  useEffect(() => {
    const savedWishlist = localStorage.getItem('luxury_wishlist');
    if (savedWishlist) {
      try {
        setWishlistItems(JSON.parse(savedWishlist));
      } catch (error) {
        console.error('Failed to parse wishlist data:', error);
      }
    }
  }, []);

  // Save wishlist to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('luxury_wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const toggleWishlist = (product) => {
    setWishlistItems(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id); // Remove if exists
      } else {
        return [...prev, product]; // Add if doesn't exist
      }
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
  };

  const clearWishlist = () => setWishlistItems([]);

  const toggleWishlistDrawer = () => setIsWishlistOpen(prev => !prev);

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const wishlistCount = wishlistItems.length;

  return (
    <WishlistContext.Provider value={{
      wishlistItems,
      toggleWishlist,
      removeFromWishlist,
      clearWishlist,
      isWishlistOpen,
      setIsWishlistOpen,
      toggleWishlistDrawer,
      isInWishlist,
      wishlistCount
    }}>
      {children}
    </WishlistContext.Provider>
  );
};
