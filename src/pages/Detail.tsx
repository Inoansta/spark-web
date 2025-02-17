import {
  FrequentlyAskedQuestions,
  HowToGrow,
  Recommendation,
  TopPage,
  WorriedAbout,
} from '@/domains/Detail/components';
import GraySpace from '@/domains/Detail/components/GraySpace';
import { RouteMove } from '@/shared/components';

export default function Detail() {
  return (
    <div>
      <TopPage />
      <GraySpace />
      <WorriedAbout />
      <HowToGrow />
      <GraySpace />
      <Recommendation />
      <GraySpace />
      <FrequentlyAskedQuestions />
      <RouteMove
        location={'/user-info'}
        className={'sticky bottom-0 flex justify-center mb-[30px]'}
      >
        <button
          className={
            'px-[20px] w-full max-w-[335px] h-[48px] bg-primary5 text-white text-subtitle-b rounded-medium active:bg-primary7'
          }
        >
          시작하기
        </button>
      </RouteMove>
    </div>
  );
}
