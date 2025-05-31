import { ReactNode } from 'react';
import { Flex } from '@/shared/ui';

export default function HighlightBox({ children }: { children: ReactNode }) {
  return (
    <Flex>
      <span className="font-suit font-medium text-[13px] text-[#6E78FF] bg-[#E8E8FF] rounded-[5px] px-[10px] py-[5px]">
        {children}
      </span>
    </Flex>
  );
}
