// import Lottie from 'react-lottie';
// import analysis from '@/assets/result/analaysis.json';
import {
  Footer,
  ResultInteraction,
  ResultInteractionKeyframe,
} from '@/domains/Results/components';

// const defaultOptions = {
//   animationData: analysis,
//   loop: true,
// };

export default function Result() {
  return (
    <div>
      <ResultInteractionKeyframe />
      {/* <div className={'absolute z-10'}>
        <Lottie options={defaultOptions} />
      </div> */}
      <div className={'flex justify-center'}>
        <ResultInteraction channelName={'Spark'} />
      </div>
      <Footer />
    </div>
  );
}
