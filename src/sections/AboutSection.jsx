import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-dark overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden">
              <img
                src="/assets/necklace_sapphire.png"
                alt="Jewelry making process"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay"></div>
            </div>

            {/* Decorative Element */}
            <div className="hidden md:block absolute -bottom-8 -right-8 w-48 h-48 border border-gold rounded-full -z-10 animate-[spin_20s_linear_infinite]"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-gold font-sans uppercase tracking-[0.2em] text-sm mb-4">Our Heritage</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              A Legacy of <br />
              <span className="italic">Uncompromising</span> Quality
            </h2>

            <div className="space-y-6 text-gray-400 font-sans leading-relaxed">
              <p>
                Since our founding in 1985, Aurelia has stood at the pinnacle of luxury jewelry design.
                Our artisans combine century-old techniques with modern innovation to create pieces that
                transcend time.
              </p>
              <p>
                Every diamond is ethically sourced and rigorously inspected. Every setting is meticulously
                crafted to enhance the stone's natural brilliance. We believe that jewelry is not just an
                accessory, but a profound expression of love, achievement, and singular moments.
              </p>
              <p>
                When you wear Aurelia, you don't just wear gold and precious stones. You wear a masterpiece
                of devotion.
              </p>
            </div>

            <button className="mt-10 border border-gold text-gold hover:bg-gold hover:text-dark px-8 py-3 uppercase tracking-wider text-sm transition-all duration-300 font-semibold font-sans">
              Discover Our Story
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
