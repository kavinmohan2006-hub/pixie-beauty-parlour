import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles, Phone } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BUSINESS } from '../data/contact';

const NAV_LINKS = [
  { label: 'Home',      path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Bridal',   path: '/bridal' },
  { label: 'Our Works',path: '/works' },
  { label: 'Contact',  path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isSolid = scrolled || location.pathname !== '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    // Check initial scroll
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  const clickCount = useRef(0);
  const clickTimeout = useRef<any>(null);
  
  const handleLogoClick = () => {
    navigate('/');
    
    // Secret Admin Portal trigger (3 quick taps)
    clickCount.current++;
    clearTimeout(clickTimeout.current);
    
    if (clickCount.current >= 3) {
      window.dispatchEvent(new Event('toggleAdmin'));
      clickCount.current = 0;
    } else {
      clickTimeout.current = setTimeout(() => {
        clickCount.current = 0;
      }, 1000); // Reset after 1 second
    }
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isSolid ? 'py-2 shadow-xl shadow-black/20' : 'py-4'
        }`}
        style={{
          background: isSolid ? 'rgba(15, 15, 45, 0.95)' : 'transparent',
          backdropFilter: isSolid ? 'blur(20px)' : 'none',
          borderBottom: isSolid ? '1px solid rgba(233,30,140,0.15)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* ── Logo ────────────────────────────────────── */}
          <button onClick={handleLogoClick} className="flex items-center gap-2.5 group" aria-label="Go to homepage">
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
            <div className="leading-none text-left">
              <div
                className="font-display text-xl font-bold tracking-wide transition-colors duration-300 text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                PIXIE
              </div>
              <div className="text-[9px] font-semibold tracking-[.22em] uppercase transition-colors duration-300 text-white/60">
                Beauty Parlour
              </div>
            </div>
          </button>

          {/* ── Desktop nav ─────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 group text-white/85 hover:text-white ${
                  location.pathname === link.path ? 'text-primary' : ''
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-transform duration-300 origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  style={{ background: '#e91e8c' }}
                />
              </Link>
            ))}
          </nav>

          {/* ── CTA + hamburger ─────────────────────────── */}
          <div className="flex items-center gap-3">
            {/* Phone (scrolled only) */}
            {isSolid && (
              <a
                href={`tel:` + BUSINESS.phones[0].number}
                className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
                aria-label="Call us"
              >
                <Phone size={13} />
                {BUSINESS.phones[0].number}
              </a>
            )}

            <button
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold text-white btn-primary shadow-lg shadow-primary/25"
            >
              Book Appointment
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2.5 rounded-xl transition-colors text-white hover:bg-white/10"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile fullscreen menu ────────────────────── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-[0.22,1,0.36,1] ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-[#0f0f2d]/95 backdrop-blur-md" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#1a1a3e] shadow-2xl transition-transform duration-500 delay-100 ease-[0.22,1,0.36,1] flex flex-col ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex-1 overflow-y-auto pt-28 pb-10 px-8">
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`text-2xl font-display font-medium text-white/90 hover:text-primary transition-all duration-300 ${
                    open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${200 + i * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div
              className={`mt-12 pt-10 border-t border-white/10 transition-all duration-500 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${200 + NAV_LINKS.length * 50 + 100}ms` }}
            >
              <div className="text-[11px] font-bold tracking-widest text-white/40 uppercase mb-5">
                Contact Us
              </div>
              <div className="flex flex-col gap-4">
                <a href={`tel:` + BUSINESS.phones[0].number} className="flex items-center gap-3 text-sm font-medium text-white/80">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Phone size={16} />
                  </div>
                  {BUSINESS.phones[0].number}
                </a>
              </div>
            </div>
          </div>
          <div className="p-8 pb-10 border-t border-white/10">
            <button
              onClick={() => {
                handleLinkClick();
                document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full btn-primary text-white py-4 rounded-xl text-sm font-bold shadow-xl shadow-primary/30"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
