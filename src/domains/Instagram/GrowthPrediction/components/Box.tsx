import * as React from 'react';
import { cn } from '@/shared/lib';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: 'default' | 'full' | 'fit';
  variant?: 'default' | 'elevated' | 'outlined';
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ className, width = 'default', variant = 'default', ...props }, ref) => {
    const widthStyles = {
      default: 'w-[335px]',
      full: 'w-full',
      fit: 'w-fit',
    };

    const variantStyles = {
      default: 'bg-white rounded-[20px]',
      elevated: 'bg-white rounded-[20px] shadow-lg',
      outlined: 'bg-white rounded-[20px] border border-gray-200',
    };

    return (
      <div
        ref={ref}
        className={cn(
          `overflow-hidden ${variantStyles[variant]} ${widthStyles[width]}`,
          className || '',
        )}
        {...props}
      />
    );
  },
);
Box.displayName = 'Box';

const BoxHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className || ''} {...props} />
));
BoxHeader.displayName = 'BoxHeader';

const BoxContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className || ''} {...props} />
));
BoxContent.displayName = 'BoxContent';

export { Box, BoxHeader, BoxContent };
