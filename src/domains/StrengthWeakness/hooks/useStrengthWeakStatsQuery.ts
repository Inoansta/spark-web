import { useSuspenseQuery } from '@tanstack/react-query';
import useStrategyStore from '@/app/store/useStrategyStore';
import strengthWeakQueryOption from '../service/queryOption';

const useStrengthWeakStatsQuery = () => {
  const channelId = useStrategyStore((store) => store.channelId);
  return useSuspenseQuery(strengthWeakQueryOption.strengthWeakStats(channelId));
};

export default useStrengthWeakStatsQuery;
