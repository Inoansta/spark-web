import ChannelLink from '@/assets/svg/ChannelLink.svg';
import { FacebookIcon } from '@/assets/svg/FacebookIcon';
import { YoutubeIcon } from '@/assets/svg/YoutubeIcon';
import LocationMove from '@/domains/Login/components/LocationMove';
import useGoogleAuth from '@/domains/Login/hooks/useGoogleAuth';
import useMetaAuth from '@/domains/Login/hooks/useMetaAuth';
import { Flex, Spacing, Text } from '@/shared/ui';
import handleOpenNewTab from '@/shared/util/handleOpenNewTab';

export default function Login() {
  const google = useGoogleAuth();
  const meta = useMetaAuth();

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isWebView =
      typeof window !== 'undefined' && window.ReactNativeWebView;
    const target = e.target as HTMLElement;

    const message = {
      type: 'external_url',
      url:
        target.id === '이용약관'
          ? 'https://triangular-trombone-8fb.notion.site/195ea985e0f280388a06c5a505a1c878'
          : 'https://triangular-trombone-8fb.notion.site/195ea985e0f280d9a91df721862c86ee',
    };

    if (isWebView) {
      window.ReactNativeWebView?.postMessage(JSON.stringify(message));
    } else {
      handleOpenNewTab(message.url);
    }
  };

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
            className="bg-[#1877F2] px-[26px] py-3 rounded-[26px]"
          >
            <FacebookIcon />
            <button className="text-white w-full text-[15px] font-bold">
              페이스북으로 연동하기
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
              Youtube으로 연동하기
            </button>
          </Flex>
        </LocationMove>
      </Flex>
      <Spacing className="h-[20px]" />

      <div className="text-center text-gray5 px-[26px] text-[11px] font-medium not-italic">
        *인스타그램 채널은 페이스북 계정을 통해 연동됩니다.
        <br />
        연동과 함께{' '}
        <a
          id="이용약관"
          onClick={onClick}
          className="font-[700] underline underline-offset-auto decoration-auto decoration-solid"
        >
          이용약관{' '}
        </a>
        및{' '}
        <a
          id="개인 정보"
          onClick={onClick}
          className="font-[700] underline underline-offset-auto decoration-auto decoration-solid"
        >
          개인 정보 수집{' '}
        </a>
        이용에 동의하게 됩니다.
      </div>
    </Flex>
  );
}
