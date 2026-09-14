import React from 'react';
import { Award, Heart, Users, CheckCircle2, Star, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HIGHLIGHTS = [
  {
    icon: Award,
    title: 'Professional Care',
    desc: 'Trained and experienced beauty professionals delivering exceptional results for every client.',
    gradient: 'linear-gradient(135deg,#e91e8c,#c2185b)',
    bg: '#fce4ec',
    iconColor: '#e91e8c',
  },
  {
    icon: Heart,
    title: 'Quality Products',
    desc: 'Premium, trusted beauty products for every treatment ensuring the best care for your skin and hair.',
    gradient: 'linear-gradient(135deg,#d4af37,#b8960c)',
    bg: '#fefce8',
    iconColor: '#d4af37',
  },
  {
    icon: Users,
    title: 'Women-Focused',
    desc: 'A comfortable, private and welcoming salon environment designed exclusively for women.',
    gradient: 'linear-gradient(135deg,#c2185b,#880e4f)',
    bg: '#fce7f3',
    iconColor: '#c2185b',
  },
];

const WHY_PIXIE = [
  { icon: CheckCircle2, text: 'Personalised beauty treatments for every client' },
  { icon: Star,         text: 'Specialised bridal and event makeup expertise' },
  { icon: Shield,       text: 'Safe, hygienic and comfortable environment' },
  { icon: Heart,        text: 'Warm, friendly and attentive service every visit' },
];

export const About: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: '#fff' }}>
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(233,30,140,0.04),transparent)', transform: 'translate(40%,-40%)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(212,175,55,0.05),transparent)', transform: 'translate(-40%,40%)' }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow-pink mb-4 inline-flex">✦ About Us</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight" style={{ color: '#0f0f2d', fontFamily: 'var(--font-display)' }}>
            Welcome to{' '}
            <span className="pink-text">Pixie Beauty Parlour</span>
          </h2>
          <div className="divider-ornament mt-5 mb-5 max-w-xs mx-auto">
            <span className="text-gold text-lg">✦</span>
          </div>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            At Pixie Beauty Parlour, we believe every woman deserves to feel confident, beautiful and special.
            We provide quality beauty and personal care services in a comfortable and welcoming environment.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Left: Image collage */}
          <div className={`relative transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Main image */}
            <div
              className="relative rounded-3xl overflow-hidden group"
              style={{ boxShadow: '0 32px 80px rgba(233,30,140,0.12)', border: '1px solid rgba(233,30,140,0.1)' }}
            >
              <img
                src="/images/gallery/salon_1.jpg"
                alt="Pixie Beauty Parlour Studio - Expert Beauty Services"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(180deg,transparent 60%,rgba(15,15,45,0.35))' }} aria-hidden="true" />
            </div>

            {/* Floating stat — 12+ services */}
            <div
              className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl px-5 py-4 text-center animate-float-slow"
              style={{
                background: 'linear-gradient(135deg,#e91e8c,#c2185b)',
                boxShadow: '0 16px 48px rgba(233,30,140,0.4)',
              }}
            >
              <div className="text-3xl font-bold text-white font-display leading-none" style={{ fontFamily: 'var(--font-display)' }}>12+</div>
              <div className="text-[10px] text-white/80 uppercase tracking-widest mt-1">Services</div>
            </div>

            {/* Floating location chip */}
            <div
              className="absolute top-4 left-4 rounded-xl px-3.5 py-2 flex items-center gap-2"
              style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', border: '1px solid rgba(233,30,140,0.12)', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
            >
              <span style={{ color: '#e91e8c', fontSize: 14 }}>📍</span>
              <span className="text-xs font-semibold" style={{ color: '#0f0f2d' }} lang="ta">நீடாமங்கலம்</span>
            </div>

            {/* Gold decorative corner */}
            <div className="absolute -top-5 -left-5 w-28 h-28 rounded-2xl pointer-events-none"
              style={{ border: '2px solid rgba(212,175,55,0.25)', borderRadius: '1.5rem' }} aria-hidden="true" />
          </div>

          {/* Right: Content */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <p className="text-gray-500 text-base leading-relaxed mb-5">
              Located in the heart of Needamangalam, Pixie Beauty Parlour is a premium women's beauty salon
              offering a full range of beauty and personal care services. From everyday grooming to complete
              bridal transformations — we are here for every occasion and every woman.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Our experienced team of beauty professionals is passionate about helping you look and feel your best.
              Step into our salon and experience the care and attention you truly deserve.
            </p>

            {/* Why Pixie? */}
            <div
              className="rounded-2xl p-6 mb-8"
              style={{ background: 'linear-gradient(135deg,#fce4ec,#fff8f5)', border: '1px solid rgba(233,30,140,0.1)' }}
            >
              <h3 className="font-display text-lg font-bold mb-5 flex items-center gap-2"
                style={{ color: '#0f0f2d', fontFamily: 'var(--font-display)' }}>
                <span style={{ color: '#d4af37' }}>✦</span> Why Pixie?
              </h3>
              <div className="space-y-3.5">
                {WHY_PIXIE.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: 'white', boxShadow: '0 2px 8px rgba(233,30,140,0.15)' }}>
                      <Icon size={14} color="#e91e8c" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm font-semibold"
            >
              ✦ Book Your Appointment
            </button>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-3 gap-5 lg:gap-6">
          {HIGHLIGHTS.map(({ icon: Icon, title, desc, gradient, bg, iconColor }, i) => (
            <div
              key={title}
              className={`card-hover rounded-3xl p-7 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: 'white',
                border: '1px solid rgba(233,30,140,0.08)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                transitionDelay: `${200 + i * 120}ms`,
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: bg }}
              >
                <Icon size={28} color={iconColor} />
              </div>
              <h3 className="font-display text-lg font-bold mb-2.5"
                style={{ color: '#0f0f2d', fontFamily: 'var(--font-display)' }}>{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>

              {/* Bottom accent */}
              <div className="mt-5 h-0.5 w-12 rounded-full mx-auto" style={{ background: gradient }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
