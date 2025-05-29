import { Flex } from '@/shared/ui';

export default function UserInfoHashTag({
  hashTagList = ['패션', '전업', '개인적인 취미 및 즐거움'],
}: {
  hashTagList: string[];
}) {
  return (
    <Flex align="center" gap="1">
      {hashTagList.map((item) => (
        <div
          key={item}
          className="px-[10px] py-[5px] bg-white bg-opacity-10 rounded-[5px]"
        >
          <span className="text-xs font-medium text-primary2"># {item}</span>
        </div>
      ))}
    </Flex>
  );
}
