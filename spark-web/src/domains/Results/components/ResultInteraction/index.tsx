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

export function ResultInteraction({ channelName }: ResultInteraction) {
  return (
    <div
      className={
        'text-white text-title3-eb px-[10px] py-[20px] text-center border border-white rounded-extraLarges bg-white bg-opacity-30 mx-[35px] absolute z-20'
      }
      style={animation}
    >
      <style>
        {`
      @keyframes ResultInteraction {
        from { top: -20%; visibility: visible;}
        to { top: 33%; visibility: visible;}
      }
    `}
      </style>
      {channelName}님의
      <br /> 채널 분석이 완료 됐어요!
    </div>
  );
}
