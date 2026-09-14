import React from 'react';
import { MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * StoreImages — An elegant image strip showcasing store/salon images.
 * Replace the src values with your actual salon photos when available.
 * The first image uses the official Pixie Beauty Parlour poster.
 */

const STORE_PHOTOS = [
  {
    src: '/images/gallery/salon_1.jpg',
    alt: 'Salon Interior - Modern styling stations with mirrors and elegant lighting',
    label: 'Our Brand',
    isMain: true,
  },
  {
    src: '/images/gallery/salon_2.jpg',
    alt: 'Waiting Area - Comfortable seating with floral decor',
    label: 'Our Store',
    isMain: false,
  },
  {
    src: '/images/services/facial.jpg',
    alt: 'Beauty Room - Relaxing treatment area',
    label: 'Beauty Treatment',
    isMain: false,
  },
  {
    src: '/images/services/manicure.jpg',
    alt: 'Nail Station - Premium manicure setup',
    label: 'Premium Ambience',
    isMain: false,
  },
];

export const StoreImages: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section
      className="py-16 lg:py-20 bg-white relative overflow-hidden"
      aria-label="Pixie Beauty Parlour store images"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(90deg,transparent,#e91e8c,#d4af37,#e91e8c,transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          ref={ref}
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="eyebrow-pink mb-4 inline-flex">✦ Visit Our Store</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-2" style={{ color: '#0f0f2d', fontFamily: 'var(--font-display)' }}>
            Experience <span className="pink-text">Pixie</span>
          </h2>
          <div className="divider-ornament mt-4 mb-4 max-w-xs mx-auto"><span className="text-gold text-lg">✦</span></div>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Located at R.P. Complex, near SBI ATM, Anna Salai, Needamangalam.
            Come in and experience the warmth and professionalism of Pixie Beauty Parlour.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {STORE_PHOTOS.map(({ src, alt, label, isMain }, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                isMain ? 'col-span-2 row-span-2' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                transitionDelay: `${i * 100}ms`,
                boxShadow: isMain
                  ? '0 16px 48px rgba(233,30,140,0.18)'
                  : '0 4px 20px rgba(0,0,0,0.08)',
                border: isMain
                  ? '2px solid rgba(212,175,55,0.35)'
                  : '1px solid rgba(233,30,140,0.1)',
              }}
            >
              <img
                src={src}
                alt={alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  isMain ? 'h-64 sm:h-80 lg:h-[380px]' : 'h-36 sm:h-44 lg:h-[180px]'
                }`}
                loading={i === 0 ? 'eager' : 'lazy'}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                style={{
                  background: 'linear-gradient(0deg,rgba(233,30,140,0.75) 0%,transparent 60%)',
                }}
                aria-hidden="true"
              />

              {/* Label badge */}
              <div className="absolute bottom-3 left-3">
                <span
                  className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                  style={{
                    background: isMain
                      ? 'linear-gradient(135deg,#d4af37,#b8960c)'
                      : 'rgba(233,30,140,0.85)',
                  }}
                >
                  {label}
                </span>
              </div>

              {/* Main image special badge */}
              {isMain && (
                <div className="absolute top-3 right-3">
                  <span
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"
                    style={{
                      background: 'rgba(255,255,255,0.95)',
                      color: '#e91e8c',
                    }}
                    lang="ta"
                  >
                    <MapPin size={9} />
                    நீடாமங்கலம்
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Address strip */}
        <div
          className={`mt-6 rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{
            background: 'linear-gradient(135deg,#fce4ec,#fff8f5)',
            border: '1px solid #f8bbd0',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#e91e8c,#c2185b)' }}
              aria-hidden="true"
            >
              <MapPin size={16} color="white" />
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: '#1a1a3e' }}>
                Pixie Beauty Parlour
              </p>
              <p className="text-gray-500 text-xs" lang="ta">
                R.P. Complex, SBI ATM எதிரில், அண்ணா சாலை, நீடாமங்கலம்.
              </p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/Needamangalam+Tamil+Nadu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-xs font-semibold px-4 py-2 rounded-full text-white transition-all hover:scale-105 hover:shadow-md"
            style={{ background: 'linear-gradient(135deg,#e91e8c,#c2185b)' }}
            aria-label="Get directions to Pixie Beauty Parlour"
          >
            📍 Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};
