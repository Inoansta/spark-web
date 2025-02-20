import { useLayoutEffect } from 'react';
import useStrategyStore from '@/app/store/useStrategyStore';

interface useStrengthWeaknessOptionProps<
  T extends { result?: { weaknesses: string[] } },
> {
  isSuccess: boolean;
  data: T;
}

const useStrengthWeaknessOption = <
  T extends { result?: { weaknesses: string[] } },
>({
  data,
  isSuccess,
}: useStrengthWeaknessOptionProps<T>) => {
  const setField = useStrategyStore((store) => store.setField);

  useLayoutEffect(() => {
    if (isSuccess && data.result?.weaknesses) {
      setField('weaknesses', data.result.weaknesses);
    }
  }, [isSuccess, data]);
};

export default useStrengthWeaknessOption;
