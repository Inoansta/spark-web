import type { ComponentProps, ReactNode } from 'react';

interface LocationMoveProps extends ComponentProps<'div'> {
  location: string;
  children: ReactNode;
}

export default function LocationMove({
  location,
  children,
  ...props
}: LocationMoveProps) {
  const handleLocationMove = () => {
    try {
      window.location.href = location;
    } catch (error) {
      throw new Error(`${location} 이동하는데 실패했습니다.`);
    }
  };

  return (
    <div onClick={handleLocationMove} {...props} className="cursor-pointer">
      {children}
    </div>
  );
}
