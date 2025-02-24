import { RefObject, useEffect, useRef } from 'react';
import useStrategyStore from '@/app/store/useStrategyStore';
import analysis from '@/assets/result/analaysis.json';
import { ResultInteraction } from '@/domains/Results/components';
import { NextPageFooter } from '@/shared/components';
import { LottieAnimation } from '@/shared/ui';

export default function Result() {
  const channelName = useStrategyStore((store) => store.channelName);
  const bottomRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: 'end' });
  }, []);

  return (
    <div className={'h-screen'}>
      <div className={'sticky bottom-0 overflow-hidden z-10 h-full'}>
        <LottieAnimation animationData={analysis} />
      </div>
      <div className={'flex justify-center'}>
        <ResultInteraction channelName={channelName} />
      </div>
      <NextPageFooter
        nextLocation={'/popular'}
        text={'다음'}
        buttonType={'large-filled-button'}
      />
      <div ref={bottomRef} />
    </div>
  );
}
