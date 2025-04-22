
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface BadgeButtonProps {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "discount" | "new" | "bestseller";
  onClick?: () => void;
}

const BadgeButton = ({ 
  className, 
  children, 
  variant = "default",
  onClick
}: BadgeButtonProps) => {
  const variantStyles = {
    default: "bg-brand-yellow text-foreground",
    discount: "bg-brand-yellow text-brand-coral font-bold",
    new: "bg-brand-mint text-foreground",
    bestseller: "bg-brand-peach text-white"
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-1 text-sm font-medium shadow-sm hover:shadow-md transition-all",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </Button>
  );
};

export { BadgeButton };
