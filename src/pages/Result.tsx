import analysis from '@/assets/result/analaysis.json';
import { ResultInteraction } from '@/domains/Results/components';
import { NextPageFooter } from '@/shared/components';
import { LottieAnimation } from '@/shared/ui';

export default function Result() {
  return (
    <div className={'h-screen'}>
      <div className={'overflow-hidden relative  h-full z-10'}>
        <LottieAnimation animationData={analysis} />
      </div>
      <div className={'flex justify-center'}>
        <ResultInteraction channelName={'Spark'} />
      </div>
      <NextPageFooter
        nextLocation={'/popular'}
        text={'다음'}
        buttonType={'large-filled-button'}
      />
    </div>
  );
}
