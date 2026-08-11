import React, { useState } from 'react';
import { Leaf, Mail, MapPin, Phone, MessageCircle, Heart, ChevronDown, ChevronUp, Instagram, Facebook, Youtube } from 'lucide-react';
import { FAQS_DATA } from '../data/bikalpaData';
import { ProductCategory } from '../types';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  setSelectedCategory: (category: ProductCategory) => void;
  onOpenWhatsAppQuery: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  setSelectedCategory,
  onOpenWhatsAppQuery,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <footer className="bg-[#1C3818] text-[#F9F7F2] pt-12 pb-20 lg:pb-12 border-t border-[#2D5A27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQ Section */}
        <div className="mb-16 pb-12 border-b border-[#2D5A27]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] font-bold bg-[#2D5A27] text-[#A3C997] px-3 py-1 rounded-full uppercase tracking-wider">
              Frequently Asked Questions
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mt-2">
              Everything You Need to Know About Bikalpa
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#23481F] rounded-2xl border border-[#3C6E3D] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-3.5 text-left flex items-center justify-between text-xs font-bold text-white hover:text-[#A3C997]"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#A3C997] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#7A8270] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-xs text-[#E5E0C9] leading-relaxed border-t border-[#3C6E3D]/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#2D5A27] flex items-center justify-center text-white border border-[#3C6E3D]">
                <Leaf className="w-6 h-6 text-[#A3C997]" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight">BIKALPA</span>
                <p className="text-[10px] text-[#A3C997] font-semibold">Kenzen Ventures Private Limited</p>
              </div>
            </div>

            <p className="text-xs text-[#E5E0C9] leading-relaxed max-w-sm">
              Empowering sustainable, zero-waste living across Guwahati, Assam, and India. Natural botanical formulations, community bioenzyme bank, and home composting education.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#23481F] hover:bg-[#2D5A27] text-[#A3C997] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#23481F] hover:bg-[#2D5A27] text-[#A3C997] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#23481F] hover:bg-[#2D5A27] text-[#A3C997] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-[#E5E0C9]">
              <li>
                <button onClick={() => onNavigateSection('shop')} className="hover:text-[#A3C997] transition-colors">
                  Eco Natural Shop
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('bioenzyme')} className="hover:text-[#A3C997] transition-colors">
                  Bioenzyme Bank
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('workshops')} className="hover:text-[#A3C997] transition-colors">
                  Composting Workshops
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('impact')} className="hover:text-[#A3C997] transition-colors">
                  Our Impact Metrics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('about')} className="hover:text-[#A3C997] transition-colors">
                  About Bipasha Sarma
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">Contact & Headquarters</h4>
            
            <div className="space-y-2 text-xs text-[#E5E0C9]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D97736] shrink-0 mt-0.5" />
                <span>Bikalpa, Kenzen Ventures Pvt Ltd, Guwahati, Assam 781001, India</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#A3C997] shrink-0" />
                <a href="mailto:admin@bikalpa.co.in" className="hover:underline text-white">
                  admin@bikalpa.co.in
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenWhatsAppQuery}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#2D5A27] text-center text-xs text-[#7A8270] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Bikalpa • Kenzen Ventures Private Limited. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#D97736] fill-[#D97736]" />
            <span>for a Greener Assam & Earth</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
