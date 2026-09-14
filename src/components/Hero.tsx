import React from 'react';
import { Phone, MessageCircle, MapPin, ChevronDown, Star } from 'lucide-react';
import { BUSINESS, getWhatsAppUrl, WHATSAPP_GENERAL_MSG } from '../data/contact';

/* ── Decorative petal/sparkle elements ─────────────────────── */
const FloatingPetal: React.FC<{
  className?: string;
  size?: number;
  delay?: number;
  color?: string;
}> = ({ className = '', size = 24, delay = 0, color = '#e91e8c' }) => (
  <div
    className={`absolute pointer-events-none select-none ${className}`}
    style={{ animationDelay: `${delay}s` }}
    aria-hidden="true"
  >
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity="0.6">
      <path d="M12 2C9.5 2 7 4.5 7 7c0 2 1 3.5 2.5 4.5C8 12.5 7 14 7 17c0 2.5 2.5 5 5 5s5-2.5 5-5c0-3-1-4.5-2.5-5.5C16 10.5 17 9 17 7c0-2.5-2.5-5-5-5z" />
    </svg>
  </div>
);

const Sparkle: React.FC<{ className?: string; size?: number; delay?: number }> = ({
  className = '',
  size = 16,
  delay = 0,
}) => (
  <div
    className={`absolute pointer-events-none select-none animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
    aria-hidden="true"
  >
    <Star size={size} fill="#d4af37" stroke="#d4af37" />
  </div>
);

export const Hero: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_GENERAL_MSG);

  const scrollToAppointment = () => {
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient"
      aria-label="Hero section"
    >
      {/* ── Background image overlay ──────────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            'url(/images/gallery/salon_2.jpg)',
        }}
        role="presentation"
        aria-hidden="true"
      />

      {/* ── Gradient overlays ──────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(26,26,62,0.92) 0%, rgba(45,27,78,0.88) 40%, rgba(74,10,58,0.85) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Decorative circles ─────────────────────────────── */}
      <div
        className="absolute top-1/4 right-0 w-72 h-72 md:w-96 md:h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #e91e8c 0%, transparent 70%)',
          transform: 'translate(30%, -20%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
        aria-hidden="true"
      />

      {/* ── Floating petals ────────────────────────────────── */}
      <FloatingPetal className="top-24 left-8 animate-petal" size={28} delay={0} color="#e91e8c" />
      <FloatingPetal className="top-1/3 left-[5%] animate-float-slow" size={18} delay={1.2} color="#f06292" />
      <FloatingPetal className="top-16 right-16 animate-float" size={22} delay={0.5} color="#e91e8c" />
      <FloatingPetal className="bottom-32 right-8 animate-petal" size={32} delay={2} color="#f48fb1" />
      <FloatingPetal className="bottom-16 left-1/4 animate-float-slow" size={16} delay={1.5} color="#e91e8c" />
      <FloatingPetal className="top-1/2 right-[8%] animate-float" size={20} delay={0.8} color="#f06292" />

      <Sparkle className="top-28 right-1/3" size={14} delay={0.3} />
      <Sparkle className="top-1/2 left-[12%]" size={10} delay={1.0} />
      <Sparkle className="bottom-40 right-1/4" size={12} delay={1.8} />
      <Sparkle className="top-36 left-1/3" size={8} delay={0.6} />

      {/* ── Main Content ───────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">

          {/* Business badge */}
          <div className="animate-fade-up flex flex-wrap items-center gap-3 mb-6">
            <div
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase"
              style={{
                background: 'rgba(212,175,55,0.15)',
                borderColor: 'rgba(212,175,55,0.5)',
                color: '#f5e6a3',
              }}
            >
              ✦ Women's Corner ✦
            </div>
          </div>

          {/* Main headline */}
          <h1
            className="font-display animate-fade-up delay-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Your Beauty,{' '}
            <br className="hidden sm:block" />
            <span
              style={{
                background: 'linear-gradient(135deg,#e91e8c,#f06292,#e91e8c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Your Confidence
            </span>
          </h1>

          {/* Brand name */}
          <div className="animate-fade-up delay-200 mb-3">
            <p
              className="font-display text-xl sm:text-2xl font-semibold gold-text"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Pixie Beauty Parlour
            </p>
            <p className="text-sm sm:text-base text-white/60 tracking-widest uppercase mt-0.5">
              Beauty Parlour & Women's Corner
            </p>
          </div>

          {/* Needamangalam Tamil location badge */}
          <div className="animate-fade-up delay-300 flex items-center gap-2 mb-3">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold"
              style={{
                background: 'rgba(212,175,55,0.18)',
                border: '1px solid rgba(212,175,55,0.45)',
                color: '#f5e6a3',
              }}
              lang="ta"
              aria-label="Needamangalam"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#d4af37" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {BUSINESS.tamilTagline}
            </span>
          </div>

          {/* Sub text */}
          <p className="animate-fade-up delay-300 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl mb-8">
            {BUSINESS.heroSubtext}
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up delay-400 flex flex-wrap gap-4 mb-10">
            <button
              onClick={scrollToAppointment}
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-white shadow-lg shadow-primary/30"
            >
              ✦ Book Appointment
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-semibold"
            >
              <MessageCircle size={18} className="text-green-400" />
              WhatsApp Us
            </a>
          </div>

          {/* Location pill */}
          <div className="animate-fade-up delay-500">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white/70"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <MapPin size={14} className="text-primary flex-shrink-0" />
              <span>R.P. Complex, Needamangalam</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right side decorative image card (new uploaded image) ── */}
      <div
        className="hidden lg:block absolute right-6 xl:right-14 top-1/2 -translate-y-1/2 animate-fade-up delay-300"
        style={{ width: '260px' }}
        aria-hidden="true"
      >
        {/* Outer glow ring */}
        <div
          className="absolute -inset-3 rounded-[2.5rem] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(233,30,140,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Phone mockup frame */}
        <div
          className="relative rounded-[2rem] overflow-hidden"
          style={{
            border: '2.5px solid rgba(212,175,55,0.55)',
            boxShadow: '0 0 0 6px rgba(212,175,55,0.08), 0 32px 80px rgba(233,30,140,0.35)',
            background: '#0d0d1f',
          }}
        >
          {/* Notch bar */}
          <div
            className="flex items-center justify-between px-4 py-2"
            style={{ background: 'rgba(0,0,0,0.5)' }}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ background: '#e91e8c' }} />
              <span className="text-white/50 text-[9px] font-medium tracking-wider uppercase">Pixie</span>
            </div>
            <div
              className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(212,175,55,0.25)', color: '#f5e6a3' }}
              lang="ta"
            >
              நீடாமங்கலம்
            </div>
          </div>

          {/* The uploaded website screenshot */}
          <img
            src="/images/services/facial.jpg"
            alt="Beautiful woman with glowing makeup"
            className="w-full"
            style={{ display: 'block', maxHeight: '420px', objectFit: 'cover', objectPosition: 'top' }}
            loading="eager"
          />

          {/* Bottom overlay label */}
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-3"
            style={{
              background: 'linear-gradient(0deg, rgba(10,5,30,0.92) 0%, transparent 100%)',
            }}
          >
            <p
              className="text-white text-xs font-semibold font-display"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ✦ Pixie Beauty Parlour
            </p>
            <p className="text-white/55 text-[10px]">Needamangalam · Est. 2024</p>
          </div>
        </div>

        {/* Floating 12+ services badge */}
        <div
          className="absolute -bottom-5 -left-8 rounded-2xl px-4 py-3 text-white animate-float-slow"
          style={{
            background: 'linear-gradient(135deg,#e91e8c,#c2185b)',
            boxShadow: '0 8px 32px rgba(233,30,140,0.5)',
          }}
        >
          <div className="text-2xl font-bold font-display leading-none" style={{ fontFamily: 'var(--font-display)' }}>12+</div>
          <div className="text-[10px] text-white/80 mt-0.5">Services</div>
        </div>

        {/* Floating phone badge */}
        <div
          className="absolute -top-4 -right-6 rounded-2xl px-3 py-2 animate-float"
          style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(212,175,55,0.35)',
          }}
        >
          <div className="flex items-center gap-1.5">
            <Phone size={11} color="#d4af37" />
            <span className="text-white text-[11px] font-semibold">{BUSINESS.phones[0].number}</span>
          </div>
        </div>

        {/* Side sparkle */}
        <div
          className="absolute top-1/3 -left-5 w-8 h-8 rounded-full flex items-center justify-center animate-float-slow"
          style={{
            background: 'rgba(212,175,55,0.15)',
            border: '1px solid rgba(212,175,55,0.35)',
            color: '#d4af37',
            fontSize: '14px',
          }}
        >
          ✦
        </div>
      </div>

      {/* ── Scroll indicator ───────────────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50"
        aria-hidden="true"
      >
        <ChevronDown size={24} />
      </div>
    </section>
  );
};
