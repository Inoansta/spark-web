import { useQuery } from '@tanstack/react-query';
import useStrategyStore from '@/app/store/useStrategyStore';
import metaAnalysisQueryOption from '../service/queryOption';

const useMetaChannelStats = (enabled?: boolean) => {
  const channelId = useStrategyStore((store) => store.channelId);
  return useQuery(
    metaAnalysisQueryOption.metaChannelStats({ channelId, enabled }),
  );
};

export default useMetaChannelStats;
