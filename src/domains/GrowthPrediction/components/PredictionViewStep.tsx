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

export default function PredictionView() {
  return (
    <div className="p-4">
      <Flex direction="column" justify="center" align="center">
        <Text
          as="title"
          title="3개월 뒤 예상 조회수는?"
          className="text-center text-white text-[24px] mt-5"
        />
        <Spacing size="large" />
        <Spacing size="xsmall" />
        <BackBlurCard />
        <Spacing size="xsmall" />
      </Flex>

      <Text
        as="title"
        className="text-white font-medium"
        title="조회수가 높아도 구독자가 적으면 일시적 관심에 그칠 수 있지만, 적은 조회수로도 구독자가 꾸준히 늘어난다면 충성도 높은 팬이 쌓이고 있다는 뜻이에요. "
      />
      <Spacing size="large" />
      <Spacing size="large" />
      <Spacing size="xlsmall" />
      <button className="w-full bg-black text-white py-3 px-5 rounded-[10px]">
        다음
      </button>
      <Spacing size="xsmall" />
    </div>
  );
}
