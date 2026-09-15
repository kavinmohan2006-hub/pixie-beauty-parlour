import React from 'react';
import { Phone, MessageCircle, ExternalLink, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS, getWhatsAppUrl, WHATSAPP_GENERAL_MSG } from '../data/contact';

const QUICK_LINKS = [
  { label: 'Home',     path: '/' },
  { label: 'About',   path: '/about' },
  { label: 'Services',path: '/services' },
  { label: 'Bridal',  path: '/bridal' },
  { label: 'Gallery', path: '/works' },
  { label: 'Contact', path: '/contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden"
      style={{ background: 'linear-gradient(145deg,#0f0f2d 0%,#1a1a3e 50%,#0f0f2d 100%)' }}>

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(90deg,transparent,#d4af37,#e91e8c,#d4af37,transparent)' }} aria-hidden="true" />

      {/* Abstract light burst */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-[0.05]"
        style={{ background: 'radial-gradient(circle,#d4af37,transparent)', transform: 'translate(30%,-30%)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.03]"
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
                {QUICK_LINKS.map(({ label, path }) => (
                  <li key={path}>
                    <Link to={path}
                      onClick={scrollToTop}
                      className="text-white/50 text-sm hover:text-white transition-colors group flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full transition-all group-hover:scale-150 flex-shrink-0"
                        style={{ background: '#e91e8c' }} aria-hidden="true" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-xs font-bold uppercase tracking-[.2em] mb-6"
              style={{ color: '#d4af37', fontFamily: 'var(--font-display)' }}>Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/50 text-sm group">
                <div className="mt-1 transition-transform group-hover:scale-110"><MapPin size={16} color="#d4af37" /></div>
                <div>
                  <span className="block text-white mb-1 font-medium">{BUSINESS.name}</span>
                  {BUSINESS.address.line1}<br />
                  {BUSINESS.address.line2}<br />
                  {BUSINESS.address.line3}<br />
                  {BUSINESS.address.line4}
                </div>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm group">
                <div className="transition-transform group-hover:scale-110"><Phone size={16} color="#e91e8c" /></div>
                <a href={`tel:${BUSINESS.phones[0].number}`} className="hover:text-white transition-colors">
                  +91 {BUSINESS.phones[0].number}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[.2em] mb-6"
              style={{ color: '#d4af37', fontFamily: 'var(--font-display)' }}>Opening Hours</h3>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 backdrop-blur-sm">
              <ul className="space-y-3">
                <li className="flex justify-between text-sm">
                  <span className="text-white/70">Mon - Sat</span>
                  <span className="text-white font-medium">9:00 AM - 8:00 PM</span>
                </li>
                <li className="w-full h-px bg-white/10" aria-hidden="true" />
                <li className="flex justify-between text-sm">
                  <span className="text-white/70">Sunday</span>
                  <span className="text-primary font-medium" style={{ color: '#e91e8c' }}>By Appointment</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/about" className="text-white/30 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-white/30 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
