import { useLayoutEffect } from 'react';
import { Storage } from '@/shared/lib';

export const CHANNEL_ID = 'CHANNEL_ID';

interface useChannelOptionProps<T extends { result?: { channelId: string } }> {
  isSuccess: boolean;
  data: T;
}

const useChannelOption = <T extends { result?: { channelId: string } }>({
  isSuccess,
  data,
}: useChannelOptionProps<T>) => {
  useLayoutEffect(() => {
    if (isSuccess && data.result?.channelId) {
      Storage.setLocalStorage(CHANNEL_ID, data.result.channelId);
    }
  }, [isSuccess, data]);

  return null;
};

export default useChannelOption;
