import type { ComponentProps, ReactNode } from 'react';
import { type RouteInfo, useMoveLocation } from '@/shared/hooks';

interface RouteMoveProps extends RouteInfo, ComponentProps<'div'> {
  children: ReactNode;
}

export default function RouteMove({
  location,
  children,
  ...props
}: RouteMoveProps) {
  const handleMoveLocation = useMoveLocation(location);

  return (
    <div onClick={handleMoveLocation} {...props}>
      {children}
    </div>
  );
}
