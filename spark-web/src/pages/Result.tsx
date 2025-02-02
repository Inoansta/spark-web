import Lottie from 'react-lottie';
import analysis from '@/assets/result/analaysis.json';
import { ResultInteraction } from '@/domains/Results/components';
import { NextPageFooter } from '@/shared/components';

const defaultOptions = {
  animationData: analysis,
  loop: true,
  height: '100%',
};

export default function Result() {
  return (
    <div>
      <div className={'relative z-10'}>
        <Lottie options={defaultOptions} />
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
