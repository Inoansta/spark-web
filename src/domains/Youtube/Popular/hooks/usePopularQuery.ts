import { useSuspenseQuery } from '@tanstack/react-query';
import useStrategyStore from '@/app/store/useStrategyStore';
import popularTopQueryOption from '../service/queryOption';

const usePopularQuery = () => {
  const channelId = useStrategyStore((store) => store.channelId);
  return useSuspenseQuery(popularTopQueryOption.popularTop({ channelId }));
};

export default usePopularQuery;
