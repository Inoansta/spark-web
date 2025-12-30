import { queryOptions } from '@tanstack/react-query';
import youtubePerformanceApi from '@/domains/Youtube/GrowthPrediction/service/handlers';

const youtubePerformanceQueryOption = {
  youtubePerformance: ['youtubePerformance'] as const,
  youtubeStatisticsPerformance: (channelId: string) =>
    queryOptions({
      queryKey: [
        ...youtubePerformanceQueryOption.youtubePerformance,
        'performance',
        channelId,
      ],
      queryFn: () => youtubePerformanceApi.GetYoutubePerformance(channelId),
    }),
};

export default youtubePerformanceQueryOption;
