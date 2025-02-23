import detail from '@/assets/animation/detail.json';
import channelGrowing from '@/assets/detail/img/channelGrowing.png';
import subscriberGrowthPrediction from '@/assets/detail/img/subscriberGrowthPrediction.png';
import viewGrowthPrediction from '@/assets/detail/img/viewGrowthPrediciton.png';
import { Carousel } from '@/shared/components';
import { LottieAnimation } from '@/shared/ui';

const slides = [
  {
    children: (
      <div className={'overflow-hidden flex justify-center'}>
        <img src={channelGrowing} className={'h-[250px] w-[180px]'} />
      </div>
    ),
  },
  {
    children: (
      <div className={'overflow-hidden flex justify-center'}>
        <img
          src={subscriberGrowthPrediction}
          className={'h-[250px] w-[180px]'}
        />
      </div>
    ),
  },
  {
    children: (
      <div className={'overflow-hidden flex justify-center'}>
        <img src={viewGrowthPrediction} className={'h-[250px] w-[180px]'} />
      </div>
    ),
  },
];

export default function TopPage() {
  return (
    <div
      className={
        'flex flex-col bg-gradient-to-b from-white to-[#C6C5FF] pt-[20px] pb-[40px] px-[20px]'
      }
    >
      <div className={'flex flex-col text-center'}>
        <div
          className={
            'bg-clip-text text-transparent bg-gradient-to-b from-black to-[#FBB1F5] via-[#4557FF] text-[24px] font-[800] leading-[32px]'
          }
        >
          작은 Spark로
          <br />큰 변화를 만드세요!
        </div>
        <div
          className={
            'bg-line text-subText text-[15px] font-[700] mx-auto px-[10px] mt-[5px] leading-[24px]'
          }
        >
          &quot;AI가 알려주는 당신만의 SNS 성장 비법&quot;
        </div>
      </div>
      <div className={'mt-[40px]'}>
        <LottieAnimation animationData={detail} />
      </div>
      <div className={'flex-grow flex items-end pt-[60px]'}>
        <Carousel
          slides={slides}
          sectionClassName={'w-full'}
          viewPortClassName={'overflow-hidden'}
          containerClassName={'flex flex-row'}
          itemClassName={'flex-none w-[60%] px-[10px]'}
          options={{
            loop: true,
            align: 'center',
          }}
        />
      </div>
    </div>
  );
}
