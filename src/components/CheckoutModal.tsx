import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, CheckCircle, Truck, CreditCard, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [city, setCity] = useState('Guwahati');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cod' | 'whatsapp'>('upi');

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingFee = subtotal >= 499 ? 0 : 60;
  const totalAmount = subtotal + shippingFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = 'BKL-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setOrderConfirmed(true);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C3818]/60 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-[#F9F7F2] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E3DEC3] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#EFECE1] hover:bg-[#E3DEC3] text-[#2D5A27]"
        >
          <X className="w-5 h-5" />
        </button>

        {orderConfirmed ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto text-2xl font-bold">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1C3818]">Order Confirmed!</h3>
            
            <div className="bg-white p-4 rounded-2xl border border-[#DFDAA5] text-xs text-[#4A5240] space-y-1">
              <p>Order Reference: <strong className="text-[#2D5A27]">{orderId}</strong></p>
              <p>Name: <strong>{fullName}</strong></p>
              <p>Shipping to: <strong>{address}, {city} - {pinCode}</strong></p>
              <p>Amount Paid / Payable: <strong className="text-[#2D5A27]">₹{totalAmount}</strong></p>
            </div>

            <p className="text-xs text-[#6B7262]">
              Thank you for choosing Bikalpa! A confirmation message has been logged for delivery tracking.
            </p>

            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#2D5A27] text-white font-bold text-xs rounded-full hover:bg-[#23481F]"
            >
              Back to Store
            </button>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="space-y-4">
            <div className="border-b border-[#E3DEC3] pb-3">
              <h3 className="font-serif text-xl font-bold text-[#1C3818]">Shipping & Checkout</h3>
              <p className="text-xs text-[#6B7262]">Complete your order details below</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#1C3818] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Bipasha Sarma"
                  className="w-full bg-white border border-[#C2BDAA] rounded-xl px-3 py-2 text-xs text-[#1C3818] focus:outline-none focus:ring-1 focus:ring-[#2D5A27]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C3818] mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 9876543210"
                  className="w-full bg-white border border-[#C2BDAA] rounded-xl px-3 py-2 text-xs text-[#1C3818] focus:outline-none focus:ring-1 focus:ring-[#2D5A27]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1C3818] mb-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-white border border-[#C2BDAA] rounded-xl px-3 py-2 text-xs text-[#1C3818] focus:outline-none focus:ring-1 focus:ring-[#2D5A27]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1C3818] mb-1">Delivery Address</label>
              <textarea
                required
                rows={2}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="House No, Street, Landmark..."
                className="w-full bg-white border border-[#C2BDAA] rounded-xl px-3 py-2 text-xs text-[#1C3818] focus:outline-none focus:ring-1 focus:ring-[#2D5A27]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#1C3818] mb-1">City / Town</label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-white border border-[#C2BDAA] rounded-xl px-3 py-2 text-xs text-[#1C3818] focus:outline-none focus:ring-1 focus:ring-[#2D5A27]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C3818] mb-1">PIN Code</label>
                <input
                  type="text"
                  required
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  placeholder="781001"
                  className="w-full bg-white border border-[#C2BDAA] rounded-xl px-3 py-2 text-xs text-[#1C3818] focus:outline-none focus:ring-1 focus:ring-[#2D5A27]"
                />
              </div>
            </div>

            {/* Payment Method Option */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-semibold text-[#1C3818]">Payment Option</label>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-2.5 rounded-xl border font-semibold transition-all ${
                    paymentMethod === 'upi'
                      ? 'bg-[#2D5A27] text-white border-[#2D5A27]'
                      : 'bg-white text-[#4A5240] border-[#C2BDAA]'
                  }`}
                >
                  GPay / UPI
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-2.5 rounded-xl border font-semibold transition-all ${
                    paymentMethod === 'cod'
                      ? 'bg-[#2D5A27] text-white border-[#2D5A27]'
                      : 'bg-white text-[#4A5240] border-[#C2BDAA]'
                  }`}
                >
                  Cash on Delivery
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('whatsapp')}
                  className={`p-2.5 rounded-xl border font-semibold transition-all ${
                    paymentMethod === 'whatsapp'
                      ? 'bg-[#25D366] text-white border-[#25D366]'
                      : 'bg-white text-[#4A5240] border-[#C2BDAA]'
                  }`}
                >
                  WhatsApp Pay
                </button>
              </div>
            </div>

            <div className="bg-[#EFECE1] p-3 rounded-xl border border-[#DFDAA5] flex justify-between items-center text-xs">
              <span className="font-bold text-[#1C3818]">Order Total ({cartItems.length} items):</span>
              <span className="text-lg font-bold font-serif text-[#2D5A27]">₹{totalAmount}</span>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#2D5A27] text-white font-bold text-xs hover:bg-[#23481F] shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Place Order • ₹{totalAmount}</span>
              <ArrowRight className="w-4 h-4 text-[#A3C997]" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
