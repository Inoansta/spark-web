import Lottie, { LottieComponentProps } from 'lottie-react';

function LottieAnimation({
  animationData,
  className,
  ...props
}: LottieComponentProps) {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className={className}
      {...props}
    />
  );
}

export default LottieAnimation;
