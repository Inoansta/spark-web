import { useSuspenseQuery } from '@tanstack/react-query';
import useRequestIdOptions from '@/app/store/useRequestIdOptions';
import getStrategyQueryOption from '../service/getStrategyQueryOption';

const useGetStrategy = () => {
  const requestId = useRequestIdOptions((store) => store.requestId);
  return useSuspenseQuery(getStrategyQueryOption.getStrategies(requestId));
};

export default useGetStrategy;
