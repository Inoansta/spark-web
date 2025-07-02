import useStrategyStore from '@/app/store/useStrategyStore';
import Magic from '@/assets/svg/Detail/Magic';
import UserInfoHashTag from './UserInfoHashTag';

export default function UserInfoHeader() {
  const {
    userContents = '패션',
    userFulltime = '전업',
    userGoal = '개인적인 취미 및 즐거움',
    channelName,
  } = useStrategyStore((store) => store);
  return (
    <section>
      <p className="text-lg font-bold text-[#FFF]">
        {channelName}님의 채널 성장을 위한
      </p>
      <div className="flex items-center mb-[10px]">
        <p className="text-2xl font-extrabold text-[#C6C5FF]">
          3가지 추천 비법
        </p>
        <Magic />
      </div>
      <UserInfoHashTag hashTagList={[userContents, userFulltime, userGoal]} />
    </section>
  );
}
