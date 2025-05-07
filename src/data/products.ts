
import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets and electronic devices',
    imageUrl: '/placeholder.svg',
    productCount: 12
  },
  {
    id: 'clothing',
    name: 'Clothing',
    description: 'Fashion items for all seasons',
    imageUrl: '/placeholder.svg',
    productCount: 15
  },
  {
    id: 'home',
    name: 'Home & Kitchen',
    description: 'Everything you need for your home',
    imageUrl: '/placeholder.svg',
    productCount: 9
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    description: 'Gear for all your athletic needs',
    imageUrl: '/placeholder.svg',
    productCount: 8
  },
  {
    id: 'books',
    name: 'Books',
    description: 'Wide selection of books for all readers',
    imageUrl: '/placeholder.svg',
    productCount: 20
  },
  {
    id: 'beauty',
    name: 'Beauty',
    description: 'Cosmetics and personal care products',
    imageUrl: '/placeholder.svg',
    productCount: 14
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Premium wireless headphones with noise cancellation technology for an immersive audio experience.',
    price: 99.99,
    imageUrl: '/placeholder.svg',
    stock: 50,
    categoryId: 'electronics',
    category: 'Electronics',
    isNew: true,
    rating: 4.5,
    reviewCount: 124
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Feature-packed smartwatch with health tracking, notifications, and customizable faces.',
    price: 199.99,
    originalPrice: 249.99,
    imageUrl: '/placeholder.svg',
    stock: 25,
    categoryId: 'electronics',
    category: 'Electronics',
    onSale: true,
    rating: 4.3,
    reviewCount: 87
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with rich sound and long battery life for music on the go.',
    price: 79.99,
    imageUrl: '/placeholder.svg',
    stock: 35,
    categoryId: 'electronics',
    category: 'Electronics',
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: '4',
    name: 'Cotton T-Shirt',
    description: 'Soft and comfortable cotton t-shirt for everyday wear, available in multiple colors.',
    price: 19.99,
    imageUrl: '/placeholder.svg',
    stock: 100,
    categoryId: 'clothing',
    category: 'Clothing',
    rating: 4.0,
    reviewCount: 215
  },
  {
    id: '5',
    name: 'Denim Jeans',
    description: 'Classic denim jeans with a modern fit, perfect for any casual occasion.',
    price: 49.99,
    originalPrice: 69.99,
    imageUrl: '/placeholder.svg',
    stock: 70,
    categoryId: 'clothing',
    category: 'Clothing',
    onSale: true,
    rating: 4.2,
    reviewCount: 103
  },
  {
    id: '6',
    name: 'Winter Jacket',
    description: 'Warm and stylish winter jacket with water-resistant exterior and cozy lining.',
    price: 129.99,
    imageUrl: '/placeholder.svg',
    stock: 40,
    categoryId: 'clothing',
    category: 'Clothing',
    rating: 4.8,
    reviewCount: 67
  },
  {
    id: '7',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker that brews delicious coffee with the touch of a button.',
    price: 59.99,
    imageUrl: '/placeholder.svg',
    stock: 30,
    categoryId: 'home',
    category: 'Home & Kitchen',
    rating: 4.4,
    reviewCount: 129
  },
  {
    id: '8',
    name: 'Non-Stick Cookware Set',
    description: 'Complete set of non-stick cookware for your kitchen needs, dishwasher safe.',
    price: 149.99,
    originalPrice: 199.99,
    imageUrl: '/placeholder.svg',
    stock: 20,
    categoryId: 'home',
    category: 'Home & Kitchen',
    onSale: true,
    rating: 4.6,
    reviewCount: 84
  },
  {
    id: '9',
    name: 'Yoga Mat',
    description: 'High-quality yoga mat with excellent grip and cushioning for comfortable practice.',
    price: 29.99,
    imageUrl: '/placeholder.svg',
    stock: 0,
    categoryId: 'sports',
    category: 'Sports & Outdoors',
    rating: 4.8,
    reviewCount: 112
  },
  {
    id: '10',
    name: 'Running Shoes',
    description: 'Lightweight running shoes designed for comfort and performance during your runs.',
    price: 89.99,
    imageUrl: '/placeholder.svg',
    stock: 45,
    categoryId: 'sports',
    category: 'Sports & Outdoors',
    isNew: true,
    rating: 4.7,
    reviewCount: 95
  },
  {
    id: '11',
    name: 'Bestselling Novel',
    description: 'The latest bestselling novel that everyone is talking about, from an award-winning author.',
    price: 24.99,
    imageUrl: '/placeholder.svg',
    stock: 60,
    categoryId: 'books',
    category: 'Books',
    rating: 4.9,
    reviewCount: 328
  },
  {
    id: '12',
    name: 'Moisturizing Cream',
    description: 'Hydrating face cream with natural ingredients for all skin types.',
    price: 34.99,
    imageUrl: '/placeholder.svg',
    stock: 55,
    categoryId: 'beauty',
    category: 'Beauty',
    rating: 4.5,
    reviewCount: 176
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter((_, index) => index < 8);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNew).slice(0, 4);
};

export const getOnSaleProducts = (): Product[] => {
  return products.filter(product => product.onSale).slice(0, 4);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.categoryId === categoryId);
};

export const getProductById = (productId: string): Product | undefined => {
  return products.find(product => product.id === productId);
};
