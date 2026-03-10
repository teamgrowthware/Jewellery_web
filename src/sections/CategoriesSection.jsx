import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const CategoriesSection = () => {
  const categories = [
    {
      name: "Rings",
      image: "/assets/ring_diamond.png",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      rowSpan: "row-span-1 md:row-span-2"
    },
    {
      name: "Necklaces",
      image: "/assets/necklace_sapphire.png",
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
      rowSpan: "row-span-1"
    },
    {
      name: "Bracelets",
      image: "/assets/emerald_bracelet.png",
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
      rowSpan: "row-span-1"
    },
    {
      name: "Earrings",
      image: "/assets/ruby_earrings.png",
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
      rowSpan: "row-span-1"
    },
    {
      name: "Wedding Collection",
      image: "/assets/pearl_bracelet.png",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      rowSpan: "row-span-1"
    },
    {
      name: "Luxury Watches",
      image: "/assets/hero_jewelry.png",
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
      rowSpan: "row-span-1"
    }
  ];

  return (
    <section id="categories" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading
          title="Curated Categories"
          subtitle="Explore our collections designed to elevate every occasion."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 md:grid-rows-3 gap-4 lg:gap-6 h-auto md:h-[800px]">
          {categories.map((category, index) => (
            <motion.a
              href="#collection"
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-md cursor-pointer ${category.colSpan} ${category.rowSpan} h-64 md:h-auto`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent transition-opacity duration-300"></div>

              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors duration-300">
                  {category.name}
                </h3>
                <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
