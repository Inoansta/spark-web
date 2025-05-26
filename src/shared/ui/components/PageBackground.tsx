import type { ReactNode } from 'react';

interface PageBackgroundProps {
  color: keyof typeof BG_COLOR;
  children: ReactNode;
}

const BG_COLOR = {
  black_gradient: 'bg-gradient-to-b from-highEmphasis to-black',
  primary_gradient: 'bg-gradient-to-b from-primary8 via-primary6 to-sub2',
  white: 'bg-white',
  black_linear_gradient:
    'bg-[linear-gradient(180deg,_#000_-9.11%,_#787CFE_50.12%,_#FFCDFB_123.03%)]',
  white_linear_gradient:
    'bg-[linear-gradient(180deg,_#F8F9FD_0.01%,_#4557FF_70.21%,_#FFCDFB_106.76%)]',
} as const;

export default function PageBackground({
  color,
  children,
}: PageBackgroundProps) {
  return (
    <div className={`${BG_COLOR[color]} min-h-screen`}>
      <div className="px-[20px] py-[65px] min-h-screen">{children}</div>
    </div>
  );
}
