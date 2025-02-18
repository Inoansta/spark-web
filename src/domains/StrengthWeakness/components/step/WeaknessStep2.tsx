import { AddIcon } from '@/assets/svg/AddIcon';
import { Button, RouteMove } from '@/shared/components';
import { Flex, Text } from '@/shared/ui';
import DynamicGraphs from '../DynamicGraphs';
import Tag from '../Tag';

export default function WeaknessStep2() {
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
        <Flex direction="column" justify="end" align="center">
          <Text as="title" title="총 6" className="text-white" />
          <DynamicGraphs color="bg-primary10" value={20} index={0} />
          <Text as="description" title="90일 ~ 60일" className="text-gray4" />
        </Flex>
        <Flex direction="column" justify="end" align="center">
          <Text as="title" title="총 6" className="text-white" />
          <DynamicGraphs color="bg-primary10" value={40} index={1} />
          <Text as="description" title="90일 ~ 60일" className="text-gray4" />
        </Flex>
        <Flex direction="column" justify="end" align="center">
          <Text as="title" title="총 6" className="text-white" />
          <DynamicGraphs color="bg-primary10" value={100} index={2} />
          <Text as="description" title="90일 ~ 60일" className="text-gray4" />
        </Flex>
      </Flex>

      <RouteMove location="/growth-prediction">
        <Button
          text="다음"
          buttonType="small-filled-button"
          onClick={() => {}}
        />
      </RouteMove>
    </Flex>
  );
}
