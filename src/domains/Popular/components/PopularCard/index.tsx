import EyeIcon from '@/assets/svg/EyeIcon';
import { DateFormatter } from '@/domains/Popular/lib/utils';

interface PopularCard {
  videoInformation: any;
  index: number;
}

const rankStyle = ['bg-primary5', 'bg-[#787CFE]', 'bg-subText'];
export default function PopularCard({ videoInformation, index }: PopularCard) {
  const formattedDate = DateFormatter(videoInformation.snippet.publishedAt);

  return (
    <div>
      <div
        className={`absolute text-white text-subtitle-eb text-center p-[10px] rounded-b-full ml-[20px] -translate-y-[5px] ${rankStyle[index]}`}
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
          <div className={'text-body2-b'}>{videoInformation.snippet.title}</div>
          <div className={'flex flex-row items-center'}>
            <div className={'flex flex-row items-center text-body2-b'}>
              <EyeIcon className={'mr-[5px]'} />
              {videoInformation.statistics.viewCount}
            </div>
            <div className={'ml-auto text-subText text-caption1-b'}>
              {formattedDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
