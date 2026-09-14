import React from 'react';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  light = false,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-3 px-4 py-1.5 rounded-full ${
            light
              ? 'bg-white/10 text-gold-light border border-white/20'
              : 'bg-primary/10 text-primary border border-primary/20'
          }`}
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? 'text-white' : 'text-navy'
        }`}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}{' '}
        {titleHighlight && (
          <span className={light ? 'gold-text' : 'pink-text'}>
            {titleHighlight}
          </span>
        )}
      </h2>
      {/* Gold divider */}
      <div
        className={`mt-4 mb-2 ${centered ? 'mx-auto' : ''} h-0.5 w-16 rounded-full`}
        style={{
          background: light
            ? 'linear-gradient(90deg,#d4af37,#f5e6a3,#d4af37)'
            : 'linear-gradient(90deg,#e91e8c,#c2185b)',
        }}
      />
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/80' : 'text-gray-600'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
