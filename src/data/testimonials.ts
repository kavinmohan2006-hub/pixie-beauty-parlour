// ============================================================
// TESTIMONIALS — PLACEHOLDER DATA
// These are example/placeholder reviews for layout purposes only.
// Replace with real customer reviews when collected.
// ============================================================

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number; // 1-5
  review: string;
  isPlaceholder: true; // Always true until replaced with real reviews
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya R.',
    service: 'Bridal Makeup',
    rating: 5,
    review:
      'Absolutely loved my bridal look! The team at Pixie Beauty Parlour made me feel so special and beautiful on my wedding day. The makeup lasted all day and I received so many compliments.',
    isPlaceholder: true,
  },
  {
    id: 't2',
    name: 'Kavitha S.',
    service: 'Facial & Skin Care',
    rating: 5,
    review:
      'Very neat and comfortable salon. The facial treatment was relaxing and my skin felt so fresh and glowing afterward. The staff is friendly and professional.',
    isPlaceholder: true,
  },
  {
    id: 't3',
    name: 'Meena D.',
    service: 'Hair Spa',
    rating: 5,
    review:
      'My hair feels incredibly soft and shiny after the hair spa treatment. The staff was gentle and attentive. I will definitely be coming back regularly!',
    isPlaceholder: true,
  },
  {
    id: 't4',
    name: 'Sathya L.',
    service: 'Party Makeup',
    rating: 5,
    review:
      'Beautiful experience and very friendly service. The makeup was done exactly as I wanted for the family function. Very satisfied with the outcome.',
    isPlaceholder: true,
  },
  {
    id: 't5',
    name: 'Anitha V.',
    service: 'Manicure & Pedicure',
    rating: 5,
    review:
      'The salon is very clean and hygienic. The manicure and pedicure service was thorough and relaxing. The staff gives personalized attention to every client.',
    isPlaceholder: true,
  },
  {
    id: 't6',
    name: 'Rekha M.',
    service: 'Mehendi',
    rating: 5,
    review:
      'The mehendi designs were so intricate and beautiful! I got it done for my cousin\'s wedding and everyone loved it. Great service at a great location.',
    isPlaceholder: true,
  },
];
