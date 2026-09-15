import React from 'react';
import { Tag } from 'lucide-react';
import { BUSINESS } from '../data/contact';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const OffersPage: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div className="pt-28 pb-20 bg-pink-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow-pink mb-4 inline-flex">✧ Special Offers ✧</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0f0f2d', fontFamily: 'var(--font-display)' }}>
            Exclusive <span className="pink-text">Packages & Combos</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Pamper yourself with our specially curated combo packages designed to give you the best value for your beauty treatments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Offer Card 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-pink-500/5 border border-pink-100 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/10">
            <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
              <Tag size={28} className="text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#0f0f2d', fontFamily: 'var(--font-display)' }}>Bridal Glow Combo</h3>
            <p className="text-gray-500 mb-6 flex-grow">Complete facial, premium bleach, threading, and classic pedicure for the perfect bridal glow.</p>
            <div className="pt-6 border-t border-gray-100 flex justify-between items-end">
              <div>
                <span className="block text-sm text-gray-400 line-through mb-1">₹1,500</span>
                <span className="text-3xl font-bold text-pink-600">₹999</span>
              </div>
              <a href={`https://wa.me/${BUSINESS.whatsapp}?text=I am interested in the Bridal Glow Combo Offer`} className="btn-primary px-6 py-2 rounded-full text-white font-medium">Book Now</a>
            </div>
          </div>

          {/* Offer Card 2 */}
          <div className="bg-gradient-to-br from-pink-600 to-purple-800 rounded-3xl p-8 shadow-xl shadow-pink-500/20 border border-pink-100 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 font-bold text-xs px-3 py-1 rounded-bl-xl">POPULAR</div>
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Tag size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'var(--font-display)' }}>Hair Spa & Cut</h3>
            <p className="text-white/80 mb-6 flex-grow">Rejuvenating L'Oreal Hair Spa paired with a stylish advanced haircut and blow-dry.</p>
            <div className="pt-6 border-t border-white/20 flex justify-between items-end">
              <div>
                <span className="block text-sm text-white/60 line-through mb-1">₹1,200</span>
                <span className="text-3xl font-bold text-white">₹799</span>
              </div>
              <a href={`https://wa.me/${BUSINESS.whatsapp}?text=I am interested in the Hair Spa & Cut Offer`} className="bg-white text-pink-600 px-6 py-2 rounded-full font-bold hover:bg-gray-50 transition-colors">Book Now</a>
            </div>
          </div>

          {/* Offer Card 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-pink-500/5 border border-pink-100 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/10">
            <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
              <Tag size={28} className="text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#0f0f2d', fontFamily: 'var(--font-display)' }}>Mani-Pedi Special</h3>
            <p className="text-gray-500 mb-6 flex-grow">Relaxing spa manicure and pedicure with heel crack treatment and polish.</p>
            <div className="pt-6 border-t border-gray-100 flex justify-between items-end">
              <div>
                <span className="block text-sm text-gray-400 line-through mb-1">₹800</span>
                <span className="text-3xl font-bold text-pink-600">₹499</span>
              </div>
              <a href={`https://wa.me/${BUSINESS.whatsapp}?text=I am interested in the Mani-Pedi Special Offer`} className="btn-primary px-6 py-2 rounded-full text-white font-medium">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
