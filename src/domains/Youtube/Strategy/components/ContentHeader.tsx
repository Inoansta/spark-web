import Graph2 from '@/assets/svg/Detail/Graph2';
import { Flex } from '@/shared/ui';

export default function ContentHeader({ title }: { title: string }) {
  return (
    <Flex align="center" gap={1}>
      <Graph2 fill="#000" />
      <p className="text-lg font-extrabold text-[#000]">{title}</p>
    </Flex>
  );
}
