import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TextProps {
  as: keyof typeof style;
  title: string;
  className?: string;
}

const style = {
  title: 'text-black font-extrabold text-[15px] not-italic',
  description: 'text-gray font-medium text-[13px] not-italic',
  card_description: 'text-xs font-bo ld text-white not-italic',
} as const;

export default function Text({ as, title, className }: TextProps) {
  return <p className={twMerge(clsx(style[as], className))}>{title}</p>;
}
