import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Search, 
  Leaf, 
  Award, 
  MessageCircle, 
  Calendar, 
  UtensilsCrossed, 
  Droplet, 
  PhoneCall, 
  Heart 
} from 'lucide-react';
import { ProductCategory } from '../types';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  selectedCategory: ProductCategory;
  setSelectedCategory: (category: ProductCategory) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenWhatsAppQuery: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  activeSection,
  setActiveSection,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  onOpenWhatsAppQuery
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { id: 'shop', label: 'Eco Shop', icon: ShoppingBag },
    { id: 'bioenzyme', label: 'Bioenzyme Bank', icon: Droplet },
    { id: 'workshops', label: 'Workshops', icon: Calendar },
    { id: 'impact', label: 'Our Impact', icon: Award },
    { id: 'about', label: 'About Us', icon: Heart },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F9F7F2]/95 backdrop-blur-md border-b border-[#E3DEC3] transition-all">
      {/* Top Eco Announcement Bar */}
      <div className="bg-[#2D5A27] text-[#F9F7F2] text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2 overflow-hidden">
        <Leaf className="w-3.5 h-3.5 text-[#A3C997] animate-pulse" />
        <span>🌱 Free Eco Shipping on orders above ₹499 across India | 100% Zero-Waste Packaging</span>
        <span className="hidden md:inline-block bg-[#3C6E3D] px-2 py-0.5 rounded text-[10px] uppercase tracking-wider text-[#D8EADB]">
          Guwahati, Assam
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand Logo & Tagline */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNavClick('shop')}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#2D5A27] flex items-center justify-center text-white shadow-md shadow-[#2D5A27]/20 group-hover:scale-105 transition-transform">
                <Leaf className="w-6 h-6 text-[#A3C997]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-[#1C3818]">
                    BIKALPA
                  </span>
                  <span className="bg-[#E7E2CE] text-[#2D5A27] text-[10px] font-semibold px-1.5 py-0.5 rounded uppercase">
                    Eco
                  </span>
                </div>
                <p className="text-[10px] text-[#6B7262] font-medium tracking-wide hidden sm:block">
                  Small Steps. Monumental Change.
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#EFECE1] p-1.5 rounded-full border border-[#DFDAA5]/60">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isActive 
                      ? 'bg-[#2D5A27] text-white shadow-sm' 
                      : 'text-[#4A5240] hover:text-[#1C3818] hover:bg-[#E3DEC3]/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#A3C997]' : 'text-[#6B7262]'}`} />
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Search Toggle Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full text-[#3C4233] hover:bg-[#EFECE1] transition-colors"
              title="Search products & workshops"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Quick WhatsApp Inquiry */}
            <button
              onClick={onOpenWhatsAppQuery}
              className="hidden sm:flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] px-3 py-1.5 rounded-full text-xs font-semibold transition-colors border border-[#25D366]/30"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="hidden md:inline">Ask Bipasha</span>
            </button>

            {/* Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#2D5A27] text-white px-3.5 py-2 rounded-full text-xs font-bold shadow-sm hover:bg-[#23481F] transition-all"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#A3C997]" />
              <span className="hidden xs:inline">Cart</span>
              {cartCount > 0 && (
                <span className="bg-[#D97736] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center -ml-0.5 animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Navigation Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-[#2D5A27] bg-[#EFECE1] lg:hidden hover:bg-[#E3DEC3] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Expandable Search Input Bar */}
        {isSearchOpen && (
          <div className="py-3 border-t border-[#E3DEC3] transition-all">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8270]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search natural soaps, facepacks, bioenzyme, seed pens..."
                className="w-full pl-10 pr-10 py-2 bg-white border border-[#C2BDAA] rounded-full text-sm text-[#2D3325] placeholder-[#7A8270] focus:outline-none focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent shadow-inner"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#7A8270] hover:text-[#2D3325]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[108px] bg-[#1C3818]/60 backdrop-blur-sm z-50 flex justify-end">
          <div className="w-full max-w-xs bg-[#F9F7F2] h-full p-6 shadow-2xl flex flex-col justify-between border-l border-[#E3DEC3] overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E3DEC3] pb-4">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-[#2D5A27]" />
                  <span className="font-serif font-bold text-lg text-[#1C3818]">Menu Navigation</span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-full text-[#6B7262] hover:bg-[#EFECE1]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-[#2D5A27] text-white shadow-sm'
                          : 'text-[#3C4233] hover:bg-[#EFECE1]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${isActive ? 'text-[#A3C997]' : 'text-[#6B7262]'}`} />
                        <span>{link.label}</span>
                      </div>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#A3C997]"></span>}
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-[#E3DEC3] space-y-3">
                <div className="text-xs font-bold text-[#6B7262] uppercase tracking-wider">
                  Quick Connect
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenWhatsAppQuery();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-xl text-xs font-bold shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
                <a
                  href="mailto:admin@bikalpa.co.in"
                  className="w-full flex items-center justify-center gap-2 bg-[#EFECE1] text-[#2D5A27] py-2.5 rounded-xl text-xs font-bold border border-[#DFDAA5]"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>admin@bikalpa.co.in</span>
                </a>
              </div>
            </div>

            <div className="mt-8 text-center pt-4 border-t border-[#E3DEC3] text-[11px] text-[#7A8270]">
              <p className="font-semibold text-[#2D5A27]">Bikalpa • Kenzen Ventures Pvt Ltd</p>
              <p>Guwahati, Assam, India</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
