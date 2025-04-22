
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Package, 
  Users, 
  Settings, 
  Home,
  FileText,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    {
      title: "داشبورد",
      icon: <Home className="h-5 w-5" />,
      path: "/admin",
      exact: true
    },
    {
      title: "محصولات",
      icon: <Package className="h-5 w-5" />,
      path: "/admin/products"
    },
    {
      title: "سفارشات",
      icon: <ShoppingCart className="h-5 w-5" />,
      path: "/admin/orders"
    },
    {
      title: "کاربران",
      icon: <Users className="h-5 w-5" />,
      path: "/admin/users"
    },
    {
      title: "گزارشات",
      icon: <FileText className="h-5 w-5" />,
      path: "/admin/reports"
    },
    {
      title: "تنظیمات",
      icon: <Settings className="h-5 w-5" />,
      path: "/admin/settings"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Admin Header */}
      <header className="bg-white shadow-sm z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4 space-x-reverse">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="md:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
            <div className="flex items-center">
              <div className="bg-brand-coral text-white rounded-full w-8 h-8 flex items-center justify-center">
                <span className="font-bold text-xs">نینی</span>
              </div>
              <h1 className="text-xl font-bold text-gray-800 mr-2">پنل مدیریت</h1>
            </div>
          </div>

          <div className="flex items-center space-x-2 space-x-reverse">
            <span className="text-sm font-medium ml-2 hidden md:inline">مدیر سیستم</span>
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Admin"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="absolute -bottom-1 -left-1 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
            </div>
            <Link to="/">
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={cn(
            "bg-white fixed inset-y-0 right-0 z-20 w-64 transform transition-transform duration-300 ease-in-out md:static md:translate-x-0 pt-16 md:pt-0 border-l",
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="h-full flex flex-col p-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium",
                    (item.exact ? location.pathname === item.path : location.pathname.startsWith(item.path))
                      ? "bg-brand-coral text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <span className="ml-3">{item.icon}</span>
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t">
              <div className="bg-blue-50 text-blue-800 p-3 rounded-lg">
                <h3 className="text-sm font-medium mb-1">راهنمای پنل</h3>
                <p className="text-xs">برای دسترسی به راهنمای استفاده از پنل مدیریت می‌توانید روی این قسمت کلیک کنید.</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
