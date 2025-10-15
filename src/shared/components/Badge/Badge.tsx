import * as React from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/shared/lib';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-[5px] px-2.5 py-1 text-subtitle-b font-bold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-[#C9DEFE] text-[#0066FF]',
        primary: 'bg-primary1 text-primary5',
        secondary: 'bg-gray-100 text-gray-800',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        error: 'bg-red-100 text-red-800',
        outline: 'border border-primary5 text-primary5 bg-transparent',
      },
      size: {
        default: 'px-2.5 py-1 text-subtitle-b',
        sm: 'px-2 py-0.5 text-caption-b',
        lg: 'px-3 py-1.5 text-body-m',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
