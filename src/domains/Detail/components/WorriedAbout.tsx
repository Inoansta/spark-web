import Bulb from '@/assets/svg/Detail/Bulb';
import Dollar from '@/assets/svg/Detail/Dollar';
import Graph2 from '@/assets/svg/Detail/Graph2';
import Profile from '@/assets/svg/Detail/Profile';
import Time2 from '@/assets/svg/Detail/Time2';
import Youtube from '@/assets/svg/Detail/Youtube';
import { Carousel } from '@/shared/components';

const worries = [
  {
    worreis: (
      <div className={'text-body2-b text-[#333333] text-center'}>
        썸네일, 업로드 시간까지 신경쓰는데,
        <br /> 뭘 더 해야할까?
      </div>
    ),
    svg: <Time2 />,
  },
  {
    worreis: (
      <div className={'text-body2-b text-[#333333] text-center'}>
        빠르게 수익 창출하라 순 없을까?
      </div>
    ),
    svg: <Dollar />,
  },
  {
    worreis: (
      <div className={'text-body2-b text-[#333333] text-center'}>
        비슷한 채널들은 성장하는데,
        <br />
        나는 왜 안될까?
      </div>
    ),
    svg: <Graph2 />,
  },
  {
    worreis: (
      <div className={'text-body2-b text-[#333333] text-center'}>
        유튜브에서 숏츠를 밀어
        <br />
        준다는데... 나도 해야할까?
      </div>
    ),
    svg: <Youtube />,
  },
  {
    worreis: (
      <div className={'text-body2-b text-[#333333] text-center'}>
        빠르게 알고리즘 탈 수 있는 방법 없을까?
      </div>
    ),
    svg: <Bulb />,
  },
  {
    worreis: (
      <div className={'text-body2-b text-[#333333] text-center'}>
        영상을 꾸준히 올리는데
        <br />
        구독자수는 왜 늘지 않을까?
      </div>
    ),
    svg: <Profile />,
  },
  {
    worreis: (
      <div className={'text-body2-b text-[#333333] text-center'}>
        썸네일, 업로드 시간까지 신경쓰는데,
        <br /> 뭘 더 해야할까?
      </div>
    ),
    svg: <Time2 />,
  },
  {
    worreis: (
      <div className={'text-body2-b text-[#333333] text-center'}>
        빠르게 수익 창출하라 순 없을까?
      </div>
    ),
    svg: <Dollar />,
  },
  {
    worreis: (
      <div className={'text-body2-b text-[#333333] text-center'}>
        비슷한 채널들은 성장하는데,
        <br />
        나는 왜 안될까?
      </div>
    ),
    svg: <Graph2 />,
  },
  {
    worreis: (
      <div className={'text-body2-b text-[#333333] text-center'}>
        유튜브에서 숏츠를 밀어
        <br />
        준다는데... 나도 해야할까?
      </div>
    ),
    svg: <Youtube />,
  },
  {
    worreis: (
      <div className={'text-body2-b text-[#333333] text-center'}>
        빠르게 알고리즘 탈 수 있는 방법 없을까?
      </div>
    ),
    svg: <Bulb />,
  },
  {
    worreis: (
      <div className={'text-body2-b text-[#333333] text-center'}>
        영상을 꾸준히 올리는데
        <br />
        구독자수는 왜 늘지 않을까?
      </div>
    ),
    svg: <Profile />,
  },
];

export default function WorriedAbout() {
  const elements = worries.map((item, index) => {
    return {
      children: (
        <div
          className={
            'inline-flex flex-row gap-[10px] py-[10px] px-[20px] justify-center items-center border border-[#E5E5EA] rounded-small my-[5px]'
          }
          key={index}
        >
          <div
            className={`rounded-small flex justify-center items-center h-[32px] w-[32px] ${index % 2 === 1 ? 'bg-primary1' : 'bg-primary5'}`}
          >
            {item.svg}
          </div>
          {item.worreis}
        </div>
      ),
    };
  });
  return (
    <div
      className={
        'py-[60px] px-[20px] flex flex-col justify-center items-center gap-[40px]'
      }
    >
      <div className={'text-center text-title4-eb text-subText'}>
        유튜브 채널 운영하면서
        <br />
        이런 고민 해보신적 있죠?
      </div>
      <div className={'h-[300px]'}>
        <Carousel
          slides={elements}
          sectionClassName={'h-full'}
          viewPortClassName={'h-full overflow-hidden'}
          containerClassName={'flex flex-col items-center'}
          itemClassName={'flex-none'}
          options={{ loop: true, dragFree: true, axis: 'y' }}
        />
      </div>
    </div>
  );
}
