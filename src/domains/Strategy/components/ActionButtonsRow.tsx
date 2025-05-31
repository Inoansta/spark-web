import { Like } from '@/assets/strengthWeakness/Like';
import HeartIcon from '@/assets/svg/Strategy/HeartIcon';
import { Flex } from '@/shared/ui';

export default function ActionButtonsRow() {
  return (
    <Flex justify="center" align="center" gap={3} className="py-[20px] w-full">
      <button className="flex items-center gap-[5px] px-[20px] py-[10px] rounded-[10px] border border-[#4557FF] bg-white text-[#4557FF] font-bold text-[13px]">
        <span>스파크 리뷰쓰기</span>
        <Like fill="#4557FF" className="w-[19px] h-[18px]" />
      </button>
      <button className="flex flex-row items-center gap-[5px] px-[20px] py-[10px] rounded-[10px] bg-[#4557FF] text-white font-suit font-bold text-[13px]">
        <span>이벤트 참여하기</span>
        <HeartIcon />
      </button>
    </Flex>
  );
}
