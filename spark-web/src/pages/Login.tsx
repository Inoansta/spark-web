import channelLogin from '@/assets/login/channel_login.json';
import { YoutubeIcon } from '@/assets/svg/YoutubeIcon';
import { Spacing, Text } from '@/shared/ui';
import LottieAnimation from '@/shared/ui/components/AnimationLottie';

export default function Login() {
  return (
    <main className="flex flex-col px-5 pt-5 pb-10 bg-line min-h-[812px]">
      <section className="text-center">
        <Text
          as="title"
          title="정확한 분석을 위해"
          className="text-[24px] font-extrabold"
        />
        <Text
          as="title"
          title="SNS 계정 연동이 필요해요."
          className="text-[24px] font-extrabold"
        />
      </section>
      <Spacing size="lsmall" />
      <LottieAnimation
        animationData={channelLogin}
        style={{ borderRadius: '12px', overflow: 'hidden' }}
      />
      <Spacing className="h-[76px]" />
      <div className="flex items-center bg-red1 px-[26px] py-3 rounded-[26px]">
        <YoutubeIcon />
        <button className="text-white text-center w-full">
          Youtube 채널 가지고 오기
        </button>
      </div>
      <Spacing className="h-[10px]" />
      <Text
        as="description"
        title="시작함으로써 이용약관 및 개인정보 수집 및 이용에 동의하게 됩니다."
        className="text-center text-gray5 px-[26px] text-[11px]"
      />
    </main>
  );
}
