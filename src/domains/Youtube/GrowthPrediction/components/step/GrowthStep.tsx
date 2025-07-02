import { Flex, Text } from '@/shared/ui';
import transformStatsData from '../../lib/transformGrowData';
import VerticalCarousel from '../VericalCarousel';

export interface GrowthFunnelProps {
  transformData: ReturnType<typeof transformStatsData>['growthRates'];
  onNext: () => void;
}

export default function GrowthStep({
  transformData,
  onNext,
}: GrowthFunnelProps) {
  return (
    <Flex direction="column" justify="between" className="h-full">
      <Flex direction="column" className="gap-y-5">
        <Text
          as="title"
          title="내 채널은 성장중?"
          className="text-center text-white text-[24px] py-[10px]"
        />

        <VerticalCarousel growthRates={transformData} />

        <Text
          as="title"
          className="text-white font-medium text-[15px] mt-[30px]"
          title="조회수가 높아도 구독자가 적으면 일시적 관심에 그칠 수 있지만, 적은 조회수로도 구독자가 꾸준히 늘어난다면 충성도 높은 팬이 쌓이고 있다는 뜻이에요. "
        />
      </Flex>

      <button
        className="w-full bg-[#333] text-white py-3 px-5 rounded-[10px] text-[15px] font-bold"
        onClick={onNext}
      >
        다음
      </button>
    </Flex>
  );
}
