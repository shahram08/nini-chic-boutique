
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Plus, Edit, Trash2, Filter } from "lucide-react";

// Mock product data
const products = [
  {
    id: "1",
    title: "پیراهن راه راه پسرانه طرح دریایی",
    price: 189000,
    discountedPrice: 149000,
    image: "/lovable-uploads/e43aa346-34b6-4892-8fb0-c20e9440afde.png",
    category: "boys",
    stock: 45,
    sales: 87,
    status: "active"
  },
  {
    id: "2",
    title: "لباس مجلسی دخترانه با طرح گل‌های رنگارنگ",
    price: 258000,
    discountedPrice: 199000,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=500",
    category: "girls",
    stock: 23,
    sales: 65,
    status: "active"
  },
  {
    id: "3",
    title: "ست لباس نوزادی طرح خرگوش",
    price: 175000,
    discountedPrice: null,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=500",
    category: "babies",
    stock: 17,
    sales: 54,
    status: "active"
  },
  {
    id: "4",
    title: "شلوار جین دخترانه ستاره‌دار",
    price: 219000,
    discountedPrice: 189000,
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=500",
    category: "girls",
    stock: 32,
    sales: 42,
    status: "active"
  },
  {
    id: "5",
    title: "بلوز پسرانه آستین بلند طرح فضا",
    price: 145000,
    discountedPrice: null,
    image: "https://images.unsplash.com/photo-1519238360530-d5035211fc66?q=80&w=500",
    category: "boys",
    stock: 0,
    sales: 28,
    status: "out_of_stock"
  },
];

const ProductsManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      const filtered = products.filter(product => 
        product.title.includes(searchTerm)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case "boys":
        return "پسرانه";
      case "girls":
        return "دخترانه";
      case "babies":
        return "نوزادان";
      default:
        return category;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">مدیریت محصولات</h1>
        <Button>
          <Plus className="w-4 h-4 ml-2" />
          افزودن محصول
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 md:space-x-reverse">
          <form onSubmit={handleSearch} className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="جستجوی محصول..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-coral/50"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <button
                type="submit"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-brand-coral"
              >
                <Filter className="h-5 w-5" />
              </button>
            </div>
          </form>

          <div className="flex space-x-2 space-x-reverse">
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-coral/50"
              >
                <option value="all">همه دسته‌بندی‌ها</option>
                <option value="boys">پسرانه</option>
                <option value="girls">دخترانه</option>
                <option value="babies">نوزادان</option>
              </select>
            </div>
            <div>
              <select
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-coral/50"
              >
                <option value="all">همه وضعیت‌ها</option>
                <option value="active">فعال</option>
                <option value="out_of_stock">ناموجود</option>
                <option value="hidden">مخفی</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider"
                >
                  محصول
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider"
                >
                  دسته‌بندی
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider"
                >
                  قیمت (تومان)
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider"
                >
                  موجودی
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider"
                >
                  فروش
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider"
                >
                  وضعیت
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">عملیات</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-lg object-cover"
                          src={product.image}
                          alt={product.title}
                        />
                      </div>
                      <div className="mr-4">
                        <div className="text-sm font-medium text-gray-900">{product.title}</div>
                        <div className="text-sm text-gray-500">کد: {product.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{getCategoryName(product.category)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {product.discountedPrice ? (
                      <div>
                        <div className="text-sm text-brand-coral font-medium">
                          {new Intl.NumberFormat('fa-IR').format(product.discountedPrice)}
                        </div>
                        <div className="text-xs text-gray-500 line-through">
                          {new Intl.NumberFormat('fa-IR').format(product.price)}
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-900">
                        {new Intl.NumberFormat('fa-IR').format(product.price)}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm ${product.stock === 0 ? 'text-red-600 font-medium' : 'text-gray-900'}`}>
                      {new Intl.NumberFormat('fa-IR').format(product.stock)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Intl.NumberFormat('fa-IR').format(product.sales)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        product.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : product.status === 'out_of_stock'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {product.status === 'active'
                        ? 'فعال'
                        : product.status === 'out_of_stock'
                        ? 'ناموجود'
                        : 'مخفی'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                    <div className="flex space-x-2 space-x-reverse justify-end">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t flex items-center justify-between">
          <div className="text-sm text-gray-500">
            نمایش <span className="font-medium">۱</span> تا <span className="font-medium">۵</span> از <span className="font-medium">۲۴</span> محصول
          </div>
          <div className="flex space-x-1 space-x-reverse">
            <Button variant="outline" size="sm" disabled>
              قبلی
            </Button>
            <Button variant="outline" size="sm" className="bg-brand-coral text-white">
              ۱
            </Button>
            <Button variant="outline" size="sm">
              ۲
            </Button>
            <Button variant="outline" size="sm">
              ۳
            </Button>
            <Button variant="outline" size="sm">
              بعدی
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsManagement;
