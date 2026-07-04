import { Perfume, Feature, Benefit, Testimonial } from './types';

// Asset paths (from generated high-quality assets)
export const BRAND_LOGO = '/src/assets/images/midshelf_logo_1783157189647.jpg';
export const HERO_BG = '/src/assets/images/hero_perfume_bg_1783157207800.jpg';

export const PERFUMES: Perfume[] = [
  {
    id: 'luxury-noir',
    name: 'Luxury Noir',
    tagline: 'Elegant woody fragrance for everyday confidence.',
    description: 'A sophisticated combination of dry woods, rich amber, and fresh citrus. Formulated for the modern individual who carries herself/himself with effortless grace and unwavering confidence. Perfect for transitioning from daytime elegance to nocturnal allure.',
    price: '$120.00',
    volume: '100ml / 3.4 fl. oz.',
    image: '/src/assets/images/WhatsApp Image 2026-07-04 at 10.36.09 AM.jpeg',
    type: 'Eau de Parfum (EDP)',
    topNotes: ['Bergamot', 'Grapefruit', 'Pink Pepper'],
    heartNotes: ['Cedarwood', 'Patchouli', 'Vetyver'],
    baseNotes: ['Sandalwood', 'Golden Amber', 'White Musk'],
    longevity: '8-10 Hours',
    sillage: 'Moderate to Strong'
  },
  {
    id: 'velvet-bloom',
    name: 'Velvet Bloom',
    tagline: 'Fresh floral fragrance with lasting elegance.',
    description: 'An ethereal journey through a morning blooming garden. Crisp white florals intertwined with sweet, dewy rose petals and a touch of powdery musk. Designed for the elegant romantic who appreciates fine craftsmanship and timeless style.',
    price: '$115.00',
    volume: '100ml / 3.4 fl. oz.',
    image: '/src/assets/images/WhatsApp Image 2026-07-04 at 10.36.10 AM.jpeg',
    type: 'Eau de Parfum (EDP)',
    topNotes: ['Dewy Pear', 'Mandarin', 'Neroli'],
    heartNotes: ['Damask Rose', 'Jasmine Sambac', 'Peony'],
    baseNotes: ['Powdery Musk', 'Vanilla Orchid', 'Warm Cedar'],
    longevity: '7-9 Hours',
    sillage: 'Moderate'
  },
  {
    id: 'royal-oud',
    name: 'Royal Oud',
    tagline: 'Rich oriental fragrance with premium notes.',
    description: 'A majestic blend of rich Cambodian Oud, warm spices, and exotic resins. Deep, mysterious, and incredibly powerful, Royal Oud pays homage to traditional Middle Eastern high perfumery with a modern European finish.',
    price: '$145.00',
    volume: '100ml / 3.4 fl. oz.',
    image: '/src/assets/images/WhatsApp Image 2026-07-04 at 10.36.09 AM (1).jpeg',
    type: 'Extraits de Parfum',
    topNotes: ['Saffron', 'Nutmeg', 'Cardamom'],
    heartNotes: ['Cambodian Oud', 'Frankincense', 'Myrrh'],
    baseNotes: ['Leather', 'Dark Patchouli', 'Creamy Sandalwood'],
    longevity: '12+ Hours',
    sillage: 'Enveloping'
  }
];

export const HERO_FEATURES: Feature[] = [
  {
    icon: 'fa-solid fa-wand-magic-sparkles',
    title: 'Designer & Niche Perfumes',
    description: 'Exquisite curation from elite global perfumers.'
  },
  {
    icon: 'fa-solid fa-truck-fast',
    title: 'Nationwide Delivery',
    description: 'Insured and expedited delivery directly to your doorstep.'
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Secure Bank Transfer',
    description: 'Encrypted and officially verified direct payment channels.'
  }
];

export const WHY_CHOOSE_US: Benefit[] = [
  {
    icon: 'fa-solid fa-gem',
    title: 'Designer & Niche Collection',
    description: 'We curate hard-to-find niche masterpieces and premier designer icons with exceptional, rare scent profiles.'
  },
  {
    icon: 'fa-solid fa-award',
    title: 'Premium Quality',
    description: 'We source only 100% authentic bottles containing higher fragrance oil concentrations for long-lasting sillage.'
  },
  {
    icon: 'fa-solid fa-gift',
    title: 'Luxury Packaging',
    description: 'Every fragrance is lovingly enclosed in double-walled secure boxes with custom silk linings, ideal for gifting.'
  },
  {
    icon: 'fa-solid fa-truck',
    title: 'Nationwide Delivery',
    description: 'Our express, trackable, and fully insured shipping networks deliver with incredible safety across the entire country.'
  },
  {
    icon: 'fa-solid fa-vault',
    title: 'Secure Bank Transfer',
    description: 'Enjoy peace of mind with 100% secure, direct bank-to-bank instant verification with automated digital receipts.'
  },
  {
    icon: 'fa-solid fa-headset',
    title: 'Friendly Customer Support',
    description: 'Our certified fragrance consultants are ready 24/7 to help you select your signature scent and guide your journey.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    rating: 5,
    text: "The fragrance quality exceeded my expectations. Beautiful packaging and fast delivery.",
    author: "Elena Rostov",
    location: "Verified Collector"
  },
  {
    rating: 5,
    text: "My favorite place to buy designer perfumes.",
    author: "Jonathan Brooks",
    location: "Fragrance Connoisseur"
  },
  {
    rating: 5,
    text: "Luxury experience from ordering to delivery.",
    author: "Sophia Alvarez",
    location: "Fashion Influencer"
  }
];
