import type { ReactNode } from 'react';

interface AnalysisCardProps {
  icon: ReactNode;
  type: 'strengths' | 'weaknesses';
  data: number;
  date: string;
  title: string;
}

export default function AnalysisCard({
  icon,
  type,
  data,
  date,
  title,
}: AnalysisCardProps) {
  return (
    <div className="flex flex-col gap-5 bg-white border border-[#E5E5EA] rounded-[10px] p-[10px]">
      {/* 아이콘 + 제목 */}
      <div className="flex flex-row items-center gap-[2px]">
        {icon}
        <p
          className={`font-suit font-medium text-[13px] text-[#3385FF] leading-[1.38] text-center ${
            type === 'strengths' ? 'text-[#3385FF]' : 'text-[#FF3333]'
          }`}
        >
          {title}
        </p>
      </div>
      {/* 하단 정보 */}
      <div className="flex flex-row justify-between items-center w-full px-[5px]">
        <span className="font-suit font-medium text-[11px] text-[#5E6166] leading-[1.27]">
          {date}
        </span>
        <div className="flex flex-row items-center gap-[5px]">
          <span className="font-suit font-extrabold text-[13px] text-[#1C1C1E] leading-[1.38]">
            {data}
          </span>
          <span className="font-suit font-bold text-[12px] text-[#3385FF] leading-[1.33]">
            증가
          </span>
        </div>
      </div>
    </div>
  );
}
