import { type ReactNode, useEffect, useState } from 'react';
import useStrategyStore from '@/app/store/useStrategyStore';
import { BackIcon } from '@/assets/svg/nav/BackIcon';
import { CloseIcon } from '@/assets/svg/nav/CloseIcon';
import { TOKEN } from '@/domains/Login/hooks/useAuthToken';
import { NavigationHeader, NextPageFooter } from '@/shared/components';
import { Storage } from '@/shared/lib';
import { Flex } from '@/shared/ui';

interface DelayProps {
  delay?: number;
  children: ReactNode;
}

function Delay({ delay = 7000, children }: DelayProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return visible && children;
}

export default function DelayText() {
  const channelName = useStrategyStore((store) => store.channelName);
  const connected = Storage.getLocalStorage(TOKEN.REFRESH);

  return (
    <Delay>
      <NavigationHeader className={'p-5 max-w-[450px] w-full fixed top-4'}>
        <NavigationHeader.LeftContent location="back">
          <BackIcon />
        </NavigationHeader.LeftContent>
        <NavigationHeader.RightContent location="/detail">
          <CloseIcon />
        </NavigationHeader.RightContent>
      </NavigationHeader>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
        <Flex direction="column" justify="center" align="center">
          <p className="text-white text-[28px] font-extrabold drop-shadow-lg">
            {channelName}님의
          </p>
          <p className="text-white text-[28px] font-extrabold drop-shadow-lg">
            채널 성장은?
          </p>
        </Flex>
      </div>
      <NextPageFooter
        nextLocation={
          connected ? '/growth-prediction' : '/instagram-growth-prediction'
        }
        text={'다음'}
        buttonType={'large-filled-button'}
      />
    </Delay>
  );
}
