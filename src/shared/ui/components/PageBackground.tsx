import type { ReactNode } from 'react';

interface PageBackgroundProps {
  color: keyof typeof BG_COLOR;
  children: ReactNode;
}

const BG_COLOR = {
  black_gradient: 'bg-gradient-to-b from-highEmphasis to-black',
} as const;

export default function PageBackground({
  color,
  children,
}: PageBackgroundProps) {
  return (
    <div className={`${BG_COLOR[color]} min-h-screen`}>
      <div className="px-[20px] py-[66px] h-screen">{children}</div>
    </div>
  );
}
