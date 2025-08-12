import { useLayoutEffect } from 'react';
import useStrategyStore from '@/app/store/useStrategyStore';

interface useMetaOptionProps<
  T extends {
    result?: { userName: string; instagramBusinessAccountId: string };
  },
> {
  isSuccess: boolean;
  data: T;
}

const useMetaOption = <
  T extends {
    result?: { userName: string; instagramBusinessAccountId: string };
  },
>({
  isSuccess,
  data,
}: useMetaOptionProps<T>) => {
  const setField = useStrategyStore((store) => store.setField);

  useLayoutEffect(() => {
    if (isSuccess && data.result?.userName) {
      setField('channelId', data.result.instagramBusinessAccountId);
      setField('channelName', data.result.userName);
    }
  }, [isSuccess, data]);
};

export default useMetaOption;
