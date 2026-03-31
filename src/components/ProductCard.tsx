import { ShoppingCart, Eye, Star } from 'lucide-react';
import type { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
}

export function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  const { addToCart, setViewedProduct, setIsQuickViewOpen, setIsCartOpen } = useCart();

  const handleQuickView = () => {
    setViewedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
    setIsCartOpen(true);
  };

  if (variant === 'compact') {
    return (
      <div className="squircle-card bg-white group">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge className="absolute top-3 left-3 bg-[#2d7a4d]">
            {product.category}
          </Badge>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-[#1a2f23] mb-1 truncate">{product.name}</h3>
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-xs text-[#4a5a4a]">{product.rating}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#2d7a4d]">${product.price.toFixed(2)}</span>
            <Button 
              size="sm"
              onClick={handleAddToCart}
              className="bg-[#2d7a4d] hover:bg-[#3d9a6d] text-white"
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="squircle-card bg-white group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
          <button
            onClick={handleQuickView}
            className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[#1a2f23] rounded-full text-sm font-medium hover:bg-white transition-colors flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            Quick View
          </button>
        </div>
        <Badge className="absolute top-3 left-3 bg-[#2d7a4d]">
          {product.category}
        </Badge>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-[#1a2f23] mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-[#4a5a4a] mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-[#4a5a4a]">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[#2d7a4d]">${product.price.toFixed(2)}</span>
          <div className="flex gap-2">
            <Button 
              size="sm"
              variant="outline"
              onClick={handleAddToCart}
              className="border-[#2d7a4d] text-[#2d7a4d] hover:bg-[#2d7a4d] hover:text-white"
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
            <Button 
              size="sm"
              onClick={handleBuyNow}
              className="bg-[#2d7a4d] hover:bg-[#3d9a6d] text-white"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
