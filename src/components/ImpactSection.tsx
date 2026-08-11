import React from 'react';
import { Heart, Users, Recycle, Award, Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/bikalpaData';

export const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-12 md:py-20 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E3DEC3] px-3.5 py-1 rounded-full text-xs font-bold text-[#2D5A27] uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#2D5A27]" />
            <span>Assam Sustainability Metrics</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C3818] tracking-tight">
            Our Environmental & Social Impact
          </h2>
          <p className="text-sm text-[#6B7262] mt-2">
            Every Bikalpa purchase and workshop ticket drives direct positive change for our rivers, soil, and local communities in Assam.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="bg-white p-6 rounded-3xl border border-[#DFDAA5] text-center shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#2D5A27]/10 text-[#2D5A27] flex items-center justify-center mx-auto mb-3 font-bold text-xl">
              15k+
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1C3818]">Plates & Cups Saved</h3>
            <p className="text-xs text-[#6B7262] mt-1">Single-use plastic items prevented through eco initiatives</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFDAA5] text-center shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#D97736]/10 text-[#D97736] flex items-center justify-center mx-auto mb-3 font-bold text-xl">
              10k L
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1C3818]">Bioenzyme Brewed</h3>
            <p className="text-xs text-[#6B7262] mt-1">Non-toxic citrus cleaner liquid replacing chemical house sprays</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFDAA5] text-center shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#2D5A27]/10 text-[#2D5A27] flex items-center justify-center mx-auto mb-3 font-bold text-xl">
              1,200+
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1C3818]">Home Composters</h3>
            <p className="text-xs text-[#6B7262] mt-1">Families actively composting kitchen waste across Guwahati</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFDAA5] text-center shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#A3C997]/30 text-[#1C3818] flex items-center justify-center mx-auto mb-3 font-bold text-xl">
              100%
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1C3818]">Social Inclusion</h3>
            <p className="text-xs text-[#6B7262] mt-1">Vocational crafting programs empowering speech & hearing impaired youth</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12">
          <h3 className="font-serif text-2xl font-bold text-[#1C3818] text-center mb-8">
            Loved by Conscious Citizens & Community Leaders
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div key={t.id} className="bg-white p-6 rounded-3xl border border-[#DFDAA5] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#D97736] mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D97736]" />
                    ))}
                  </div>
                  <p className="text-xs text-[#4A5240] italic leading-relaxed mb-6">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-[#E3DEC3] pt-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#DFDAA5]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-[#1C3818]">{t.name}</h4>
                    <p className="text-[11px] text-[#6B7262]">{t.role} • {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
