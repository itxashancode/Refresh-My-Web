/* g:\RefreshMyWeb\src\components\ui\index.tsx */
import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-95 relative whitespace-nowrap";
    
    const variants = {
      primary: "bg-black text-white hover:bg-zinc-900 dark:bg-white dark:text-black font-black hover:scale-[1.03] shadow-[0_0_24px_rgba(0,0,0,0.2)] dark:shadow-[0_0_24px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]",
      secondary: "bg-transparent border border-zinc-300 dark:border-white/20 text-zinc-600 dark:text-white/80 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 font-bold",
      outline: "border-2 border-black bg-transparent text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black",
      ghost: "bg-transparent text-black hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-900",
    };

    const sizes = {
      sm: "px-5 py-2 text-sm",
      md: "px-8 py-3.5 text-[15px]",
      lg: "px-8 py-4 text-[15px]",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles, 
          variants[variant], 
          sizes[size], 
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
    {children}
  </div>
);
