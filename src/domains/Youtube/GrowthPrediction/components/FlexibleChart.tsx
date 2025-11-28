import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

interface ChartDataPoint {
  period: string;
  value: number;
  displayValue: string;
  shortPeriod: string;
}

type ChartVariant = 'growth' | 'decline' | 'neutral';

interface FlexibleChartProps {
  data?: ChartDataPoint[];
  variant?: ChartVariant;
  className?: string;
}

// 차트 테마 설정
const chartThemes = {
  growth: {
    lineColor: '#0066FF',
    dotColor: '#0066FF',
    backgroundColor: 'rgba(201, 222, 254, 0.4)',
    textColor: '#0066FF',
  },
  decline: {
    lineColor: '#FF4242',
    dotColor: '#FF4242',
    backgroundColor: 'rgba(254, 213, 213, 0.4)',
    textColor: '#FF4242',
  },
  neutral: {
    lineColor: '#8D9199',
    dotColor: '#8D9199',
    backgroundColor: 'rgba(232, 234, 237, 0.4)',
    textColor: '#8D9199',
  },
};

// 샘플 데이터
const sampleData = {
  growth: [
    {
      period: '90일 ~ 60일',
      value: 1.5,
      displayValue: '1.5명',
      shortPeriod: '90일~60일',
    },
    {
      period: '60일 ~ 30일',
      value: 3,
      displayValue: '3명',
      shortPeriod: '60일~30일',
    },
    {
      period: '최근 30일',
      value: 6,
      displayValue: '6명',
      shortPeriod: '최근 30일',
    },
  ],
  decline: [
    {
      period: '90일 ~ 60일',
      value: 25000,
      displayValue: '2.5만회',
      shortPeriod: '90일~60일',
    },
    {
      period: '60일 ~ 30일',
      value: 5000,
      displayValue: '5,000회',
      shortPeriod: '60일~30일',
    },
    {
      period: '최근 30일',
      value: 25000,
      displayValue: '2.5만회',
      shortPeriod: '최근 30일',
    },
  ],
  neutral: [
    {
      period: '90일 ~ 60일',
      value: 50,
      displayValue: '50%',
      shortPeriod: '90일~60일',
    },
    {
      period: '60일 ~ 30일',
      value: 52,
      displayValue: '52%',
      shortPeriod: '60일~30일',
    },
    {
      period: '최근 30일',
      value: 51,
      displayValue: '51%',
      shortPeriod: '최근 30일',
    },
  ],
};

// 커스텀 도트 컴포넌트
const CustomDot = ({ cx, cy, payload, theme }: any) => {
  return (
    <g>
      {/* 메인 도트 */}
      <circle
        cx={cx}
        cy={cy}
        r={3}
        fill={theme.dotColor}
        stroke="#FFFFFF"
        strokeWidth={3}
        style={{ filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1))' }}
      />

      {/* 데이터 라벨 박스 */}
      <foreignObject x={cx - 30} y={cy - 40} width={60} height={30}>
        <div
          className="flex items-center justify-center px-2.5 py-1 rounded-[5px] backdrop-blur-sm"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <span
            className="text-[15px] font-bold leading-6 whitespace-nowrap"
            style={{ color: theme.textColor }}
          >
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

export default function FlexibleChart({
  data,
  variant = 'growth',
  className = '',
}: FlexibleChartProps) {
  const theme = chartThemes[variant];
  const chartData = data || sampleData[variant];

  return (
    <div className={`w-full h-full ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
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
            stroke={theme.lineColor}
            strokeWidth={3}
            dot={<CustomDot theme={theme} />}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
