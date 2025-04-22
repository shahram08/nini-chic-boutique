
import { Link } from "react-router-dom";
import { BadgeButton } from "@/components/ui/badge-button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/context/favorites-context";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  discountedPrice?: number;
  image: string;
  discount?: number;
  isNew?: boolean;
  rating?: number;
  reviewCount?: number;
  isBestseller?: boolean;
}

const ProductCard = ({
  id,
  title,
  price,
  discountedPrice,
  image,
  discount,
  isNew = false,
  rating = 0,
  reviewCount = 0,
  isBestseller = false,
}: ProductCardProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { toast } = useToast();
  
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(id);
    
    toast({
      title: isFavorite(id) ? "از علاقه‌مندی‌ها حذف شد" : "به علاقه‌مندی‌ها اضافه شد",
      description: isFavorite(id) ? `${title} از لیست علاقه‌مندی‌های شما حذف شد` : `${title} به لیست علاقه‌مندی‌های شما اضافه شد`,
    });
  };

  const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
  const formattedDiscountedPrice = discountedPrice 
    ? new Intl.NumberFormat('fa-IR').format(discountedPrice) 
    : null;

  return (
    <div className="group relative rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <Link to={`/product/${id}`}>
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          
          {/* Discount badge */}
          {discount && discount > 0 && (
            <div className="absolute top-2 right-2">
              <BadgeButton variant="discount">
                تا {new Intl.NumberFormat('fa-IR').format(discount)}٪ تخفیف
              </BadgeButton>
            </div>
          )}
          
          {/* Like button */}
          <button
            onClick={handleToggleFavorite}
            className="absolute top-2 left-2 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-brand-coral transition-colors"
            aria-label={isFavorite(id) ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
          >
            <Heart className={cn("h-4 w-4", isFavorite(id) && "fill-brand-coral text-brand-coral")} />
          </button>
          
          {/* New badge */}
          {isNew && (
            <div className="absolute bottom-2 right-2">
              <BadgeButton variant="new">جدید</BadgeButton>
            </div>
          )}
          
          {/* Bestseller badge */}
          {isBestseller && (
            <div className="absolute bottom-2 right-2">
              <BadgeButton variant="bestseller">پرفروش</BadgeButton>
            </div>
          )}
        </div>
        
        <div className="p-3">
          <h3 className="text-sm font-medium line-clamp-2 min-h-[2.5rem]">{title}</h3>
          
          {/* Price */}
          <div className="mt-2 flex items-center justify-between">
            <div>
              {discountedPrice ? (
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-brand-coral">{formattedDiscountedPrice} تومان</span>
                  <span className="text-xs text-gray-500 line-through">{formattedPrice} تومان</span>
                </div>
              ) : (
                <span className="text-sm font-medium">{formattedPrice} تومان</span>
              )}
            </div>
            
            {/* Rating */}
            {rating > 0 && (
              <div className="flex items-center">
                <span className="text-xs font-medium">{rating}</span>
                <svg className="h-4 w-4 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {reviewCount > 0 && (
                  <span className="text-xs text-gray-500 mr-1">({new Intl.NumberFormat('fa-IR').format(reviewCount)})</span>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
