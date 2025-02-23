import { Keyframe } from '@/shared/components';

interface ResultInteraction {
  channelName: string;
}

const animation = {
  animationName: 'ResultInteraction',
  animationDelay: '1200ms',
  animationTimingFunction: 'ease-in-out',
  animationDuration: '1500ms',
  visibility: 'hidden',
  lineHeight: '1.2',
  animationFillMode: 'forwards',
} as React.CSSProperties;

export default function ResultInteraction({ channelName }: ResultInteraction) {
  return (
    <div
      className={
        'text-white text-[24px] font-[800] leading-[32px] px-[10px] py-[20px] text-center border border-white rounded-extraLarges bg-white bg-opacity-30 mx-[35px] absolute z-20'
      }
      style={animation}
    >
      <Keyframe
        animationName={'ResultInteraction'}
        from={{ top: '-20%', visibility: 'visible' }}
        to={{ top: '33%', visibility: 'visible' }}
      />
      {channelName}님의
      <br /> 채널 분석이 완료 됐어요!
    </div>
  );
}
