import { InstaGram } from '@/assets/svg/logo/InstaGram';
import { BackIcon } from '@/assets/svg/nav/BackIcon';
import LocationMove from '@/domains/Login/components/LocationMove';
import { NavigationHeader } from '@/shared/components';
import { Divider, Flex, Text } from '@/shared/ui';

const LIST_DATA = [
  {
    title: '앱 버전',
    description: '1.0.00',
    location: '/',
  },
  {
    title: '공지사항',
    location:
      'https://triangular-trombone-8fb.notion.site/195ea985e0f28085953af92e9b954cfc?pvs=4',
  },
  {
    title: '문의하기',
    location:
      'https://triangular-trombone-8fb.notion.site/195ea985e0f280a5a13fdfadff1beac6?pvs=4',
  },
  {
    title: '서비스 이용약관',
    location: 'https://spark-terms-and-privacy.vercel.app/',
  },
  {
    title: '개인정보처리방침',
    location: 'https://spark-terms-and-privacy.vercel.app/privacy',
  },
  {
    title: '스파크 인스타',
    description: '@spark__kr',
    location: 'https://www.instagram.com/spark__kr/?igsh=b3VubXVtZnJjYmE%3D#',
    rightIcon: InstaGram,
    descriptionColor: 'primary3',
  },
];

export default function Setting() {
  const SendMessage = (url: string) => {
    const message = JSON.stringify({
      type: 'external_url',
      url: url,
    });

    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(message);
    }
  };

  return (
    <>
      <NavigationHeader>
        <NavigationHeader.LeftContent location="back">
          <BackIcon />
        </NavigationHeader.LeftContent>
      </NavigationHeader>
      <main>
        <ul className="flex-col p-5 gap-x-[5px]">
          {LIST_DATA.map(
            ({
              title,
              description,
              location,
              rightIcon: RightIcon,
              descriptionColor,
            }) => (
              <li
                key={title}
                onClick={() =>
                  navigator.userAgent === 'SparkAgent'
                    ? SendMessage(location)
                    : null
                }
              >
                <LocationMove
                  location={
                    navigator.userAgent === 'SparkAgent'
                      ? 'https://www.app-spark.shop/setting'
                      : location
                  }
                >
                  <Flex justify="between" className="px-5 py-3">
                    <Flex align="center" className="mr-[2px]">
                      <Text
                        as="title"
                        title={title}
                        className="text-highEmphasis font-bold"
                      />
                      {RightIcon && <RightIcon className="ml-[2px]" />}
                    </Flex>
                    {description && (
                      <Text
                        as="description"
                        title={description}
                        className={`${
                          descriptionColor === 'primary3'
                            ? 'text-primary3'
                            : 'text-gray5 font-medium'
                        }`}
                      />
                    )}
                  </Flex>
                </LocationMove>
                <Divider />
              </li>
            ),
          )}
        </ul>
      </main>
    </>
  );
}
