import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function cn(commonClassName: string, className: string) {
  return twMerge(clsx(commonClassName, className ? className : ''));
}
