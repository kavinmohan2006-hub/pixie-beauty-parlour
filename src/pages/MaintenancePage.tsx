import { useState } from 'react';
import { Scissors, Clock, Phone, ExternalLink } from 'lucide-react';
import { BUSINESS } from '../data/contact';

export function MaintenancePage() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{
        background: 'linear-gradient(135deg, #0f0f2d 0%, #1a0a2e 50%, #2d0a3e 100%)',
        fontFamily: 'var(--font-body, sans-serif)',
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #ec4899, transparent)' }} />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />

      {/* Logo */}
      <div className="mb-8 flex flex-col items-center select-none">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
          style={{ background: 'linear-gradient(135deg, #ec4899, #a855f7)' }}
        >
          <Scissors size={36} color="white" />
        </div>
        <h1
          className="text-4xl sm:text-5xl font-bold text-white tracking-wide"
          style={{ fontFamily: 'var(--font-display, serif)', letterSpacing: '0.15em' }}
        >
          PIXIE
        </h1>
        <p className="text-pink-300 text-sm tracking-widest mt-1">BEAUTY PARLOUR</p>
      </div>

      {/* Main message */}
      <div className="max-w-lg">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium"
          style={{ background: 'rgba(236,72,153,0.15)', color: '#f9a8d4', border: '1px solid rgba(236,72,153,0.3)' }}
        >
          <Clock size={14} />
          <span>Temporarily Unavailable</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          We'll be back soon! ✨
        </h2>

        <p className="text-gray-300 text-lg mb-2">
          Our website is currently under maintenance.
        </p>
        <p className="text-gray-400 text-base mb-10">
          We're working hard to bring you a better experience. Please check back later!
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8 justify-center">
          <div className="h-px flex-1 max-w-20" style={{ background: 'rgba(236,72,153,0.3)' }} />
          <span className="text-pink-400 text-sm">In the meantime</span>
          <div className="h-px flex-1 max-w-20" style={{ background: 'rgba(236,72,153,0.3)' }} />
        </div>

        {/* Contact options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/919944751199"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
          >
            <Phone size={18} />
            Book via WhatsApp
          </a>

          <a
            href="tel:+919944751199"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <Phone size={18} />
            Call Us: 9944751199
          </a>
        </div>

        {/* Instagram */}
        <div className="mt-8">
          <a
            href={BUSINESS.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors text-sm"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <ExternalLink size={16} />
            <span style={{ textDecoration: hovered ? 'underline' : 'none' }}>
              Follow us on Instagram
            </span>
          </a>
        </div>
      </div>

      {/* Footer note */}
      <p className="absolute bottom-6 text-gray-600 text-xs">
        &copy; {new Date().getFullYear()} Pixie Beauty Parlour. All rights reserved.
      </p>
    </div>
  );
}
