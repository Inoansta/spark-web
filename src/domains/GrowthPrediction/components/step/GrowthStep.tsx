import { Flex, Text } from '@/shared/ui';
import VerticalCarousel from '../VericalCarousel';

export interface GrowthFunnelProps {
  onNext: () => void;
}

export default function GrowthStep({ onNext }: GrowthFunnelProps) {
  return (
    <Flex direction="column" justify="between" className="h-full">
      <Text
        as="title"
        title="내 채널은 성장중?"
        className="text-center text-white text-[28px]"
      />

      <VerticalCarousel />

      <Text
        as="title"
        className="text-white font-medium"
        title="조회수가 높아도 구독자가 적으면 일시적 관심에 그칠 수 있지만, 적은 조회수로도 구독자가 꾸준히 늘어난다면 충성도 높은 팬이 쌓이고 있다는 뜻이에요. "
      />

      <button
        className="w-full bg-black text-white py-3 px-5 rounded-[10px]"
        onClick={onNext}
      >
        다음
      </button>
    </Flex>
  );
}
