import clsx from 'clsx';

const SIZE = {
  large: 'h-20',
  medium: 'h-16',
  xlsmall: 'h-12',
  lsmall: 'h-10',
  xsmall: 'h-8',
} as const;

interface SpacingProps {
  size?: keyof typeof SIZE;
  className?: string;
}

export default function Spacing({ size = 'medium', className }: SpacingProps) {
  return <div className={clsx(SIZE[size], className)} />;
}
