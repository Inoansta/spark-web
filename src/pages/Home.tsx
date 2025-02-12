import { Logo } from '@/assets/svg/logo/Logo';
import { SmallLogo } from '@/assets/svg/logo/SmallLogo';
import { FrontIcon } from '@/assets/svg/nav/FrontIcon';
import { CardInfo, CheerupBar } from '@/domains/Home/components';
import HasToken from '@/domains/Home/components/HasToken';
import NotCardInfo from '@/domains/Home/components/NotCardInfo';
import { NavigationHeader } from '@/shared/components';
import { Card, Spacing, Text } from '@/shared/ui';
import SpeechBubble from '@/shared/ui/layout/SpeechBubble';

export default function Home() {
  return (
    <main className="bg-line flex flex-col gap-y-5 min-h-full">
      <NavigationHeader>
        <NavigationHeader.LeftContent location="/">
          <Logo />
        </NavigationHeader.LeftContent>
      </NavigationHeader>
      <CheerupBar />
      <div className="px-5 flex flex-col gap-y-5">
        <HasToken fallback={<NotCardInfo />}>
          <CardInfo />
        </HasToken>
        <div className="flex">
          <SpeechBubble text="스파크가 궁금하다면?" icon={<SmallLogo />} />
        </div>
        <Card>
          <Card.Header>
            <div className="flex justify-between pb-5 items-center">
              <Text as="title" title="이용 가이드" />
              <FrontIcon />
            </div>
          </Card.Header>
        </Card>
        <Spacing size="large" />
      </div>
    </main>
  );
}
