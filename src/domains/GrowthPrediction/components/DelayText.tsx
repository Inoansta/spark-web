import { useEffect, useState } from 'react';
import { BackIcon } from '@/assets/svg/nav/BackIcon';
import { CloseIcon } from '@/assets/svg/nav/CloseIcon';
import { NavigationHeader } from '@/shared/components';
import { Flex } from '@/shared/ui';

export default function DelayText({ delay = 7000 }: { delay?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <>
      <NavigationHeader className={'p-5 max-w-[450px] w-full absolute top-4'}>
        <NavigationHeader.LeftContent location="back">
          <BackIcon />
        </NavigationHeader.LeftContent>
        <NavigationHeader.RightContent location="/detail">
          <CloseIcon />
        </NavigationHeader.RightContent>
      </NavigationHeader>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
        {visible && (
          <>
            <Flex direction="column" justify="center" align="center">
              <p className="text-white text-3xl font-bold drop-shadow-lg">
                000님의
              </p>
              <p className="text-white text-3xl font-bold drop-shadow-lg">
                채널 성장은?
              </p>
            </Flex>
          </>
        )}
      </div>
    </>
  );
}
