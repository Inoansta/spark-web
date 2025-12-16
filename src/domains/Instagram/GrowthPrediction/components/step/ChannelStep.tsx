import EyeIcon from '@/assets/svg/EyeIcon';
import { Performance } from '@/domains/Youtube/StrengthWeakness/model/type';
import { Badge } from '@/shared/components';
import { Flex } from '@/shared/ui';
import { Box, BoxContent, BoxHeader } from '../Box';
import FlexibleChart from '../FlexibleChart';

export interface ChannelStepProps {
  onNext: () => void;
  averageViews: Performance;
}

export default function ChannelStep({
  onNext,
  averageViews,
}: ChannelStepProps) {
  // Figma 디자인에 따른 하락 트렌드 데이터
  const channelViewData = [
    {
      period: '90일 ~ 60일',
      value: averageViews.days60to90,
      displayValue: `${averageViews.days60to90}회`,
      shortPeriod: '90일~60일',
    },
    {
      period: '60일 ~ 30일',
      value: averageViews.days30to60,
      displayValue: `${averageViews.days30to60}회`,
      shortPeriod: '60일~30일',
    },
    {
      period: '최근 30일',
      value: averageViews.recent30Days,
      displayValue: `${averageViews.recent30Days}회`,
      shortPeriod: '최근 30일',
    },
  ];
  const variant = () => {
    if (averageViews.days60to90 - averageViews.recent30Days > 0) {
      return 'decline';
    } else if (averageViews.days60to90 - averageViews.recent30Days < 0) {
      return 'growth';
    } else {
      return 'neutral';
    }
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="between"
      className="h-full w-full max-w-[375px]"
    >
      {/* 상단 콘텐츠 영역 */}
      <Flex direction="column" align="center" className="flex-1">
        <Box width="full">
          <BoxHeader className="bg-primary5 py-[5px]">
            <Flex align="center" justify="center" className="gap-x-[5px]">
              <EyeIcon />
              <p className="text-2xl font-bold text-center text-white">
                평균 조회수는?
              </p>
            </Flex>
          </BoxHeader>
          <BoxContent className="p-5 h-[300px] w-full">
            <FlexibleChart variant={variant()} data={channelViewData} />
          </BoxContent>
        </Box>

        <div className="h-5" />

        <Flex direction="column" align="start" className="w-full">
          <Badge
            variant="error"
            size="default"
            className="text-red-600 bg-red-100"
          >
            <p className="text-red-600 text-[15px] font-bold">
              최근 영상들의 평균 조회수가 줄고 있어요!
            </p>
          </Badge>
          <div className="h-[5px]" />
          <p className="text-highEmphasis text-[15px] font-medium">
            팬층의 관심이나 충성도가 약해졌을 가능성이 있어요. 영상 주제,
            썸네일, 업로드 타이밍 등 팬들이 영상을 더 쉽게 찾고 관심을 가질 수
            있도록 전략을 다시 점검해보는 게 중요합니다.
          </p>
        </Flex>
      </Flex>

      {/* 하단 버튼 영역 */}
      <button
        className="w-full bg-[#333] text-white py-3 px-5 rounded-[10px] h-12"
        onClick={onNext}
      >
        다음
      </button>
    </Flex>
  );
}
