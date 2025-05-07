
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from '../ui/custom/Logo';

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              Your premier destination for quality products with exceptional service and competitive prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-emerald">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-emerald">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-emerald">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-sm text-muted-foreground hover:text-emerald">All Products</Link></li>
              <li><Link to="/categories" className="text-sm text-muted-foreground hover:text-emerald">Categories</Link></li>
              <li><Link to="/deals" className="text-sm text-muted-foreground hover:text-emerald">Deals</Link></li>
              <li><Link to="/new-arrivals" className="text-sm text-muted-foreground hover:text-emerald">New Arrivals</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-medium mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-emerald">Contact Us</Link></li>
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-emerald">FAQs</Link></li>
              <li><Link to="/shipping" className="text-sm text-muted-foreground hover:text-emerald">Shipping & Returns</Link></li>
              <li><Link to="/warranty" className="text-sm text-muted-foreground hover:text-emerald">Warranty</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-emerald">About Us</Link></li>
              <li><Link to="/careers" className="text-sm text-muted-foreground hover:text-emerald">Careers</Link></li>
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-emerald">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-emerald">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CK_Platform. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-emerald">
              Privacy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-emerald">
              Terms
            </Link>
            <Link to="/cookies" className="text-xs text-muted-foreground hover:text-emerald">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
