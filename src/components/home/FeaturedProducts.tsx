
import { Link } from 'react-router-dom';
import ProductGrid from '../products/ProductGrid';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Product } from '@/types/product';

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink: string;
  isLoading?: boolean;
}

const FeaturedProducts = ({
  title,
  subtitle,
  products,
  viewAllLink,
  isLoading = false,
}: FeaturedProductsProps) => {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
            {subtitle && (
              <p className="mt-2 text-muted-foreground max-w-xl">
                {subtitle}
              </p>
            )}
          </div>
          <Button 
            asChild 
            variant="ghost" 
            className="mt-4 md:mt-0 text-forest hover:text-emerald hover:bg-emerald-50"
          >
            <Link to={viewAllLink} className="inline-flex items-center">
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <ProductGrid 
          products={products} 
          isLoading={isLoading} 
          columns={4}
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;
