import { type ReactNode } from 'react';
import EyeIcon from '@/assets/svg/EyeIcon';
import { DateFormatter } from '@/domains/Youtube/Popular/lib/utils';
import usePopularQuery from '../../hooks/usePopularQuery';
import { type ResponsePopularTop } from '../../model/type';

interface PopularCard {
  videoInformation: any;
  index: number;
}

const rankStyle = ['bg-primary5', 'bg-[#787CFE]', 'bg-subText'];

function NoList({
  data,
  children,
}: {
  data: ResponsePopularTop['result'];
  children: ReactNode;
}) {
  const isList = data.length !== 0;
  return isList ? (
    children
  ) : (
    <div className="flex flex-1 mt-[100px] justify-center items-center text-white">
      유튜브에 등록된 영상이 존재하지 않습니다.
    </div>
  );
}

function PopularCard({ videoInformation, index }: PopularCard) {
  const formattedDate = DateFormatter(videoInformation.snippet.publishedAt);

  return (
    <div>
      <div
        className={`absolute text-white text-[15px] font-[700] leading-[24px] text-center p-[10px] rounded-b-full ml-[20px] -translate-y-[5px] ${rankStyle[index]}`}
      >
        {index + 1}위
      </div>
      <div
        className={
          'p-[10px] bg-white rounded-extraLarges flex flex-row gap-[10px] items-center'
        }
      >
        <div>
          <img
            className={'rounded-medium'}
            src={videoInformation.snippet.thumbnails.default.url}
          />
        </div>
        <div className={'flex flex-1 flex-col py-[7px] pr-[10px] gap-[20px]'}>
          <div className={'text-[13px] font-[700] leading-[18px]'}>
            {videoInformation.snippet.title.length > 36
              ? videoInformation.snippet.title.slice(0, 36) + '...'
              : videoInformation.snippet.title}
          </div>
          <div className={'flex flex-row items-center'}>
            <div
              className={
                'flex flex-row items-center text-[13px] font-[700] leading-[18px] text-[#333]'
              }
            >
              <EyeIcon className={'mr-[5px]'} fill="#333" />
              {videoInformation.statistics.viewCount}
            </div>
            <div
              className={
                'ml-auto text-[#8D9199] text-[11px] font-[700] leading-[14px]'
              }
            >
              {formattedDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PopularContainer() {
  const popular = usePopularQuery();

  return (
    <NoList data={popular.data.result}>
      {popular.data.result.map((item, index) => (
        <PopularCard videoInformation={item} index={index} key={item.id} />
      ))}
    </NoList>
  );
}
