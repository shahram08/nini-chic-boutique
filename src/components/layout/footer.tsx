
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and about section */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-brand-coral text-white rounded-full w-10 h-10 flex items-center justify-center">
                <span className="font-bold text-md">نینی</span>
              </div>
              <h2 className="ms-3 text-lg font-bold">دنیای لباس کودک</h2>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              ما ارائه دهنده بهترین پوشاک کودکان با کیفیت بالا و قیمت مناسب هستیم.
              تمامی محصولات ما با استفاده از بهترین مواد و استانداردهای ایمنی تولید می‌شوند.
            </p>
            <div className="flex space-s-4">
              <a href="#" className="w-8 h-8 rounded-full bg-brand-coral flex items-center justify-center text-white">
                <i className="text-sm">ف</i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-brand-coral flex items-center justify-center text-white">
                <i className="text-sm">ت</i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-brand-coral flex items-center justify-center text-white">
                <i className="text-sm">ا</i>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-md font-bold mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-coral transition text-sm">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-coral transition text-sm">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-brand-coral transition text-sm">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-brand-coral transition text-sm">
                  شرایط ارسال
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-brand-coral transition text-sm">
                  شرایط مرجوعی
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-md font-bold mb-4">دسته‌بندی‌ها</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/girls" className="text-gray-600 hover:text-brand-coral transition text-sm">
                  لباس‌های دخترانه
                </Link>
              </li>
              <li>
                <Link to="/category/boys" className="text-gray-600 hover:text-brand-coral transition text-sm">
                  لباس‌های پسرانه
                </Link>
              </li>
              <li>
                <Link to="/category/babies" className="text-gray-600 hover:text-brand-coral transition text-sm">
                  لباس نوزادان
                </Link>
              </li>
              <li>
                <Link to="/category/shoes" className="text-gray-600 hover:text-brand-coral transition text-sm">
                  کفش کودکان
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-gray-600 hover:text-brand-coral transition text-sm">
                  اکسسوری
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact information and eNamad */}
          <div className="col-span-1">
            <h3 className="text-md font-bold mb-4">اطلاعات تماس</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">
                آدرس: تهران، خیابان ولیعصر، پلاک ۱۲۳
              </li>
              <li className="text-gray-600 text-sm">
                تلفن: ۰۲۱-۱۲۳۴۵۶۷۸
              </li>
              <li className="text-gray-600 text-sm">
                ایمیل: info@ninichic.com
              </li>
            </ul>
            
            <div className="mt-6 flex items-center">
              <div className="border rounded p-2 w-16 h-20 flex items-center justify-center bg-white">
                <img 
                  src="https://enamad.ir/wp-content/themes/enamad/assets/images/logo.svg" 
                  alt="enamad" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="border rounded p-2 w-16 h-20 flex items-center justify-center bg-white mr-2">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="10" fill="#E6E6E6"/>
                  <path d="M65 30H35C32.2386 30 30 32.2386 30 35V65C30 67.7614 32.2386 70 35 70H65C67.7614 70 70 67.7614 70 65V35C70 32.2386 67.7614 30 65 30Z" fill="#3FA9F5"/>
                  <path d="M50 40C44.4772 40 40 44.4772 40 50C40 55.5228 44.4772 60 50 60C55.5228 60 60 55.5228 60 50C60 44.4772 55.5228 40 50 40Z" fill="white"/>
                  <path d="M50 45C47.2386 45 45 47.2386 45 50C45 52.7614 47.2386 55 50 55C52.7614 55 55 52.7614 55 50C55 47.2386 52.7614 45 50 45Z" fill="#3FA9F5"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-10 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © ۱۴۰۴ دنیای لباس کودک «نینی شیک». تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
