import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const variants = {
            primary: 'bg-primary text-white hover:bg-primary-light dark:bg-blue-600 dark:hover:bg-blue-500',
            secondary: 'bg-accent text-primary hover:bg-blue-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
            outline: 'border-2 border-primary text-primary hover:bg-primary/10 dark:border-white dark:text-white dark:hover:bg-white/10',
            ghost: 'text-primary hover:bg-primary/10 dark:text-white dark:hover:bg-white/10',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-6 py-2.5 text-base',
            lg: 'px-8 py-3 text-lg',
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    'rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';

export { Button, cn };
