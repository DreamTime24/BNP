export type Product = {
  id: string;
  sku: string;
  brand: string;
  name: string;
  slug: string;
  category: 'Skincare' | 'Cosmetics' | "Women's Watches";
  subcategory: string;
  description: string;
  shortDescription: string;
  price: number;
  compareAtPrice: number;
  currency: 'BDT';
  stock: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  tags: string[];
  featured: boolean;
  bestseller: boolean;
  newArrival: boolean;
  badge: string;
};

export const products: Product[] = [
  {
    id: 'prod-001',
    sku: 'LOR-REV-001',
    brand: "L'Oréal Paris",
    name: 'Revitalift Hyaluronic Acid Serum',
    slug: 'loreal-revitalift-hyaluronic-acid-serum',
    category: 'Skincare',
    subcategory: 'Serum',
    description: 'Deep hydration serum that plumps, smooths, and illuminates tired skin.',
    shortDescription: 'Hydrating serum for visible glow and bounce.',
    price: 1790,
    compareAtPrice: 2200,
    currency: 'BDT',
    stock: 18,
    rating: 4.8,
    reviewCount: 126,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['hydration', 'serum', 'glow'],
    featured: true,
    bestseller: true,
    newArrival: false,
    badge: 'Best Seller'
  },
  {
    id: 'prod-002',
    sku: 'CER-URC-014',
    brand: 'CeraVe',
    name: 'AM Facial Moisturizing Lotion',
    slug: 'cerave-am-facial-moisturizing-lotion',
    category: 'Skincare',
    subcategory: 'Moisturizer',
    description: 'Gentle daily moisturizer for the face with essential ceramides and hydrating actives.',
    shortDescription: 'Daily barrier-support moisturizer.',
    price: 1490,
    compareAtPrice: 1890,
    currency: 'BDT',
    stock: 24,
    rating: 4.7,
    reviewCount: 92,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['ceramides', 'moisturizer', 'daily care'],
    featured: true,
    bestseller: true,
    newArrival: true,
    badge: 'New'
  },
  {
    id: 'prod-003',
    sku: 'MAY-GLA-082',
    brand: 'Maybelline',
    name: 'Super Stay Matte Ink Liquid Lipstick',
    slug: 'maybelline-super-stay-matte-ink-lipstick',
    category: 'Cosmetics',
    subcategory: 'Lipstick',
    description: 'Long-wear liquid lipstick with rich pigments, matte finish, and easy application.',
    shortDescription: 'High-pigment matte lipstick for all-day wear.',
    price: 1190,
    compareAtPrice: 1490,
    currency: 'BDT',
    stock: 36,
    rating: 4.9,
    reviewCount: 204,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['lipstick', 'matte', 'long wear'],
    featured: false,
    bestseller: true,
    newArrival: true,
    badge: 'Top rated'
  },
  {
    id: 'prod-004',
    sku: 'CAS-LUX-001',
    brand: 'Casio',
    name: 'A168WA-1W Classic Women Watch',
    slug: 'casio-a168wa-1w-classic-women-watch',
    category: "Women's Watches",
    subcategory: 'Casual',
    description: 'Retro-inspired women’s watch with a minimalist dial, durable strap and everyday comfort.',
    shortDescription: 'Classic everyday watch with timeless design.',
    price: 2790,
    compareAtPrice: 3400,
    currency: 'BDT',
    stock: 15,
    rating: 4.6,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['watch', 'minimal', 'gift'],
    featured: true,
    bestseller: false,
    newArrival: true,
    badge: 'Gift pick'
  },
  {
    id: 'prod-005',
    sku: 'GEN-SUN-041',
    brand: 'Garnier',
    name: 'SkinActive UV Bright Ultimate Daily Sunscreen',
    slug: 'garnier-skinactive-uv-bright-ultimate-daily-sunscreen',
    category: 'Skincare',
    subcategory: 'Sunscreen',
    description: 'Lightweight daily SPF protection that brightens and helps preserve healthy-looking skin.',
    shortDescription: 'Daily SPF for smooth, radiant skin.',
    price: 1290,
    compareAtPrice: 1590,
    currency: 'BDT',
    stock: 28,
    rating: 4.7,
    reviewCount: 154,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['spf', 'sun protection', 'daily'],
    featured: true,
    bestseller: true,
    newArrival: false,
    badge: 'Top pick'
  },
  {
    id: 'prod-006',
    sku: 'NIX-PRM-021',
    brand: 'NYX',
    name: 'Can’t Stop Won’t Stop Foundation',
    slug: 'nyx-cant-stop-wont-stop-foundation',
    category: 'Cosmetics',
    subcategory: 'Foundation',
    description: 'Medium to full coverage foundation with a smooth, natural-looking finish.',
    shortDescription: 'Comfortable full-coverage foundation.',
    price: 1690,
    compareAtPrice: 1990,
    currency: 'BDT',
    stock: 31,
    rating: 4.5,
    reviewCount: 118,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['foundation', 'coverage', 'complexion'],
    featured: false,
    bestseller: true,
    newArrival: false,
    badge: 'Popular'
  },
  {
    id: 'prod-007',
    sku: 'FOS-MLN-055',
    brand: 'Fossil',
    name: 'Amelia Leather Watch',
    slug: 'fossil-amelia-leather-watch',
    category: "Women's Watches",
    subcategory: 'Leather',
    description: 'Minimal leather strap watch with chic proportions and polished detailing.',
    shortDescription: 'Elegant leather timepiece for everyday sophistication.',
    price: 3990,
    compareAtPrice: 4700,
    currency: 'BDT',
    stock: 12,
    rating: 4.8,
    reviewCount: 73,
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['leather', 'luxury', 'gift'],
    featured: true,
    bestseller: false,
    newArrival: false,
    badge: 'Luxury'
  },
  {
    id: 'prod-008',
    sku: 'TIT-ESS-078',
    brand: 'Titan',
    name: 'Raga Gold Tone Watch',
    slug: 'titan-raga-gold-tone-watch',
    category: "Women's Watches",
    subcategory: 'Minimal',
    description: 'Soft gold finish, delicate detail, and refined elegance for premium office wear.',
    shortDescription: 'Graceful gold-tone watch with premium charm.',
    price: 3490,
    compareAtPrice: 4200,
    currency: 'BDT',
    stock: 11,
    rating: 4.7,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['gold', 'dress watch', 'minimal'],
    featured: false,
    bestseller: true,
    newArrival: true,
    badge: 'New'
  },
  {
    id: 'prod-009',
    sku: 'THE-ORD-309',
    brand: 'The Ordinary',
    name: 'Niacinamide 10% + Zinc 1%',
    slug: 'the-ordinary-niacinamide-10-zinc-1',
    category: 'Skincare',
    subcategory: 'Serum',
    description: 'Oil-control treatment that visibly reduces excess sebum and improves skin clarity.',
    shortDescription: 'Targeted brightening and oil-balancing serum.',
    price: 980,
    compareAtPrice: 1250,
    currency: 'BDT',
    stock: 44,
    rating: 4.8,
    reviewCount: 289,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['niacinamide', 'oil control', 'balance'],
    featured: false,
    bestseller: true,
    newArrival: false,
    badge: 'Best value'
  },
  {
    id: 'prod-010',
    sku: 'LAN-MLT-005',
    brand: 'Laneige',
    name: 'Water Bank Blue Hyaluronic Cream',
    slug: 'laneige-water-bank-blue-hyaluronic-cream',
    category: 'Skincare',
    subcategory: 'Moisturizer',
    description: 'Weightless cream that infuses skin with hydration and comfort for long-lasting softness.',
    shortDescription: 'Hydrating cream with deep moisture lock-in.',
    price: 2490,
    compareAtPrice: 2990,
    currency: 'BDT',
    stock: 20,
    rating: 4.9,
    reviewCount: 186,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['hydration', 'cream', 'dew skin'],
    featured: true,
    bestseller: false,
    newArrival: true,
    badge: 'Glow mode'
  },
  {
    id: 'prod-011',
    sku: 'CLI-EYE-400',
    brand: 'Clinique',
    name: 'All About Eyes Serum De-Puffing Eye Gel',
    slug: 'clinique-all-about-eyes-serum-de-puffing-eye-gel',
    category: 'Skincare',
    subcategory: 'Eye Care',
    description: 'Lightweight eye treatment designed to reduce puffiness and brighten tired-looking eyes.',
    shortDescription: 'Under-eye refresh for a more awake look.',
    price: 2100,
    compareAtPrice: 2600,
    currency: 'BDT',
    stock: 16,
    rating: 4.7,
    reviewCount: 102,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['eye care', 'puffiness', 'brightening'],
    featured: false,
    bestseller: false,
    newArrival: false,
    badge: 'Eye care'
  },
  {
    id: 'prod-012',
    sku: 'NIV-LIP-090',
    brand: 'NIVEA',
    name: 'Nourishing Lip Care Stick',
    slug: 'nivea-nourishing-lip-care-stick',
    category: 'Skincare',
    subcategory: 'Lip Care',
    description: 'Comforting lip balm that nourishes and shields lips from dryness throughout the day.',
    shortDescription: 'Soft, supple lips with daily protection.',
    price: 390,
    compareAtPrice: 520,
    currency: 'BDT',
    stock: 56,
    rating: 4.6,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['lip care', 'nourishing', 'daily'],
    featured: false,
    bestseller: false,
    newArrival: true,
    badge: 'Daily essential'
  }
];

export const categories = [
  { name: 'Skincare', caption: 'Hydration, repair, glow', icon: 'sparkles' },
  { name: 'Cosmetics', caption: 'Makeup essentials', icon: 'palette' },
  { name: "Women's Watches", caption: 'Minimal luxury timepieces', icon: 'watch' },
  { name: 'Accessories', caption: 'Beauty companions', icon: 'bag' },
] as const;
