
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-green text-white">
      <div className="container px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Quality Products <br />
              <span className="text-lime-light">For Everyone</span>
            </h1>
            <p className="text-lg opacity-90 max-w-md">
              Discover our wide range of high-quality products at competitive prices. 
              Shop smart with CK_Platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-forest hover:bg-soft hover:text-forest-dark">
                <Link to="/products">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative h-[400px]">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 to-transparent"></div>
            </div>
            <img
              src="/placeholder.svg"
              alt="Featured Products"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
