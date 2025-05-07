
import RootLayout from '@/components/layout/RootLayout';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { ArrowRight } from 'lucide-react';

const Categories = () => {
  return (
    <RootLayout className="bg-background">
      <div className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Product Categories</h1>
          <p className="text-muted-foreground mt-2">
            Browse our products by category
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative overflow-hidden rounded-xl bg-background border border-border h-[250px]"
            >
              <img
                src={category.imageUrl || "/placeholder.svg"}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-sm text-white/80 mb-3">
                  {category.description}
                </p>
                <div className="flex items-center text-emerald group-hover:text-lime transition-colors">
                  <span className="text-sm font-medium">Shop Now</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </RootLayout>
  );
};

export default Categories;
