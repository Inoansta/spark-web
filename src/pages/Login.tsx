import ChannelLink from '@/assets/svg/ChannelLink.svg';
import { InstagramIcon } from '@/assets/svg/InstagramIcon';
import { YoutubeIcon } from '@/assets/svg/YoutubeIcon';
import LocationMove from '@/domains/Login/components/LocationMove';
import useGoogleAuth from '@/domains/Login/hooks/useGoogleAuth';
import useMetaAuth from '@/domains/Login/hooks/useMetaAuth';
import { Flex, Spacing, Text } from '@/shared/ui';

export default function Login() {
  const google = useGoogleAuth();
  const meta = useMetaAuth();

  return (
    <Flex direction="column" className="px-5 pt-5 pb-10 bg-line min-h-[812px]">
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

      <img src={ChannelLink} className="mx-[20px]" />

      <Spacing className="h-[76px]" />

      <Flex direction="column" gapY={'[10px]'}>
        <LocationMove location={meta.data.metaAuthUrl}>
          <Flex
            align="center"
            className="bg-[#333] px-[26px] py-3 rounded-[26px]"
          >
            <InstagramIcon />
            <button className="text-white w-full text-[15px] font-bold">
              Instagram 채널 가지고 오기
            </button>
          </Flex>
        </LocationMove>
        <LocationMove location={google.data.googleAuthUrl}>
          <Flex
            align="center"
            className="bg-red1 px-[26px] py-3 rounded-[26px]"
          >
            <YoutubeIcon />
            <button className="text-white w-full text-[15px] font-bold">
              Youtube 채널 가지고 오기
            </button>
          </Flex>
        </LocationMove>
      </Flex>
      <Spacing className="h-[10px]" />

      <Text
        as="description"
        title="시작함으로써 이용약관 및 개인정보 수집 및 이용에 동의하게 됩니다."
        className="text-center text-gray5 px-[26px] text-[11px]"
      />
    </Flex>
  );
}
