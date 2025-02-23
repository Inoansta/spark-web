import { formatNumberWithCommas } from '@/domains/Home/lib/utils';
import { Divider, Flex, Text } from '@/shared/ui';

interface MovingBlurCard {
  result: number;
  totalResult: number;
}

export default function MovingBlurCard({
  result,
  totalResult,
}: Partial<MovingBlurCard>) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      className="w-[300px] h-[200px] mx-auto px-[42px] py-10 rounded-[20px] border-white/80 border bg-[linear-gradient(106deg,rgba(255,255,255,0.30)_3.04%,rgba(255,255,255,0.05)_100.02%)] backdrop-blur-[10px] gap-y-[10px]"
    >
      <div className="bg-primary5 px-[10px] py-[5px] rounded-[15px]">
        <Text
          as="card_description"
          title="3개월 후"
          className="text-[15px] font-medium"
        />
      </div>

      <Flex direction="column" align="center">
        <div className="bg-white px-[10px] mb-[5px]">
          <Text
            as="title"
            title={`총 ${formatNumberWithCommas(result!)}회 달성`}
            className="text-[28px] text-primary4"
          />
        </div>
        <Divider />
      </Flex>

      <Text
        as="description"
        title={`매달 약 ${formatNumberWithCommas(totalResult!)} 증가`}
        className="text-[18px] text-[#333] font-bold"
      />
    </Flex>
  );
}
