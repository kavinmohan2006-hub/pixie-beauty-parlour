import React, { useState } from 'react';
import { ZoomIn, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/gallery';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Gallery: React.FC = () => {
  const [active, setActive] = useState('All');
  const [ref, isVisible]    = useScrollAnimation(0.1);

  const filtered = active === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.category === active);

  return (
    <section id="gallery" className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#fff8f5 0%,#fce4ec 50%,#fff8f5 100%)' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow-pink mb-4 inline-flex">✦ Our Gallery</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold" style={{ color: '#0f0f2d', fontFamily: 'var(--font-display)' }}>
            Our Work & <span className="pink-text">Transformations</span>
          </h2>
          <div className="divider-ornament mt-5 mb-5 max-w-xs mx-auto"><span className="text-gold text-lg">✦</span></div>
          <p className="text-gray-500 text-base max-w-xl mx-auto">A glimpse of the beautiful work done at Pixie Beauty Parlour. Real transformations, real confidence.</p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {GALLERY_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`px-4 sm:px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-250 ${
                active === cat
                  ? 'text-white shadow-lg shadow-primary/30 scale-105'
                  : 'bg-white text-gray-500 hover:text-primary border border-gray-100 hover:border-primary/20 hover:shadow-sm'
              }`}
              style={active === cat ? { background: 'linear-gradient(135deg,#e91e8c,#c2185b)' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="gallery-item relative rounded-2xl overflow-hidden break-inside-avoid cursor-zoom-in group"
              style={{
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                border: '1px solid rgba(255,255,255,0.6)',
                animationDelay: `${i * 40}ms`,
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div
                className="gallery-overlay absolute inset-0 flex flex-col items-center justify-center gap-2"
                style={{ background: 'linear-gradient(180deg,rgba(233,30,140,0.65),rgba(194,24,91,0.85))' }}
                aria-hidden="true"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.2)', border: '1.5px solid rgba(255,255,255,0.4)' }}
                >
                  <ZoomIn size={18} color="white" />
                </div>
                <span className="text-white text-[11px] font-bold uppercase tracking-widest">{item.category}</span>
              </div>

              {/* Category pill (always visible) */}
              <div className="absolute top-2.5 left-2.5">
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white flex items-center gap-1 opacity-0 group-hover:opacity-0"
                  style={{ background: 'rgba(233,30,140,0.85)' }}
                >
                  <Camera size={8} />
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-300 text-xs mt-10 italic">
          Gallery photos are for layout purposes. Real salon photos will be added here.
        </p>
      </div>
    </section>
  );
};
