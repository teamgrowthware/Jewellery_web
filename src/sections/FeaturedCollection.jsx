import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';

const FeaturedCollection = () => {
  const products = [
    {
      id: 1,
      name: "Eternity Diamond Ring",
      description: "18k White Gold with a stunning 2-carat center diamond surrounded by brilliant-cut accents.",
      price: "$4,500",
      image: "/assets/ring_diamond.png"
    },
    {
      id: 2,
      name: "Sapphire Tear Necklace",
      description: "Deep ocean sapphire encased in delicate platinum filigree on an 18-inch chain.",
      price: "$3,200",
      image: "/assets/necklace_sapphire.png"
    },
    {
      id: 3,
      name: "Aurelia Pearl Bracelet",
      description: "Lustrous South Sea pearls alternating with rose gold beads and diamond spacers.",
      price: "$2,800",
      image: "/assets/pearl_bracelet.png"
    },
    {
      id: 4,
      name: "Vintage Ruby Earrings",
      description: "Heirloom-style ruby drop earrings set in oxidized 18k yellow gold.",
      price: "$5,100",
      image: "/assets/ruby_earrings.png"
    },
    {
      id: 5,
      name: "Classic Solitaire",
      description: "The quintessential engagement ring, featuring an internally flawless diamond.",
      price: "$8,900",
      image: "/assets/ring_diamond.png"
    },
    {
      id: 6,
      name: "Emerald Cut Tennis Bracelet",
      description: "A continuous line of emerald-cut diamonds totaling 10 carats in white gold.",
      price: "$12,000",
      image: "/assets/emerald_bracelet.png"
    }
  ];

  return (
    <section id="collection" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading
          title="Featured Collection"
          subtitle="Discover our most sought-after pieces, hand-selected for their exceptional brilliance and masterful craftsmanship."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#" className="inline-block border-b border-gold text-gold hover:text-white hover:border-white transition-colors duration-300 pb-1 font-sans uppercase tracking-widest text-sm">
            View Entire Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
