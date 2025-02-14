import { Logo } from '@/assets/svg/logo/Logo';
import { SmallLogo } from '@/assets/svg/logo/SmallLogo';
import { FrontIcon } from '@/assets/svg/nav/FrontIcon';
import { CheerupBar, HasTokenChannelInfo } from '@/domains/Home/components';
import { NavigationHeader } from '@/shared/components';
import { Card, Flex, Spacing, SpeechBubble, Text } from '@/shared/ui';

export default function Home() {
  return (
    <main className="bg-line min-h-full">
      <Flex direction="column" gapY={5}>
        <NavigationHeader>
          <NavigationHeader.LeftContent location="/">
            <Logo />
          </NavigationHeader.LeftContent>
        </NavigationHeader>
        <CheerupBar />
        <Flex direction="column" gapY={5} className="px-5">
          <HasTokenChannelInfo />
          <Flex>
            <SpeechBubble text="스파크가 궁금하다면?" icon={<SmallLogo />} />
          </Flex>
          <Card className="pb-5">
            <Card.Header>
              <Flex justify="between" align="center">
                <Text as="title" title="이용 가이드" />
                <FrontIcon />
              </Flex>
            </Card.Header>
          </Card>
          <Spacing size="large" />
        </Flex>
      </Flex>
    </main>
  );
}
