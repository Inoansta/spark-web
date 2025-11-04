import EyeIcon from '@/assets/svg/EyeIcon';
import FireIcon from '@/assets/svg/FireIcon';
import { DateFormatter } from '@/domains/Youtube/Popular/lib/utils';

interface ContentCardProps {
  caption: string;
  timestamp: string;
  contentUrl: string;
  rank: number;
  views: string;
  likes: number;
}

export default function InstagramContentCard({
  caption,
  timestamp,
  contentUrl,
  rank,
  views,
  likes,
}: ContentCardProps) {
  return (
    <div className="flex items-center gap-2.5 p-2.5 bg-white border border-[#E5E5EA] rounded-[20px] w-[335px] relative">
      {/* 썸네일 */}
      <div className="relative">
        <img
          src={contentUrl}
          alt="thumbnail"
          className="w-[120px] h-[90px] rounded-[10px] object-cover aspect-square"
        />
        {/* 뱃지 - 피그마 스타일 */}
        <div className="w-[42px] h-11 p-[10px] absolute -top-5 left-2 bg-primary5 text-white text-[15px] font-medium rounded-b-[30px] rounded-t-sm shadow-md drop-shadow-md text-center">
          {rank}위
        </div>
      </div>
      {/* 정보 영역 */}
      <div className="flex-1 flex flex-col justify-center gap-5 pr-2.5">
        {/* 제목 */}
        {caption.length > 0 ? (
          <div className="font-suit font-bold text-[13px] text-[#1C1C1E] leading-[1.38]">
            {caption}
          </div>
        ) : (
          <div className="bg-[#F3F4F7] font-[700] leading-[18px] text-[13px] text-[#8D9199] text-center py-[0px] px-[4px]">
            작성된 내용이 없습니다.
          </div>
        )}
        {/* 상세 정보 */}
        <div className="flex justify-between items-center gap-2">
          {/* 뷰 */}
          <div className="flex items-center gap-1.5">
            <EyeIcon width={20} height={20} fill="#333" className="h-full" />
            <span className="font-suit font-bold text-[13px] text-[#333] leading-[18px]">
              {views}
            </span>
          </div>
          {/* 좋아요 */}
          <div className="flex-1 flex flex-row items-center text-[13px] font-[700] leading-[18px] text-[#333]">
            <FireIcon className={'mr-[5px] w-[20px] h-[20px]'} fill="#333" />
            {likes}
          </div>
          {/* 날짜 */}
          <span className="font-suit font-medium text-[11px] text-[#8D9199] leading-[1.27]">
            {DateFormatter(timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
}
