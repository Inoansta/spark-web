import { useQuery } from '@tanstack/react-query';
import useStrategyStore from '@/app/store/useStrategyStore';
import strengthWeakQueryOption from '../service/queryOption';

const useStrengthWeakStatsQuery = (enabled?: boolean) => {
  const channelId = useStrategyStore((store) => store.channelId);
  return useQuery(
    strengthWeakQueryOption.strengthWeakStats({ channelId, enabled }),
  );
};

export default useStrengthWeakStatsQuery;
