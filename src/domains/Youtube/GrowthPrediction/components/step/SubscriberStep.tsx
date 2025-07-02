import { RouteMove } from '@/shared/components';
import { Flex, Text } from '@/shared/ui';
import MovingBlurCard from '../MovingBlurCard';

interface SubscriberStepProps {
  data: {
    subscriberCount: number;
    subscriber: number;
  };
}

export default function SubscriberStep({ data }: SubscriberStepProps) {
  return (
    <Flex className="h-full" direction="column" justify="between">
      <Text
        as="title"
        title="3개월 뒤 예상 구독자는?"
        className="text-center text-black text-[24px] mt-5"
      />

      <Flex direction="column" className="gap-y-[30px] -mt-16">
        <MovingBlurCard
          result={Math.floor(data.subscriberCount)}
          totalResult={Math.floor(data.subscriber)}
        />

        <Text
          as="title"
          className="text-[#333] font-medium"
          title="지난 3개월 동안의 데이터를 분석해, 3개월 뒤 예상 구독자수를 계산했어요. Spark 서비스만의 정교한 예측 로직을 적용해 최대한 정확한 수치를 제공합니다!"
        />
      </Flex>

      <RouteMove location="/strategy">
        <button className="w-full bg-[#333] text-white py-3 px-5 rounded-[10px]">
          다음
        </button>
      </RouteMove>
    </Flex>
  );
}
