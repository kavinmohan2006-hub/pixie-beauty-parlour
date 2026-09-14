import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { supabase } from '../lib/supabase';

const Stars: React.FC<{ n: number }> = ({ n }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={13} fill={i < n ? '#d4af37' : 'none'} stroke={i < n ? '#d4af37' : '#e5e7eb'} />
    ))}
  </div>
);

const AVATAR_COLORS = ['#e91e8c', '#c2185b', '#d4af37', '#b8960c', '#7b1a4e', '#e91e8c'];

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<any[]>(TESTIMONIALS);
  const [cur, setCur]        = useState(0);
  const [ref, isVisible]     = useScrollAnimation();
  
  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .gte('rating', 4)
        .order('created_at', { ascending: false });
        
      if (data && data.length > 0) {
        // Map Supabase rows to Testimonial format
        const realReviews = data.map((row: any) => ({
          id: row.id,
          name: row.name,
          service: row.service || 'Salon Service',
          rating: row.rating,
          review: row.review,
          isPlaceholder: false
        }));
        setReviews(realReviews);
        setCur(0); // Reset to first review when new ones are added
      }
    };
    
    // Initial fetch
    fetchReviews();

    // Listen for new reviews being added to instantly update the UI without refresh
    window.addEventListener('reviewAdded', fetchReviews);
    return () => window.removeEventListener('reviewAdded', fetchReviews);
  }, []);

  const prev = () => setCur(c => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCur(c => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: '#fff' }}>
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(90deg,transparent,#e91e8c,#d4af37,#e91e8c,transparent)' }} aria-hidden="true" />

      {/* Soft blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(233,30,140,0.025),transparent)' }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={ref} className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow-pink mb-4 inline-flex">✦ Customer Reviews</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold" style={{ color: '#0f0f2d', fontFamily: 'var(--font-display)' }}>
            What Our <span className="pink-text">Clients Say</span>
          </h2>
          <div className="divider-ornament mt-5 mb-5 max-w-xs mx-auto"><span className="text-gold text-lg">✦</span></div>
          <p className="text-gray-400 text-sm max-w-md mx-auto">Sample reviews for layout. We look forward to earning yours!</p>
        </div>

        {/* Featured carousel card */}
        <div className={`max-w-3xl mx-auto mb-14 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div
            className="relative rounded-3xl p-8 sm:p-12"
            style={{
              background: 'linear-gradient(145deg,#fff8f5,#fce4ec)',
              border: '1.5px solid rgba(233,30,140,0.12)',
              boxShadow: '0 24px 80px rgba(233,30,140,0.09)',
            }}
          >
            {/* Big quote icon bg */}
            <div className="absolute top-6 right-8 opacity-5 pointer-events-none" aria-hidden="true">
              <Quote size={100} color="#e91e8c" />
            </div>

            {/* Quote icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto"
              style={{ background: 'linear-gradient(135deg,#e91e8c,#c2185b)', boxShadow: '0 8px 24px rgba(233,30,140,0.35)' }}
            >
              <Quote size={22} color="white" />
            </div>

            <blockquote>
              <p className="font-display text-lg sm:text-xl text-gray-700 italic text-center leading-relaxed mb-8"
                style={{ fontFamily: 'var(--font-display)' }}>
                "{reviews[cur].review}"
              </p>
            </blockquote>

            {/* Reviewer */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ background: `linear-gradient(135deg,${AVATAR_COLORS[cur]},${AVATAR_COLORS[(cur + 1) % AVATAR_COLORS.length]})` }}
                aria-hidden="true"
              >
                {reviews[cur].name.charAt(0)}
              </div>
              <Stars n={reviews[cur].rating} />
              <p className="font-bold text-base" style={{ color: '#0f0f2d' }}>{reviews[cur].name}</p>
              <span
                className="text-[11px] font-semibold px-3 py-1 rounded-full"
                style={{ background: 'rgba(233,30,140,0.08)', color: '#e91e8c' }}
              >
                {reviews[cur].service}
              </span>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button onClick={prev}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'white', border: '1px solid rgba(233,30,140,0.15)', boxShadow: '0 2px 12px rgba(233,30,140,0.1)' }}
                aria-label="Previous">
                <ChevronLeft size={16} color="#e91e8c" />
              </button>
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setCur(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === cur ? 24 : 8, height: 8,
                    background: i === cur ? 'linear-gradient(90deg,#e91e8c,#c2185b)' : '#f8bbd0',
                  }}
                  aria-label={`Review ${i + 1}`} aria-current={i === cur} />
              ))}
              <button onClick={next}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'white', border: '1px solid rgba(233,30,140,0.15)', boxShadow: '0 2px 12px rgba(233,30,140,0.1)' }}
                aria-label="Next">
                <ChevronRight size={16} color="#e91e8c" />
              </button>
            </div>
          </div>
        </div>

        {/* Card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.slice(0, 3).map(({ id, name, service, rating, review }, i) => (
            <div
              key={id}
              className={`card-hover rounded-2xl p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: 'white',
                border: '1px solid rgba(233,30,140,0.07)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                transitionDelay: `${200 + i * 100}ms`,
              }}
            >
              <Stars n={rating} />
              <blockquote className="mt-4 mb-5">
                <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-4 italic">"{review}"</p>
              </blockquote>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(233,30,140,0.07)' }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: `linear-gradient(135deg,${AVATAR_COLORS[i]},${AVATAR_COLORS[i + 1] || '#c2185b'})` }}
                  aria-hidden="true"
                >
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[13px]" style={{ color: '#0f0f2d' }}>{name}</p>
                  <p className="text-[11px]" style={{ color: '#e91e8c' }}>{service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-300 text-xs mt-8 italic">
          Sample reviews for layout purposes. Real customer reviews will be added here.
        </p>
      </div>
    </section>
  );
};
