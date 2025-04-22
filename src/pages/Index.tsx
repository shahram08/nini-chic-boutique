
import { useState } from "react";
import { Link } from "react-router-dom";
import { BadgeButton } from "@/components/ui/badge-button";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/product-card";
import MainLayout from "@/components/layout/main-layout";

// Mock data for products
const featuredProducts = [
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
];

const newArrivals = [
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
];

const bestSellers = [
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

const categories = [
  {
    id: "girls",
    title: "لباس‌های دخترانه",
    image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?q=80&w=500",
    color: "bg-brand-pink"
  },
  {
    id: "boys",
    title: "لباس‌های پسرانه",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=500",
    color: "bg-brand-teal"
  },
  {
    id: "babies",
    title: "لباس نوزادان",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=500",
    color: "bg-brand-yellow"
  },
  {
    id: "shoes",
    title: "کفش کودکان",
    image: "https://images.unsplash.com/photo-1514047882-673e26ac7c3c?q=80&w=500",
    color: "bg-brand-mint"
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-bg py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
              <div className="max-w-lg md:me-auto animate-slide-right">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  <span className="text-gray-800">زیباترین </span>
                  <span className="text-brand-coral">لباس‌ها</span>
                  <br />
                  <span className="text-gray-800">برای </span>
                  <span className="text-brand-teal">کودکان </span>
                  <span className="text-gray-800">شما</span>
                </h1>
                <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                  مجموعه گسترده‌ای از لباس‌های با کیفیت، راحت و شیک برای کودکان شما، با طراحی منحصر به فرد و
                  قیمت مناسب.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-brand-coral hover:bg-brand-coral/90 child-friendly-button">
                    مشاهده محصولات
                  </Button>
                  <Button variant="outline" className="child-friendly-button">
                    درباره ما
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <div className="absolute top-4 left-4 z-10">
                  <BadgeButton variant="discount">
                    تا ۳۰٪ تخفیف
                  </BadgeButton>
                </div>
                <div className="aspect-[4/3] md:aspect-square overflow-hidden">
                  <img 
                    src="/lovable-uploads/e43aa346-34b6-4892-8fb0-c20e9440afde.png" 
                    alt="لباس کودک" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decoration */}
        <div className="absolute -bottom-6 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,202.7C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">دسته‌بندی‌های محصولات</h2>
            <p className="text-gray-600">لباس‌های با کیفیت و زیبا برای همه سنین</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link key={category.id} to={`/category/${category.id}`} className="group">
                <div className="relative rounded-lg overflow-hidden aspect-square">
                  <div className={`absolute inset-0 ${category.color} opacity-30 group-hover:opacity-40 transition-opacity`}></div>
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-lg md:text-xl font-bold text-white bg-black/30 px-4 py-2 rounded backdrop-blur-sm">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">محصولات ویژه</h2>
            <Link to="/special-offers" className="text-brand-coral hover:text-brand-coral/80 text-sm font-medium">
              مشاهده همه &larr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
              <div className="bg-brand-lightyellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-coral" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2.05a2.5 2.5 0 014.9 0H18a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">ارسال رایگان</h3>
              <p className="text-gray-600 text-sm">برای سفارش‌های بالای ۵۰۰ هزار تومان ارسال رایگان داریم</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
              <div className="bg-brand-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-coral" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">تحویل سریع</h3>
              <p className="text-gray-600 text-sm">ارسال سریع در کمتر از ۲ روز کاری به سراسر کشور</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
              <div className="bg-brand-lightpink rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-coral" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">پرداخت امن</h3>
              <p className="text-gray-600 text-sm">پرداخت مطمئن و امن با درگاه‌های معتبر بانکی</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">جدیدترین‌ها</h2>
            <Link to="/new-arrivals" className="text-brand-coral hover:text-brand-coral/80 text-sm font-medium">
              مشاهده همه &larr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">نظرات مشتریان ما</h2>
            <p className="text-gray-600">بیش از ۱۰۰۰ مشتری راضی از خرید</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brand-pink flex items-center justify-center text-white font-bold">
                    م
                  </div>
                </div>
                <div className="ms-3">
                  <h4 className="text-sm font-semibold">مریم احمدی</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                کیفیت لباس‌ها فوق‌العاده است و دخترم عاشق لباس‌هایی شده که از این فروشگاه خریدیم. بسته‌بندی محصولات هم بسیار مرتب و تمیز بود.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brand-teal flex items-center justify-center text-white font-bold">
                    ع
                  </div>
                </div>
                <div className="ms-3">
                  <h4 className="text-sm font-semibold">علی محمدی</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                پسرم لباس‌های این فروشگاه را خیلی دوست دارد. طرح‌های متنوع و رنگارنگ برای بچه‌ها جذاب است. ارسال سریع و بسته‌بندی عالی هم از نقاط قوت این فروشگاه است.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brand-mint flex items-center justify-center text-white font-bold">
                    س
                  </div>
                </div>
                <div className="ms-3">
                  <h4 className="text-sm font-semibold">سارا رضایی</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-yellow-400" fill={i < 4 ? "currentColor" : "none"} stroke={i < 4 ? "none" : "currentColor"} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                از کیفیت لباس‌ها راضی هستم. جنس پارچه‌ها خوب است و بعد از چندین بار شستشو رنگ و کیفیت خود را حفظ کرده‌اند. سرویس مشتریان هم بسیار عالی پاسخگو بودند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">پرفروش‌ترین‌ها</h2>
            <Link to="/bestsellers" className="text-brand-coral hover:text-brand-coral/80 text-sm font-medium">
              مشاهده همه &larr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">عضویت در خبرنامه</h2>
            <p className="text-gray-700 mb-6">
              برای اطلاع از جدیدترین محصولات و تخفیف‌های ویژه در خبرنامه ما عضو شوید
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/50 w-full sm:w-64"
              />
              <Button className="bg-brand-coral hover:bg-brand-coral/90 child-friendly-button">
                عضویت
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
