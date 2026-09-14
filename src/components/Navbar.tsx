import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone } from 'lucide-react';
import { BUSINESS } from '../data/contact';

const NAV_LINKS = [
  { label: 'Home',      href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Bridal',   href: '#bridal' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Our Works',href: '#ourworks' },
  { label: 'Reviews',  href: '#testimonials' },
  { label: 'Contact',  href: '#contact' },
  { label: 'Admin',    href: '#admin' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? 'py-2 shadow-xl shadow-black/10' : 'py-4'
        }`}
        style={{
          background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(233,30,140,0.08)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* ── Logo ────────────────────────────────────── */}
          <button onClick={() => scrollTo('#home')} className="flex items-center gap-2.5 group" aria-label="Go to homepage">
            <div className="relative">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(135deg,#e91e8c,#c2185b)' }}
              >
                <Sparkles size={18} color="white" />
              </div>
              <div
                className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white animate-pulse"
                style={{ background: '#d4af37' }}
              />
            </div>
            <div className="leading-none">
              <div
                className={`font-display text-xl font-bold tracking-wide transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}
                style={{ fontFamily: 'var(--font-display)', color: scrolled ? '#e91e8c' : 'white' }}
              >
                PIXIE
              </div>
              <div className={`text-[9px] font-semibold tracking-[.22em] uppercase transition-colors duration-300 ${scrolled ? 'text-gray-400' : 'text-white/60'}`}>
                Beauty Parlour
              </div>
            </div>
          </button>

          {/* ── Desktop nav ─────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 group ${
                  scrolled ? 'text-gray-600 hover:text-primary' : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: '#e91e8c' }}
                />
              </button>
            ))}
          </nav>

          {/* ── CTA + hamburger ─────────────────────────── */}
          <div className="flex items-center gap-3">
            {/* Phone (scrolled only) */}
            {scrolled && (
              <a
                href={`tel:${BUSINESS.phones[0].number}`}
                className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
                aria-label="Call us"
              >
                <Phone size={13} />
                {BUSINESS.phones[0].number}
              </a>
            )}

            <button
              onClick={() => scrollTo('#appointment')}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold text-white btn-primary shadow-lg shadow-primary/25"
            >
              Book Appointment
            </button>

            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2.5 rounded-xl transition-all duration-200 ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ───────────────────────────────── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-350 ${open ? 'max-h-[520px]' : 'max-h-0'}`}
        >
          <div
            className="mx-4 mb-3 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(233,30,140,0.1)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
            }}
          >
            <div className="p-4 space-y-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-primary hover:bg-pink-50 transition-all duration-200 flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0" />
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => scrollTo('#appointment')}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold text-white btn-primary"
                >
                  ✦ Book Appointment
                </button>
              </div>
              <div className="flex gap-2 pt-1 pb-1">
                {BUSINESS.phones.map(({ number }) => (
                  <a
                    key={number}
                    href={`tel:${number}`}
                    className="flex-1 py-2.5 rounded-xl text-center text-xs font-medium text-primary border border-primary/20 hover:bg-pink-50 transition-colors"
                  >
                    📞 {number}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
