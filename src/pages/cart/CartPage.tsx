
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BadgeButton } from "@/components/ui/badge-button";
import { Trash2, ShoppingBag, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Type definitions
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
};

const CartPage = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "پیراهن گلدار تابستانی",
      price: 185000,
      quantity: 1,
      size: "4-5 سال",
      color: "صورتی",
      image: "/placeholder.svg"
    },
    {
      id: "2",
      name: "شلوار جین بچگانه",
      price: 220000,
      quantity: 1,
      size: "3-4 سال",
      color: "آبی",
      image: "/placeholder.svg"
    }
  ]);
  
  const [couponCode, setCouponCode] = useState("");
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    toast({
      title: "محصول حذف شد",
      description: "محصول مورد نظر از سبد خرید حذف شد.",
    });
  };
  
  const applyCoupon = () => {
    if (couponCode.trim()) {
      toast({
        title: "کد تخفیف اعمال شد",
        description: "کد تخفیف با موفقیت اعمال شد.",
      });
      setCouponCode("");
    }
  };
  
  const proceedToCheckout = () => {
    toast({
      title: "ادامه فرآیند خرید",
      description: "به صفحه پرداخت منتقل می‌شوید.",
    });
  };
  
  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 25000 : 0;
  const discount = 0; // Would be calculated based on coupon
  const total = subtotal + shipping - discount;
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">سبد خرید</h1>
      
      {cartItems.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/4 max-h-32 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        <span>سایز: {item.size}</span>
                        <span className="mx-2">|</span>
                        <span>رنگ: {item.color}</span>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                        <div className="font-bold">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="flex items-center mt-4">
              <input
                type="text"
                placeholder="کد تخفیف"
                className="border rounded py-2 px-4 flex-1"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <Button 
                variant="outline" 
                className="mr-2" 
                onClick={applyCoupon}
              >
                اعمال
              </Button>
            </div>
            
            <div className="flex justify-between">
              <Button variant="outline" asChild>
                <Link to="/" className="flex items-center">
                  <ShoppingBag className="h-4 w-4 ml-2" />
                  ادامه خرید
                </Link>
              </Button>
              
              <BadgeButton variant="discount">
                محصولات پرطرفدار
              </BadgeButton>
            </div>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>خلاصه سفارش</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>جمع سبد خرید</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>هزینه ارسال</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>تخفیف</span>
                    <span>{formatPrice(discount)}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>مبلغ قابل پرداخت</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-brand-coral hover:bg-brand-coral/90"
                  onClick={proceedToCheckout}
                >
                  <CreditCard className="h-4 w-4 ml-2" />
                  ادامه فرآیند خرید
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="inline-block p-6 bg-gray-100 rounded-full mb-4">
            <ShoppingBag className="h-12 w-12 text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold mb-2">سبد خرید شما خالی است</h2>
          <p className="text-gray-500 mb-6">محصولات مورد نظر خود را به سبد خرید اضافه کنید</p>
          <Button asChild>
            <Link to="/">مشاهده محصولات</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
