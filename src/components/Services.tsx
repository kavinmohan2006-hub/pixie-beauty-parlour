import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES } from '../data/services';
import { getWhatsAppUrl } from '../data/contact';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SERVICE_IMAGES: Record<string, string> = {
  // Locally generated high-quality images
  eyebrow:            '/images/services/eyebrow.jpg',
  haircut:            '/images/services/haircut.jpg',
  hairspa:            '/images/services/hairspa.jpg',
  facial:             '/images/services/facial.jpg',
  skincare:           '/images/services/skincare.jpg',
  // Self-hosted local images for all services
  manicure:           '/images/services/manicure.jpg',
  pedicure:           '/images/services/pedicure.jpg',
  'party-makeup':     '/images/services/party_makeup.jpg',
  'engagement-makeup':'/images/services/engagement_makeup.jpg',
  'bridal-makeup':    '/images/services/bridal_makeup.jpg',
  mehendi:            '/images/services/mehendi.jpg',
  'saree-draping':    '/images/services/saree_draping.jpg',
};

export const Services: React.FC = () => {
  const [active, setActive] = useState('All');
  const [ref, isVisible]    = useScrollAnimation();

  const filtered = active === 'All' ? SERVICES : SERVICES.filter(s => s.category === active);

  return (
    <section id="services" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: '#fafafa' }}>
      {/* Gradient top bar */}
      <div className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg,#e91e8c,#d4af37,#e91e8c)' }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow-pink mb-4 inline-flex">✦ Our Services</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight" style={{ color: '#0f0f2d', fontFamily: 'var(--font-display)' }}>
            Beauty Services <span className="pink-text">For You</span>
          </h2>
          <div className="divider-ornament mt-5 mb-5 max-w-xs mx-auto"><span className="text-gold text-lg">✦</span></div>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From everyday grooming to complete bridal transformations — explore our full range of professional beauty services.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10">
          {SERVICE_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`px-4 sm:px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-250 ${
                active === cat
                  ? 'text-white shadow-md shadow-primary/30 scale-105'
                  : 'bg-white text-gray-500 hover:text-primary hover:shadow-sm border border-gray-100'
              }`}
              style={active === cat ? { background: 'linear-gradient(135deg,#e91e8c,#c2185b)' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filtered.map((service, i) => {
            return (
              <a
                key={service.id}
                href={getWhatsAppUrl(`Hello Pixie Beauty Parlour, I would like to book ${service.name} (₹${service.price}). Please confirm available slot.`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Book ${service.name}`}
                className="group block rounded-2xl overflow-hidden bg-white"
                style={{
                  border: '2px solid rgba(233,30,140,0.15)',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                  animationDelay: `${i * 50}ms`,
                  transition: 'box-shadow 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(233,30,140,0.18)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: '180px' }}>
                  <img
                    src={SERVICE_IMAGES[service.id]}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />
                  {/* Popular badge */}
                  {service.popular && (
                    <span
                      className="absolute top-2 right-2 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full text-white tracking-wider shadow"
                      style={{ background: 'linear-gradient(135deg,#d4af37,#b8960c)' }}
                    >
                      ★ POPULAR
                    </span>
                  )}
                </div>

                {/* Name + Price */}
                <div className="px-3 pt-3 pb-4 text-center">
                  <h3
                    className="font-semibold text-[14px] sm:text-[15px] mb-2 leading-snug"
                    style={{ color: '#1a1a2e' }}
                  >
                    {service.name}
                  </h3>
                  <span
                    className="inline-block text-white text-sm font-bold px-5 py-1.5 rounded-full"
                    style={{ background: 'linear-gradient(135deg,#e91e8c,#c2185b)', boxShadow: '0 3px 12px rgba(233,30,140,0.35)' }}
                  >
                    ₹{service.price}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-400 text-sm mb-4">Not sure which service is right for you?</p>
          <a
            href={getWhatsAppUrl('Hello Pixie Beauty Parlour, I need help choosing the right beauty service for me.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-sm font-semibold shadow-lg shadow-primary/25"
          >
            <MessageCircle size={16} />
            Chat With Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
