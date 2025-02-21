import strategyLottie from '@/assets/animation/strategyBefore.json';
import { LottieAnimation } from '@/shared/ui';

export default function StrategyBefore() {
  return (
    <div
      className={
        'bg-gradient-to-b from-black to-[#FBB1F5] via-[#4557FF] pt-[44px] flex flex-col justify-center items-center h-screen'
      }
    >
      <div className={'px-[40px] mb-[30px]'}>
        <LottieAnimation animationData={strategyLottie} />
      </div>
      <div className={'flex flex-col gap-[10px]'}>
        <div className={'text-title5-b text-center text-white leading-[26px]'}>
          잠시만요!
          <br />
          AI가 비법을 찾고 있어요
        </div>
        <div className={'text-body2-m text-center text-white'}>
          예상 소요시간 40초
        </div>
      </div>
    </div>
  );
}
