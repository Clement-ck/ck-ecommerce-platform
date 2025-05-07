
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import RootLayout from '@/components/layout/RootLayout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getProductById, getProductsByCategory } from '@/data/products';
import { Product } from '@/types/product';
import { Minus, Plus, Star, Truck, Shield, RotateCcw, ChevronRight } from 'lucide-react';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API loading
    setTimeout(() => {
      if (id) {
        const foundProduct = getProductById(id);
        setProduct(foundProduct || null);
        
        if (foundProduct) {
          const related = getProductsByCategory(foundProduct.categoryId)
            .filter(p => p.id !== foundProduct.id)
            .slice(0, 4);
          setRelatedProducts(related);
        }
      }
      
      setIsLoading(false);
    }, 1000);
  }, [id]);

  const handleAddToCart = () => {
    toast.success(`${product?.name} added to cart`);
  };

  const incrementQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(q => q + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(q => q - 1);
    }
  };

  // Multiple placeholder images for gallery effect
  const productImages = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg'
  ];

  if (isLoading) {
    return (
      <RootLayout>
        <div className="container px-4 py-8">
          <div className="animate-pulse">
            <div className="h-4 w-1/4 bg-muted rounded mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-square bg-muted rounded"></div>
              <div className="space-y-4">
                <div className="h-8 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/4"></div>
                <div className="h-6 bg-muted rounded w-1/3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </div>
                <div className="h-10 bg-muted rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </RootLayout>
    );
  }

  if (!product) {
    return (
      <RootLayout>
        <div className="container px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8 text-muted-foreground">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/products">Browse All Products</Link>
          </Button>
        </div>
      </RootLayout>
    );
  }

  return (
    <RootLayout>
      <div className="container px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-emerald">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/products" className="hover:text-emerald">Products</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to={`/products?category=${product.categoryId}`} className="hover:text-emerald">
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="truncate">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden border border-border bg-muted/30">
              <img 
                src={productImages[activeImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`aspect-square rounded-md border overflow-hidden ${
                    i === activeImageIndex 
                      ? 'border-emerald ring-2 ring-emerald/20' 
                      : 'border-border hover:border-emerald/50'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${i + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating || 0) 
                          ? 'fill-emerald text-emerald' 
                          : 'text-muted'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.reviewCount} reviews
                </span>
              </div>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-2xl font-bold text-emerald">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-base text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.onSale && (
                <span className="px-2 py-1 text-xs font-medium bg-status-warning/20 text-status-warning rounded-full">
                  Sale
                </span>
              )}
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${product.stock > 0 ? 'bg-status-success' : 'bg-status-error'}`}></span>
              <span className={product.stock > 0 ? 'text-status-success' : 'text-status-error'}>
                {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
              </span>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center border border-input rounded-md">
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-r-none h-10"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="px-4 flex items-center justify-center h-10 w-12 text-center border-x border-input">
                  {quantity}
                </div>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-l-none h-10"
                  onClick={incrementQuantity}
                  disabled={product.stock <= quantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button 
                className="flex-1 bg-emerald hover:bg-emerald-700"
                size="lg"
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
              >
                {product.stock > 0 ? 'Add to Cart' : 'Notify Me'}
              </Button>
            </div>

            {/* Benefits */}
            <div className="space-y-3 border-t border-border pt-6">
              <div className="flex gap-3">
                <Truck className="h-5 w-5 text-emerald shrink-0" />
                <div>
                  <p className="text-sm font-medium">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">On orders over $50</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Shield className="h-5 w-5 text-emerald shrink-0" />
                <div>
                  <p className="text-sm font-medium">2 Year Warranty</p>
                  <p className="text-xs text-muted-foreground">Full coverage</p>
                </div>
              </div>
              <div className="flex gap-3">
                <RotateCcw className="h-5 w-5 text-emerald shrink-0" />
                <div>
                  <p className="text-sm font-medium">30 Day Returns</p>
                  <p className="text-xs text-muted-foreground">Hassle-free returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="p-6 border rounded-md mt-2">
            <div className="prose max-w-none">
              <h3 className="text-lg font-medium mb-2">Product Description</h3>
              <p className="mb-4">
                {product.description} 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget
                ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.
              </p>
              <p>
                Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl
                nunc eu nisl. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc,
                quis aliquam nisl nunc eu nisl.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="p-6 border rounded-md mt-2">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Technical Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-muted-foreground">Brand</span>
                    <span className="font-medium">CK_Platform</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-muted-foreground">Model</span>
                    <span className="font-medium">CP-{product.id}000</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-muted-foreground">Material</span>
                    <span className="font-medium">Premium Quality</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-muted-foreground">Dimensions</span>
                    <span className="font-medium">10 x 15 x 5 cm</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-muted-foreground">Weight</span>
                    <span className="font-medium">0.5 kg</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-muted-foreground">Warranty</span>
                    <span className="font-medium">2 Years</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="p-6 border rounded-md mt-2">
            <div className="space-y-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium">
                  Customer Reviews ({product.reviewCount})
                </h3>
                <Button variant="outline">Write a Review</Button>
              </div>
              
              <div className="space-y-6">
                {/* Sample reviews */}
                {[1, 2].map((_, i) => (
                  <div key={i} className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <div>
                        <h4 className="font-medium">John Doe</h4>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <Star 
                                key={j} 
                                className={`h-4 w-4 ${j < 4 ? 'fill-emerald text-emerald' : 'text-muted'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            Verified Purchase
                          </span>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        May 1, 2025
                      </span>
                    </div>
                    <p className="text-sm">
                      Great product! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc,
                      quis aliquam nisl nunc eu nisl.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <FeaturedProducts
            title="You May Also Like"
            products={relatedProducts}
            viewAllLink={`/products?category=${product.categoryId}`}
            isLoading={false}
          />
        )}
      </div>
    </RootLayout>
  );
};

export default ProductDetail;
