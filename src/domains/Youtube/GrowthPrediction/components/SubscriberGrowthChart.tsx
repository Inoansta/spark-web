import { Box, BoxContent } from './Box';

interface DataPoint {
  value: string;
  period: string;
  position: { x: number; y: number };
}

interface SubscriberGrowthChartProps {
  data?: DataPoint[];
}

const defaultData: DataPoint[] = [
  { value: '1.5명', period: '90일 ~ 60일', position: { x: 43, y: 149 } },
  { value: '3명', period: '60일 ~ 30일', position: { x: 127, y: 111 } },
  { value: '6명', period: '최근 30일', position: { x: 224, y: 66 } },
];

export default function SubscriberGrowthChart({
  data = defaultData,
}: SubscriberGrowthChartProps) {
  return (
    <Box className="w-[335px] h-[300px] p-0 rounded-b-[20px] rounded-t-none">
      <BoxContent className="relative w-full h-full p-5">
        {/* 차트 영역 */}
        <div className="relative w-full h-[222px] mb-4">
          {/* 차트 라인 (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 295 222"
            fill="none"
          >
            <path
              d="M52 185 L142 147 L240 102"
              stroke="#0066FF"
              strokeWidth="3"
              fill="none"
            />
          </svg>

          {/* 데이터 포인트들 */}
          {data.map((point, index) => (
            <div key={index}>
              {/* 차트 도트 */}
              <div
                className="absolute w-3 h-3"
                style={{
                  left: point.position.x + 46,
                  top: point.position.y + 6,
                }}
              >
                <div className="w-1.5 h-1.5 bg-primary11 rounded-full border-2 border-white shadow-sm relative top-0.5 left-0.5" />
              </div>

              {/* 데이터 값 박스 */}
              <div
                className="absolute flex items-center justify-center px-2.5 py-1 rounded-[5px] backdrop-blur-sm"
                style={{
                  left: point.position.x,
                  top: point.position.y,
                  backgroundColor: 'rgba(201, 222, 254, 0.4)',
                }}
              >
                <span className="text-[15px] font-bold text-primary11 leading-6">
                  {point.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 텍스트 */}
        <div className="flex justify-between w-[295px] absolute bottom-5 left-5">
          <span className="text-xs font-bold text-gray5 text-center flex-1">
            90일 ~ 60일
          </span>
          <span className="text-xs font-bold text-gray5 text-center flex-1">
            60일 ~ 30일
          </span>
          <span className="text-xs font-bold text-gray5 text-center flex-1">
            최근 30일
          </span>
        </div>
      </BoxContent>
    </Box>
  );
}



