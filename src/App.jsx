import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import HeroSection from './sections/HeroSection';
import FeaturedCollection from './sections/FeaturedCollection';
import AboutSection from './sections/AboutSection';
import CategoriesSection from './sections/CategoriesSection';
import GallerySection from './sections/GallerySection';
import TestimonialsSection from './sections/TestimonialsSection';
import NewsletterSection from './sections/NewsletterSection';
import Footer from './components/Footer';

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <div className="min-h-screen bg-dark selection:bg-gold selection:text-dark">
          <Navbar />
          <CartDrawer />
          <WishlistDrawer />

          <main>
            <HeroSection />
            <FeaturedCollection />
            <AboutSection />
            <CategoriesSection />
            <GallerySection />
            <TestimonialsSection />
            <NewsletterSection />
          </main>

          <Footer />
        </div>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
