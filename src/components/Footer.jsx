import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-gray-900 pt-20 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-3xl font-serif font-bold tracking-wider text-white mb-6 block hover:opacity-90 transition-opacity">
              AURELIA<span className="text-gold">.</span>
            </a>
            <p className="text-gray-400 max-w-sm mt-4 leading-relaxed font-sans">
              Crafting timeless luxury jewelry pieces that celebrate life's most precious moments.
              Discover elegance defined by meticulous artistry.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Collection', 'Gallery', 'About Us', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.split(' ')[0].toLowerCase()}`} className="text-gray-400 hover:text-gold transition-colors font-sans text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl mb-6 tracking-wide">Connect</h4>
            <div className="flex space-x-5 mb-8">
              <a href="#" className="text-gray-400 hover:text-gold transition-all hover:-translate-y-1"><Instagram size={22} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-all hover:-translate-y-1"><Facebook size={22} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-all hover:-translate-y-1"><Twitter size={22} /></a>
            </div>
            <div className="text-gray-400 text-sm font-sans space-y-2">
              <p>Email: concierge@aurelia.com</p>
              <p>Phone: +1 (800) LUX-JEWL</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-sans font-light">
          <p>&copy; {new Date().getFullYear()} Aurelia Jewelry. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0 flex">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
