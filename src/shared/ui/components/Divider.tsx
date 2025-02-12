interface DividerProps {
  type?: 'row' | 'column';
}

export default function Divider({ type = 'row' }: DividerProps) {
  return (
    <div
      className={`${type === 'row' ? 'w-full h-[1px]' : 'h-full w-[1px]'} bg-disabled`}
    />
  );
}
