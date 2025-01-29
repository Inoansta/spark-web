import type { ReactNode } from 'react';
import clsx from 'clsx';
import { type RouteInfo } from '@/shared/hooks';
import RouteMove from '../RouteMove';

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
  return (
    <RouteMove location={location} className={clsx(className)}>
      {children}
    </RouteMove>
  );
}

function RightContent({ location, className, children }: LeftContentProps) {
  return (
    <RouteMove location={location} className={clsx(className)}>
      {children}
    </RouteMove>
  );
}

const NavigationHeader = Object.assign(Root, { LeftContent, RightContent });

export default NavigationHeader;
