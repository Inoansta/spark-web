interface DynamicGraphs {
  value: number;
  maxValue: number;
  minValue: number;
  color: string;
}

const getHeightClass = (value: number, minValue: number, maxValue: number) => {
  if (!value || !maxValue || maxValue === minValue) return 10;

  const minHeight = 10; // 최소 높이 설정
  const sqrtValue = Math.sqrt(value - minValue + 1);
  const sqrtMax = Math.sqrt(maxValue - minValue + 1);

  // 최소 높이 보장 및 최대 100% 제한
  const percent = Math.max(minHeight, Math.round((sqrtValue / sqrtMax) * 100));

  return percent;
};

export default function DynamicGraphs({
  value,
  maxValue,
  minValue,
  color,
}: DynamicGraphs) {
  const heightPercentage = getHeightClass(value, minValue, maxValue);

  return (
    <div
      className={`w-20 rounded-xl overflow-hidden`}
      style={{ height: `${heightPercentage}%` }} // ✅ 동적 스타일 적용
    >
      <div
        className={`w-full ${color} h-full animate-slide-up delay-[200ms] rounded-xl`}
      />
    </div>
  );
}
