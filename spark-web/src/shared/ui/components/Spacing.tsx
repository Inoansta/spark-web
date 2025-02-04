const SIZE = {
  larage: '16',
} as const;

interface SpacingProps {
  size: keyof typeof SIZE;
}

export default function Spacing({ size }: SpacingProps) {
  return <div className={`h-${SIZE[size]}`} />;
}
