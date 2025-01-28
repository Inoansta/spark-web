interface TextProps {
  as: keyof typeof style;
  title: string;
}

const style = {
  title: 'text-black font-extrabold text-[15px] not-italic',
  description: 'text-gray font-medium text-[13px] not-italic',
} as const;

export default function Text({ as, title }: TextProps) {
  return <p className={style[as]}>{title}</p>;
}
