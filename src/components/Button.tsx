
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'hero' | 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
  
  const variants = {
    hero: "bg-gradient-to-r from-primary to-primary-dark text-primary-foreground hover:shadow-xl hover:scale-[1.02] focus:ring-primary animate-gradient",
    primary: "bg-primary text-primary-foreground hover:bg-primary-dark hover:shadow-lg focus:ring-primary",
    secondary: "bg-muted text-foreground hover:bg-accent focus:ring-muted-foreground/30",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground focus:ring-primary",
    ghost: "text-foreground hover:bg-accent focus:ring-muted-foreground/30"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
