export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface OrderDetails {
  orderNumber: string;
  total: number;
  subtotal: number;
  tax: number;
  status: 'pending' | 'completed' | 'cancelled';
  date: string;
  items: CartItem[];
}
