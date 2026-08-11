export type ProductCategory = 
  | 'All'
  | 'Skin Care'
  | 'Hair Care'
  | 'Home Care'
  | 'Oral Care'
  | 'Sustainable Goods'
  | 'Bioenzyme';

export type EcoTag = 
  | '100% Natural'
  | 'Sulfate & Paraben Free'
  | 'Plastic Free'
  | 'Zero Waste'
  | 'Handcrafted'
  | 'Local Assam Sourcing'
  | 'Cruelty Free'
  | 'Toxin Free'
  | 'Bioenzyme';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  rating: number;
  reviewsCount: number;
  image: string;
  tags: EcoTag[];
  summary: string;
  description: string;
  ingredients?: string[];
  howToUse?: string;
  weightVolume: string;
  stockStatus: 'In Stock' | 'Low Stock' | 'Pre-Order';
  isBestSeller?: boolean;
  isNewArrival?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Workshop {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  duration: string;
  fee: number;
  mode: 'In-Person (Guwahati)' | 'Online Live';
  instructor: string;
  spotsLeft: number;
  description: string;
  learnings: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Products' | 'Bioenzymes' | 'Shipping & Orders';
}
