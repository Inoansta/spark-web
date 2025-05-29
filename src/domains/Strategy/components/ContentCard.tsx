import EyeIcon from '@/assets/svg/EyeIcon';
import { DateFormatter } from '@/domains/Popular/lib/utils';

interface ContentCardProps {
  title: string;
  viewCount: number;
  createdAt: string;
  imageUrl: string;
  rank: number;
}
export default function ContentCard({
  title,
  viewCount,
  createdAt,
  imageUrl,
  rank,
}: ContentCardProps) {
  return (
    <div className="flex items-center gap-2.5 p-2.5 bg-white border border-[#E5E5EA] rounded-[20px] w-[335px] relative">
      {/* 썸네일 */}
      <div className="relative">
        <img
          src={imageUrl}
          alt="thumbnail"
          className="w-[120px] h-[90px] rounded-[10px] object-cover"
        />
        {/* 뱃지 - 피그마 스타일 */}
        <div className="w-[42px] h-11 p-[10px] absolute -top-5 left-2 bg-primary5 text-white text-[15px] font-medium rounded-b-[30px] rounded-t-sm shadow-md drop-shadow-md text-center">
          {rank}위
        </div>
      </div>
      {/* 정보 영역 */}
      <div className="flex-1 flex flex-col justify-center gap-5 pr-2.5">
        {/* 제목 */}
        <div className="font-suit font-bold text-[13px] text-[#1C1C1E] leading-[1.38]">
          {title}
        </div>
        {/* 상세 정보 */}
        <div className="flex justify-between items-center gap-2">
          {/* 뷰 */}
          <div className="flex items-center gap-1.5">
            <EyeIcon width={20} height={20} fill="#333" />
            <span className="font-suit font-bold text-[13px] text-[#333]">
              {viewCount}
            </span>
          </div>
          {/* 날짜 */}
          <span className="font-suit font-medium text-[11px] text-[#8D9199] leading-[1.27]">
            {DateFormatter(createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
}
