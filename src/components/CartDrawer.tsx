import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, ShoppingBag, Trash2, ArrowRight, MessageCircle, Check, Truck } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, newQty: number) => void;
  onRemoveItem: (productId: string) => void;
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
}) => {
  if (!isOpen) return null;

  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = couponApplied ? Math.round(subtotal * 0.10) : 0;
  const freeShippingThreshold = 499;
  const shippingFee = subtotal >= freeShippingThreshold || cartItems.length === 0 ? 0 : 60;
  const finalTotal = subtotal - discountAmount + shippingFee;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'ECO10') {
      setCouponApplied(true);
    } else {
      alert('Invalid coupon code. Try ECO10 for 10% off!');
    }
  };

  const generateWhatsAppCartLink = () => {
    let orderText = `Hello Bikalpa! I would like to place an order from your website:\n\n*Order Items*:\n`;
    cartItems.forEach((item, index) => {
      orderText += `${index + 1}. ${item.product.name} (x${item.quantity}) - ₹${item.product.price * item.quantity}\n`;
    });
    orderText += `\n*Subtotal*: ₹${subtotal}`;
    if (couponApplied) {
      orderText += `\n*Discount (10% ECO10)*: -₹${discountAmount}`;
    }
    orderText += `\n*Shipping*: ${shippingFee === 0 ? 'FREE' : '₹' + shippingFee}`;
    orderText += `\n*Total Payable*: ₹${finalTotal}`;
    orderText += `\n\nPlease send payment details and delivery timeline. Thank you!`;

    return `https://wa.me/919864012345?text=${encodeURIComponent(orderText)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#1C3818]/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-[#F9F7F2] h-full shadow-2xl flex flex-col justify-between border-l border-[#E3DEC3] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#EFECE1] border-b border-[#E3DEC3] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#2D5A27]" />
            <h3 className="font-serif text-lg font-bold text-[#1C3818]">Your Shopping Bag</h3>
            <span className="bg-[#2D5A27] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#6B7262] hover:bg-[#E3DEC3] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#2D5A27] text-white text-xs px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-[#A3C997]" />
            {subtotal >= freeShippingThreshold ? (
              <span className="font-bold text-[#A3C997]">🎉 You qualify for FREE Shipping!</span>
            ) : (
              <span>Add ₹{freeShippingThreshold - subtotal} more for Free Shipping</span>
            )}
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div 
                key={item.product.id}
                className="p-3 bg-white rounded-2xl border border-[#DFDAA5] shadow-sm flex items-center gap-3"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded-xl border border-[#E3DEC3]"
                  referrerPolicy="no-referrer"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-xs text-[#1C3818] truncate">{item.product.name}</h4>
                  <p className="text-[11px] text-[#2D5A27] font-semibold mt-0.5">₹{item.product.price}</p>
                  
                  {/* Quantity Modifier */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-[#C2BDAA] rounded-lg bg-[#F9F7F2] overflow-hidden">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-0.5 text-xs font-bold text-[#2D5A27] hover:bg-[#EFECE1]"
                      >
                        -
                      </button>
                      <span className="px-2 py-0.5 text-xs font-bold text-[#1C3818]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs font-bold text-[#2D5A27] hover:bg-[#EFECE1]"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-1 text-[#7A8270] hover:text-[#D97736]"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="text-right font-bold text-xs text-[#1C3818]">
                  ₹{item.product.price * item.quantity}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-12 h-12 text-[#C2BDAA] mx-auto" />
              <h4 className="font-serif font-bold text-base text-[#1C3818]">Your bag is empty</h4>
              <p className="text-xs text-[#7A8270]">Explore our natural products and add eco items to your bag.</p>
            </div>
          )}
        </div>

        {/* Footer Summary & Actions */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-6 bg-[#EFECE1] border-t border-[#E3DEC3] space-y-4">
            
            {/* Coupon Code Form */}
            {!couponApplied ? (
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Coupon code (e.g. ECO10)"
                  className="flex-1 bg-white border border-[#C2BDAA] rounded-xl px-3 py-1.5 text-xs text-[#1C3818] uppercase placeholder-normal"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#2D5A27] text-white rounded-xl text-xs font-bold hover:bg-[#23481F]"
                >
                  Apply
                </button>
              </form>
            ) : (
              <div className="bg-[#A3C997]/30 text-[#1C3818] p-2 rounded-xl text-xs font-bold flex items-center justify-between">
                <span>🌱 Coupon ECO10 Applied (10% Off)</span>
                <button onClick={() => setCouponApplied(false)} className="text-[10px] underline text-[#D97736]">
                  Remove
                </button>
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#4A5240]">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-[#1C3818]">₹{subtotal}</span>
              </div>

              {couponApplied && (
                <div className="flex justify-between text-[#2D5A27]">
                  <span>Discount (10%):</span>
                  <span className="font-bold">-₹{discountAmount}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="font-bold text-[#1C3818]">
                  {shippingFee === 0 ? <span className="text-[#2D5A27]">FREE</span> : '₹' + shippingFee}
                </span>
              </div>

              <div className="flex justify-between text-sm font-bold text-[#1C3818] border-t border-[#C2BDAA] pt-2">
                <span>Total Payable:</span>
                <span className="text-[#2D5A27] text-base font-serif">₹{finalTotal}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="w-full py-3 rounded-full bg-[#2D5A27] text-white font-bold text-xs hover:bg-[#23481F] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 text-[#A3C997]" />
              </button>

              <a
                href={generateWhatsAppCartLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order Bag via WhatsApp</span>
              </a>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
