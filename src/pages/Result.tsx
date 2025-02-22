import useStrategyStore from '@/app/store/useStrategyStore';
import analysis from '@/assets/result/analaysis.json';
import { ResultInteraction } from '@/domains/Results/components';
import { NextPageFooter } from '@/shared/components';
import { LottieAnimation } from '@/shared/ui';

export default function Result() {
  const channelName = useStrategyStore((store) => store.channelName);
  return (
    <div className={'h-screen'}>
      <div className={'relative z-10'}>
        <LottieAnimation animationData={analysis} height="100%" />
      </div>
      <div className={'flex justify-center'}>
        <ResultInteraction channelName={channelName} />
      </div>
      <NextPageFooter
        nextLocation={'/popular'}
        text={'다음'}
        buttonType={'large-filled-button'}
      />
    </div>
  );
}
