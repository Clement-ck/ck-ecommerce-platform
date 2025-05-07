
import { Truck, ShieldCheck, RotateCcw, HeadphonesIcon } from 'lucide-react';

const BenefitsBanner = () => {
  return (
    <section className="py-12 bg-emerald-50 dark:bg-forest-dark">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center space-x-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center">
              <Truck className="h-6 w-6 text-emerald" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On all orders over $50</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center">
              <ShieldCheck className="h-6 w-6 text-emerald" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">100% secure transactions</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center">
              <RotateCcw className="h-6 w-6 text-emerald" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">30-day return policy</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center">
              <HeadphonesIcon className="h-6 w-6 text-emerald" />
            </div>
            <div>
              <h3 className="font-medium mb-1">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Dedicated support team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsBanner;
