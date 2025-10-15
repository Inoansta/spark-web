import { Badge } from '@/shared/components';
import { Box, BoxContent, BoxHeader } from './Box';
import FlexibleChart from './FlexibleChart';

// 실제 사용 예시를 보여주는 쇼케이스 컴포넌트
export default function ChartShowcase() {
  return (
    <div className="flex flex-col gap-6 p-4">
      {/* 성장 차트 (파란색) */}
      <Box className="w-[335px] h-[300px] p-0">
        <BoxHeader className="bg-gradient-to-r from-primary5 to-primary4 text-white px-6 py-4 rounded-t-[20px] flex items-center justify-between">
          <h2 className="text-xl font-bold">구독자 증가 추이</h2>
          <Badge
            variant="outline"
            className="text-white bg-transparent border-white"
          >
            성장중
          </Badge>
        </BoxHeader>
        <BoxContent className="p-5 h-[240px]">
          <FlexibleChart variant="growth" />
        </BoxContent>
      </Box>

      {/* 하락 차트 (빨간색) */}
      <Box className="w-[335px] h-[300px] p-0">
        <BoxHeader className="bg-gradient-to-r from-red-500 to-red-400 text-white px-6 py-4 rounded-t-[20px] flex items-center justify-between">
          <h2 className="text-xl font-bold">조회수 변화</h2>
          <Badge
            variant="error"
            className="text-red-600 bg-red-50 border-white"
          >
            주의 필요
          </Badge>
        </BoxHeader>
        <BoxContent className="p-5 h-[240px]">
          <FlexibleChart variant="decline" />
        </BoxContent>
      </Box>

      {/* 중립 차트 (회색) */}
      <Box className="w-[335px] h-[300px] p-0">
        <BoxHeader className="bg-gradient-to-r from-gray-600 to-gray-500 text-white px-6 py-4 rounded-t-[20px] flex items-center justify-between">
          <h2 className="text-xl font-bold">참여율 현황</h2>
          <Badge variant="secondary">안정적</Badge>
        </BoxHeader>
        <BoxContent className="p-5 h-[240px]">
          <FlexibleChart variant="neutral" />
        </BoxContent>
      </Box>

      {/* 커스텀 데이터 예시 */}
      <Box className="w-[335px] h-[300px] p-0">
        <BoxHeader className="bg-gradient-to-r from-purple-500 to-purple-400 text-white px-6 py-4 rounded-t-[20px] flex items-center justify-between">
          <h2 className="text-xl font-bold">커스텀 데이터</h2>
          <Badge variant="primary">사용자 정의</Badge>
        </BoxHeader>
        <BoxContent className="p-5 h-[240px]">
          <FlexibleChart
            variant="growth"
            data={[
              {
                period: '1주차',
                value: 100,
                displayValue: '100명',
                shortPeriod: '1주차',
              },
              {
                period: '2주차',
                value: 250,
                displayValue: '250명',
                shortPeriod: '2주차',
              },
              {
                period: '3주차',
                value: 420,
                displayValue: '420명',
                shortPeriod: '3주차',
              },
            ]}
          />
        </BoxContent>
      </Box>
    </div>
  );
}

// 간단한 사용법 예시
export function SimpleChartExamples() {
  return (
    <div className="p-4 space-y-8">
      <h1 className="text-2xl font-bold">FlexibleChart 사용 예시</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* 기본 성장 차트 */}
        <div className="p-4 h-64 rounded-lg border">
          <h3 className="mb-2 text-lg font-semibold">성장 차트</h3>
          <FlexibleChart variant="growth" />
        </div>

        {/* 하락 차트 */}
        <div className="p-4 h-64 rounded-lg border">
          <h3 className="mb-2 text-lg font-semibold">하락 차트</h3>
          <FlexibleChart variant="decline" />
        </div>

        {/* 중립 차트 */}
        <div className="p-4 h-64 rounded-lg border">
          <h3 className="mb-2 text-lg font-semibold">중립 차트</h3>
          <FlexibleChart variant="neutral" />
        </div>
      </div>
    </div>
  );
}
