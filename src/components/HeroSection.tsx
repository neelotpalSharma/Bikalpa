import React from 'react';
import { Leaf, ArrowRight, ShieldCheck, Droplet, Recycle, Award } from 'lucide-react';
import { ProductCategory } from '../types';

interface HeroSectionProps {
  onExploreShop: () => void;
  onNavigateSection: (sectionId: string) => void;
  setSelectedCategory: (category: ProductCategory) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreShop,
  onNavigateSection,
  setSelectedCategory,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F2EFE4] via-[#F9F7F2] to-[#F9F7F2] pt-6 pb-12 md:py-16 border-b border-[#E3DEC3]">
      {/* Abstract Botanical Background Flourishes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#E5E0C9]/40 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#A3C997]/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Impact Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 bg-[#E3DEC3]/80 border border-[#D5CFB1] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#2D5A27]">
              <Leaf className="w-3.5 h-3.5 text-[#2D5A27]" />
              <span>Founded by Bipasha Sarma • Guwahati, Assam</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C3818] leading-[1.15]">
              Small Steps. <br className="hidden sm:inline" />
              <span className="text-[#2D5A27] italic">Monumental</span> Change.
            </h1>

            {/* Subtitle / Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#4A5240] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Bikalpa brings you 100% toxin-free, sulfate-free natural skincare, home-crafted bioenzymes, and home composting workshops across Assam & India.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onExploreShop}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#2D5A27] text-white font-bold text-sm shadow-md shadow-[#2D5A27]/25 hover:bg-[#23481F] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Natural Shop</span>
                <ArrowRight className="w-4 h-4 text-[#A3C997] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigateSection('bioenzyme')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#EFECE1] hover:bg-[#E3DEC3] text-[#2D5A27] font-bold text-sm border border-[#C2BDAA] transition-all flex items-center justify-center gap-2"
              >
                <Droplet className="w-4 h-4 text-[#2D5A27]" />
                <span>Bioenzyme Bank</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-[#E3DEC3]/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#E3DEC3] flex items-center justify-center text-[#2D5A27]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1C3818]">100% Natural</h4>
                  <p className="text-[11px] text-[#6B7262]">Sulfate & Paraben Free</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#E3DEC3] flex items-center justify-center text-[#2D5A27]">
                  <Recycle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1C3818]">Zero Plastic</h4>
                  <p className="text-[11px] text-[#6B7262]">Guwahati Eco Initiative</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-[#E3DEC3] flex items-center justify-center text-[#2D5A27]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1C3818]">Kenzen Ventures</h4>
                  <p className="text-[11px] text-[#6B7262]">Empowering Youth</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-4 bg-[#EFECE1] border border-[#DFDAA5] shadow-xl overflow-hidden">
              
              {/* Main Banner Visual */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#2D5A27]/10">
                <img
                  src="https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&q=80&w=1000"
                  alt="Bikalpa Handcrafted Natural Soap & Bioenzymes"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C3818]/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#D97736] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Best Seller
                    </span>
                    <span className="bg-[#2D5A27] text-[#A3C997] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Guwahati Craft
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">Papaya & Turmeric Body Soap</h3>
                  <p className="text-xs text-[#E5E0C9] mt-0.5 line-clamp-1">
                    Cold-processed with wild Assam turmeric & fresh papaya pulp.
                  </p>
                </div>
              </div>

              {/* Floating Feature Cards */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                <button
                  onClick={() => onNavigateSection('bioenzyme')}
                  className="p-3 bg-white/90 hover:bg-white rounded-xl border border-[#D8D2BC] text-left transition-all hover:shadow-md group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <Droplet className="w-5 h-5 text-[#2D5A27]" />
                    <span className="text-[10px] text-[#2D5A27] font-bold group-hover:underline">Explore →</span>
                  </div>
                  <h4 className="text-xs font-bold text-[#1C3818]">Bioenzyme Bank</h4>
                  <p className="text-[10px] text-[#6B7262]">Kitchen peel cleaner bank</p>
                </button>

                <button
                  onClick={() => onNavigateSection('workshops')}
                  className="p-3 bg-white/90 hover:bg-white rounded-xl border border-[#D8D2BC] text-left transition-all hover:shadow-md group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <Leaf className="w-5 h-5 text-[#D97736]" />
                    <span className="text-[10px] text-[#D97736] font-bold group-hover:underline">Join →</span>
                  </div>
                  <h4 className="text-xs font-bold text-[#1C3818]">Composting 101</h4>
                  <p className="text-[10px] text-[#6B7262]">Home workshops & kit</p>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Category Shortcut Pills */}
        <div className="mt-10 pt-6 border-t border-[#E3DEC3]/80">
          <p className="text-xs font-bold uppercase tracking-wider text-[#6B7262] mb-3 text-center sm:text-left">
            Popular Product Categories
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {[
              { label: 'All Products', cat: 'All' as ProductCategory },
              { label: 'Skin Care', cat: 'Skin Care' as ProductCategory },
              { label: 'Hair Care', cat: 'Hair Care' as ProductCategory },
              { label: 'Home Care', cat: 'Home Care' as ProductCategory },
              { label: 'Oral Care', cat: 'Oral Care' as ProductCategory },
              { label: 'Sustainable Goods', cat: 'Sustainable Goods' as ProductCategory },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setSelectedCategory(item.cat);
                  onExploreShop();
                }}
                className="px-4 py-2 rounded-full text-xs font-semibold bg-[#EFECE1] hover:bg-[#2D5A27] hover:text-white text-[#2D5A27] border border-[#DFDAA5] transition-all shadow-sm"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
