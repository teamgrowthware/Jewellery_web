import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_jewelry.png"
          alt="Luxury Jewelry Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-sans font-medium"
        >
          Crafted with elegance and precision
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-10 leading-tight"
        >
          Timeless Jewelry <br /><span className="italic text-white/90">Collection</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 gap-y-4"
        >
          <a href="#collection" className="bg-gold hover:bg-gold-light text-dark font-sans font-semibold uppercase tracking-wider text-sm px-10 py-5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] block text-center">
            Explore Collection
          </a>
          <a href="#gallery" className="bg-transparent border border-white/50 hover:border-gold text-white hover:text-gold font-sans font-semibold uppercase tracking-wider text-sm px-10 py-5 transition-all duration-300 block text-center">
            View Gallery
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
