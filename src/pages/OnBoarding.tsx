import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useNavigate } from 'react-router';
import onBoarding2 from '@/assets/animation/onBoarding2.json';
import card1 from '@/assets/onboarding/card1.png';
import onboarding1_youtube from '@/assets/onboarding/onboarding1_youtube.png';
import OnBoardingFrame from '@/domains/onBoarding/components/OnBoardingFrame';
import {
  DotButton,
  useDotButton,
} from '@/domains/onBoarding/hooks/useDotButton';
import { Button, Carousel } from '@/shared/components';
import { Storage } from '@/shared/lib';
import { LottieAnimation } from '@/shared/ui';

const contents = [
  {
    title: (
      <>
        조회수가 늘지 않아
        <br />
        고민이 된다면
      </>
    ),
    subTitle: '“ 조회수 변화가 미미해요 “',
    children: <img src={onboarding1_youtube} className={'max-h-[400px]'} />,
  },
  {
    title: (
      <>
        내 채널의 데이터를
        <br />
        분석하세요
      </>
    ),
    subTitle: '“데이터를 이해하기 쉽게 분석했어요” “',
    children: (
      <LottieAnimation
        animationData={onBoarding2}
        className={'max-h-[400px]'}
      />
    ),
  },
  {
    title: (
      <>
        내 채널 맞춤 비법을
        <br />
        받아 보세요
      </>
    ),
    subTitle: '“ 간단하고 따라하기 쉬운 비법을 준비했어요 “',
    children: <img src={card1} className={'max-h-[360px]'} />,
  },
];

const slides = contents.map((item) => {
  return {
    key: item.title,
    children: (
      <OnBoardingFrame title={item.title} subTitle={item.subTitle}>
        {item.children}
      </OnBoardingFrame>
    ),
  };
});

export default function OnBoarding() {
  const navigate = useNavigate();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
    axis: 'x',
  });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    Storage.setLocalStorage('hasSeenOnboarding', 'true');
  }, []);

  return (
    <div className={'flex flex-col bg-[#F3F4F7] h-screen'}>
      <div
        className={
          'px-[20px] py-[10px] flex flex-row justify-center items-center gap-[10px]'
        }
      >
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={
              index === selectedIndex
                ? 'w-[8px] h-[8px] rounded-full bg-[#4557FF]'
                : 'w-[8px] h-[8px] rounded-full bg-[#C0C2C8]'
            }
          />
        ))}
      </div>
      <Carousel
        slides={slides}
        sectionClassName={'flex-1'}
        viewPortClassName={'overflow-hidden'}
        containerClassName={'flex flex-row '}
        itemClassName={'flex-none w-full px-[6px]'}
        emblaRef={emblaRef}
      />
      <div
        className={
          'fixed bottom-0 px-[20px] pb-[30px] pt-[12px] max-w-[450px] w-full'
        }
      >
        <Button
          text={'시작하기'}
          buttonType={'large-filled-button'}
          onClick={() => navigate('/login')}
        />
      </div>
    </div>
  );
}
