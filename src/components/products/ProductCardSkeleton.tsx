
import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="product-card">
      <div className="relative aspect-square shimmer"></div>
      <div className="p-4 space-y-3">
        <div className="shimmer h-3 w-16 rounded"></div>
        <div className="shimmer h-5 w-4/5 rounded"></div>
        <div className="flex items-center justify-between pt-2">
          <div className="shimmer h-6 w-16 rounded"></div>
          <div className="shimmer h-8 w-8 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
