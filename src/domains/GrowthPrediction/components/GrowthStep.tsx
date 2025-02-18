import { useState } from 'react';
import { Avatar } from '@/assets/svg/Avatar/Avatar';
import EyeIcon from '@/assets/svg/EyeIcon';
import { Divider, Flex, Spacing, Text } from '@/shared/ui';

export interface GrowthFunnelProps {
  onNext: () => void;
}

// 값이 들어온다
// 날을 보고 계산
// 데이트를 보고 계산
// 최근일때만 스타일링 변경

const carouselData = [
  {
    isLately: false,
    title: '90일 ~ 60일 | 60일 ~ 30일',
    subscriberGrowth: '150% 성장',
    subscriberCount: '1,000 > 1,500',
    viewGrowth: '120% 성장',
    viewCount: '10,000 > 12,000',
  },
  {
    isLately: true,
    title: '60일 ~ 30일 | 최근 30일',
    subscriberGrowth: '150% 성장',
    subscriberCount: '1,000 > 1,500',
    viewGrowth: '150% 성장',
    viewCount: '10,000 > 12,000',
  },
];

// 활성화 스타일링
//
function VerticalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (isActive: boolean) => {
    if (isActive) return;
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      className="relative h-[336px] max-w-[300px]"
    >
      {carouselData.map((item, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={index}
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-transform duration-500 cursor-pointer ${
              isActive
                ? 'z-20 translate-y-20 opacity-100'
                : 'z-10 translate-y-0 opacity-60'
            }`}
            onClick={() => handleNext(isActive)}
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              className={`${isActive ? `w-[300px] h-[276px]` : `w-[255px] h-[214px]`} bg-white/10 rounded-xl shadow-xl border border-white backdrop-blur-lg`}
            >
              <Flex
                direction="column"
                justify="center"
                align="center"
                gapY={5}
                className={isActive ? 'px-10 py-[39px]' : 'px-10 pt-36'}
              >
                <div
                  className={`${!item.isLately ? 'bg-gray' : 'bg-primary5'} px-[10px] py-[5px] rounded-[15px]`}
                >
                  <Text as="card_description" title={item.title} />
                </div>
                <Flex gapX={5} align="center" justify="center">
                  <Flex direction="column" align="center" gapY={1}>
                    <Avatar
                      width={24}
                      height={24}
                      fill="white"
                      avatarBodyFill="#8D9199"
                      avatarHeadFill="#8D9199"
                    />
                    <Text
                      as="card_description"
                      title="구독자 수"
                      className="text-[13px]"
                    />
                  </Flex>
                  <Flex direction="column" align="center" gapY={1}>
                    <Text
                      as="title"
                      className="font-bold text-2xl text-white px-[14px]"
                      title={item.subscriberGrowth}
                    />
                    <Divider />
                    <Text
                      as="title"
                      title={item.viewCount}
                      className="text-primary2 px-[14px]"
                    />
                  </Flex>
                </Flex>
                <Flex gapX={5} align="center" justify="center">
                  <Flex direction="column" align="center" gapY={1}>
                    <EyeIcon width={24} height={24} fill="white" />
                    <Text
                      as="card_description"
                      title="구독자 수"
                      className="text-[13px]"
                    />
                  </Flex>
                  <Flex direction="column" align="center" gapY={1}>
                    <Text
                      as="title"
                      className="font-bold text-2xl text-white px-[14px]"
                      title={item.subscriberGrowth}
                    />
                    <Divider />
                    <Text
                      as="title"
                      title={item.viewCount}
                      className="text-primary2 px-[14px]"
                    />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </div>
        );
      })}
    </Flex>
  );
}

export default function GrowthStep({ onNext }: GrowthFunnelProps) {
  return (
    <main className="p-4">
      <Flex direction="column" justify="center" align="center" gapY={3}>
        <Text
          as="title"
          title="내 채널은 성장중?"
          className="text-center text-white text-[28px]"
        />
        <Spacing size="xsmall" />
        <VerticalCarousel />
      </Flex>
      <Spacing size="medium" />
      <Text
        as="title"
        className="text-white font-medium"
        title="조회수가 높아도 구독자가 적으면 일시적 관심에 그칠 수 있지만, 적은 조회수로도 구독자가 꾸준히 늘어난다면 충성도 높은 팬이 쌓이고 있다는 뜻이에요. "
      />
      <Spacing size="large" />
      <Spacing size="xlsmall" />
      <button
        className="w-full bg-black text-white py-3 px-5 rounded-[10px]"
        onClick={onNext}
      >
        다음
      </button>
      <Spacing size="xlsmall" />
    </main>
  );
}
