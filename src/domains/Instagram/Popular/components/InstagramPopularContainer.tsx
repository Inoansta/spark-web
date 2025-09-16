import { type ReactNode } from 'react';
import EyeIcon from '@/assets/svg/EyeIcon';
import FireIcon from '@/assets/svg/FireIcon';
import { DateFormatter } from '@/domains/Youtube/Popular/lib/utils';
import type { ResponsePopularTop } from '@/domains/Youtube/Popular/model/type';
import useMetaPopularQuery from '../hooks/useMetaPopularQuery';

interface PopularCard {
  videoInformation: any;
  index: number;
  likes: number;
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
      인스타그램에 등록된 컨텐츠가 존재하지 않습니다.
    </div>
  );
}

function CaptionExists({ videoInformation }: { videoInformation: any }) {
  return (
    <div className={'text-[13px] font-[700] leading-[18px]'}>
      {videoInformation.caption.length > 36
        ? videoInformation.caption.slice(0, 36) + '...'
        : videoInformation.caption}
    </div>
  );
}

function NoCaptionExists() {
  return (
    <div className="flex flex-row">
      <div className="bg-[#F3F4F7] font-[700] leading-[18px] text-[13px] text-[#8D9199] text-left py-[0px] px-[4px]">
        인스타에서 작성된 글이 없습니다.
      </div>
    </div>
  );
}

function PopularCard({ videoInformation, index }: PopularCard) {
  const formattedDate = DateFormatter(videoInformation.timestamp);

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
            className={
              'object-cover rounded-medium max-w-[100px] aspect-square'
            }
            src={videoInformation.contentUrl}
          />
        </div>
        <div className={'flex flex-1 flex-col py-[7px] pr-[10px] gap-[20px]'}>
          {videoInformation.caption.length > 0 ? (
            <CaptionExists videoInformation={videoInformation} />
          ) : (
            <NoCaptionExists />
          )}
          <div className={'flex flex-row items-center'}>
            <div
              className={
                'flex-1 flex flex-row items-center text-[13px] font-[700] leading-[18px] text-[#333]'
              }
            >
              <EyeIcon className={'mr-[5px] w-[20px] h-[20px]'} fill="#333" />
              {videoInformation.views}
            </div>
            <div className="flex-1 flex flex-row items-center text-[13px] font-[700] leading-[18px] text-[#333]">
              <FireIcon className={'mr-[5px] w-[20px] h-[20px]'} fill="#333" />
              {videoInformation.likes}
            </div>
            <div
              className={
                'flex-1 ml-auto text-[#8D9199] text-[11px] font-[700] leading-[14px]'
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

export default function InstagramPopularContainer() {
  const popular = useMetaPopularQuery();

  return (
    <NoList data={popular.data.result}>
      {popular.data.result.map((item, index) => (
        <PopularCard videoInformation={item} index={index} key={item.id} />
      ))}
    </NoList>
  );
}
