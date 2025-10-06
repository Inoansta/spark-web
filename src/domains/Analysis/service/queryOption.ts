import { queryOptions } from '@tanstack/react-query';
import metaAnalysisApi from './handlers';

const metaAnalysisQueryOption = {
  metaStats: ['metaStats'] as const,
  metaPerformance: ['metaPerformance'] as const,
  metaChannelStats: ({
    channelId,
    enabled = false,
  }: {
    channelId: string;
    enabled?: boolean;
  }) =>
    queryOptions({
      queryKey: [...metaAnalysisQueryOption.metaStats, 'stats', channelId],
      queryFn: () => metaAnalysisApi.GetMetaStatsApi(channelId),
      enabled: enabled,
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
