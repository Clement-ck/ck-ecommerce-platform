
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card group">
      {product.isNew && <span className="product-badge product-badge-new">New</span>}
      {product.onSale && <span className="product-badge product-badge-sale">Sale</span>}
      {product.stock <= 0 && <span className="product-badge product-badge-out">Out of Stock</span>}
      
      <Link to={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <div className="mb-2">
          <Link to={`/categories/${product.categoryId}`} className="text-xs text-muted-foreground hover:text-emerald">
            {product.category}
          </Link>
        </div>
        <Link to={`/products/${product.id}`} className="block mb-2 hover:text-emerald">
          <h3 className="font-medium text-base line-clamp-1">{product.name}</h3>
        </Link>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-emerald">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-forest hover:text-emerald hover:bg-emerald-50"
            disabled={product.stock <= 0}
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
