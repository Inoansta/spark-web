interface TagProps {
  type: '강점' | '약점';
  index: number;
}

export default function Tag({ type, index }: TagProps) {
  const bgColor = type === '강점' ? 'bg-primary10' : 'bg-gradient4';

  return (
    <span
      className={`rounded-xl px-[10px] py-[5px] text-white text-center ${bgColor} text-[13px] font-bold`}
    >
      {`${type} ${index}`}
    </span>
  );
}
