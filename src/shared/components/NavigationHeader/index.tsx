import type { ReactNode } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { type RouteInfo } from '@/shared/hooks';
import { Flex } from '@/shared/ui';
import RouteMove from '../RouteMove';

interface LeftContentProps extends RouteInfo {
  className?: string;
  children: ReactNode;
}

function Root({ className, children }: Omit<LeftContentProps, 'location'>) {
  return (
    <Flex
      justify="between"
      align="center"
      className={twMerge(
        clsx('px-5 pt-5 bg-inherit cursor-pointer', className),
      )}
      as="header"
    >
      {children}
    </Flex>
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
