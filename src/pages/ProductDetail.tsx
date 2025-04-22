
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BadgeButton } from "@/components/ui/badge-button";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/product-card";
import { Heart, ShoppingCart, Truck, RotateCcw, Shield, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock product data
const productsData = [
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
    category: "boys",
    description: "پیراهن راه راه پسرانه با طرح دریایی، ساخته شده از پارچه صد در صد نخی و با کیفیت عالی. این پیراهن برای استفاده روزمره و مهمانی‌ها مناسب است. دارای یقه کلاسیک و دکمه‌های مقاوم، این پیراهن به راحتی با شلوار جین یا کتان ست می‌شود.",
    colors: ["آبی", "قرمز", "سفید"],
    sizes: ["2-3 سال", "3-4 سال", "4-5 سال", "5-6 سال"],
    stock: 45,
    images: [
      "/lovable-uploads/e43aa346-34b6-4892-8fb0-c20e9440afde.png",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=500",
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=500"
    ],
    features: [
      "جنس: 100% نخ پنبه",
      "قابل شستشو در ماشین لباس‌شویی",
      "مناسب برای فصل بهار و تابستان",
      "طراحی راحت و شیک",
      "ساخت ایران"
    ]
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
    category: "girls",
    description: "لباس مجلسی دخترانه با طرح گل‌های رنگارنگ، مناسب برای مهمانی‌ها و مراسم خاص. این لباس با پارچه نرم و لطیف ساخته شده و دارای دامن پفی زیبا است که حس شاهزاده‌های افسانه‌ای را به دختر شما می‌دهد.",
    colors: ["صورتی", "آبی آسمانی", "بنفش روشن"],
    sizes: ["2-3 سال", "3-4 سال", "4-5 سال", "5-6 سال"],
    stock: 30,
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=500",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=500",
      "https://images.unsplash.com/photo-1514047882-673e26ac7c3c?q=80&w=500"
    ],
    features: [
      "جنس: پارچه حریر و ساتن",
      "آستر داخلی 100% نخی",
      "دارای زیپ مخفی پشت لباس",
      "قابل شستشو با دست",
      "طراحی انحصاری"
    ]
  }
];

// Related products (simplified for this example)
const relatedProducts = [
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
];

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isLiked, setIsLiked] = useState(false);

  // Find product by ID
  const product = productsData.find(p => p.id === productId) || productsData[0];

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      product,
      quantity,
      color: selectedColor,
      size: selectedSize
    });
    // Here you would implement your cart logic
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  // Format prices
  const formattedPrice = new Intl.NumberFormat('fa-IR').format(product.price);
  const formattedDiscountedPrice = product.discountedPrice 
    ? new Intl.NumberFormat('fa-IR').format(product.discountedPrice) 
    : null;

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-brand-coral">خانه</Link>
          <span className="mx-2">/</span>
          <Link to={`/category/${product.category}`} className="hover:text-brand-coral">
            {product.category === 'boys' ? 'لباس‌های پسرانه' : 
             product.category === 'girls' ? 'لباس‌های دخترانه' : 
             'لباس نوزادان'}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.title}</span>
        </nav>

        {/* Product Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-square overflow-hidden rounded-lg border mb-4 relative">
              <img 
                src={product.images[selectedImage]} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
              {product.discount && product.discount > 0 && (
                <div className="absolute top-4 right-4">
                  <BadgeButton variant="discount">
                    {product.discount}٪ تخفیف
                  </BadgeButton>
                </div>
              )}
              {product.isNew && (
                <div className="absolute top-4 left-4">
                  <BadgeButton variant="new">جدید</BadgeButton>
                </div>
              )}
            </div>

            {/* Thumbnail images */}
            <div className="flex space-x-2 space-x-reverse">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "relative overflow-hidden rounded border h-20 w-20",
                    selectedImage === index ? "ring-2 ring-brand-coral" : ""
                  )}
                >
                  <img 
                    src={image} 
                    alt={`${product.title} - تصویر ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 mr-2">
                <span className="font-medium text-gray-900">{product.rating}</span> ({new Intl.NumberFormat('fa-IR').format(product.reviewCount)} نظر)
              </p>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              {product.discountedPrice ? (
                <div className="flex items-center">
                  <p className="text-2xl font-bold text-brand-coral">
                    {formattedDiscountedPrice} تومان
                  </p>
                  <p className="text-sm text-gray-500 line-through mr-2">
                    {formattedPrice} تومان
                  </p>
                </div>
              ) : (
                <p className="text-2xl font-bold text-gray-900">
                  {formattedPrice} تومان
                </p>
              )}
            </div>
            
            <div className="space-y-6">
              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">انتخاب رنگ:</h3>
                <div className="flex space-x-3 space-x-reverse">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "border rounded-full px-4 py-1.5 text-sm",
                        selectedColor === color
                          ? "border-brand-coral text-brand-coral"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      )}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Size Selection */}
              <div>
                <div className="flex justify-between mb-3">
                  <h3 className="text-sm font-medium text-gray-900">انتخاب سایز:</h3>
                  <button className="text-xs text-brand-coral hover:text-brand-coral/80">
                    راهنمای سایز
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "border rounded-lg py-2 text-sm",
                        selectedSize === size
                          ? "border-brand-coral text-brand-coral bg-brand-coral/5"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">تعداد:</h3>
                <div className="flex">
                  <button
                    onClick={decrementQuantity}
                    className="border border-gray-300 rounded-r-lg w-10 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <div className="w-16 border-t border-b border-gray-300 flex items-center justify-center">
                    <span className="text-gray-900">{quantity}</span>
                  </div>
                  <button
                    onClick={incrementQuantity}
                    className="border border-gray-300 rounded-l-lg w-10 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                  <p className="text-sm text-gray-500 mr-3 self-center">
                    <span className="text-brand-coral">{product.stock}</span> عدد موجود
                  </p>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex space-x-3 space-x-reverse mt-6">
                <Button
                  onClick={handleAddToCart}
                  className="w-full md:w-auto bg-brand-coral hover:bg-brand-coral/90 px-8"
                >
                  <ShoppingCart className="h-5 w-5 ml-2" />
                  افزودن به سبد خرید
                </Button>
                <Button
                  onClick={toggleLike}
                  variant="outline"
                  className="flex-shrink-0"
                >
                  <Heart className={cn("h-5 w-5", isLiked && "fill-brand-coral text-brand-coral")} />
                </Button>
              </div>
            </div>
            
            {/* Product Features */}
            <div className="border-t border-gray-200 mt-8 pt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">ویژگی‌های محصول:</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-brand-coral flex-shrink-0 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Delivery Info */}
            <div className="flex flex-col space-y-2 mt-6 text-sm text-gray-700">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-brand-coral ml-2" />
                ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان
              </div>
              <div className="flex items-center">
                <RotateCcw className="h-5 w-5 text-brand-coral ml-2" />
                بازگشت کالا تا ۷ روز در صورت عدم رضایت
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-brand-coral ml-2" />
                ضمانت اصالت و کیفیت محصول
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="border-t border-gray-200 pt-10 mb-16">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("description")}
              className={cn(
                "py-3 px-4 text-sm font-medium border-b-2 -mb-px",
                activeTab === "description"
                  ? "border-brand-coral text-brand-coral"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              )}
            >
              توضیحات محصول
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={cn(
                "py-3 px-4 text-sm font-medium border-b-2 -mb-px",
                activeTab === "reviews"
                  ? "border-brand-coral text-brand-coral"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              )}
            >
              نظرات کاربران ({new Intl.NumberFormat('fa-IR').format(product.reviewCount)})
            </button>
            <button
              onClick={() => setActiveTab("shipping")}
              className={cn(
                "py-3 px-4 text-sm font-medium border-b-2 -mb-px",
                activeTab === "shipping"
                  ? "border-brand-coral text-brand-coral"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              )}
            >
              شرایط ارسال
            </button>
          </div>
          
          <div className="py-6">
            {activeTab === "description" && (
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">{product.description}</p>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                <p>کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
              </div>
            )}
            
            {activeTab === "reviews" && (
              <div>
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">نظرات کاربران</h3>
                  
                  {/* Sample Reviews */}
                  <div className="space-y-6">
                    <div className="border-b pb-6">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center text-white font-bold">
                            س
                          </div>
                          <div className="mr-3">
                            <h4 className="font-medium">سارا محمدی</h4>
                            <div className="flex items-center text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">۲ ماه پیش</span>
                      </div>
                      <p className="text-gray-700">کیفیت پارچه عالی بود و سایز کاملا مناسب بود. بسته‌بندی محصول هم خیلی مرتب بود. از خرید خودم راضی هستم و پیشنهاد می‌کنم.</p>
                    </div>
                    
                    <div className="border-b pb-6">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center text-white font-bold">
                            م
                          </div>
                          <div className="mr-3">
                            <h4 className="font-medium">مهدی رضایی</h4>
                            <div className="flex items-center text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className="h-4 w-4" fill={i < 4 ? "currentColor" : "none"} stroke={i < 4 ? "none" : "currentColor"} viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">۱ ماه پیش</span>
                      </div>
                      <p className="text-gray-700">رنگ محصول دقیقا مثل عکس بود. کیفیت دوخت خوب بود و پسرم خیلی دوست داشت. ارسال هم سریع انجام شد. فقط کاش سایز بزرگتر هم داشت.</p>
                    </div>
                  </div>
                </div>
                
                {/* Add Review Form */}
                <div>
                  <h3 className="text-lg font-medium mb-4">نظر خود را بنویسید</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          نام
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-coral/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          ایمیل
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-coral/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                        امتیاز شما
                      </label>
                      <div className="flex text-gray-400">
                        {[...Array(5)].map((_, i) => (
                          <button key={i} type="button" className="focus:outline-none">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                        نظر شما
                      </label>
                      <textarea
                        id="comment"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-coral/50"
                      ></textarea>
                    </div>
                    <div>
                      <Button className="bg-brand-coral hover:bg-brand-coral/90">
                        ثبت نظر
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            
            {activeTab === "shipping" && (
              <div className="text-gray-700 space-y-4">
                <h3 className="font-medium text-lg mb-2">شرایط ارسال</h3>
                <p>ارسال محصولات برای سفارش‌های بالای ۵۰۰ هزار تومان رایگان است. برای سفارش‌های کمتر، هزینه ارسال بر اساس وزن و مقصد محاسبه می‌شود.</p>
                <p>زمان ارسال:</p>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>تهران: ۱ تا ۲ روز کاری</li>
                  <li>سایر شهرها: ۲ تا ۴ روز کاری</li>
                </ul>
                <p>سفارش‌هایی که تا ساعت ۱۲ ظهر ثبت شوند، در همان روز پردازش و آماده ارسال می‌شوند.</p>
                
                <div className="border-t border-gray-200 pt-4 mt-6">
                  <h3 className="font-medium text-lg mb-2">شرایط مرجوعی</h3>
                  <p>در صورت عدم رضایت از محصول، می‌توانید تا ۷ روز پس از دریافت کالا، درخواست مرجوعی خود را ثبت کنید. لطفا توجه داشته باشید که محصول باید بدون استفاده و با تمام برچسب‌ها و بسته‌بندی اصلی مرجوع شود.</p>
                  <p>هزینه بازگشت کالا در صورتی که مشکل از محصول باشد، بر عهده فروشگاه است.</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">محصولات مرتبط</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
