import { Divider, Flex, Text } from '@/shared/ui';

interface MovingBlurCard {
  result: string;
  totalResult: string;
}

export default function MovingBlurCard({
  result = '총 1,400회 달성!',
  totalResult = '매달 약 400회 증가!',
}: Partial<MovingBlurCard>) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      className="max-w-[300px] mx-auto px-[42px] py-10 rounded-[20px] border-white/80 bg-[linear-gradient(106deg,rgba(255,255,255,0.30)_3.04%,rgba(255,255,255,0.05)_100.02%)] backdrop-blur-[10px] gap-y-[10px]"
    >
      <div className="bg-primary5 px-[10px] py-[5px] rounded-[15px]">
        <Text as="card_description" title="3개월 후" />
      </div>

      <Flex direction="column" align="center">
        <div className="bg-white px-[10px] mb-[5px]">
          <Text
            as="title"
            title={result}
            className="text-[28px] text-primary4"
          />
        </div>
        <Divider />
      </Flex>

      <Text
        as="description"
        title={totalResult}
        className="text-[18px] text-black"
      />
    </Flex>
  );
}
