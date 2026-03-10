import React from 'react';
import { motion } from 'framer-motion';

const NewsletterSection = () => {
  return (
    <section className="py-24 bg-dark border-t border-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#050505] border border-gray-800 p-12 md:p-16 text-center rounded-lg relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Join The Inner Circle</h2>
            <p className="text-gray-400 font-sans mb-10 max-w-lg mx-auto">
              Subscribe to receive exclusive access to new collections, private viewings, and personalized styling advice.
            </p>

            <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent border-b border-gray-700 text-white px-4 py-3 font-sans focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-gray-600 focus:ring-0"
                required
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-light text-dark font-sans font-semibold uppercase tracking-wider text-sm px-8 py-3 transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
