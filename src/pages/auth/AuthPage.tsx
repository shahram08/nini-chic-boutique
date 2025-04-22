
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { LogIn, UserPlus } from "lucide-react";

const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  // Register form state
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock login - would be replaced with actual authentication
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "ورود موفقیت‌آمیز",
        description: "به نینی شیک خوش آمدید!",
      });
      navigate("/");
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock registration - would be replaced with actual registration
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "ثبت نام موفقیت‌آمیز",
        description: "حساب کاربری شما با موفقیت ایجاد شد.",
      });
      navigate("/");
    }, 1500);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <Card className="max-w-md mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">حساب کاربری</CardTitle>
          <CardDescription className="text-center">
            وارد حساب کاربری خود شوید یا یک حساب جدید ایجاد کنید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">ورود</TabsTrigger>
              <TabsTrigger value="register">ثبت نام</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">ایمیل</Label>
                  <Input 
                    id="login-email" 
                    type="email" 
                    placeholder="example@email.com" 
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="login-password">رمز عبور</Label>
                    <a href="#" className="text-xs text-brand-coral hover:underline">
                      فراموشی رمز عبور؟
                    </a>
                  </div>
                  <Input 
                    id="login-password" 
                    type="password" 
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-brand-coral hover:bg-brand-coral/90"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                      در حال ورود...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <LogIn className="h-4 w-4" />
                      ورود
                    </span>
                  )}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="register-name">نام و نام خانوادگی</Label>
                  <Input 
                    id="register-name" 
                    type="text" 
                    value={registerName}
                    onChange={(e) => setRegisterName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email">ایمیل</Label>
                  <Input 
                    id="register-email" 
                    type="email" 
                    placeholder="example@email.com" 
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-phone">شماره موبایل</Label>
                  <Input 
                    id="register-phone" 
                    type="tel" 
                    placeholder="09123456789" 
                    value={registerPhone}
                    onChange={(e) => setRegisterPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">رمز عبور</Label>
                  <Input 
                    id="register-password" 
                    type="password" 
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-brand-coral hover:bg-brand-coral/90"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                      در حال ثبت نام...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <UserPlus className="h-4 w-4" />
                      ثبت نام
                    </span>
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">یا ورود با</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline">Google</Button>
            <Button variant="outline">تلفن همراه</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthPage;
