import React, { useState } from 'react';
import { X, MessageCircle, Send, PhoneCall } from 'lucide-react';

interface QuickOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickOrderModal: React.FC<QuickOrderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [queryType, setQueryType] = useState('Bulk Order & Gift Hampers');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Bipasha & Bikalpa team!\n\n` +
      `• *Query Type*: ${queryType}\n` +
      `• *Name*: ${name || 'Inquirer'}\n` +
      `• *Message/Request*: ${message}\n\n` +
      `Please get back to me on WhatsApp. Thank you!`
    );
    window.open(`https://wa.me/919864012345?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C3818]/60 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-[#F9F7F2] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E3DEC3] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#EFECE1] hover:bg-[#E3DEC3] text-[#2D5A27]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold text-[#D97736] mb-1 uppercase tracking-wider">
          <MessageCircle className="w-4 h-4" />
          <span>Direct Connect</span>
        </div>

        <h3 className="font-serif text-xl font-bold text-[#1C3818] mb-1">
          Ask Bipasha & Bikalpa Team
        </h3>
        <p className="text-xs text-[#6B7262] mb-4">
          Send a direct query regarding custom eco gift hampers, bulk soap orders, bioenzyme bank, or home composting in Guwahati.
        </p>

        <form onSubmit={handleSendWhatsApp} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#1C3818] mb-1">Topic / Interest</label>
            <select
              value={queryType}
              onChange={(e) => setQueryType(e.target.value)}
              className="w-full bg-white border border-[#C2BDAA] rounded-xl px-3 py-2 text-xs text-[#1C3818] focus:outline-none focus:ring-1 focus:ring-[#2D5A27]"
            >
              <option>Bulk Order & Gift Hampers</option>
              <option>Bioenzyme Bank Collection</option>
              <option>Home Composting Workshop Query</option>
              <option>General Product Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1C3818] mb-1">Your Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ananya Das"
              className="w-full bg-white border border-[#C2BDAA] rounded-xl px-3 py-2 text-xs text-[#1C3818] focus:outline-none focus:ring-1 focus:ring-[#2D5A27]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1C3818] mb-1">Your Message or Query</label>
            <textarea
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what you are looking for..."
              className="w-full bg-white border border-[#C2BDAA] rounded-xl px-3 py-2 text-xs text-[#1C3818] focus:outline-none focus:ring-1 focus:ring-[#2D5A27]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#25D366] text-white font-bold text-xs hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Message on WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
