import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    price: number;
    compare_at_price?: number | null;
    images: string[] | null;
    slug: string;
    rating?: number | null;
    reviews_count?: number | null;
    featured?: boolean | null;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const discount = product.compare_at_price 
    ? Math.round(((product.compare_at_price - product.price) / product.compare_at_price) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <Link to={`/products/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-secondary">
          {product.featured && (
            <Badge className="absolute top-2 left-2 z-10">
              Featured
            </Badge>
          )}
          {discount > 0 && (
            <Badge variant="destructive" className="absolute top-2 right-2 z-10">
              -{discount}%
            </Badge>
          )}
          <img
            src={product.images?.[0] || '/placeholder.svg'}
            alt={product.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      
      <CardContent className="p-4">
        <Link to={`/products/${product.slug}`}>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
            {product.title}
          </h3>
        </Link>
        
        {product.rating && product.reviews_count ? (
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">
              ({product.reviews_count})
            </span>
          </div>
        ) : null}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.compare_at_price && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.compare_at_price.toFixed(2)}
              </span>
            )}
          </div>
          
          <Button
            size="icon"
            onClick={() => addToCart(product.id)}
            className="rounded-full"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
