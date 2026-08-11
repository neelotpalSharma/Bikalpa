import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductCatalog } from './components/ProductCatalog';
import { BioenzymeBank } from './components/BioenzymeBank';
import { WorkshopsSection } from './components/WorkshopsSection';
import { ImpactSection } from './components/ImpactSection';
import { FounderStory } from './components/FounderStory';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { QuickOrderModal } from './components/QuickOrderModal';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { Product, ProductCategory, CartItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('shop');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState<boolean>(false);

  // Cart Handlers
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.product.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#1C3818] font-sans selection:bg-[#A3C997] selection:text-[#1C3818] pb-16 lg:pb-0">
      
      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenWhatsAppQuery={() => setIsWhatsAppModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onExploreShop={() => handleNavigateSection('shop')}
          onNavigateSection={handleNavigateSection}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Product Catalog Shop */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onAddToCart={handleAddToCart}
        />

        {/* Bioenzyme Bank & Interactive Calculator */}
        <BioenzymeBank
          onOpenWhatsAppQuery={() => setIsWhatsAppModalOpen(true)}
        />

        {/* Workshops & Composting Training */}
        <WorkshopsSection />

        {/* Impact Metrics & Social Empowerment */}
        <ImpactSection />

        {/* Founder Story & Kenzen Ventures */}
        <FounderStory />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        setSelectedCategory={setSelectedCategory}
        onOpenWhatsAppQuery={() => setIsWhatsAppModalOpen(true)}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onClearCart={handleClearCart}
      />

      {/* Quick WhatsApp Inquiry Modal */}
      <QuickOrderModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />

      {/* Sticky Bottom Navigation for Mobile Accessibility */}
      <FloatingMobileBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

    </div>
  );
}
