import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const GallerySection = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    "/assets/ring_diamond.png",
    "/assets/necklace_sapphire.png",
    "/assets/pearl_bracelet.png",
    "/assets/ruby_earrings.png",
    "/assets/emerald_bracelet.png",
    "/assets/hero_jewelry.png",
    "/assets/ring_diamond.png",
    "/assets/necklace_sapphire.png",
  ];

  return (
    <section id="gallery" className="py-24 bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading
          title="The Lookbook"
          subtitle="Immerse yourself in the world of Aurelia through our carefully curated visual gallery."
        />

        <div className="mt-16 columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
              className="break-inside-avoid relative group overflow-hidden rounded-md cursor-pointer"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-transparent transition-colors duration-300 z-10" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-[101]"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg}
                alt="Enlarged gallery view"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
