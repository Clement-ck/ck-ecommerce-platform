
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import RootLayout from '@/components/layout/RootLayout';
import ProductFilterSidebar from '@/components/products/ProductFilterSidebar';
import ProductGrid from '@/components/products/ProductGrid';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Product } from '@/types/product';
import { products, categories } from '@/data/products';
import { FilterIcon, Grid3X3, Grid2X2 } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState("featured");
  const [gridColumns, setGridColumns] = useState(3);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const isMobile = useIsMobile();

  useEffect(() => {
    const filterParam = searchParams.get('filter');
    const categoryParam = searchParams.get('category');

    // Simulate API loading
    setIsLoading(true);
    
    setTimeout(() => {
      let filtered = [...products];
      
      // Apply URL filters
      if (filterParam) {
        if (filterParam === 'new') {
          filtered = filtered.filter(p => p.isNew);
        } else if (filterParam === 'sale') {
          filtered = filtered.filter(p => p.onSale);
        }
      }
      
      if (categoryParam) {
        filtered = filtered.filter(p => p.categoryId === categoryParam);
      }
      
      // Apply sorting
      if (sortOption === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortOption === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
      } else if (sortOption === 'rating') {
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      }
      
      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 1000);
  }, [location.search, sortOption, searchParams]);

  const handleFilterChange = (filters: any) => {
    // Simulate API loading
    setIsLoading(true);
    
    setTimeout(() => {
      let filtered = [...products];
      
      // Apply price filter
      filtered = filtered.filter(
        (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
      );
      
      // Apply category filter
      if (filters.categories.length > 0) {
        filtered = filtered.filter((p) => filters.categories.includes(p.categoryId));
      }
      
      // Apply stock filter
      if (filters.inStock) {
        filtered = filtered.filter((p) => p.stock > 0);
      }
      
      // Apply sale filter
      if (filters.onSale) {
        filtered = filtered.filter((p) => p.onSale);
      }
      
      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 500);
  };

  const handleClearFilters = () => {
    setIsLoading(true);
    setTimeout(() => {
      setFilteredProducts(products);
      setIsLoading(false);
    }, 500);
  };

  return (
    <RootLayout className="bg-background">
      <div className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">All Products</h1>
          <p className="text-muted-foreground mt-2">
            Browse our collection of quality products
          </p>
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            {isMobile ? (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <FilterIcon className="h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[350px] p-6">
                  <ProductFilterSidebar
                    minPrice={0}
                    maxPrice={300}
                    categories={categories}
                    onFilterChange={handleFilterChange}
                    onClearFilters={handleClearFilters}
                    className="mt-4"
                  />
                </SheetContent>
              </Sheet>
            ) : null}
            
            <span className="text-sm text-muted-foreground">
              {filteredProducts.length} products
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="h-9 w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            
            <div className="hidden md:flex items-center gap-1 ml-2">
              <Button
                variant={gridColumns === 3 ? "default" : "ghost"}
                size="icon"
                className="h-9 w-9"
                onClick={() => setGridColumns(3)}
              >
                <Grid3X3 className="h-4 w-4" />
                <span className="sr-only">3-column grid</span>
              </Button>
              <Button
                variant={gridColumns === 4 ? "default" : "ghost"}
                size="icon"
                className="h-9 w-9"
                onClick={() => setGridColumns(4)}
              >
                <Grid2X2 className="h-4 w-4" />
                <span className="sr-only">4-column grid</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {!isMobile && (
            <aside className="hidden md:block space-y-6">
              <ProductFilterSidebar
                minPrice={0}
                maxPrice={300}
                categories={categories}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
              />
            </aside>
          )}
          
          <div className="md:col-span-3">
            <ProductGrid 
              products={filteredProducts}
              isLoading={isLoading}
              columns={gridColumns}
            />
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Products;
