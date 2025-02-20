import { useState } from 'react';
import { Avatar } from '@/assets/svg/Avatar/Avatar';
import EyeIcon from '@/assets/svg/EyeIcon';
import { Divider, Flex, Text } from '@/shared/ui';

interface GrowthRate {
  view: {
    late: number;
    recent: number;
  };
  netSubscribers: {
    late: number;
    recent: number;
  };
}
interface VerticalCarouselProps {
  growthRates: GrowthRate[];
}

export default function VerticalCarousel({
  growthRates,
}: VerticalCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (isActive: boolean) => {
    if (isActive) return;
    setCurrentIndex((prev) => (prev + 1) % growthRates.length);
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      className="relative h-[336px]"
    >
      {growthRates.map((item, index) => {
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
              className={`${isActive ? `w-[300px] h-[276px]` : `w-[255px] h-[214px]`} bg-white/10 rounded-[20px] shadow-xl border border-white backdrop-blur-lg`}
            >
              <Flex
                direction="column"
                justify="center"
                align="center"
                gapY={5}
                className={isActive ? 'px-10 py-[39px]' : 'px-10 pt-36'}
              >
                <div
                  className={`${index === 0 ? 'bg-gray' : 'bg-primary5'} px-[10px] py-[5px] rounded-[15px]`}
                >
                  <Text
                    as="card_description"
                    title={
                      index === 0
                        ? '90일 ~ 60일 | 60일 ~ 30일'
                        : '60일 ~ 30일 | 최근 30일'
                    }
                  />
                </div>
                <Flex gapX={5} align="center" justify="center">
                  <Flex direction="column" align="center" gapY={1}>
                    <Avatar
                      width={24}
                      height={24}
                      fill="white"
                      bodyfill="#8D9199"
                      headfill="#8D9199"
                    />
                    <Text
                      as="card_description"
                      title="구독자 수"
                      className="text-[13px]"
                    />
                  </Flex>
                  <Flex
                    direction="column"
                    align="center"
                    gapY={1}
                    className="flex-wrap max-w-[142px]"
                  >
                    <Text
                      as="title"
                      className="font-bold text-2xl text-white px-[14px] overflow-hidden"
                      title={`${Math.floor(item.netSubscribers.recent / item.netSubscribers.late) * 100}% 증가`}
                    />
                    <Divider />
                    <Text
                      as="title"
                      title={`${item.netSubscribers.late} > ${item.netSubscribers.recent}`}
                      className="text-primary2 px-[14px]"
                    />
                  </Flex>
                </Flex>
                <Flex gapX={5} align="center" justify="center">
                  <Flex direction="column" align="center" gapY={1}>
                    <EyeIcon width={24} height={24} fill="white" />
                    <Text
                      as="card_description"
                      title="조회 수"
                      className="text-[13px]"
                    />
                  </Flex>
                  <Flex direction="column" align="center" gapY={1}>
                    <Text
                      as="title"
                      className="font-bold text-2xl text-white px-[14px]"
                      title={`${Math.floor(item.view.recent / item.view.late) * 100}% 증가`}
                    />
                    <Divider />
                    <Text
                      as="title"
                      title={`${item.view.late} > ${item.view.recent}`}
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
