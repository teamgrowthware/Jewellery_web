import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Eleanor Vance",
      role: "Verified Buyer",
      content: "The craftsmanship of my engagement ring is simply unparalleled. Aurelia's team guided my fiancé perfectly, and the result is a piece that takes my breath away every single day.",
      rating: 5
    },
    {
      id: 2,
      name: "James Sterling",
      role: "Collector",
      content: "As someone who appreciates fine horology and jewelry, Aurelia's attention to detail stands out. Their custom design process was seamless, resulting in a masterpiece I'm proud to wear.",
      rating: 5
    },
    {
      id: 3,
      name: "Sophia Martinez",
      role: "Verified Buyer",
      content: "I purchased the Sapphire Tear Necklace for my mother's 60th birthday. The unboxing experience was as luxurious as the necklace itself. She was moved to tears.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <SectionHeading
          title="Client Stories"
          subtitle="Read what distinguished clients have to say about their experience with our creations."
        />

        <div className="mt-16 relative">
          <div className="flex justify-center items-center">

            <button
              onClick={prevTestimonial}
              className="absolute left-0 md:-left-12 z-10 text-gray-500 hover:text-gold transition-colors"
            >
              <ChevronLeft size={40} strokeWidth={1} />
            </button>

            <div className="w-full max-w-2xl overflow-hidden px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-6 space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="text-gold fill-gold" size={20} />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-3xl font-serif text-white/90 leading-snug mb-8 relative">
                    <span className="absolute -top-6 -left-4 text-5xl text-gold/20 font-serif">"</span>
                    {testimonials[currentIndex].content}
                    <span className="absolute -bottom-8 -right-4 text-5xl text-gold/20 font-serif">"</span>
                  </blockquote>

                  <div>
                    <p className="text-white font-sans font-medium uppercase tracking-widest text-sm">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gold mt-1 text-xs font-sans uppercase tracking-widest">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 md:-right-12 z-10 text-gray-500 hover:text-gold transition-colors"
            >
              <ChevronRight size={40} strokeWidth={1} />
            </button>

          </div>

          <div className="flex justify-center mt-12 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-gold w-8' : 'bg-gray-700 hover:bg-gray-500'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
