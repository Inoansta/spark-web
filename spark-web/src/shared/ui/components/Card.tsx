import type { ReactNode } from 'react';
import clsx from 'clsx';

interface RootProps {
  className?: string;
  children: ReactNode;
}

function Root({ className, children }: RootProps) {
  return (
    <article
      className={clsx(
        `flex flex-col border rounded-2xl border-midEmphasis gap-y-5 overflow-hidden`,
        className,
      )}
    >
      {children}
    </article>
  );
}

function Header({ className, children }: RootProps) {
  return (
    <div className={clsx(`flex flex-col px-5 pt-5 flex-1`, className)}>
      {children}
    </div>
  );
}

function Content({ className, children }: RootProps) {
  return (
    <div
      className={clsx(
        `p-5 flex justify-between flex-2 gap-x-9 items-center`,
        className,
      )}
    >
      {children}
    </div>
  );
}

function Bottom({ className, children }: RootProps) {
  return <div className={clsx(`flex-1`, className)}>{children}</div>;
}

const Card = Object.assign(Root, { Header, Content, Bottom });

export default Card;
