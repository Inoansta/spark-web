import { AddIcon } from '@/assets/svg/AddIcon';
import { Button } from '@/shared/components';
import { Flex, Text } from '@/shared/ui';
import DynamicGraphs from '../DynamicGraphs';
import Tag from '../Tag';

interface StrengthWeaknessStepPropsData {
  date: string;
  color: string;
  value: number | string;
}

export interface StrengthWeaknessStepProps {
  data: StrengthWeaknessStepPropsData[];
  onNext: () => void;
}

export default function StrengthCardStep({
  data,
  onNext,
}: StrengthWeaknessStepProps) {
  const maxValue = Math.max(...data.map((value) => value.value as number));
  const minValue = Math.max(1, ...data.map((value) => value.value as number));

  return (
    <Flex direction="column" gapY={3} justify="between" className="mt-5 h-full">
      <Flex direction="column" align="start" gapY={3}>
        <Tag type="강점" index={1} />
        <Flex direction="column" gapY={2}>
          <Flex as="section" align="center" gapX={2}>
            <AddIcon />
            <Text
              as="title"
              className="text-white text-[28px] leading-[34px] font-bold"
              title="영상 업로드 수"
            />
          </Flex>
          <Text
            as="body"
            className="text-white max-w-60"
            title="꾸준한 업로드 덕분에 채널이 활발하게 성장하고 있어요!"
          />
        </Flex>
      </Flex>

      <Flex justify="around" className="pr-4 min-h-64 max-w-full w-full">
        {data.map(({ date, color, value }) => (
          <Flex direction="column" justify="end" align="center" key={date}>
            <Text as="title" title={`총 ${value}`} className="text-white" />
            <DynamicGraphs
              color={color}
              value={value as number}
              maxValue={maxValue}
              minValue={minValue}
            />
            <Text as="description" title={date} className="text-gray4" />
          </Flex>
        ))}
      </Flex>

      <Button text="다음" buttonType="small-filled-button" onClick={onNext} />
    </Flex>
  );
}
