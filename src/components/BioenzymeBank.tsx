import React, { useState } from 'react';
import { Droplet, Calculator, Check, ArrowRight, Info, HelpCircle, MessageCircle, HeartHandshake } from 'lucide-react';

interface BioenzymeBankProps {
  onOpenWhatsAppQuery: () => void;
}

export const BioenzymeBank: React.FC<BioenzymeBankProps> = ({ onOpenWhatsAppQuery }) => {
  // Calculator state
  const [familyMembers, setFamilyMembers] = useState(4);
  const [weeklyScrapsKg, setWeeklyScrapsKg] = useState(1.5);

  // Calculations:
  // 1.5 kg scraps per week = ~6 kg scraps/month
  // Fermentation ratio 1:3:10 -> 3 parts scrap to 10 parts water -> yield = ~3.3x scrap weight in liters = ~20 liters/month
  const monthlyLiters = Math.round(weeklyScrapsKg * 4 * 3.3);
  const annualPlasticBottlesSaved = Math.round(monthlyLiters * 12);
  const annualMoneySavedRupees = Math.round(monthlyLiters * 12 * 45); // vs chemical cleaners
  const annualCleanWaterProtectedLiters = monthlyLiters * 12 * 100;

  return (
    <section id="bioenzyme" className="py-12 md:py-20 bg-gradient-to-b from-[#F9F7F2] via-[#EFECE1]/60 to-[#F9F7F2] border-t border-b border-[#E3DEC3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2D5A27] text-[#F9F7F2] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Droplet className="w-3.5 h-3.5 text-[#A3C997]" />
            <span>Guwahati Eco Initiative</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C3818] tracking-tight">
            The Bikalpa Bioenzyme Bank
          </h2>
          <p className="text-sm text-[#4A5240] mt-2 leading-relaxed">
            Transforming everyday kitchen fruit peels into 100% natural, chemical-free multipurpose cleaning fluid. Safe for babies, pets, waterways, and soil.
          </p>
        </div>

        {/* Feature Grid: What is Bioenzyme & Why it matters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-[#DFDAA5] shadow-lg">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-[#EFECE1]">
              <img
                src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&q=80&w=800"
                alt="Bioenzyme Bank Fermentation"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#2D5A27] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                100% Non-Toxic
              </div>
            </div>

            <h3 className="font-serif text-xl font-bold text-[#1C3818] mb-2">
              Why Switch to Citrus Bioenzyme?
            </h3>

            <ul className="space-y-2 text-xs text-[#4A5240]">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#2D5A27] shrink-0 mt-0.5" />
                <span><strong className="text-[#1C3818]">Zero Chemical Fumes:</strong> No bleach, synthetic fragrances, or ammonia to irritate lungs.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#2D5A27] shrink-0 mt-0.5" />
                <span><strong className="text-[#1C3818]">Replaces 10+ Cleaners:</strong> Floor cleaner, dishwash, glass spray, toilet cleaner & plant tonic.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#2D5A27] shrink-0 mt-0.5" />
                <span><strong className="text-[#1C3818]">Heals Rivers & Soil:</strong> Wastewater nourishes drain microbes and soil structure instead of polluting rivers.</span>
              </li>
            </ul>
          </div>

          {/* Interactive Calculator Card */}
          <div className="lg:col-span-7 bg-[#2D5A27] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-[#3C6E3D]">
            <div className="flex items-center justify-between mb-6 border-b border-[#3C6E3D] pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#A3C997]" />
                <h3 className="font-serif text-xl font-bold">Interactive Bioenzyme Calculator</h3>
              </div>
              <span className="text-[10px] font-bold bg-[#3C6E3D] text-[#A3C997] px-2.5 py-1 rounded-full uppercase tracking-wider">
                Calculate Impact
              </span>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-xs font-semibold text-[#A3C997] mb-2">
                  Household Family Size: <span className="text-white font-bold">{familyMembers} persons</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={familyMembers}
                  onChange={(e) => setFamilyMembers(Number(e.target.value))}
                  className="w-full accent-[#A3C997] cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A3C997] mb-2">
                  Weekly Citrus Peels (kg): <span className="text-white font-bold">{weeklyScrapsKg} kg</span>
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="5"
                  step="0.5"
                  value={weeklyScrapsKg}
                  onChange={(e) => setWeeklyScrapsKg(Number(e.target.value))}
                  className="w-full accent-[#A3C997] cursor-pointer"
                />
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#23481F] p-4 rounded-2xl border border-[#3C6E3D] text-center mb-6">
              <div className="p-2">
                <div className="text-2xl font-serif font-bold text-[#A3C997]">{monthlyLiters} L</div>
                <div className="text-[10px] text-[#E5E0C9] mt-0.5">Bioenzyme / month</div>
              </div>

              <div className="p-2">
                <div className="text-2xl font-serif font-bold text-[#D97736]">{annualPlasticBottlesSaved}</div>
                <div className="text-[10px] text-[#E5E0C9] mt-0.5">Plastic bottles saved/yr</div>
              </div>

              <div className="p-2">
                <div className="text-2xl font-serif font-bold text-[#A3C997]">₹{annualMoneySavedRupees}</div>
                <div className="text-[10px] text-[#E5E0C9] mt-0.5">Rupees saved/yr</div>
              </div>

              <div className="p-2">
                <div className="text-2xl font-serif font-bold text-white">{(annualCleanWaterProtectedLiters / 1000).toFixed(0)}k L</div>
                <div className="text-[10px] text-[#E5E0C9] mt-0.5">Clean water saved</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <p className="text-xs text-[#A3C997] text-center sm:text-left">
                Want to donate your kitchen peels or collect fresh bioenzyme in Guwahati?
              </p>
              <button
                onClick={onOpenWhatsAppQuery}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Bioenzyme Bank</span>
              </button>
            </div>
          </div>

        </div>

        {/* DIY Fermentation Rule Infographic */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DFDAA5] shadow-sm">
          <h3 className="font-serif text-xl font-bold text-[#1C3818] text-center mb-6">
            The Golden Rule 1 : 3 : 10 Fermentation Formula
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-[#F9F7F2] border border-[#E3DEC3]">
              <div className="w-10 h-10 rounded-full bg-[#D97736]/20 text-[#D97736] font-bold text-lg flex items-center justify-center mx-auto mb-2">
                1
              </div>
              <h4 className="font-bold text-xs text-[#1C3818]">1 Part Jaggery</h4>
              <p className="text-[11px] text-[#6B7262] mt-1">Unrefined dark jaggery acts as the microbial fuel.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F9F7F2] border border-[#E3DEC3]">
              <div className="w-10 h-10 rounded-full bg-[#2D5A27]/20 text-[#2D5A27] font-bold text-lg flex items-center justify-center mx-auto mb-2">
                3
              </div>
              <h4 className="font-bold text-xs text-[#1C3818]">3 Parts Citrus Peels</h4>
              <p className="text-[11px] text-[#6B7262] mt-1">Fresh orange, sweet lime, lemon, or pineapple peels.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F9F7F2] border border-[#E3DEC3]">
              <div className="w-10 h-10 rounded-full bg-[#A3C997]/40 text-[#2D5A27] font-bold text-lg flex items-center justify-center mx-auto mb-2">
                10
              </div>
              <h4 className="font-bold text-xs text-[#1C3818]">10 Parts Water</h4>
              <p className="text-[11px] text-[#6B7262] mt-1">Clean water inside an airtight plastic container.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#2D5A27] text-white">
              <div className="w-10 h-10 rounded-full bg-white/20 text-[#A3C997] font-bold text-lg flex items-center justify-center mx-auto mb-2">
                90
              </div>
              <h4 className="font-bold text-xs text-white">90 Days Ferment</h4>
              <p className="text-[11px] text-[#E5E0C9] mt-1">Release gas daily during month 1. Filter and use!</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
