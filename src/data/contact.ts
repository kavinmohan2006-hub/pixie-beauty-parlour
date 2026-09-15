// ============================================================
// BUSINESS INFORMATION â€” Edit this file to update contact details
// ============================================================

export const BUSINESS = {
  name: 'Pixie Beauty Parlour',
  tagline: 'Beauty Parlour & Women\'s Corner',
  tamilTagline: 'à®¨à¯€à®Ÿà®¾à®®à®™à¯à®•à®²à®®à¯',
  heroHeadline: 'Your Beauty, Your Confidence',
  heroSubtext: 'Professional beauty and personal care services specially designed for women.',

  address: {
    line1: 'R.P. Complex,',
    line2: 'SBI ATM à®Žà®¤à®¿à®°à®¿à®²à¯,',
    line3: 'à®…à®£à¯à®£à®¾ à®šà®¾à®²à¯ˆ,',
    line4: 'à®¨à¯€à®Ÿà®¾à®®à®™à¯à®•à®²à®®à¯.',
    city: 'Needamangalam',
    googleMapsUrl: 'https://www.google.com/maps/search/SBI+ATM,+Anna+Salai,+Needamangalam,+Tamil+Nadu',
  },

  phones: [
    { number: '9944751199', label: 'Admin' },
    { number: '7418574373', label: 'Admin' },
    { number: '7418650972', label: 'Contact' },
    { number: '9944559491', label: 'Support' },
  ],

  // Primary WhatsApp number (include country code without +)
  whatsapp: '919944751199',
  
  // Business Email
  email: 'gkalai24@gmail.com',

  // Business hours â€” update when known
  hours: {
    weekdays: 'Monday â€” Saturday: 9:00 AM - 8:00 PM',
    sunday: 'Sunday: By Appointment',
    note: 'Call us to confirm availability',
  },

  social: {
    instagram: 'https://www.instagram.com/pixiebridalmakeup?stkn=cDFlNjU2cGQyNXVz',
  },
} as const;

// Pre-filled WhatsApp message helpers
export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_GENERAL_MSG = 'Hello Pixie Beauty Parlour, I would like to enquire about your services.';

export const WHATSAPP_BRIDAL_MSG = 'Hello Pixie Beauty Parlour, I am interested in your Bridal Package. Please share details.';
