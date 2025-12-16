import { useState } from 'react';
import { SubscriberIcon } from '@/assets/growthPrediction/SubscriberIcon';
import { ViewIcon } from '@/assets/growthPrediction/ViewIcon';
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

function calculateGrowthRate(late: number, recent: number) {
  if (late === 0 && recent === 0) return '0% 유지 중';
  if (late === 0) return recent > 0 ? '무한한 성장' : '0% 유지 중';

  const rate = Math.floor(((recent - late) / Math.abs(late)) * 100);

  return `${rate === 0 ? '0' : rate}% ${rate >= 0 ? '성장' : '감소'}`;
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
                  <Flex
                    direction="column"
                    align="center"
                    className="gap-y-[5px]"
                  >
                    <SubscriberIcon />
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
                    className="max-w-[140px]"
                  >
                    <Text
                      as="title"
                      className="font-bold text-2xl text-white px-[14px] overflow-hidden"
                      title={calculateGrowthRate(
                        item.netSubscribers.late,
                        item.netSubscribers.recent,
                      )}
                    />
                    <Divider />
                    <Text
                      as="title"
                      title={`${item.netSubscribers.late} > ${item.netSubscribers.recent}`}
                      className="text-primary2 px-[14px] text-[15px] font-medium"
                    />
                  </Flex>
                </Flex>
                <Flex gapX={5} align="center" justify="center">
                  <Flex
                    direction="column"
                    align="center"
                    className="gap-y-[5px]"
                  >
                    <ViewIcon />
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
                      title={calculateGrowthRate(
                        item.view.late,
                        item.view.recent,
                      )}
                    />
                    <Divider />
                    <Text
                      as="title"
                      title={`${item.view.late} > ${item.view.recent}`}
                      className="text-primary2 px-[14px] text-[15px] font-medium"
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
