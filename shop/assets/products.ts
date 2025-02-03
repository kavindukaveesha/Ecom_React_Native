import { Product } from "./types/product";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'MacBook Pro (2024)',
    slug: 'macbook-pro-2024',
    heroImage: require('../assets/images/mac-book-1.jpg'),
    imagesUrl: [
      require('../assets/images/mac-book-1.jpg'),
      require('../assets/images/mac-book-2.jpg'),
      require('../assets/images/mac-book-3.jpg'),
    ],
    price: 2499.99,
    category: {
      imageUrl: require('../assets/images/mac-book-1.jpg'),
      name: 'Laptops',
      slug: 'laptops',
    },
    maxQuantity: 5,
    rating: 4.9,
    description: 'The latest MacBook Pro featuring M3 Pro chip, 16-inch Liquid Retina XDR display, and up to 22 hours battery life.',
    specifications: [
      { label: 'Processor', value: 'M3 Pro' },
      { label: 'RAM', value: '32GB Unified Memory' },
      { label: 'Storage', value: '1TB SSD' },
      { label: 'Display', value: '16" Liquid Retina XDR' },
      { label: 'Battery', value: 'Up to 22 hours' },
      { label: 'Weight', value: '2.14 kg' }
    ],
    reviews: [
      {
        user: 'John D.',
        rating: 5,
        comment: 'Incredible performance and battery life!',
        date: '2024-01-15'
      },
      {
        user: 'Sarah M.',
        rating: 4.8,
        comment: 'Perfect for professional work, but expensive.',
        date: '2024-01-12'
      }
    ]
  },
  // Similar detailed data for Dell XPS 13...
  {
    id: 2,
    title: 'iPhone 15 Pro Max',
    slug: 'iphone-15-pro-max',
    heroImage: require('../assets/images/i-phone-1.jpg'),
    imagesUrl: [
      require('../assets/images/i-phone-1.jpg'),
      require('../assets/images/i-phone-2.jpg'),
      require('../assets/images/i-phone-3.jpg'),
    ],
    price: 1199.99,
    category: {
      imageUrl: require('../assets/images/i-phone-1.jpg'),
      name: 'Phones',
      slug: 'phones',
    },
    maxQuantity: 10,
    rating: 4.8,
    description: 'The most advanced iPhone ever with A17 Pro chip, titanium design, and advanced camera system.',
    specifications: [
      { label: 'Processor', value: 'A17 Pro' },
      { label: 'Storage', value: '256GB' },
      { label: 'Display', value: '6.7" OLED Super Retina XDR' },
      { label: 'Camera', value: '48MP Main + 12MP Ultra Wide' },
      { label: 'Battery', value: '4422mAh' }
    ],
    reviews: [
      {
        user: 'Mike R.',
        rating: 5,
        comment: 'Best iPhone camera ever. Love the titanium finish.',
        date: '2024-01-18'
      }
    ]
  },
  // Add similar detailed data for all other products...
  {
    id: 3,
    title: 'Sony WH-1000XM5',
    slug: 'sony-headphones',
    heroImage: require('../assets/images/head-set-1.jpg'),
    imagesUrl: [
      require('../assets/images/head-set-1.jpg'),
      require('../assets/images/head-set-2.jpg'),
    ],
    price: 399.99,
    category: {
      imageUrl: require('../assets/images/head-set-1.jpg'),
      name: 'Accessories',
      slug: 'accessories',
    },
    maxQuantity: 15,
    rating: 4.7,
    description: 'Industry-leading noise cancelling headphones with exceptional sound quality.',
    specifications: [
      { label: 'Battery Life', value: 'Up to 30 hours' },
      { label: 'Noise Cancelling', value: 'Advanced ANC' },
      { label: 'Connectivity', value: 'Bluetooth 5.2' },
      { label: 'Weight', value: '250g' }
    ],
    reviews: [
      {
        user: 'Alex K.',
        rating: 4.7,
        comment: 'Best noise cancellation in the market.',
        date: '2024-01-10'
      }
    ]
  },
  // Continue with similar detailed data for PS5, Nintendo Switch, etc.
 ];
 
 