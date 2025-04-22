
// Mock product data for categories
export const products = [
  {
    id: "1",
    title: "پیراهن راه راه پسرانه طرح دریایی",
    price: 189000,
    discountedPrice: 149000,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=500",
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
export const categoryInfo = {
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
  },
  "special-offers": {
    title: "پیشنهادات ویژه",
    description: "محصولات با تخفیف‌های ویژه و فوق‌العاده",
    banner: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1200",
    color: "brand-coral"
  },
  "new-arrivals": {
    title: "محصولات جدید",
    description: "تازه‌ترین محصولات اضافه شده به فروشگاه ما",
    banner: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200",
    color: "brand-teal"
  }
};
