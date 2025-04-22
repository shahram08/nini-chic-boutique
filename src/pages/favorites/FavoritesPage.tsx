
import { Link } from "react-router-dom";
import { useFavorites } from "@/context/favorites-context";
import ProductCard from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

// Using the same mock products from CategoryPage
import { products } from "@/data/products";

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  
  // Filter products that are in favorites
  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Banner */}
      <div className="relative h-40 md:h-60 overflow-hidden">
        <div className="absolute inset-0 bg-brand-coral flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">علاقه‌مندی‌های من</h1>
            <p className="max-w-xl mx-auto text-sm md:text-base">محصولاتی که به لیست علاقه‌مندی‌های خود اضافه کرده‌اید</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {favoriteProducts.length > 0 ? (
          <>
            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {favoriteProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">لیست علاقه‌مندی‌ها خالی است</h3>
            <p className="text-gray-500 mb-6">هنوز محصولی به لیست علاقه‌مندی‌های خود اضافه نکرده‌اید.</p>
            <Button asChild>
              <Link to="/">مشاهده محصولات</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
