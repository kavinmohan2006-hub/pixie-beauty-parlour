import React from 'react';
import { Tag } from 'lucide-react';

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

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 text-center shadow-sm border border-pink-100 max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Tag size={32} className="text-pink-300" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No Offers Currently Available</h2>
          <p className="text-gray-500">
            Check back soon for special festival combos and discount packages!
          </p>
        </div>
      </div>
    </div>
  );
};
