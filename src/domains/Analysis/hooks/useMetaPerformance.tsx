import { useSuspenseQuery } from '@tanstack/react-query';
import useStrategyStore from '@/app/store/useStrategyStore';
import metaAnalysisQueryOption from '../service/queryOption';

const useMetaPerformanceQuery = () => {
  const channelId = useStrategyStore((store) => store.channelId);
  return useSuspenseQuery(
    metaAnalysisQueryOption.metaStatisticsPerformance(channelId),
  );
};

export default useMetaPerformanceQuery;
