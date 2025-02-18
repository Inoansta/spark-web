import { RouteMove } from '@/shared/components';
import { Flex, Spacing, Text } from '@/shared/ui';

function BackBlurCard() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      className={`w-[300px] h-[200px] bg-white/10 rounded-xl shadow-xl border border-white backdrop-blur-lg gap-y-[10px]`}
    >
      <div className={`bg-primary5 px-[10px] py-[5px] rounded-[15px]`}>
        <Text as="card_description" title="3개월 후" />
      </div>
      <div className="bg-white px-[10px]">
        <Text
          as="title"
          title="총 1,400회 달성!"
          className="text-[28px] text-primary4"
        />
      </div>
      <Text
        as="description"
        title="매달 약 400회 증가"
        className="text-[18px] text-black"
      />
    </Flex>
  );
}

export default function SubscriberStep() {
  return (
    <div className="p-4">
      <Flex direction="column" justify="center" align="center">
        <Text
          as="title"
          title="3개월 뒤 예상 구독자는?"
          className="text-center text-black text-[24px] mt-5"
        />
        <Spacing size="large" />
        <Spacing size="xsmall" />
        <BackBlurCard />
        <Spacing size="xsmall" />
      </Flex>

      <Text
        as="title"
        className="text-white font-medium"
        title="지난 3개월 동안의 데이터를 분석해, 3개월 뒤 예상 구독자수를 계산했어요. Spark 서비스만의 정교한 예측 로직을 적용해 최대한 정확한 수치를 제공합니다!"
      />
      <Spacing size="large" />
      <Spacing size="large" />
      <Spacing size="xlsmall" />
      <RouteMove location="/strategy">
        <button className="w-full bg-black text-white py-3 px-5 rounded-[10px]">
          다음
        </button>
      </RouteMove>
      <Spacing size="xsmall" />
    </div>
  );
}
