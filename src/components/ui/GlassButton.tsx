import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, children, variant = 'secondary', size = 'md', ...props }, ref) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]',
      'disabled:pointer-events-none disabled:opacity-50',
      {
        // Variant styles
        'bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent)]/90 shadow-lg shadow-[var(--glow-purple)] hover:shadow-xl hover:shadow-[var(--glow-purple)]':
          variant === 'primary',
        'glass hover:shadow-[var(--glow-purple)]': variant === 'secondary',

        // Size styles
        'h-8 px-3 text-sm': size === 'sm',
        'h-10 px-6 text-base': size === 'md',
        'h-12 px-8 text-lg': size === 'lg',
      },
      className
    );

    return (
      <button
        ref={ref}
        className={baseClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GlassButton.displayName = 'GlassButton';

export default GlassButton;
