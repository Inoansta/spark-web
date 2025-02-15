interface Keyframe {
  animationName: string;
  from: React.CSSProperties;
  to: React.CSSProperties;
}

export default function Keyframe({ animationName, from, to }: Keyframe) {
  const objToCss = (obj: React.CSSProperties) =>
    Object.entries(obj)
      .map(([key, value]) => `${key}: ${value};`)
      .join('; ');

  return (
    <>
      <style>
        {`@keyframes ${animationName}{
            from{ ${objToCss(from)}}
            to{ ${objToCss(to)}}
            }`}
      </style>
    </>
  );
}
