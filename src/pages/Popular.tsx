import { PopularCard } from '@/domains/Popular/components';
import usePopularQuery from '@/domains/Popular/hooks/usePopularQuery';
import { NextPageFooter } from '@/shared/components';

export default function Popular() {
  const popular = usePopularQuery();

  return (
    <div>
      <div
        className={
          'flex flex-col bg-gradient-to-b from-highEmphasis to-black px-[20px] pt-[65px] min-h-screen'
        }
      >
        <div className={'flex flex-col gap-[5px]'}>
          <div className={'text-title2-eb text-white'}>인기 콘텐츠 TOP3</div>
          <div className={'text-body-m text-white'}>
            가장 많은 조회수를 기록한 콘텐츠들이에요!
          </div>
        </div>
        <div className={'flex flex-1 flex-col'}>
          <div
            className={
              'flex  gap-[20px] flex-col mt-[calc(100vh/10)] mb-[100px]'
            }
          >
            {popular.data.result.map((item, index) => (
              <PopularCard
                videoInformation={item}
                index={index}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
      <NextPageFooter
        nextLocation={'/strength-weakness'}
        text={'다음'}
        buttonType={'large-filled-button'}
      />
    </div>
  );
}
