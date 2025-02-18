const getHeightClass = (value: number, maxValue: number) => {
  const percent = Math.round((value / maxValue) * 100);
  if (percent <= 10) return 'h-[10%]';
  if (percent <= 20) return 'h-[20%]';
  if (percent <= 30) return 'h-[30%]';
  if (percent <= 40) return 'h-[40%]';
  if (percent <= 50) return 'h-[50%]';
  if (percent <= 60) return 'h-[60%]';
  if (percent <= 70) return 'h-[70%]';
  if (percent <= 80) return 'h-[80%]';
  if (percent <= 90) return 'h-[90%]';
  return 'h-[100%]';
};

// 여기서 max값을 정해야한다.

export default function DynamicGraphs({
  value,
  index,
  color,
}: {
  value: number;
  index: number;
  color: string;
}) {
  return (
    <div
      className={`w-20 ${getHeightClass(value, 100)} rounded-xl overflow-hidden bg-gray`}
    >
      <div
        className={`w-full ${color} h-full animate-slide-up delay-[${index * 200}ms] rounded-xl`}
      />
    </div>
  );
}
