import homeStrategy from '@/assets/animation/homeStrategy.json';
import { Avatar } from '@/assets/svg/Avatar/Avatar';
import { FrontIcon } from '@/assets/svg/nav/FrontIcon';
import { RouteMove } from '@/shared/components';
import LottieAnimation from '@/shared/ui/components/AnimationLottie';
import UserCard from './UserCard';

export default function NotCardInfo() {
  return (
    <div className="flex flex-col gap-y-5">
      <UserCard
        title="성장 비법이 궁금하다면!"
        content={
          <>
            <div className="flex-1">
              <Avatar />
            </div>
            <ul className="flex-3 w-full">
              <li className="flex justify-between items-center">
                <div className="flex flex-col items-center whitespace-nowrap">
                  <span>???</span>
                  <span>게시물</span>
                </div>
                <div className="flex flex-col items-center whitespace-nowrap">
                  <span>???</span>
                  <span>구독자</span>
                </div>
                <div className="flex flex-col items-center whitespace-nowrap">
                  <span>???</span>
                  <span>누적 조회수</span>
                </div>
              </li>
            </ul>
          </>
        }
        bottom={
          <RouteMove location="/login" className="mt-5">
            <button
              type="button"
              title="내채널 가져오기"
              className="bg-primary5 text-white w-full px-5 py-[10px] flex justify-center items-center gap-x-2"
            >
              내채널 가져오기
              <FrontIcon fill="white" />
            </button>
          </RouteMove>
        }
      />
      <UserCard
        title="내 채널 성장 비법"
        description="구독자를 늘리는 팁을 알려 드릴게요"
        content={
          <LottieAnimation
            animationData={homeStrategy}
            className="w-full h-full"
          />
        }
        bottom={
          <RouteMove location="/detail" className="px-5 pb-5">
            <button
              type="button"
              title="자세히 알아보기"
              className="text-primary5 w-full px-5 py-[10px] flex justify-center items-center gap-x-2 border-primary5 border rounded-lg"
            >
              자세히 알아보기
              <FrontIcon fill="white" />
            </button>
          </RouteMove>
        }
      />
    </div>
  );
}
