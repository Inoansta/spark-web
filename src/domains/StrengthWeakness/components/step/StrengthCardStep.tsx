import { FC, SVGProps } from 'react';
import { SvgProps } from '@/assets/svg/nav/UnifiedSettingIcon';
import { Button } from '@/shared/components';
import { Flex, Text } from '@/shared/ui';
import DynamicGraphs from '../DynamicGraphs';
import Tag from '../Tag';

interface StrengthWeaknessStepPropsData {
  info: {
    title: string;
    Icon: FC<SVGProps<SVGSVGElement>> | FC<SvgProps>;
    description: {
      strengths: string;
      weakness: string;
    };
  };
  data: {
    date: string;
    label: string;
    color: string;
    graphValue: number | string;
  }[];
}

export interface StrengthWeaknessStepProps {
  data: StrengthWeaknessStepPropsData;
  onNext: () => void;
}

export default function StrengthCardStep({
  data: { data, info },
  onNext,
}: StrengthWeaknessStepProps) {
  const maxValue = Math.max(...data.map((value) => value.graphValue as number));
  const minValue = Math.min(...data.map((value) => value.graphValue as number));

  return (
    <Flex direction="column" gapY={3} justify="between" className="mt-5 h-full">
      <Flex direction="column" align="start" gapY={3}>
        <Tag type="강점" index={1} />
        <Flex direction="column" gapY={2}>
          <Flex as="section" align="center" gapX={2}>
            <info.Icon />
            <Text
              as="title"
              className="text-white text-[28px] leading-[34px] font-bold"
              title={info.title}
            />
          </Flex>
          <Text as="body" title={info.description.strengths} />
        </Flex>
      </Flex>

      <Flex
        justify="center"
        className="pr-4 min-h-64 max-w-full w-full gap-x-5"
      >
        {data.map(({ date, color, graphValue, label }) => (
          <Flex
            direction="column"
            justify="end"
            align="center"
            key={date}
            className="gap-y-[10px]"
          >
            <Text
              as="title"
              title={label}
              className="text-white font-bold text-lg"
            />
            <DynamicGraphs
              color={color}
              value={graphValue as number}
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
