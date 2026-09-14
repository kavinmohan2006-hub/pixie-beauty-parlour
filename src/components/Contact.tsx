import React from 'react';
import { Phone, MessageCircle, MapPin, Navigation, Clock, ExternalLink } from 'lucide-react';
import { BUSINESS, getWhatsAppUrl, WHATSAPP_GENERAL_MSG } from '../data/contact';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Contact: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: '#fafafa' }}>
      <div className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(90deg,#e91e8c,#d4af37,#e91e8c)' }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={ref} className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow-pink mb-4 inline-flex">✦ Find Us</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold" style={{ color: '#0f0f2d', fontFamily: 'var(--font-display)' }}>
            Visit <span className="pink-text">Pixie Beauty Parlour</span>
          </h2>
          <div className="divider-ornament mt-5 mb-5 max-w-xs mx-auto"><span className="text-gold text-lg">✦</span></div>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            We'd love to welcome you to our salon. Find us at the address below or reach out via phone or WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Left: Info cards */}
          <div className={`space-y-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>

            {/* Salon header card */}
            <div
              className="rounded-3xl overflow-hidden"
              style={{ border: '1px solid rgba(233,30,140,0.1)', boxShadow: '0 8px 40px rgba(233,30,140,0.08)' }}
            >
              {/* Gradient header */}
              <div
                className="px-7 py-5"
                style={{ background: 'linear-gradient(135deg,#e91e8c,#c2185b)' }}
              >
                <h3 className="font-display text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  Pixie Beauty Parlour
                </h3>
                <p className="text-white/75 text-sm mt-0.5 tracking-wide">Beauty Parlour & Women's Corner</p>
              </div>

              <div className="p-7 bg-white space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: '#fce4ec' }}>
                    <MapPin size={17} color="#e91e8c" />
                  </div>
                  <div>
                    <p className="font-semibold text-[13px] text-gray-700 mb-1">Address</p>
                    <address className="not-italic text-gray-500 text-sm leading-relaxed" lang="ta">
                      {BUSINESS.address.line1}<br />
                      {BUSINESS.address.line2}<br />
                      {BUSINESS.address.line3}<br />
                      {BUSINESS.address.line4}
                    </address>
                  </div>
                </div>

                <div className="h-px" style={{ background: 'rgba(233,30,140,0.07)' }} />

                {/* Phones */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: '#fce4ec' }}>
                    <Phone size={17} color="#e91e8c" />
                  </div>
                  <div>
                    <p className="font-semibold text-[13px] text-gray-700 mb-2">Phone Numbers</p>
                    <div className="space-y-1.5">
                      {BUSINESS.phones.map(({ number, label }) => (
                        <div key={number} className="flex items-center gap-2">
                          <span className="text-gray-300 text-xs w-16">{label}:</span>
                          <a href={`tel:${number}`}
                            className="font-semibold text-sm transition-colors hover:text-primary-dark"
                            style={{ color: '#e91e8c' }}
                            aria-label={`Call ${label}: ${number}`}>
                            {number}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="h-px" style={{ background: 'rgba(233,30,140,0.07)' }} />

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: '#fce4ec' }}>
                    <Clock size={17} color="#e91e8c" />
                  </div>
                  <div>
                    <p className="font-semibold text-[13px] text-gray-700 mb-1">Business Hours</p>
                    <p className="text-gray-500 text-sm">{BUSINESS.hours.weekdays}</p>
                    <p className="text-gray-500 text-sm">{BUSINESS.hours.sunday}</p>
                    <p className="text-gray-400 text-xs italic mt-1">{BUSINESS.hours.note}</p>
                  </div>
                </div>

                <div className="h-px" style={{ background: 'rgba(233,30,140,0.07)' }} />

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: '#fce4ec' }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#e91e8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[13px] text-gray-700 mb-1">Follow Us on Instagram</p>
                    <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-primary transition-colors font-medium">
                      @pixiebridalmakeup
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-3 gap-3">
              <a href={`tel:${BUSINESS.phones[0].number}`}
                className="btn-primary flex flex-col items-center gap-1.5 py-4 rounded-2xl text-white text-xs font-semibold shadow-lg shadow-primary/25"
                aria-label="Call us">
                <Phone size={20} />
                Call Now
              </a>
              <a href={getWhatsAppUrl(WHATSAPP_GENERAL_MSG)} target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 py-4 rounded-2xl text-white text-xs font-semibold transition-all hover:scale-[1.02] hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg,#25d366,#128c7e)' }}
                aria-label="WhatsApp">
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a href={BUSINESS.address.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="btn-gold flex flex-col items-center gap-1.5 py-4 rounded-2xl text-xs font-semibold shadow-lg shadow-gold/20"
                aria-label="Directions">
                <Navigation size={20} />
                Directions
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div
              className="rounded-3xl overflow-hidden h-80 lg:h-full min-h-[360px] relative"
              style={{ border: '1px solid rgba(233,30,140,0.1)', boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}
            >
              <iframe
                title="Pixie Beauty Parlour Location in Needamangalam"
                src="https://maps.google.com/maps?q=SBI+ATM,+Anna+Salai,+Needamangalam,+Tamil+Nadu&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map of Needamangalam, Tamil Nadu — approximate location of Pixie Beauty Parlour"
              />
              {/* Map overlay card */}
              <div
                className="absolute bottom-4 left-4 right-4 rounded-2xl p-3.5 flex items-center gap-3"
                style={{
                  background: 'rgba(255,255,255,0.94)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(233,30,140,0.12)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#e91e8c,#c2185b)' }}
                >
                  <MapPin size={15} color="white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-xs truncate" style={{ color: '#0f0f2d' }}>Pixie Beauty Parlour</p>
                  <p className="text-gray-400 text-[11px]" lang="ta">R.P. Complex, நீடாமங்கலம்</p>
                </div>
                <a
                  href={BUSINESS.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-1 text-[11px] font-semibold px-3 py-1.5 rounded-full text-white"
                  aria-label="Open in Google Maps"
                >
                  <ExternalLink size={10} />
                  Open
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
