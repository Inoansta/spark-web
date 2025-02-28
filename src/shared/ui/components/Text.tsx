import { cn } from '@/shared/lib';

interface TextProps {
  as: keyof typeof style;
  title: string;
  className?: string;
}

const style = {
  title: 'text-black font-extrabold text-[15px] not-italic',
  body: 'font-medium text-[15px] not-italic text-line',
  description: 'text-gray font-medium text-[13px] not-italic',
  card_title: 'text-gray font-bold text-[15px] not-italic',
  card_content: 'text-gray font-medium text-[12px] not-italic',
  card_description: 'text-xs font-bo ld text-white not-italic',
} as const;

export default function Text({ as, title, className }: TextProps) {
  return <p className={cn(style[as], className ? className : '')}>{title}</p>;
}
