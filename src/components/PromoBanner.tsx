import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS, getWhatsAppUrl } from '../data/contact';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * PromoBanner — displays the official Pixie Beauty Parlour promotional
 * poster with contact quick-links. Place this right after the Hero section.
 */
export const PromoBanner: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section
      className="py-12 lg:py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#1a1a3e 0%,#2d1b4e 50%,#1a1a3e 100%)' }}
      aria-label="Pixie Beauty Parlour promotional banner"
    >
      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle,#e91e8c,transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left — Poster image */}
          <div className="relative flex justify-center">
            {/* Gold decorative frame */}
            <div
              className="absolute -inset-3 rounded-3xl pointer-events-none"
              style={{
                border: '1.5px solid rgba(212,175,55,0.3)',
                borderRadius: '1.75rem',
              }}
              aria-hidden="true"
            />
            {/* Background Image overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(/images/services/party_makeup.jpg)',
                opacity: 0.15,
                mixBlendMode: 'overlay',
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            <div 
              className="relative z-10 w-full max-w-md aspect-[4/5] rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 text-center"
              style={{
                background: 'linear-gradient(145deg, #1a0826, #0d0015)',
                border: '1px solid rgba(212,175,55,0.4)',
                boxShadow: '0 32px 80px rgba(233,30,140,0.25), inset 0 0 60px rgba(233,30,140,0.1)',
              }}
            >
              {/* Decorative Top Accent */}
              <svg width="140" height="40" viewBox="0 0 140 40" fill="none" className="mb-6 opacity-90">
                <path d="M10 20 H55 M85 20 H130" stroke="#d4af37" strokeWidth="1.5" />
                <path d="M70 5 L75 20 L70 35 L65 20 Z" fill="#d4af37" />
                <circle cx="70" cy="20" r="2" fill="#1a0826" />
              </svg>

              {/* Logo Typography */}
              <h1 
                className="font-display font-bold mb-3"
                style={{ 
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(4rem, 12vw, 6rem)',
                  background: 'linear-gradient(to bottom, #ffffff, #ffd1dc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: '1',
                  letterSpacing: '0.02em',
                  filter: 'drop-shadow(0 4px 12px rgba(233,30,140,0.3))'
                }}
              >
                PIXIE
              </h1>
              
              <div 
                className="font-sans uppercase tracking-[0.3em] sm:tracking-[0.5em] text-sm sm:text-base font-bold mb-4"
                style={{ color: '#d4af37' }}
              >
                Beauty Parlour
              </div>

              <div className="w-12 h-[1px] bg-pink-500/50 mb-4"></div>

              {/* Tagline */}
              <p className="text-white/60 text-xs sm:text-sm tracking-widest uppercase mb-auto">
                Women's Corner
              </p>

              {/* Decorative Bottom Emblem */}
              <div className="mt-8 relative flex justify-center items-center">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="opacity-80 animate-[spin_20s_linear_infinite]">
                  <path d="M30 2 C32 15, 45 28, 58 30 C45 32, 32 45, 30 58 C28 45, 15 32, 2 30 C15 28, 28 15, 30 2 Z" stroke="#e91e8c" strokeWidth="1" strokeDasharray="2 2" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M15 0 L18 12 L30 15 L18 18 L15 30 L12 18 L0 15 L12 12 Z" fill="#d4af37" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Corner sparkle badge */}
            <div
              className="absolute -top-3 -right-3 z-20 w-12 h-12 rounded-full flex items-center justify-center text-lg animate-float"
              style={{
                background: 'linear-gradient(135deg,#d4af37,#b8960c)',
                boxShadow: '0 4px 16px rgba(212,175,55,0.5)',
              }}
              aria-hidden="true"
            >
              ✦
            </div>
          </div>

          {/* Right — Info */}
          <div>
            {/* Eyebrow */}
            <span className="eyebrow-gold mb-5">
              ✦ Now Open in Needamangalam ✦
            </span>

            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Pixie Beauty Parlour
            </h2>

            <p
              className="font-display text-lg font-medium mb-1 gold-text"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Beauty Parlour & Women's Corner
            </p>

            <p className="text-white/55 text-sm flex items-center gap-1.5 mb-6" lang="ta">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#d4af37" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span style={{ color: '#f5e6a3', fontWeight: 600 }}>{BUSINESS.tamilTagline}</span>
              <span className="text-white/40 mx-1">·</span>
              Needamangalam
            </p>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-7">
              Your trusted beauty destination for professional hair, skin, makeup, bridal and
              personal care services — right here in Needamangalam. Step in and experience the
              Pixie difference.
            </p>

            {/* Location */}
            <div className="flex items-start gap-3 mb-5">
              <div
                className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
                style={{ background: 'rgba(233,30,140,0.2)' }}
              >
                <MapPin size={16} color="#e91e8c" />
              </div>
              <address className="not-italic text-white/70 text-sm leading-relaxed" lang="ta">
                {BUSINESS.address.line1}<br />
                {BUSINESS.address.line2}<br />
                {BUSINESS.address.line3}<br />
                {BUSINESS.address.line4}
              </address>
            </div>

            {/* Phones */}
            <div className="flex flex-wrap gap-3 mb-7">
              {BUSINESS.phones.map(({ number }) => (
                <a
                  key={number}
                  href={`tel:${number}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-all hover:scale-105"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                  aria-label={`Call ${number}`}
                >
                  <Phone size={13} color="#e91e8c" />
                  {number}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${BUSINESS.phones[0].number}`}
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white shadow-lg shadow-primary/30"
                aria-label="Call Pixie Beauty Parlour"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href={getWhatsAppUrl('Hello Pixie Beauty Parlour, I saw your poster. I would like to know more about your services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-lg shadow-green-500/20"
                style={{
                  background: 'linear-gradient(135deg,#25d366,#128c7e)',
                  color: 'white',
                }}
                aria-label="WhatsApp Pixie Beauty Parlour"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
