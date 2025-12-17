import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          // Variants
          {
            'bg-gray-900 text-white hover:bg-black shadow-lg hover:shadow-xl': variant === 'primary',
            'bg-primary text-white hover:bg-primary-700 shadow-md': variant === 'secondary',
            'border-2 border-gray-300 bg-transparent hover:border-gray-900 hover:bg-gray-50': variant === 'outline',
            'bg-transparent hover:bg-gray-100': variant === 'ghost',
          },
          // Sizes
          {
            'px-4 py-2 text-sm min-h-[40px]': size === 'sm',
            'px-6 py-3 text-base min-h-[48px]': size === 'md',
            'px-8 py-4 text-lg min-h-[56px]': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
