// ============================================================
// GALLERY DATA — Replace placeholder URLs with actual salon photos
// ============================================================

export interface GalleryItem {
  id: string;
  category: string;
  alt: string;
  // Replace the src values below with your actual salon photo URLs or import paths
  src: string;
}

// Using high-quality beauty/salon images from Unsplash focusing on Indian/South Indian Bridal & Makeup
// Replace src values with real Pixie Beauty Parlour photos when available
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    category: 'Bridal',
    alt: 'Traditional South Indian bridal makeup look',
    src: '/images/services/bridal_makeup.jpg',
  },
  {
    id: 'g2',
    category: 'Makeup',
    alt: 'Glamorous event makeup application',
    src: '/images/services/party_makeup.jpg',
  },
  {
    id: 'g3',
    category: 'Hair',
    alt: 'Professional bridal hair styling with flowers',
    src: '/images/services/haircut.jpg',
  },
  {
    id: 'g4',
    category: 'Bridal',
    alt: 'Complete bridal transformation with silk saree and temple jewellery',
    src: '/images/services/engagement_makeup.jpg',
  },
  {
    id: 'g5',
    category: 'Makeup',
    alt: 'Professional Indian makeup artistry close-up',
    src: '/images/services/facial.jpg',
  },
  {
    id: 'g6',
    category: 'Nails',
    alt: 'Artistic manicure and nail art design',
    src: '/images/services/manicure.jpg',
  },
  {
    id: 'g7',
    category: 'Hair',
    alt: 'Luxurious hair styling for functions',
    src: '/images/services/hairspa.jpg',
  },
  {
    id: 'g8',
    category: 'Salon',
    alt: 'Elegant beauty salon interior',
    src: '/images/gallery/salon_1.jpg',
  },
  {
    id: 'g9',
    category: 'Bridal',
    alt: 'Saree draping and styling',
    src: '/images/services/saree_draping.jpg',
  },
  {
    id: 'g10',
    category: 'Makeup',
    alt: 'Traditional Indian festive makeup',
    src: '/images/services/skincare.jpg',
  },
  {
    id: 'g11',
    category: 'Nails',
    alt: 'Relaxing pedicure treatment',
    src: '/images/services/pedicure.jpg',
  },
  {
    id: 'g12',
    category: 'Salon',
    alt: 'Pixie Beauty Parlour - welcoming salon atmosphere',
    src: '/images/gallery/salon_2.jpg',
  },
  {
    id: 'g13',
    category: 'Makeup',
    alt: 'Eyebrow threading and shaping',
    src: '/images/services/eyebrow.jpg',
  },
  {
    id: 'g14',
    category: 'Bridal',
    alt: 'Mehendi bridal design on hands',
    src: '/images/services/mehendi.jpg',
  },
  {
    id: 'g15',
    category: 'Makeup',
    alt: 'Reception evening makeup look',
    src: '/images/gallery/work_reception.jpg',
  },
  {
    id: 'g16',
    category: 'Salon',
    alt: 'Beauty treatment in progress at Pixie Beauty Parlour',
    src: '/images/gallery/work_babyshower.jpg',
  },
];

export const GALLERY_CATEGORIES = ['All', 'Bridal', 'Makeup', 'Hair', 'Nails', 'Salon'];
