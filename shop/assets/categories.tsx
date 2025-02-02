import { PRODUCTS } from "./products";
import { Category } from "./types/category";

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Laptops',
    slug: 'laptops',
    icon: 'laptop-outline',
    products: PRODUCTS.filter(product => product.category.slug === 'laptops'),
  },
  {
    id: '2',
    name: 'Smart phones', 
    slug: 'phones',
    icon: 'phone-portrait-outline',
    products: PRODUCTS.filter(product => product.category.slug === 'phones'),
  },
  {
    id: '3',
    name: 'Gaming',
    slug: 'gaming',
    icon: 'game-controller-outline',
    products: PRODUCTS.filter(product => product.category.slug === 'gaming'),
  },
  {
    id: '4',
    name: 'Audio',
    slug: 'audio',
    icon: 'headset-outline', 
    products: PRODUCTS.filter(product => product.category.slug === 'audio'),
  },
  {
    id: '5',
    name: 'Tablets',
    slug: 'tablets',
    icon: 'tablet-landscape-outline',
    products: PRODUCTS.filter(product => product.category.slug === 'tablets'),
  },
  {
    id: '6',
    name: 'Cameras',
    slug: 'cameras',
    icon: 'camera-outline',
    products: PRODUCTS.filter(product => product.category.slug === 'cameras'),
  },
  {
    id: '7',
    name: 'Smart Home',
    slug: 'smart-home',
    icon: 'home-outline',
    products: PRODUCTS.filter(product => product.category.slug === 'smart-home'),
  },
  {
    id: '8',
    name: 'Wearables',
    slug: 'wearables',
    icon: 'watch-outline',
    products: PRODUCTS.filter(product => product.category.slug === 'wearables'),
  },
  {
    id: '9',
    name: 'TV & Video',
    slug: 'tv-video',
    icon: 'tv-outline',
    products: PRODUCTS.filter(product => product.category.slug === 'tv-video'),
  },
  {
    id: '10',
    name: 'Storage',
    slug: 'storage',
    icon: 'hardware-chip-outline',
    products: PRODUCTS.filter(product => product.category.slug === 'storage'),
  }
];