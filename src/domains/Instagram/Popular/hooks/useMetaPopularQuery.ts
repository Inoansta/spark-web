import { useSuspenseQuery } from '@tanstack/react-query';
import useStrategyStore from '@/app/store/useStrategyStore';
import metaPopularTopQueryOption from '../service/queryOption';

const useMetaPopularQuery = () => {
  const channelId = useStrategyStore((store) => store.channelId);
  return useSuspenseQuery(metaPopularTopQueryOption.popularTop({ channelId }));
};

export default useMetaPopularQuery;
