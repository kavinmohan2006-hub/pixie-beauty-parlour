import React from 'react';
import { MessageCircle, Crown, Heart, Sparkles, Layers, Leaf } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_BRIDAL_MSG } from '../data/contact';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BRIDAL_SERVICES = [
  { icon: Crown, label: 'Bridal Makeup', desc: 'Complete wedding day transformation', price: 'Starts Rs.4,999' },
  { icon: Sparkles, label: 'Engagement Makeup', desc: 'Glowing looks for your engagement', price: 'Starts Rs.2,499' },
  { icon: Heart, label: 'Reception Makeup', desc: 'Stunning reception night looks', price: 'Starts Rs.2,999' },
  { icon: Layers, label: 'Hair Styling', desc: 'Bridal hair for every style', price: 'Starts Rs.499' },
  { icon: Layers, label: 'Saree Draping', desc: 'Perfect draping for special occasions', price: 'Starts Rs.149' },
  { icon: Leaf, label: 'Mehendi', desc: 'Intricate bridal mehendi designs', price: 'Starts Rs.199' },
];

export const Bridal: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="bridal"
      className="relative py-20 lg:py-32 overflow-hidden"
      aria-label="Bridal beauty services"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #11001c 0%, #3a0a2e 50%, #11001c 100%)',
        }}
        aria-hidden="true"
      />

      {/* Cinematic Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/gallery/work_reception.jpg)',
          opacity: 0.15,
          mixBlendMode: 'luminosity',
          filter: 'contrast(1.2) brightness(0.8)'
        }}
        aria-hidden="true"
      />

      {/* Brand Watermark / Poster Effect */}
      <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden pointer-events-none" aria-hidden="true">
        <span 
          className="font-display font-bold whitespace-nowrap select-none"
          style={{
            fontSize: 'clamp(8rem, 22vw, 25rem)',
            background: 'linear-gradient(to bottom, rgba(212,175,55,0.15), rgba(212,175,55,0.02))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.25em',
            lineHeight: 1,
            fontFamily: 'var(--font-display)',
            transform: 'translateY(-5%)'
          }}
        >
          PIXIE
        </span>
      </div>

      {/* Decorative gold circle */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.4), transparent 70%)',
          transform: 'translate(30%, -50%)',
        }}
        aria-hidden="true"
      />

      {/* Floating petals */}
      <div className="absolute top-16 left-8 text-3xl animate-petal opacity-30" aria-hidden="true">🌸</div>
      <div className="absolute bottom-16 right-12 text-2xl animate-float-slow opacity-25" aria-hidden="true">🌺</div>
      <div className="absolute top-1/3 right-16 text-xl animate-float opacity-20" aria-hidden="true">✦</div>
      <div className="absolute bottom-1/3 left-16 text-2xl animate-petal opacity-20" aria-hidden="true">✦</div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              background: 'rgba(212,175,55,0.15)',
              border: '1px solid rgba(212,175,55,0.4)',
              color: '#f5e6a3',
            }}
          >
            ✦ Bridal Specials ✦
          </span>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Look Beautiful on{' '}
            <span className="gold-text">Your Special Day</span>
          </h2>
          <div
            className="mx-auto h-0.5 w-16 rounded-full mb-5"
            style={{ background: 'linear-gradient(90deg,#d4af37,#f5e6a3,#d4af37)' }}
          />
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Complete bridal beauty services designed to make your special moments unforgettable.
            We take care of every detail so you can shine on your most important day.
          </p>
        </div>

        {/* Main layout: image + services */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
          {/* Left: Bridal image */}
          <div
            className={`relative transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                border: '2px solid rgba(212,175,55,0.4)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
              }}
            >
              <img
                src="/images/services/bridal_makeup.jpg"
                alt="Beautiful South Indian bridal makeup and styling by Pixie Beauty Parlour"
                className="w-full object-cover aspect-[4/5] sm:aspect-square lg:aspect-[4/5] transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(0deg, rgba(26,26,62,0.6) 0%, transparent 60%)',
                }}
                aria-hidden="true"
              />
            </div>

            {/* Floating tag */}
            <div
              className="absolute -bottom-5 left-8 rounded-2xl px-5 py-3"
              style={{
                background: 'linear-gradient(135deg,#d4af37,#b8960c)',
                boxShadow: '0 8px 32px rgba(212,175,55,0.4)',
              }}
            >
              <p className="text-white text-sm font-bold font-display" style={{ fontFamily: 'var(--font-display)' }}>
                ✦ Complete Bridal Package — From Rs.4,999
              </p>
            </div>
          </div>

          {/* Right: Services grid */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BRIDAL_SERVICES.map(({ icon: Icon, label, desc, price }, i) => (
                <div
                  key={label}
                  className="rounded-2xl p-4 sm:p-5 group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(212,175,55,0.2)',
                    backdropFilter: 'blur(8px)',
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(212,175,55,0.2)' }}
                    >
                      <Icon size={18} color="#d4af37" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ background: 'rgba(212,175,55,0.18)', color: '#f5e6a3' }}>
                      {price}
                    </span>
                  </div>
                  <h3
                    className="font-display text-sm font-bold text-white mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {label}
                  </h3>
                  <p className="text-white/55 text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href={getWhatsAppUrl(WHATSAPP_BRIDAL_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 px-9 py-4 rounded-full text-sm sm:text-base font-semibold shadow-xl shadow-gold/20"
            aria-label="Enquire about Bridal Package on WhatsApp"
          >
            <MessageCircle size={18} />
            Enquire for Bridal Package
          </a>
          <p className="text-white/40 text-xs mt-4">Opens WhatsApp with a pre-filled message</p>
        </div>
      </div>
    </section>
  );
};
