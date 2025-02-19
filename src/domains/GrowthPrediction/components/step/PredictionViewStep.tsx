import { Flex, Text } from '@/shared/ui';
import MovingBlurCard from '../MovingBlurCard';
import type { GrowthFunnelProps } from './GrowthStep';

export default function PredictionViewStep({ onNext }: GrowthFunnelProps) {
  return (
    <Flex direction="column" justify="between" className="h-full">
      <Text
        as="title"
        title="3개월 뒤 예상 조회수는?"
        className="text-center text-white text-[24px] mt-5"
      />

      <Flex direction="column" className="gap-y-[30px] -mt-16">
        <MovingBlurCard />

        <Text
          as="title"
          className="text-white font-medium"
          title="조회수가 높아도 구독자가 적으면 일시적 관심에 그칠 수 있지만, 적은 조회수로도 구독자가 꾸준히 늘어난다면 충성도 높은 팬이 쌓이고 있다는 뜻이에요. "
        />
      </Flex>

      <button
        className="w-full bg-black text-white py-3 px-5 rounded-[10px]"
        onClick={onNext}
      >
        다음
      </button>
    </Flex>
  );
}
