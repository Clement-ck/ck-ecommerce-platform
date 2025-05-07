
import { useEffect, useState } from 'react';
import RootLayout from '@/components/layout/RootLayout';
import HeroBanner from '@/components/home/HeroBanner';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BenefitsBanner from '@/components/home/BenefitsBanner';
import Newsletter from '@/components/home/Newsletter';
import { categories, getFeaturedProducts, getNewArrivals, getOnSaleProducts } from '@/data/products';
import { Product } from '@/types/product';

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [onSaleProducts, setOnSaleProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setFeaturedProducts(getFeaturedProducts());
      setNewArrivals(getNewArrivals());
      setOnSaleProducts(getOnSaleProducts());
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <RootLayout>
      <HeroBanner />
      
      <FeaturedCategories categories={categories} />
      
      <FeaturedProducts
        title="Featured Products"
        subtitle="Discover our handpicked selection of the finest products available on CK_Platform."
        products={featuredProducts}
        viewAllLink="/products"
        isLoading={isLoading}
      />
      
      <BenefitsBanner />
      
      <div className="grid md:grid-cols-2 gap-8">
        <FeaturedProducts
          title="New Arrivals"
          products={newArrivals}
          viewAllLink="/products?filter=new"
          isLoading={isLoading}
        />
        
        <FeaturedProducts
          title="On Sale"
          products={onSaleProducts}
          viewAllLink="/products?filter=sale"
          isLoading={isLoading}
        />
      </div>
      
      <Newsletter />
    </RootLayout>
  );
};

export default Index;
