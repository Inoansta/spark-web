import LinearArrow from '@/assets/svg/Strategy/LinearArrow';
import { formatNumberWithUnit } from '@/domains/Home/lib/utils';
import { Performance } from '@/domains/Youtube/StrengthWeakness/model/type';
import { Flex } from '@/shared/ui';

interface PredictionRowProps {
  label: '댓글수' | '좋아요수' | '조회수';
  values: Performance;
}

export default function PerformanceRow({ label, values }: PredictionRowProps) {
  const growing = values.recent30Days - values.days30to60 >= 0;
  return (
    <Flex
      justify="between"
      className="border-b-[0.5px] border-[#E5E5EA] p-[10px]"
      align="center"
      gap={2.5}
    >
      <Flex direction="column" align="start" gapY={1}>
        <span className="font-suit font-medium text-[13px] text-[#6E78FF] bg-[#E8E8FF] px-[10px] py-[5px]">
          게시물 <span className="font-[800]">1개당</span>
        </span>
        <span className="font-suit font-medium text-[13px] text-[#6E78FF] bg-[#E8E8FF] px-[10px] py-[5px]">
          {label}
        </span>
      </Flex>
      <Flex direction="column" align="end" gapY={2.0}>
        <Flex direction="row" className="items-center" gapX={0.5}>
          <span className="font-suit font-medium text-[13px] text-[#5E6166] leading-[1.33]">
            {formatNumberWithUnit(
              values.days30to60,
              label === '조회수' ? '회' : '개',
            )}
          </span>
          <LinearArrow />
          <span className="font-suit font-medium text-[13px] text-[#5E6166] leading-[1.33]">
            {formatNumberWithUnit(
              values.days60to90,
              label === '조회수' ? '회' : '개',
            )}
          </span>
          <LinearArrow />
          <span className="font-suit font-medium text-[15px] text-black leading-[1.12]">
            {formatNumberWithUnit(
              values.recent30Days,
              label === '조회수' ? '회' : '개',
            )}
          </span>
        </Flex>
        <span
          className={`font-suit font-[700] text-[13px] ${growing ? 'text-[#3385FF]' : 'text-[#FF3333]'} leading-[1.33]`}
        >
          {growing ? '성장중' : '감소중'}
        </span>
      </Flex>
    </Flex>
  );
}
