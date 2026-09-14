import React from 'react';
import { Phone, MessageCircle, ExternalLink, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS, getWhatsAppUrl, WHATSAPP_GENERAL_MSG } from '../data/contact';

const QUICK_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',   href: '#about' },
  { label: 'Services',href: '#services' },
  { label: 'Bridal',  href: '#bridal' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden"
      style={{ background: 'linear-gradient(145deg,#0f0f2d 0%,#1a1a3e 50%,#0f0f2d 100%)' }}>

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(90deg,transparent,#d4af37,#e91e8c,#d4af37,transparent)' }} aria-hidden="true" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle,#e91e8c,transparent)', transform: 'translate(40%,-40%)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle,#d4af37,transparent)', transform: 'translate(-40%,40%)' }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Main grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#e91e8c,#c2185b)', boxShadow: '0 8px 24px rgba(233,30,140,0.3)' }}
              >
                <Sparkles size={18} color="white" />
              </div>
              <div>
                <div className="font-display text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>PIXIE</div>
                <div className="text-[9px] text-white/40 uppercase tracking-[.2em]">Beauty Parlour</div>
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Your trusted beauty destination in Needamangalam. Professional care, quality products and a welcoming space — just for you.
            </p>

            {/* Location label */}
            <p className="flex items-center gap-1.5 text-xs mb-6" lang="ta">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="#d4af37" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span style={{ color: '#f5e6a3', fontWeight: 600 }}>{BUSINESS.tamilTagline}</span>
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'linear-gradient(135deg,#e91e8c,#c2185b)' }}
                aria-label="Instagram">
                <ExternalLink size={15} color="white" />
              </a>
              <a href={getWhatsAppUrl(WHATSAPP_GENERAL_MSG)} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ background: '#25d366' }}
                aria-label="WhatsApp">
                <MessageCircle size={15} color="white" />
              </a>
              <a href={`tel:${BUSINESS.phones[0].number}`}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                aria-label="Call us">
                <Phone size={15} color="white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[.2em] mb-6"
              style={{ color: '#d4af37', fontFamily: 'var(--font-display)' }}>Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <button onClick={() => scrollTo(href)}
                      className="text-white/50 text-sm hover:text-white transition-colors group flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full transition-all group-hover:scale-150 flex-shrink-0"
                        style={{ background: '#e91e8c' }} aria-hidden="true" />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[.2em] mb-6"
              style={{ color: '#d4af37', fontFamily: 'var(--font-display)' }}>Contact</h3>
            <div className="space-y-4">
              {BUSINESS.phones.map(({ number, label }) => (
                <div key={number}>
                  <p className="text-white/35 text-[11px] uppercase tracking-wider mb-0.5">{label}</p>
                  <a href={`tel:${number}`}
                    className="text-white/65 text-sm hover:text-white transition-colors flex items-center gap-2"
                    aria-label={`Call ${label}`}>
                    <Phone size={11} color="#e91e8c" />
                    {number}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[.2em] mb-6"
              style={{ color: '#d4af37', fontFamily: 'var(--font-display)' }}>Location</h3>
            <div className="flex items-start gap-2.5 mb-5">
              <MapPin size={14} color="#e91e8c" className="flex-shrink-0 mt-0.5" aria-hidden="true" />
              <address className="not-italic text-white/55 text-sm leading-relaxed" lang="ta">
                {BUSINESS.address.line1}<br />
                {BUSINESS.address.line2}<br />
                {BUSINESS.address.line3}<br />
                {BUSINESS.address.line4}
              </address>
            </div>
            <a href={BUSINESS.address.googleMapsUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-4 py-2 rounded-full transition-all hover:opacity-80"
              style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.25)', color: '#f5e6a3' }}
              aria-label="Get directions">
              <MapPin size={10} />
              Get Directions
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 Pixie Beauty Parlour. All Rights Reserved.
          </p>
          <p className="text-white/20 text-xs">
            Beauty Parlour & Women's Corner · Needamangalam
          </p>
        </div>
      </div>
    </footer>
  );
};
