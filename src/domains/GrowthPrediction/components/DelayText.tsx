import { type ReactNode, useEffect, useState } from 'react';
import useStrategyStore from '@/app/store/useStrategyStore';
import { RouteMove } from '@/shared/components';
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

export default function DelayText({ delay = 7000 }: { delay?: number }) {
  const channelName = useStrategyStore((store) => store.channelName);

  return (
    <Delay>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
        <Flex direction="column" justify="center" align="center">
          <p className="text-white text-3xl font-bold drop-shadow-lg">
            {channelName}님의
          </p>
          <p className="text-white text-3xl font-bold drop-shadow-lg">
            채널 성장은?
          </p>
        </Flex>
      </div>
      <RouteMove location="/growth-prediction">
        <button className="absolute bottom-8 left-7 px-[20px] w-full max-w-[335px] h-[48px] bg-primary5 text-white text-[15px] rounded-medium active:bg-primary7 cursor-pointer">
          다음
        </button>
      </RouteMove>
    </Delay>
  );
}
