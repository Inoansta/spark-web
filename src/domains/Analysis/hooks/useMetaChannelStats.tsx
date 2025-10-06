import { useSuspenseQuery } from '@tanstack/react-query';
import useStrategyStore from '@/app/store/useStrategyStore';
import metaAnalysisQueryOption from '../service/queryOption';

const useMetaChannelStats = () => {
  const channelId = useStrategyStore((store) => store.channelId);
  return useSuspenseQuery(metaAnalysisQueryOption.metaChannelStats(channelId));
};

export default useMetaChannelStats;
