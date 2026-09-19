import React, { useState } from 'react';
import { Send, Phone, MessageCircle, Calendar, Clock, User, Smartphone, CheckCircle2 } from 'lucide-react';
import { BUSINESS, getWhatsAppUrl } from '../data/contact';
import { SERVICES } from '../data/services';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { supabase } from '../lib/supabase';

interface FormState { name:string; phone:string; whatsapp:string; service:string; date:string; time:string; message:string; }
const INIT: FormState = { name:'', phone:'', whatsapp:'', service:'', date:'', time:'', message:'' };

const inputBase = 'w-full px-4 py-3 rounded-xl text-sm text-gray-700 placeholder-gray-400 bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300';
const inputStyle = { border: '1.5px solid rgba(233,30Rs.40,0.15)' };

export const Appointment: React.FC = () => {
  const [form, setForm]     = useState<FormState>(INIT);
  const [done, setDone]     = useState(false);
  const [loading, setLoading] = useState(false);
  const [ref, isVisible]    = useScrollAnimation();

  const change = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const matchedService = SERVICES.find(s => s.name === form.service);
    const servicePrice = matchedService ? matchedService.price : undefined;

    // 1. Generate WhatsApp URL
    const msg = [
      'Hello Pixie Beauty Parlour,',
      'I would like to book an appointment.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `WhatsApp: ${form.whatsapp || 'Same as phone'}`,
      `Service: ${form.service || 'Not specified'}${servicePrice ? ` (Rs.${servicePrice})` : ''}`,
      `Preferred Date: ${form.date || 'Not specified'}`,
      `Preferred Time: ${form.time || 'Not specified'}`,
      `Message: ${form.message || 'No additional message'}`,
    ].join('\n');
    
    // OPEN WHATSAPP IMMEDIATELY before await to prevent Browser Popup Blocker!
    window.open(getWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');

    try {
      // 2. Save to Supabase Backend
      const { error } = await supabase
        .from('bookings')
        .insert([
          {
            customer_name: form.name,
            customer_phone: form.phone,
            customer_whatsapp: form.whatsapp,
            service: form.service,
            booking_date: form.date,
            booking_time: form.time,
            notes: form.message,
            price: servicePrice,
          },
        ]);
      if (error) {
        console.error('Supabase insert error:', error);
        throw error;
      }

      // Trigger instant update for Admin Portal
      window.dispatchEvent(new Event('bookingAdded'));

      setDone(true);
      setTimeout(() => { setDone(false); setForm(INIT); }, 4500);
    } catch (err) {
      console.error('Error saving booking:', err);
      // We don't alert here because WhatsApp already opened successfully
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 relative overflow-hidden bg-pink-soft"
      style={{ background: 'linear-gradient(180deg,#fff8f5 0%,#fce4ec 55%,#fff8f5 100%)' }}>

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle,rgba(233,30Rs.40,0.08),transparent)', transform: 'translate(40%,-40%)' }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={ref} className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow-pink mb-4 inline-flex">✦ Book Now</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold" style={{ color: '#0f0f2d', fontFamily: 'var(--font-display)' }}>
            Book Your <span className="pink-text">Appointment</span>
          </h2>
          <div className="divider-ornament mt-5 mb-5 max-w-xs mx-auto"><span className="text-gold text-lg">✦</span></div>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Fill in the form to pre-book your appointment. We will save your details securely and confirm via WhatsApp!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Left panel */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div
              className="rounded-3xl overflow-hidden h-full"
              style={{ background: 'linear-gradient(145deg,#e91e8c,#c2185b)', boxShadow: '0 32px 80px rgba(233,30Rs.40,0.3)' }}
            >
              {/* Top decor */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle,white,transparent)', transform: 'translate(30%,-30%)' }} aria-hidden="true" />

              <div className="p-7 sm:p-8 h-full flex flex-col">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    Contact Us Directly
                  </h3>
                  <p className="text-white/65 text-sm mb-8">Prefer to call or WhatsApp? We're always here for you.</p>

                  {/* Phones */}
                  <div className="space-y-4 mb-8">
                    {BUSINESS.phones.map(({ number, label }) => (
                      <div key={number} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(255,255,255,0.15)' }}>
                          <Phone size={16} color="white" />
                        </div>
                        <div>
                          <p className="text-white/50 text-[11px] uppercase tracking-wider">{label}</p>
                          <a href={`tel:${number}`}
                            className="text-white font-semibold text-sm hover:text-white/80 transition-colors"
                            aria-label={`Call ${label}`}>{number}</a>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp */}
                  <a href={getWhatsAppUrl('Hello Pixie Beauty Parlour, I would like to book an appointment.')}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg mb-4"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.3)' }}>
                    <MessageCircle size={17} className="text-green-300" />
                    WhatsApp Us Now
                  </a>
                  <a
                    href={`tel:${BUSINESS.phones[0].number}`}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-semibold text-white bg-pink-600 hover:bg-pink-700"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.3)' }}
                  >
                    <Phone size={17} className="text-white" />
                    Call Store
                  </a>
                </div>

                {/* Hours */}
                <div className="mt-auto pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                  <div className="flex items-start gap-3">
                    <Clock size={15} color="rgba(255,255,255,0.6)" className="mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white/90 text-sm font-semibold mb-1">Business Hours</p>
                      <p className="text-white/55 text-xs">{BUSINESS.hours.weekdays}</p>
                      <p className="text-white/55 text-xs">{BUSINESS.hours.sunday}</p>
                      <p className="text-white/40 text-xs italic mt-1">{BUSINESS.hours.note}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div
              className="rounded-3xl p-7 sm:p-9 h-full"
              style={{ background: 'white', boxShadow: '0 8px 48px rgba(233,30Rs.40,0.08)', border: '1px solid rgba(233,30Rs.40,0.08)' }}
            >
              {done ? (
                <div className="text-center py-14">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'linear-gradient(135deg,#22c55e,#16a34a)', boxShadow: '0 12px 40px rgba(34Rs.97,94,0.35)' }}
                  >
                    <CheckCircle2 size={32} color="white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3"
                    style={{ color: '#0f0f2d', fontFamily: 'var(--font-display)' }}>
                    Booking Received! 🎉
                  </h3>
                  <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed">
                    Your appointment has been saved successfully. We've also opened WhatsApp so you can send us a message!
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <h3 className="font-display text-xl font-bold mb-6" style={{ color: '#0f0f2d', fontFamily: 'var(--font-display)' }}>
                    Fill in your details
                  </h3>

                  <div className="mb-4">
                    <label htmlFor="appt-name" className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">Full Name *</label>
                    <div className="relative">
                      <User size={14} color="#d4af37" className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                      <input id="appt-name" name="name" type="text" required placeholder="Your name"
                        value={form.name} onChange={change}
                        className={`${inputBase} pl-9`} style={inputStyle} aria-required="true" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {/* Phone */}
                    <div>
                      <label htmlFor="appt-phone" className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">Mobile Number *</label>
                      <div className="relative">
                        <Smartphone size={14} color="#d4af37" className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                        <input id="appt-phone" name="phone" type="tel" required placeholder="Your phone number"
                          value={form.phone} onChange={change}
                          className={`${inputBase} pl-9`} style={inputStyle} aria-required="true" />
                      </div>
                    </div>
                    {/* WhatsApp */}
                    <div>
                      <label htmlFor="appt-whatsapp" className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">WhatsApp Number (Optional)</label>
                      <div className="relative">
                        <MessageCircle size={14} color="#25D366" className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                        <input id="appt-whatsapp" name="whatsapp" type="tel" placeholder="Same as mobile if empty"
                          value={form.whatsapp} onChange={change}
                          className={`${inputBase} pl-9`} style={inputStyle} />
                      </div>
                    </div>
                  </div>

                  {/* Service */}
                  <div className="mb-4">
                    <label htmlFor="appt-service" className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">Select Service</label>
                    <select id="appt-service" name="service" value={form.service} onChange={change}
                      className={inputBase} style={inputStyle}>
                      <option value="">-- Choose a service --</option>
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.name}>
                          {s.name} — Rs.{s.price}
                        </option>
                      ))}
                      <option value="Other">Other / Multiple Services</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {/* Date */}
                    <div>
                      <label htmlFor="appt-date" className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">Preferred Date</label>
                      <div className="relative">
                        <Calendar size={14} color="#d4af37" className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                        <input id="appt-date" name="date" type="date" value={form.date} onChange={change}
                          min={new Date().toISOString().split('T')[0]}
                          className={`${inputBase} pl-9`} style={inputStyle} />
                      </div>
                    </div>
                    {/* Time */}
                    <div>
                      <label htmlFor="appt-time" className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">Preferred Time</label>
                      <div className="relative">
                        <Clock size={14} color="#d4af37" className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                        <input id="appt-time" name="time" type="time" value={form.time} onChange={change}
                          className={`${inputBase} pl-9`} style={inputStyle} />
                      </div>
                    </div>
                  </div>

                  <button type="submit" disabled={!form.name || !form.phone || loading}
                    className="btn-primary w-full py-4 rounded-2xl text-white font-semibold text-base flex items-center justify-center gap-2 shadow-lg shadow-primary/25 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all">
                    {loading ? (
                      <span className="flex items-center gap-2"><span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span> Saving Booking...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        Confirm Booking
                      </>
                    )}
                  </button>
                  <p className="text-center text-gray-400 text-xs mt-3">Your data is saved securely in our system</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

