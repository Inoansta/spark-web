import { queryOptions } from '@tanstack/react-query';
import metaAnalysisApi from './handlers';

const metaAnalysisQueryOption = {
  metaStats: ['metaStats'] as const,
  metaPerformance: ['metaPerformance'] as const,
  metaChannelStats: (channelId: string) =>
    queryOptions({
      queryKey: [...metaAnalysisQueryOption.metaStats, 'stats', channelId],
      queryFn: () => metaAnalysisApi.GetMetaStatsApi(channelId),
    }),
  metaStatisticsPerformance: (channelId: string) =>
    queryOptions({
      queryKey: [
        ...metaAnalysisQueryOption.metaPerformance,
        'performance',
        channelId,
      ],
      queryFn: () => metaAnalysisApi.GetMetaPerformance(channelId),
    }),
};

export default metaAnalysisQueryOption;
