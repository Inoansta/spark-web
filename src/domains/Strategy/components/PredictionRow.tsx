import { Flex } from '@/shared/ui';

interface PredictionRowProps {
  label: string;
  value: string;
  sub: string;
}

export default function PredictionRow({
  label,
  value,
  sub,
}: PredictionRowProps) {
  return (
    <Flex justify="between" align="center" gap={1}>
      <span className="font-suit font-medium text-[13px] text-[#5E6166]">
        {label}
      </span>
      <Flex direction="column" align="end" gapY={0.5}>
        <span className="font-suit font-extrabold text-[15px] text-[#333] leading-[1.6]">
          {value}
        </span>
        <span className="font-suit font-medium text-[12px] text-[#6E78FF] leading-[1.33]">
          {sub}
        </span>
      </Flex>
    </Flex>
  );
}
