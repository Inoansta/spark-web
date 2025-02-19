import Before from '@/assets/animation/growthPrediction/growthPredictionBefore.mp4';
import { BackIcon } from '@/assets/svg/nav/BackIcon';
import { CloseIcon } from '@/assets/svg/nav/CloseIcon';
import { NavigationHeader } from '@/shared/components';
import DelayText from './DelayText';

export default function VideoPlayer() {
  return (
    <div className="relative w-full h-screen">
      <NavigationHeader className={'p-5 max-w-[450px] w-full absolute top-4'}>
        <NavigationHeader.LeftContent location="back">
          <BackIcon />
        </NavigationHeader.LeftContent>
        <NavigationHeader.RightContent location="/detail">
          <CloseIcon />
        </NavigationHeader.RightContent>
      </NavigationHeader>
      <video className="w-full h-full object-cover" autoPlay muted playsInline>
        <source src={Before} type="video/mp4" />
        브라우저가 비디오를 지원하지 않습니다.
      </video>

      <DelayText />
    </div>
  );
}
