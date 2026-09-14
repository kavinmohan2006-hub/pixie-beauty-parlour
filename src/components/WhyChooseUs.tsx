import React from 'react';
import { CheckCircle2, Award, Home, Gem, User, Crown, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FEATURES = [
  { icon: Award,  title: 'Professional Beauty Care',     desc: 'Skilled and experienced beauty professionals delivering exceptional results for every client.',            accent: '#e91e8c' },
  { icon: Home,   title: "Comfortable Women's Salon",    desc: 'A safe, private and completely relaxing environment designed exclusively for women.',                       accent: '#d4af37' },
  { icon: Gem,    title: 'Quality Products',             desc: 'We use only premium, trusted beauty products ensuring the best care for your skin and hair.',               accent: '#e91e8c' },
  { icon: User,   title: 'Personalized Attention',       desc: 'Every client receives individual care and attention tailored to their own unique needs and preferences.',   accent: '#d4af37' },
  { icon: Crown,  title: 'Bridal & Event Makeup',        desc: 'Expert bridal and event makeup to make you look stunning and unforgettable on your special occasions.',     accent: '#e91e8c' },
  { icon: Heart,  title: 'Friendly Service',             desc: 'A warm and welcoming team that makes every visit a pleasant, comfortable and enjoyable experience.',        accent: '#d4af37' },
];

export const WhyChooseUs: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-navy-deep"
      style={{ background: 'linear-gradient(145deg,#0f0f2d 0%,#1a1a3e 50%,#0f0f2d 100%)' }}>

      {/* Decorative blobs */}
      <div className="absolute top-0 right-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(233,30,140,0.08),transparent)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(212,175,55,0.07),transparent)' }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={ref} className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow-gold mb-4 inline-flex">✦ Why Choose Us</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Why Choose <span className="gold-text">Pixie?</span>
          </h2>
          <div className="divider-ornament mt-5 mb-5 max-w-xs mx-auto"><span style={{ color: '#d4af37', fontSize: 18 }}>✦</span></div>
          <p className="text-white/55 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We go beyond beauty — we create an experience that makes every woman feel confident, cared for and truly beautiful.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {FEATURES.map(({ icon: Icon, title, desc, accent }, i) => (
            <div
              key={title}
              className={`group rounded-3xl p-7 transition-all duration-700 cursor-default hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(10px)',
                transitionDelay: `${200 + i * 80}ms`,
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              }}
            >
              {/* Icon row */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: accent === '#e91e8c'
                      ? 'rgba(233,30,140,0.15)'
                      : 'rgba(212,175,55,0.15)',
                  }}
                >
                  <Icon size={22} color={accent} />
                </div>
                <CheckCircle2 size={16} color={accent} className="opacity-70" />
              </div>

              <h3 className="font-display text-base font-bold text-white mb-2.5"
                style={{ fontFamily: 'var(--font-display)' }}>
                {title}
              </h3>
              <p className="text-white/50 text-[13px] leading-relaxed">{desc}</p>

              {/* Bottom accent line */}
              <div
                className="mt-5 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                style={{
                  background: accent === '#e91e8c'
                    ? 'linear-gradient(90deg,#e91e8c,transparent)'
                    : 'linear-gradient(90deg,#d4af37,transparent)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
