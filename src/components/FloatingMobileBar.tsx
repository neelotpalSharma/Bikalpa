import React from 'react';
import { ShoppingBag, Droplet, Calendar } from 'lucide-react';

interface FloatingMobileBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({
  activeSection,
  setActiveSection,
  cartCount,
  onOpenCart,
}) => {
  const handleTabClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#F9F7F2]/95 backdrop-blur-md border-t border-[#E3DEC3] px-3 py-2 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1 text-center">
        <button
          onClick={() => handleTabClick('shop')}
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
            activeSection === 'shop' 
              ? 'text-[#2D5A27] bg-[#EFECE1] font-bold' 
              : 'text-[#6B7262] font-medium'
          }`}
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Shop</span>
        </button>

        <button
          onClick={() => handleTabClick('bioenzyme')}
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
            activeSection === 'bioenzyme' 
              ? 'text-[#2D5A27] bg-[#EFECE1] font-bold' 
              : 'text-[#6B7262] font-medium'
          }`}
        >
          <Droplet className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Bioenzyme</span>
        </button>

        <button
          onClick={() => handleTabClick('workshops')}
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
            activeSection === 'workshops' 
              ? 'text-[#2D5A27] bg-[#EFECE1] font-bold' 
              : 'text-[#6B7262] font-medium'
          }`}
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Events</span>
        </button>

        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center justify-center py-1 rounded-xl text-[#2D5A27] bg-[#2D5A27]/10 font-bold"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2.5 bg-[#D97736] text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] mt-0.5">Cart</span>
        </button>
      </div>
    </div>
  );
};
