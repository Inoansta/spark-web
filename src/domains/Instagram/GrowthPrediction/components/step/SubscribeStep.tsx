import EyeIcon from '@/assets/svg/EyeIcon';
import { Performance } from '@/domains/Youtube/StrengthWeakness/model/type';
import { Badge } from '@/shared/components';
import { Flex } from '@/shared/ui';
import { Box, BoxContent, BoxHeader } from '../Box';
import RechartsSubscriberChart from '../RechartsSubscriberChart';

export interface SubscriberStepProps {
  onNext: () => void;
  averageComments: Performance;
}

export default function SubscriberStep({
  onNext,
  averageComments,
}: SubscriberStepProps) {
  const defaultData = [
    {
      period: '90일 ~ 60일',
      value: averageComments.days60to90,
      displayValue: `${averageComments.days60to90}명`,
      shortPeriod: '90일~60일',
      // TODO ShortPeriod 안보이네
    },
    {
      period: '60일 ~ 30일',
      value: averageComments.days30to60,
      displayValue: `${averageComments.days30to60}명`,
      shortPeriod: '60일~30일',
    },
    {
      period: '최근 30일',
      value: averageComments.recent30Days,
      displayValue: `${averageComments.recent30Days}명`,
      shortPeriod: '최근 30일',
    },
  ];
  console.log(defaultData);

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
                조회수 1회당
              </p>
            </Flex>
          </BoxHeader>
          <BoxContent className="p-5 h-[300px] w-full">
            <RechartsSubscriberChart data={defaultData} />
          </BoxContent>
        </Box>

        <div className="h-5" />

        <Flex direction="column" align="start" className="w-full">
          <Badge variant="default" size="default">
            <p className="text-primary11 text-[15px] font-bold">
              구독 전환율이 좋아지고 있어요!
            </p>
          </Badge>
          <div className="h-[5px]" />
          <p className="text-highEmphasis text-[15px] font-medium">
            최근 영상들이 시청자에게 더 큰 관심을 끌고 있어요. 조회수를
            &apos;구독&apos;으로 잘 이어가고 있다는 건, 콘텐츠 방향이 맞아가고
            있다는 신호예요.
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
