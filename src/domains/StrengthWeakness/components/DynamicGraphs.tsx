interface DynamicGraphs {
  value: number;
  maxValue: number;
  minValue: number;
  color: string;
}

const getHeightClass = (value: number, minValue: number, maxValue: number) => {
  if (!value || !maxValue) return 'h-[5%]';

  const minHeight = 5;

  const scaledValue = Math.log1p(Math.max(0, value - minValue + 1));
  const scaledMax = Math.log1p(Math.max(0, maxValue - minValue + 1));

  const percent =
    Math.max(minHeight, Math.round((scaledValue / scaledMax) * 100)) ||
    minHeight;

  return `h-[${percent}%]`;
};

export default function DynamicGraphs({
  value,
  maxValue,
  minValue,
  color,
}: DynamicGraphs) {
  return (
    <div
      className={`w-20 ${getHeightClass(value, minValue, maxValue)} rounded-xl overflow-hidden`}
    >
      <div
        className={`w-full ${color} h-full animate-slide-up delay-[200ms] rounded-xl`}
      />
    </div>
  );
}
