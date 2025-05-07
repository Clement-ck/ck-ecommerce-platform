
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

interface Category {
  id: string;
  name: string;
}

interface FilterProps {
  minPrice: number;
  maxPrice: number;
  categories: Category[];
  onFilterChange: (filters: any) => void;
  onClearFilters: () => void;
  className?: string;
}

const ProductFilterSidebar = ({
  minPrice = 0,
  maxPrice = 1000,
  categories = [],
  onFilterChange,
  onClearFilters,
  className,
}: FilterProps) => {
  const [priceRange, setPriceRange] = useState<number[]>([minPrice, maxPrice]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [inStock, setInStock] = useState<boolean>(false);
  const [onSale, setOnSale] = useState<boolean>(false);

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
  };

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    setSelectedCategories(prev => {
      if (checked) {
        return [...prev, categoryId];
      }
      return prev.filter(id => id !== categoryId);
    });
  };

  const handleApplyFilters = () => {
    onFilterChange({
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      categories: selectedCategories,
      inStock,
      onSale
    });
  };

  const handleClearFilters = () => {
    setPriceRange([minPrice, maxPrice]);
    setSelectedCategories([]);
    setInStock(false);
    setOnSale(false);
    onClearFilters();
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClearFilters}
          className="h-8 text-sm text-muted-foreground hover:text-status-error"
        >
          <X className="mr-1 h-3 w-3" />
          Clear all
        </Button>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-sm">Price Range</h4>
        <div className="px-2">
          <Slider
            defaultValue={priceRange}
            min={minPrice}
            max={maxPrice}
            step={1}
            value={priceRange}
            onValueChange={handlePriceChange}
            className="my-6"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-muted-foreground">$</span>
              <Input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                className="h-8 w-20"
              />
            </div>
            <span className="text-muted-foreground">-</span>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-muted-foreground">$</span>
              <Input
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                className="h-8 w-20"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-sm">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => {
                  handleCategoryChange(
                    category.id,
                    checked as boolean
                  );
                }}
              />
              <Label
                htmlFor={`category-${category.id}`}
                className="text-sm cursor-pointer"
              >
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-sm">Availability</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="in-stock"
              checked={inStock}
              onCheckedChange={(checked) => setInStock(!!checked)}
            />
            <Label htmlFor="in-stock" className="text-sm cursor-pointer">
              In Stock
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="on-sale"
              checked={onSale}
              onCheckedChange={(checked) => setOnSale(!!checked)}
            />
            <Label htmlFor="on-sale" className="text-sm cursor-pointer">
              On Sale
            </Label>
          </div>
        </div>
      </div>

      <Button
        onClick={handleApplyFilters}
        className="w-full bg-emerald hover:bg-emerald-700"
      >
        Apply Filters
      </Button>
    </div>
  );
};

export default ProductFilterSidebar;
