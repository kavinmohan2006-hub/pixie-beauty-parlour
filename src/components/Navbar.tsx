import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  let clickCount = 0;
  let clickTimeout: any;
  
  const handleLogoClick = () => {
    navigate('/');
    
    // Secret Admin Portal trigger (3 quick taps)
    clickCount++;
    clearTimeout(clickTimeout);
    
    if (clickCount >= 3) {
      window.dispatchEvent(new Event('toggleAdmin'));
      clickCount = 0;
    } else {
      clickTimeout = setTimeout(() => {
        clickCount = 0;
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
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 group ${
                  scrolled || location.pathname !== '/' ? 'text-gray-600 hover:text-primary' : 'text-white/85 hover:text-white'
                } ${location.pathname === link.path ? 'text-primary font-bold' : ''}`}
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
            {(scrolled || location.pathname !== '/') && (
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
              className={`lg:hidden p-2.5 rounded-xl transition-colors ${
                scrolled || location.pathname !== '/' ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
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
        <div className="absolute inset-0 bg-white/95 backdrop-blur-md" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 delay-100 ease-[0.22,1,0.36,1] flex flex-col ${
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
                  className={`text-2xl font-display font-medium text-gray-800 hover:text-primary transition-all duration-300 ${
                    open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${200 + i * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div
              className={`mt-12 pt-10 border-t border-gray-100 transition-all duration-500 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${200 + NAV_LINKS.length * 50 + 100}ms` }}
            >
              <div className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-5">
                Contact Us
              </div>
              <div className="flex flex-col gap-4">
                <a href={`tel:` + BUSINESS.phones[0].number} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone size={16} />
                  </div>
                  {BUSINESS.phones[0].number}
                </a>
              </div>
            </div>
          </div>
          <div className="p-8 pb-10">
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
