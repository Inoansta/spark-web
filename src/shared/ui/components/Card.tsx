import type { ReactNode } from 'react';
import clsx from 'clsx';
import Flex from '../layout/Flex';

interface RootProps {
  className?: string;
  isMedium?: boolean;
  children: ReactNode;
}

function Root({ className, isMedium, children }: RootProps) {
  return (
    <Flex
      direction="column"
      gapY={5}
      className={clsx(
        `border rounded-[20px] border-disabled overflow-hidden bg-white ${isMedium ? 'gap-y-[15px]' : undefined}`,
        className,
      )}
      as="article"
    >
      {children}
    </Flex>
  );
}

function Header({ className, isMedium = false, children }: RootProps) {
  return (
    <div
      className={clsx(`${isMedium ? 'px-3 pt-3' : 'px-5 pt-5'} `, className)}
    >
      {children}
    </div>
  );
}

function Content({ className, isMedium = false, children }: RootProps) {
  return (
    <div className={clsx(isMedium ? `px-3` : `px-5`, className)}>
      {children}
    </div>
  );
}

function Bottom({ className, children }: Exclude<RootProps, 'isMedium'>) {
  return <div className={clsx(``, className)}>{children}</div>;
}

const Card = Object.assign(Root, { Header, Content, Bottom });

export default Card;
