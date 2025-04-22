
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BadgeButton } from "@/components/ui/badge-button";
import ProductCard from "@/components/products/product-card";
import { Menu, Search, X } from "lucide-react";

// Mock product data for categories
const products = [
  {
    id: "1",
    title: "پیراهن راه راه پسرانه طرح دریایی",
    price: 189000,
    discountedPrice: 149000,
    image: "/lovable-uploads/e43aa346-34b6-4892-8fb0-c20e9440afde.png",
    discount: 20,
    isNew: true,
    rating: 4.8,
    reviewCount: 120,
    category: "boys"
  },
  {
    id: "2",
    title: "لباس مجلسی دخترانه با طرح گل‌های رنگارنگ",
    price: 258000,
    discountedPrice: 199000,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=500",
    discount: 25,
    rating: 4.9,
    reviewCount: 89,
    category: "girls"
  },
  {
    id: "3",
    title: "ست لباس نوزادی طرح خرگوش",
    price: 175000,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=500",
    isNew: true,
    rating: 4.7,
    reviewCount: 54,
    category: "babies"
  },
  {
    id: "4",
    title: "شلوار جین دخترانه ستاره‌دار",
    price: 219000,
    discountedPrice: 189000,
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=500",
    discount: 15,
    isBestseller: true,
    rating: 4.6,
    reviewCount: 234,
    category: "girls"
  },
  {
    id: "5",
    title: "بلوز پسرانه آستین بلند طرح فضا",
    price: 145000,
    image: "https://images.unsplash.com/photo-1519238360530-d5035211fc66?q=80&w=500",
    isNew: true,
    rating: 4.5,
    reviewCount: 32,
    category: "boys"
  },
  {
    id: "6",
    title: "پیراهن دخترانه گلدار تابستانی",
    price: 198000,
    image: "https://images.unsplash.com/photo-1707569782112-c47eb8fb2cf9?q=80&w=500",
    isNew: true,
    rating: 4.4,
    reviewCount: 18,
    category: "girls"
  },
  {
    id: "7",
    title: "سرهمی نوزادی طرح پاندا",
    price: 165000,
    image: "https://images.unsplash.com/photo-1611918126831-0a9a3351fd23?q=80&w=500",
    isNew: true,
    rating: 4.7,
    reviewCount: 27,
    category: "babies"
  },
  {
    id: "8",
    title: "تیشرت پسرانه طرح دایناسور",
    price: 129000,
    image: "https://images.unsplash.com/photo-1697553503153-7fbf5ad8911a?q=80&w=500",
    isNew: true,
    rating: 4.3,
    reviewCount: 15,
    category: "boys"
  },
  {
    id: "9",
    title: "لباس مهمانی دخترانه پرنسسی",
    price: 285000,
    discountedPrice: 235000,
    image: "https://images.unsplash.com/photo-1545048702-79362597d747?q=80&w=500",
    discount: 20,
    isBestseller: true,
    rating: 4.9,
    reviewCount: 320,
    category: "girls"
  },
  {
    id: "10",
    title: "ست تیشرت و شلوار پسرانه اسپرت",
    price: 245000,
    discountedPrice: 199000,
    image: "https://images.unsplash.com/photo-1516714612186-b44027a51108?q=80&w=500",
    discount: 20,
    isBestseller: true,
    rating: 4.8,
    reviewCount: 289,
    category: "boys"
  },
  {
    id: "11",
    title: "سرهمی نوزادی پشمی زمستانی",
    price: 215000,
    discountedPrice: 179000,
    image: "https://images.unsplash.com/photo-1656414829442-95e660f78406?q=80&w=500",
    discount: 18,
    isBestseller: true,
    rating: 4.7,
    reviewCount: 186,
    category: "babies"
  },
  {
    id: "12",
    title: "ژاکت بافت دخترانه گلدار",
    price: 230000,
    discountedPrice: 195000,
    image: "https://images.unsplash.com/photo-1669551557440-74c069a85ea2?q=80&w=500",
    discount: 15,
    isBestseller: true,
    rating: 4.6,
    reviewCount: 152,
    category: "girls"
  },
];

// Category banners and titles
const categoryInfo = {
  girls: {
    title: "لباس‌های دخترانه",
    description: "مجموعه متنوعی از زیباترین لباس‌های دخترانه، طراحی شده با بهترین پارچه‌ها و رنگ‌های شاد",
    banner: "https://images.unsplash.com/photo-1476234251651-f353703a034d?q=80&w=1200",
    color: "brand-pink"
  },
  boys: {
    title: "لباس‌های پسرانه",
    description: "مجموعه متنوعی از شیک‌ترین لباس‌های پسرانه، طراحی شده با کیفیت عالی و سبک‌های مدرن",
    banner: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1200",
    color: "brand-teal"
  },
  babies: {
    title: "لباس نوزادان",
    description: "لباس‌های لطیف و نرم برای پوست حساس نوزادان، تهیه شده از مواد طبیعی و ایمن",
    banner: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200",
    color: "brand-yellow"
  },
  shoes: {
    title: "کفش کودکان",
    description: "کفش‌های راحت و با کیفیت برای کودکان، طراحی شده برای حمایت از پاهای در حال رشد",
    banner: "https://images.unsplash.com/photo-1514047882-673e26ac7c3c?q=80&w=1200",
    color: "brand-mint"
  }
};

const filters = [
  { id: 'price', name: 'قیمت', options: ['کمتر از ۱۰۰ هزار تومان', '۱۰۰ تا ۲۰۰ هزار تومان', '۲۰۰ تا ۳۰۰ هزار تومان', 'بیشتر از ۳۰۰ هزار تومان'] },
  { id: 'age', name: 'سن', options: ['0-1 سال', '1-3 سال', '3-5 سال', '5-7 سال', '7-10 سال'] },
  { id: 'color', name: 'رنگ', options: ['آبی', 'صورتی', 'سفید', 'زرد', 'سبز', 'قرمز', 'مشکی'] },
  { id: 'material', name: 'جنس', options: ['نخی', 'کتان', 'جین', 'پشمی', 'حریر'] },
  { id: 'season', name: 'فصل', options: ['بهار', 'تابستان', 'پاییز', 'زمستان'] },
];

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [sortOption, setSortOption] = useState('newest');

  const toggleFilter = () => {
    setShowFilters(!showFilters);
  };

  const toggleFilterOption = (filterId: string, option: string) => {
    setSelectedFilters(prev => {
      const currentOptions = prev[filterId] || [];
      const newOptions = currentOptions.includes(option)
        ? currentOptions.filter(item => item !== option)
        : [...currentOptions, option];
      
      return {
        ...prev,
        [filterId]: newOptions
      };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({});
  };

  // Get category info
  const category = categoryId && categoryInfo[categoryId as keyof typeof categoryInfo] 
    ? categoryInfo[categoryId as keyof typeof categoryInfo] 
    : {
        title: "همه محصولات",
        description: "مجموعه کامل محصولات ما را مشاهده کنید",
        banner: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1200",
        color: "brand-coral"
      };

  // Filter products by category
  const filteredProducts = products.filter(product => {
    if (!categoryId || categoryId === 'all') return true;
    return product.category === categoryId;
  });

  // Count active filters
  const activeFiltersCount = Object.values(selectedFilters).reduce(
    (count, options) => count + options.length, 
    0
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Category Banner */}
      <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
        <img 
          src={category.banner} 
          alt={category.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{category.title}</h1>
            <p className="max-w-xl mx-auto text-sm md:text-base">{category.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <Button
              onClick={toggleFilter}
              variant="outline"
              className="flex items-center mr-2"
            >
              <Menu className="h-4 w-4 ml-2" />
              فیلترها
              {activeFiltersCount > 0 && (
                <span className="mr-2 bg-brand-coral text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
            
            {activeFiltersCount > 0 && (
              <Button
                onClick={clearFilters}
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-gray-700"
              >
                پاک کردن فیلترها
              </Button>
            )}
          </div>
          
          <div className="flex items-center">
            <span className="text-sm text-gray-500 ml-2">مرتب‌سازی:</span>
            <select
              value={sortOption}
              onChange={e => setSortOption(e.target.value)}
              className="border-0 bg-transparent text-sm focus:ring-0 text-gray-800 cursor-pointer"
            >
              <option value="newest">جدیدترین</option>
              <option value="price-asc">ارزان‌ترین</option>
              <option value="price-desc">گران‌ترین</option>
              <option value="popular">محبوب‌ترین</option>
            </select>
          </div>
        </div>
        
        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6 border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">فیلترها</h3>
              <button 
                onClick={toggleFilter}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {filters.map(filter => (
                <div key={filter.id} className="border-b pb-3 md:border-b-0 md:pb-0 md:border-l md:pl-4">
                  <h4 className="font-medium mb-2 text-sm">{filter.name}</h4>
                  <div className="space-y-1">
                    {filter.options.map(option => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`${filter.id}-${option}`}
                          checked={selectedFilters[filter.id]?.includes(option) || false}
                          onChange={() => toggleFilterOption(filter.id, option)}
                          className="h-4 w-4 rounded border-gray-300 text-brand-coral focus:ring-brand-coral/25"
                        />
                        <label
                          htmlFor={`${filter.id}-${option}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex justify-end">
              <Button
                onClick={clearFilters}
                variant="outline"
                size="sm"
                className="ml-2"
              >
                پاک کردن
              </Button>
              <Button
                onClick={toggleFilter}
                size="sm"
              >
                اعمال فیلترها
              </Button>
            </div>
          </div>
        )}
        
        {/* Selected Filters */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(selectedFilters).map(([filterId, options]) => 
              options.map(option => (
                <BadgeButton
                  key={`${filterId}-${option}`}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800"
                  onClick={() => toggleFilterOption(filterId, option)}
                >
                  {option} <X className="h-3 w-3 ml-1" />
                </BadgeButton>
              ))
            )}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">محصولی یافت نشد</h3>
            <p className="text-gray-500 mb-4">متأسفانه محصولی با فیلترهای انتخابی شما پیدا نشد.</p>
            <Button
              onClick={clearFilters}
              variant="outline"
            >
              پاک کردن فیلترها
            </Button>
          </div>
        )}
        
        {/* Pagination */}
        {filteredProducts.length > 0 && (
          <div className="flex justify-center mt-12">
            <div className="flex space-x-1 space-x-reverse">
              <Button variant="outline" size="icon" className="rounded-lg" disabled>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="rounded-lg bg-brand-coral text-white hover:bg-brand-coral/90">1</Button>
              <Button variant="outline" size="sm" className="rounded-lg">2</Button>
              <Button variant="outline" size="sm" className="rounded-lg">3</Button>
              <Button variant="outline" size="icon" className="rounded-lg">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
