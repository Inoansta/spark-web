import { useLayoutEffect } from 'react';
import useStrategyStore from '@/app/store/useStrategyStore';

export const CHANNEL_ID = 'CHANNEL_ID';

interface useChannelOptionProps<T extends { result?: { channelId: string } }> {
  isSuccess: boolean;
  data: T;
}

const useChannelOption = <T extends { result?: { channelId: string } }>({
  isSuccess,
  data,
}: useChannelOptionProps<T>) => {
  const setField = useStrategyStore((store) => store.setField);

  useLayoutEffect(() => {
    if (isSuccess && data.result?.channelId) {
      setField('channelId', data.result.channelId);
    }
  }, [isSuccess, data]);

  return null;
};

export default useChannelOption;
