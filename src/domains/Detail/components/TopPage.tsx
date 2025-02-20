import channelGrowing from '@/assets/detail/img/channelGrowing.png';
import subscriberGrowthPrediction from '@/assets/detail/img/subscriberGrowthPrediction.png';
import viewGrowthPrediction from '@/assets/detail/img/viewGrowthPrediciton.png';
import { Carousel } from '@/shared/components';

const slides = [
  {
    children: (
      <div className={'overflow-hidden mx-auto'}>
        <img src={channelGrowing} className={'w-full'} />
      </div>
    ),
  },
  {
    children: (
      <div className={'overflow-hidden mx-auto'}>
        <img src={subscriberGrowthPrediction} className={'w-full'} />
      </div>
    ),
  },
  {
    children: (
      <div className={'overflow-hidden mx-auto'}>
        <img src={viewGrowthPrediction} className={'w-full'} />
      </div>
    ),
  },
];

export default function TopPage() {
  return (
    <div
      className={
        'flex flex-col bg-gradient-to-b from-white to-[#C6C5FF] pt-[20px] pb-[40px] px-[20px] h-[calc(100vh-44px)]'
      }
    >
      <div className={'flex flex-col text-center'}>
        <div
          className={
            'bg-clip-text text-transparent bg-gradient-to-b from-black to-[#FBB1F5] via-[#4557FF] text-title3-eb '
          }
        >
          작은 Spark로
          <br />큰 변화를 만드세요!
        </div>
        <div
          className={
            'bg-line text-subText text-subtitle-b mx-auto px-[10px] mt-[5px]'
          }
        >
          &quot;AI가 알려주는 당신만의 SNS 성장 비법&quot;
        </div>
      </div>

      <div className={'flex-grow flex items-end'}>
        <Carousel
          slides={slides}
          sectionClassName={'w-full'}
          viewPortClassName={'overflow-hidden'}
          containerClassName={'flex'}
          itemClassName={'flex-none w-[full] px-[6px]'}
          options={{
            loop: true,
            align: 'center',
          }}
        />
      </div>
    </div>
  );
}
