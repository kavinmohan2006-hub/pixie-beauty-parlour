// ============================================================
// SERVICES DATA — Add, remove or edit services and prices here
// ============================================================

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string; // Lucide icon name
  price: number; // Customer happy price in ₹
  originalPrice?: number; // Regular salon price in ₹
  startingFrom?: boolean; // whether price starts from
  popular?: boolean; // highlight popular services
}

export const SERVICES: Service[] = [
  {
    id: 'eyebrow',
    name: 'Eyebrow / Threading',
    description:
      'Expert eyebrow shaping, upper lip and facial threading for a neat and defined look.',
    category: 'Face',
    icon: 'Zap',
    price: 40,
    originalPrice: 60,
    startingFrom: true,
  },
  {
    id: 'haircut',
    name: 'Hair Cut & Styling',
    description:
      'Precision haircuts (Straight, U-Cut, Layers, Feather) tailored to your face shape.',
    category: 'Hair',
    icon: 'Scissors',
    price: 149,
    originalPrice: 249,
    startingFrom: true,
  },
  {
    id: 'hairspa',
    name: 'Hair Spa',
    description:
      'Deep conditioning and rejuvenating hair spa treatments to restore shine, strength and softness.',
    category: 'Hair',
    icon: 'Sparkles',
    price: 499,
    originalPrice: 799,
    startingFrom: true,
    popular: true,
  },
  {
    id: 'facial',
    name: 'Facial & Glow Care',
    description:
      'Customized facials (Fruit, Herbal, Gold Glow) that cleanse, nourish and brighten your skin.',
    category: 'Skin',
    icon: 'Star',
    price: 499,
    originalPrice: 799,
    startingFrom: true,
    popular: true,
  },
  {
    id: 'skincare',
    name: 'Skin Care & D-Tan',
    description:
      'Targeted skin care treatments for instant tan removal, deep hydration, and natural glow.',
    category: 'Skin',
    icon: 'Heart',
    price: 299,
    originalPrice: 449,
    startingFrom: true,
  },
  {
    id: 'manicure',
    name: 'Manicure',
    description:
      'Relaxing hand spa, scrub, massage and nail grooming for soft, beautiful hands.',
    category: 'Nails',
    icon: 'Hand',
    price: 249,
    originalPrice: 399,
    startingFrom: true,
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    description:
      'Soothing foot spa, heel crack treatment, massage and neat nail grooming.',
    category: 'Nails',
    icon: 'Footprints',
    price: 299,
    originalPrice: 499,
    startingFrom: true,
  },
  {
    id: 'party-makeup',
    name: 'Party Makeup',
    description:
      'Glamorous, long-lasting makeup looks perfect for parties, family functions and celebrations.',
    category: 'Makeup',
    icon: 'Wand2',
    price: 999,
    originalPrice: 1499,
    startingFrom: true,
  },
  {
    id: 'engagement-makeup',
    name: 'Engagement Makeup',
    description:
      'Flawless HD makeup, elegant hairstyle & saree/lehenga draping for your special milestone.',
    category: 'Makeup',
    icon: 'Gem',
    price: 2499,
    originalPrice: 3499,
    startingFrom: true,
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup Package',
    description:
      'Stunning bridal makeover crafted with premium HD products, hairstyling, and draping for your wedding day.',
    category: 'Bridal',
    icon: 'Crown',
    price: 4999,
    originalPrice: 6999,
    startingFrom: true,
    popular: true,
  },
  {
    id: 'mehendi',
    name: 'Mehendi',
    description:
      'Intricate traditional and Arabic mehendi designs using 100% natural organic henna.',
    category: 'Bridal',
    icon: 'Leaf',
    price: 199,
    originalPrice: 299,
    startingFrom: true,
  },
  {
    id: 'saree-draping',
    name: 'Saree Draping & Pre-Pleating',
    description:
      'Flawless saree pleating and draping in traditional & modern styles for weddings and events.',
    category: 'Bridal',
    icon: 'Layers',
    price: 149,
    originalPrice: 249,
    startingFrom: true,
  },
];

export const SERVICE_CATEGORIES = ['All', 'Face', 'Hair', 'Skin', 'Makeup', 'Nails', 'Bridal'];
