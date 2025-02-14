import type { ReactNode } from 'react';
import clsx from 'clsx';
import Flex from '../layout/Flex';

interface RootProps {
  className?: string;
  children: ReactNode;
}

function Root({ className, children }: RootProps) {
  return (
    <Flex
      direction="column"
      gapY={5}
      className={clsx(
        `border rounded-2xl border-disabled overflow-hidden bg-white`,
        className,
      )}
      as="article"
    >
      {children}
    </Flex>
  );
}

function Header({ className, children }: RootProps) {
  return <div className={clsx(`px-5 pt-5 `, className)}>{children}</div>;
}

function Content({ className, children }: RootProps) {
  return <div className={clsx(`px-5`, className)}>{children}</div>;
}

function Bottom({ className, children }: RootProps) {
  return <div className={clsx(``, className)}>{children}</div>;
}

const Card = Object.assign(Root, { Header, Content, Bottom });

export default Card;
