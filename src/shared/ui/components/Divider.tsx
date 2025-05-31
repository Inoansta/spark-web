import { cn } from '@/shared/lib';

interface DividerProps {
  size?: keyof typeof DIVIDER_SIZE;
}

const DIVIDER_SIZE = {
  RowSmall: 'h-[1px] w-full',
  RowMedium: 'h-[5px] w-full',
  ColumnSmall: 'h-full w-[1px]',
  ColumnMedium: 'h-full w-[5px]',
} as const;

export default function Divider({ size = 'RowSmall' }: DividerProps) {
  return <div className={cn(DIVIDER_SIZE[size], 'bg-disabled')} />;
}
