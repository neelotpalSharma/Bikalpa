import React, { useState } from 'react';
import { Product } from '../types';
import { X, Star, ShoppingBag, MessageCircle, ShieldCheck, Check, Leaf, Truck, RefreshCw } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'ingredients' | 'howToUse'>('overview');
  const [addedSuccess, setAddedSuccess] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Bikalpa team! I would like to order:\n- *Product*: ${product.name}\n- *Quantity*: ${quantity}\n- *Price*: ₹${product.price * quantity}\n\nPlease confirm availability and payment details. Thank you!`
    );
    return `https://wa.me/919864012345?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C3818]/60 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-[#F9F7F2] rounded-3xl shadow-2xl border border-[#E3DEC3] overflow-hidden max-h-[90vh] flex flex-col md:flex-row my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#EFECE1]/80 hover:bg-[#E3DEC3] text-[#2D5A27] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Panel */}
        <div className="md:w-1/2 relative bg-[#EFECE1] min-h-[260px] md:min-h-full flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-2xl shadow-md max-h-[360px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-1.5">
            {product.isBestSeller && (
              <span className="bg-[#D97736] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Best Seller
              </span>
            )}
            <span className="bg-[#2D5A27] text-[#A3C997] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {product.category}
            </span>
          </div>
        </div>

        {/* Details Content Panel */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            
            {/* Title & Price */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7262] mb-1">
                <span>{product.weightVolume}</span>
                <span>•</span>
                <div className="flex items-center gap-1 text-[#D97736]">
                  <Star className="w-3.5 h-3.5 fill-[#D97736]" />
                  <span className="font-bold">{product.rating}</span>
                  <span className="text-[#7A8270]">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="font-serif text-2xl font-bold text-[#1C3818] leading-tight">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 mt-2">
                <span className="text-2xl font-bold text-[#2D5A27]">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#7A8270] line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                <span className="text-xs font-medium text-[#2D5A27] bg-[#A3C997]/20 px-2 py-0.5 rounded">
                  Inclusive of all taxes
                </span>
              </div>
            </div>

            {/* Eco Tags */}
            <div className="flex flex-wrap gap-1.5">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-[11px] font-medium bg-[#EFECE1] text-[#2D5A27] px-2.5 py-1 rounded-full border border-[#DFDAA5]"
                >
                  <Leaf className="w-3 h-3 text-[#2D5A27]" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-[#E3DEC3] flex gap-4 text-xs font-bold pt-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-2 transition-colors border-b-2 ${
                  activeTab === 'overview'
                    ? 'border-[#2D5A27] text-[#2D5A27]'
                    : 'border-transparent text-[#7A8270] hover:text-[#2D3325]'
                }`}
              >
                Overview
              </button>
              {product.ingredients && (
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`pb-2 transition-colors border-b-2 ${
                    activeTab === 'ingredients'
                      ? 'border-[#2D5A27] text-[#2D5A27]'
                      : 'border-transparent text-[#7A8270] hover:text-[#2D3325]'
                  }`}
                >
                  Ingredients
                </button>
              )}
              {product.howToUse && (
                <button
                  onClick={() => setActiveTab('howToUse')}
                  className={`pb-2 transition-colors border-b-2 ${
                    activeTab === 'howToUse'
                      ? 'border-[#2D5A27] text-[#2D5A27]'
                      : 'border-transparent text-[#7A8270] hover:text-[#2D3325]'
                  }`}
                >
                  How to Use
                </button>
              )}
            </div>

            {/* Tab Content */}
            <div className="text-xs text-[#4A5240] leading-relaxed min-h-[80px]">
              {activeTab === 'overview' && (
                <div>
                  <p className="mb-2">{product.summary}</p>
                  <p>{product.description}</p>
                </div>
              )}

              {activeTab === 'ingredients' && product.ingredients && (
                <ul className="space-y-1.5">
                  {product.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#2D5A27]" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === 'howToUse' && product.howToUse && (
                <p className="bg-[#EFECE1] p-3 rounded-xl border border-[#DFDAA5]">
                  💡 <span className="font-semibold text-[#1C3818]">Guide:</span> {product.howToUse}
                </p>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-bold text-[#1C3818]">Quantity:</span>
              <div className="flex items-center border border-[#C2BDAA] rounded-full bg-white overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-sm font-bold text-[#2D5A27] hover:bg-[#EFECE1]"
                >
                  -
                </button>
                <span className="px-3 py-1 text-xs font-bold text-[#1C3818]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-sm font-bold text-[#2D5A27] hover:bg-[#EFECE1]"
                >
                  +
                </button>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-6 border-t border-[#E3DEC3] mt-4">
            <button
              onClick={handleAddToCart}
              className={`w-full py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                addedSuccess
                  ? 'bg-[#25D366] text-white'
                  : 'bg-[#2D5A27] text-white hover:bg-[#23481F] shadow-md shadow-[#2D5A27]/20'
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-[#A3C997]" />
                  <span>Add to Cart • ₹{product.price * quantity}</span>
                </>
              )}
            </button>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full text-xs font-bold bg-[#EFECE1] text-[#128C7E] hover:bg-[#E3DEC3] border border-[#25D366]/40 flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Order via WhatsApp Direct</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
