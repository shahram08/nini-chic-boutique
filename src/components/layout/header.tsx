
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ShoppingCart, User, Search, Heart, Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top header with logo, search and actions */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and menu button for mobile */}
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden me-2" 
            onClick={toggleMenu}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center">
            <div className="relative">
              <div className="bg-brand-coral text-white rounded-full w-12 h-12 flex items-center justify-center">
                <span className="font-bold text-lg">نینی</span>
              </div>
            </div>
            <div className="ms-3 hidden sm:block">
              <h1 className="text-xl font-bold text-gray-800">دنیای لباس کودک</h1>
              <p className="text-xs text-gray-500">بهترین طراحی‌های لباس برای کودکان شما</p>
            </div>
          </Link>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex flex-1 mx-6 max-w-md relative">
          <div className="relative w-full">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="جستجو..."
              className="w-full pl-10 pr-10 py-2 rounded-full border-gray-200"
            />
          </div>
        </div>

        {/* User actions */}
        <div className="flex items-center space-x-1 space-x-reverse">
          <Link to="/auth">
            <Button variant="outline" className="hidden sm:flex items-center text-sm">
              <User className="h-4 w-4 ml-2" />
              <span>ورود | ثبت نام</span>
            </Button>
          </Link>
          <Link to="/favorites">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-brand-coral text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                2
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={cn(
        "border-t border-gray-100 bg-white shadow-sm transition-all duration-300 overflow-hidden",
        {
          "max-h-0 md:max-h-full": !isMenuOpen,
          "max-h-96": isMenuOpen,
        }
      )}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 md:space-x-reverse py-3">
            <li>
              <Link to="/" className="flex items-center text-sm font-medium text-brand-coral hover:text-pink-500 transition">
                <span>صفحه اصلی</span>
              </Link>
            </li>
            <li>
              <Link to="/category/girls" className="flex items-center text-sm font-medium text-gray-700 hover:text-brand-coral transition">
                <span>لباس‌های دخترانه</span>
              </Link>
            </li>
            <li>
              <Link to="/category/boys" className="flex items-center text-sm font-medium text-gray-700 hover:text-brand-coral transition">
                <span>لباس‌های پسرانه</span>
              </Link>
            </li>
            <li>
              <Link to="/category/babies" className="flex items-center text-sm font-medium text-gray-700 hover:text-brand-coral transition">
                <span>نوزادان</span>
              </Link>
            </li>
            <li>
              <Link to="/special-offers" className="flex items-center text-sm font-medium text-gray-700 hover:text-brand-coral transition">
                <span>پیشنهادات ویژه</span>
              </Link>
            </li>
            <li>
              <Link to="/new-arrivals" className="flex items-center text-sm font-medium text-gray-700 hover:text-brand-coral transition">
                <span>جدیدترین‌ها</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile search */}
      <div className="md:hidden px-4 py-3 border-t border-gray-100">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="جستجو..."
            className="w-full pl-10 pr-10 py-2 rounded-full border-gray-200"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
