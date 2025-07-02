import { useLayoutEffect } from 'react';
import useStrategyStore from '@/app/store/useStrategyStore';
import { Result } from '../model/type';

interface useStrengthWeaknessOptionProps {
  weaknesses: Result['weaknesses'];
  isSuccess: boolean;
}

const useStrengthWeaknessOption = ({
  weaknesses,
  isSuccess,
}: useStrengthWeaknessOptionProps) => {
  const setField = useStrategyStore((store) => store.setField);

  useLayoutEffect(() => {
    if (isSuccess && weaknesses) {
      setField('weaknesses', weaknesses);
    }
  }, [isSuccess, weaknesses]);
};

export default useStrengthWeaknessOption;
