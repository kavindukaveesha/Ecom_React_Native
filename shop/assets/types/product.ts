

// Add Product type definition
export interface Product {
  id: number;
  title: string;
  slug: string;
  heroImage: any;
  imagesUrl: any[];
  price: number;
  category: {
    imageUrl: any;
    name: string;
    slug: string;
  };
  maxQuantity: number;
  rating: number;
  description: string;
  specifications: Array<{
    label: string;
    value: string;
  }>;
  reviews: Array<{
    user: string;
    rating: number;
    comment: string;
    date: string;
  }>;
 }
