import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

export interface ChartDataPoint {
  period: string;
  value: number;
  displayValue: string;
  shortPeriod: string;
}

interface RechartsSubscriberChartProps {
  data?: ChartDataPoint[];
  className?: string;
}

// 커스텀 도트 컴포넌트
const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;

  return (
    <g>
      {/* 메인 도트 */}
      <circle
        cx={cx}
        cy={cy}
        r={3}
        fill="#0066FF"
        stroke="#FFFFFF"
        strokeWidth={3}
        style={{ filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1))' }}
      />

      {/* 데이터 라벨 박스 */}
      <foreignObject x={cx - 25} y={cy - 40} width={50} height={30}>
        <div className="flex items-center justify-center px-2.5 py-1 rounded-[5px] backdrop-blur-sm bg-[rgba(201,222,254,0.4)]">
          <span className="text-[15px] font-bold text-[#0066FF] leading-6 whitespace-nowrap">
            {payload.displayValue}
          </span>
        </div>
      </foreignObject>
    </g>
  );
};

// 커스텀 X축 라벨
const CustomXAxisTick = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="#8D9199"
        className="text-xs font-bold"
      >
        {payload.value}
      </text>
    </g>
  );
};

export default function RechartsSubscriberChart({
  data,
}: RechartsSubscriberChartProps) {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 40,
            right: 30,
            left: 30,
            bottom: 40,
          }}
        >
          {/* X축 */}
          <XAxis
            dataKey="shortPeriod"
            axisLine={false}
            tickLine={false}
            tick={<CustomXAxisTick />}
          />

          {/* Y축 (숨김) */}
          <YAxis hide />

          {/* 라인 */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#0066FF"
            strokeWidth={3}
            dot={<CustomDot />}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
