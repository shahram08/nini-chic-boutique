
import { BadgeButton } from "@/components/ui/badge-button";
import { Button } from "@/components/ui/button";

const AdminDashboard = () => {
  // Mock data
  const stats = [
    { title: "کل فروش", value: "۲۷,۵۴۰,۰۰۰", unit: "تومان", change: "+12%", changeType: "positive" },
    { title: "سفارشات", value: "۲۳۴", unit: "عدد", change: "+18%", changeType: "positive" },
    { title: "کاربران جدید", value: "۱۲۳", unit: "نفر", change: "+32%", changeType: "positive" },
    { title: "بازدید", value: "۱۵,۸۹۳", unit: "نفر", change: "-5%", changeType: "negative" },
  ];

  const recentOrders = [
    { id: "ORD-1234", customer: "علی محمدی", date: "۱۴۰۴/۰۲/۱۵", amount: "۵۴۰,۰۰۰", status: "تکمیل شده" },
    { id: "ORD-1233", customer: "مریم احمدی", date: "۱۴۰۴/۰۲/۱۴", amount: "۸۹۰,۰۰۰", status: "در حال پردازش" },
    { id: "ORD-1232", customer: "رضا کریمی", date: "۱۴۰۴/۰۲/۱۴", amount: "۳۲۰,۰۰۰", status: "تکمیل شده" },
    { id: "ORD-1231", customer: "سارا حسینی", date: "۱۴۰۴/۰۲/۱۳", amount: "۴۵۰,۰۰۰", status: "ارسال شده" },
    { id: "ORD-1230", customer: "حسین رضایی", date: "۱۴۰۴/۰۲/۱۳", amount: "۷۸۰,۰۰۰", status: "لغو شده" },
  ];

  const topProducts = [
    { name: "پیراهن راه راه پسرانه", sold: 87, revenue: "۱۵,۲۲۵,۰۰۰" },
    { name: "لباس مجلسی دخترانه", sold: 65, revenue: "۱۲,۶۷۵,۰۰۰" },
    { name: "ست لباس نوزادی", sold: 54, revenue: "۹,۴۵۰,۰۰۰" },
    { name: "تیشرت پسرانه دایناسور", sold: 42, revenue: "۵,۴۱۸,۰۰۰" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "تکمیل شده":
        return "bg-green-100 text-green-800";
      case "در حال پردازش":
        return "bg-blue-100 text-blue-800";
      case "ارسال شده":
        return "bg-purple-100 text-purple-800";
      case "لغو شده":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">داشبورد</h1>
        <div className="flex space-x-2 space-x-reverse">
          <Button>گزارش جدید</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-5">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">
                  {stat.value} <span className="text-sm font-normal">{stat.unit}</span>
                </p>
              </div>
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-lg ${
                  index % 4 === 0
                    ? "bg-brand-lightyellow"
                    : index % 4 === 1
                    ? "bg-brand-lightpink"
                    : index % 4 === 2
                    ? "bg-brand-purple"
                    : "bg-brand-mint"
                }`}
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {index % 4 === 0 && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  )}
                  {index % 4 === 1 && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  )}
                  {index % 4 === 2 && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  )}
                  {index % 4 === 3 && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    
                  )}
                </svg>
              </div>
            </div>
            <div className="mt-2">
              <BadgeButton
                variant={stat.changeType === "positive" ? "new" : "discount"}
                className="text-xs py-0.5 px-2"
              >
                {stat.change} نسبت به ماه قبل
              </BadgeButton>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-5 border-b">
            <h2 className="font-bold">سفارشات اخیر</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider"
                  >
                    شماره سفارش
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider"
                  >
                    مشتری
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider"
                  >
                    تاریخ
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider"
                  >
                    مبلغ
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
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.amount} تومان
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-brand-coral hover:text-brand-coral/80">
                        مشاهده
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center p-4 border-t">
            <Button variant="outline" size="sm">
              مشاهده همه سفارشات
            </Button>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-5 border-b">
            <h2 className="font-bold">محصولات پرفروش</h2>
          </div>
          <div className="p-5">
            <ul className="space-y-4">
              {topProducts.map((product, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0"
                >
                  <div className="flex items-center">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                        index % 4 === 0
                          ? "bg-brand-lightyellow text-yellow-700"
                          : index % 4 === 1
                          ? "bg-brand-lightpink text-pink-700"
                          : index % 4 === 2
                          ? "bg-brand-purple text-indigo-700"
                          : "bg-brand-mint text-green-700"
                      } mr-3`}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.sold} فروش</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{product.revenue}</p>
                    <p className="text-xs text-gray-500">تومان</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center p-4 border-t">
            <Button variant="outline" size="sm">
              مشاهده همه محصولات
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-5">
          <h3 className="font-bold mb-3">اضافه کردن محصول جدید</h3>
          <p className="text-sm text-gray-500 mb-4">
            محصول جدید را با تمام مشخصات به فروشگاه اضافه کنید.
          </p>
          <Button>افزودن محصول</Button>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-5">
          <h3 className="font-bold mb-3">مدیریت موجودی</h3>
          <p className="text-sm text-gray-500 mb-4">
            موجودی محصولات را بررسی و به‌روزرسانی کنید.
          </p>
          <Button variant="outline">بررسی موجودی</Button>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-5">
          <h3 className="font-bold mb-3">تنظیمات درگاه پرداخت</h3>
          <p className="text-sm text-gray-500 mb-4">
            تنظیمات درگاه پرداخت و اینماد را مدیریت کنید.
          </p>
          <Button variant="outline">تنظیمات پرداخت</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
