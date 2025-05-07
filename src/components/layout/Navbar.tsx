
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import Logo from '../ui/custom/Logo';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="text-lg font-medium hover:text-emerald-600 transition-colors">Home</Link>
                  <Link to="/products" className="text-lg font-medium hover:text-emerald-600 transition-colors">Products</Link>
                  <Link to="/categories" className="text-lg font-medium hover:text-emerald-600 transition-colors">Categories</Link>
                  <Link to="/about" className="text-lg font-medium hover:text-emerald-600 transition-colors">About</Link>
                  <Link to="/contact" className="text-lg font-medium hover:text-emerald-600 transition-colors">Contact</Link>
                </nav>
              </SheetContent>
            </Sheet>
          )}
          
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          
          {!isMobile && (
            <nav className="hidden md:flex items-center gap-6 ml-6">
              <Link to="/" className="text-sm font-medium hover:text-emerald-600 transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-sm font-medium hover:text-emerald-600 transition-colors">
                Products
              </Link>
              <Link to="/categories" className="text-sm font-medium hover:text-emerald-600 transition-colors">
                Categories
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-emerald-600 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm font-medium hover:text-emerald-600 transition-colors">
                Contact
              </Link>
            </nav>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-foreground">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="text-foreground relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-emerald text-primary-foreground">
                  {cartCount}
                </Badge>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <h2 className="text-lg font-semibold">Account</h2>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/register">Register</Link>
                  </Button>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium mb-2">Quick Links</h3>
                  <div className="flex flex-col gap-2">
                    <Link to="/account/orders" className="text-sm hover:text-emerald">My Orders</Link>
                    <Link to="/account/wishlist" className="text-sm hover:text-emerald">Wishlist</Link>
                    <Link to="/account/settings" className="text-sm hover:text-emerald">Settings</Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
