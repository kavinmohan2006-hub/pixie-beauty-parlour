import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS, getWhatsAppUrl, WHATSAPP_GENERAL_MSG } from '../data/contact';

export const FloatingButtons: React.FC = () => {
  const scrollToAppointment = () => {
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Desktop/Tablet Floating Action Buttons ────────── */}
      <div
        className="fixed right-4 sm:right-6 bottom-24 sm:bottom-8 z-40 flex flex-col gap-3 hidden sm:flex"
        role="region"
        aria-label="Quick contact buttons"
      >
        {/* WhatsApp FAB */}
        <a
          href={getWhatsAppUrl(WHATSAPP_GENERAL_MSG)}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:w-auto hover:px-4 overflow-hidden"
          style={{ background: '#25d366', boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={22} color="white" className="flex-shrink-0" />
          <span className="hidden group-hover:inline ml-2 text-white text-sm font-semibold whitespace-nowrap">
            WhatsApp
          </span>
        </a>

        {/* Call FAB */}
        <a
          href={`tel:${BUSINESS.phones[0].number}`}
          className="group w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:w-auto hover:px-4 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg,#e91e8c,#c2185b)',
            boxShadow: '0 4px 20px rgba(233,30,140,0.4)',
          }}
          aria-label={`Call us at ${BUSINESS.phones[0].number}`}
        >
          <Phone size={20} color="white" className="flex-shrink-0" />
          <span className="hidden group-hover:inline ml-2 text-white text-sm font-semibold whitespace-nowrap">
            Call Now
          </span>
        </a>
      </div>

      {/* ── Mobile Floating WhatsApp button (bottom right) ── */}
      <a
        href={getWhatsAppUrl(WHATSAPP_GENERAL_MSG)}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:hidden fixed right-4 bottom-24 z-40 w-13 h-13 rounded-full flex items-center justify-center shadow-xl animate-float-slow"
        style={{
          background: '#25d366',
          boxShadow: '0 6px 24px rgba(37,211,102,0.45)',
          width: '52px',
          height: '52px',
        }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} color="white" />
      </a>

      {/* ── Mobile Bottom CTA Bar ─────────────────────────── */}
      <div
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 pb-safe"
        role="region"
        aria-label="Mobile quick actions"
      >
        <div
          className="flex items-stretch border-t"
          style={{
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(16px)',
            borderColor: '#fce4ec',
            boxShadow: '0 -4px 20px rgba(233,30,140,0.12)',
          }}
        >
          {/* Call */}
          <a
            href={`tel:${BUSINESS.phones[0].number}`}
            className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold transition-colors hover:bg-primary/5"
            style={{ color: '#e91e8c' }}
            aria-label={`Call us at ${BUSINESS.phones[0].number}`}
          >
            <Phone size={18} />
            Call
          </a>

          {/* Divider */}
          <div className="w-px my-2" style={{ background: '#fce4ec' }} aria-hidden="true" />

          {/* WhatsApp */}
          <a
            href={getWhatsAppUrl(WHATSAPP_GENERAL_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold transition-colors hover:bg-green-50"
            style={{ color: '#25d366' }}
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          {/* Divider */}
          <div className="w-px my-2" style={{ background: '#fce4ec' }} aria-hidden="true" />

          {/* Book Now */}
          <button
            onClick={scrollToAppointment}
            className="btn-primary flex-1 flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-white"
          >
            <Calendar size={18} />
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};
