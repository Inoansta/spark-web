interface HighlightTextProps {
  text: string;
  highlight: string;
  className?: string;
  highlightClassName?: string;
}

export default function HighlightText({
  text,
  highlight,
  className = '',
  highlightClassName = 'text-primary5',
}: HighlightTextProps) {
  const highlightIndex = text.indexOf(highlight);

  if (highlightIndex === -1) {
    return <span className={className}>{text}</span>;
  }

  const beforeHighlight = text.slice(0, highlightIndex);
  const afterHighlight = text.slice(highlightIndex + highlight.length);

  return (
    <span className={className}>
      {beforeHighlight}
      <span className={highlightClassName}>{highlight}</span>
      {afterHighlight}
    </span>
  );
}



