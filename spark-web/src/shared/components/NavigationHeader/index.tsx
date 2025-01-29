import type { ReactNode } from 'react';
import clsx from 'clsx';
import { type RouteInfo, useMoveLocation } from '@/shared/hooks';

interface LeftContentProps extends RouteInfo {
  className?: string;
  children: ReactNode;
}

function Root({ className, children }: Omit<LeftContentProps, 'location'>) {
  return (
    <header
      className={clsx('flex justify-between px-5 py-4 items-center', className)}
    >
      {children}
    </header>
  );
}

function LeftContent({ location, className, children }: LeftContentProps) {
  const handleMoveLocation = useMoveLocation(location);

  return (
    <div onClick={handleMoveLocation} className={clsx(className)}>
      {children}
    </div>
  );
}

function RightContent({ location, className, children }: LeftContentProps) {
  const handleMoveLocation = useMoveLocation(location);

  return (
    <div onClick={handleMoveLocation} className={clsx(className)}>
      {children}
    </div>
  );
}

const NavigationHeader = Object.assign(Root, { LeftContent, RightContent });

export default NavigationHeader;
