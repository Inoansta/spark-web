import { QuerySuspenseBoundary } from '@/app/provider';
import PopularContainer from '@/domains/Popular/components/PopularCard';
import { NextPageFooter } from '@/shared/components';

export default function Popular() {
  return (
    <div>
      <div
        className={
          'flex flex-col bg-gradient-to-b from-highEmphasis to-black px-[20px] pt-[65px] min-h-screen'
        }
      >
        <QuerySuspenseBoundary loadingFallback={<>Loading...</>}>
          <div className={'flex flex-col gap-[5px]'}>
            <div className={'text-[28px] font-[800] leading-[38px] text-white'}>
              인기 콘텐츠 TOP3
            </div>
            <div className={'text-[15px] font-[500] leading-[24px] text-white'}>
              가장 많은 조회수를 기록한 콘텐츠들이에요!
            </div>
          </div>

          <div className={'flex  gap-[20px] flex-col mt-[60px] mb-[200px]'}>
            <PopularContainer />
          </div>
        </QuerySuspenseBoundary>
      </div>

      <NextPageFooter
        nextLocation={'/strength-weakness'}
        text={'다음'}
        buttonType={'large-filled-button'}
      />
    </div>
  );
}
