import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, hover = false, ...props }, ref) => {
    const baseClasses = cn(
      'glass rounded-lg p-6',
      hover && 'transition-shadow duration-200 hover:shadow-lg hover:shadow-[var(--glow-purple)]',
      className
    );

    return (
      <div ref={ref} className={baseClasses} {...props}>
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export default GlassCard;
