import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl md:text-5xl font-serif font-semibold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-16 bg-gold mt-6 ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};

export default SectionHeading;
