import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { QuerySuspenseBoundary } from '@/app/provider';
import { Logo } from '@/assets/svg/logo/Logo';
import { SmallLogo } from '@/assets/svg/logo/SmallLogo';
import { FrontIcon } from '@/assets/svg/nav/FrontIcon';
import { CheerupBar, HasTokenChannelInfo } from '@/domains/Home/components';
import HomeSkeleton from '@/domains/Home/skeleton/skeleton';
import LocationMove from '@/domains/Login/components/LocationMove';
import { NavigationHeader } from '@/shared/components';
import { Storage } from '@/shared/lib';
import { Card, Flex, Spacing, SpeechBubble, Text } from '@/shared/ui';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenOnboarding = Storage.getLocalStorage('hasSeenOnboarding');

    if (!hasSeenOnboarding) {
      navigate('/onboarding');
    }
  }, [navigate]);

  const SendMessage = (url: string) => {
    const message = JSON.stringify({
      type: 'external_url',
      url: url,
    });

    const isWebView =
      typeof window !== 'undefined' && window.ReactNativeWebView;

    if (isWebView) {
      window.ReactNativeWebView?.postMessage(message);
    }
  };

  return (
    <main className="bg-line min-h-screen">
      <Flex direction="column" gapY={5}>
        <NavigationHeader>
          <NavigationHeader.LeftContent location="/">
            <Logo />
          </NavigationHeader.LeftContent>
        </NavigationHeader>
        <QuerySuspenseBoundary loadingFallback={<HomeSkeleton />}>
          <CheerupBar />
          <Flex direction="column" gapY={5} className="px-5">
            <HasTokenChannelInfo />
            <Flex direction="column" className="gap-y-[10px]">
              <Flex>
                <SpeechBubble
                  text="스파크가 궁금하다면?"
                  icon={<SmallLogo />}
                />
              </Flex>
              <Card className="pb-5">
                <Card.Header>
                  <div
                    onClick={() => {
                      SendMessage(
                        'https://triangular-trombone-8fb.notion.site/195ea985e0f280219a6af9afa9f1b7c0?pvs=4',
                      );
                    }}
                  >
                    <LocationMove
                      location={
                        navigator.userAgent === 'SparkAgent'
                          ? 'https://www.app-spark.shop/'
                          : 'https://triangular-trombone-8fb.notion.site/195ea985e0f280219a6af9afa9f1b7c0?pvs=4'
                      }
                    >
                      <Flex justify="between" align="center">
                        <Text
                          as="title"
                          title="이용 가이드"
                          className="text-[18px]"
                        />
                        <FrontIcon />
                      </Flex>
                    </LocationMove>
                  </div>
                </Card.Header>
              </Card>
              <Spacing size="large" />
            </Flex>
          </Flex>
        </QuerySuspenseBoundary>
      </Flex>
    </main>
  );
}
